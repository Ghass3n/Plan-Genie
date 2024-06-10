const express = require('express');
const mongoose = require('mongoose');
const Post = require('./models/post');
const Comment = require('./models/comment');
const User = require('./models/users');
const UserVerification = require('./models/userverification'); // Changed import to require
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");
const axios = require('axios');

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());
const apiKey = "AIzaSyA5F613bC2cUfMjCNxUVJIcPTszoil3q64";
const genAI = new GoogleGenerativeAI(apiKey);
const mongoURI = "mongodb+srv://admin:admin@try.ncjqchz.mongodb.net/?retryWrites=true&w=majority&appName=try";
const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

const safetySettings = [
  // {
  //     category: HarmCategory.HARM_CATEGORY_HARASSMENT,
  //     threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  // },
  // {
  //     category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
  //     threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  // },
  // {
  //     category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
  //     threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  // },
  // {
  //     category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
  //     threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  // },
];
let locationData = null;
let userData = null;

async function generateDescription(location){
  const chatSession = model.startChat({
    generationConfig,
    safetySettings,
    history: [],
});

const result = await chatSession.sendMessage(`write  a description paragraph in 10 lines about ${location}`);


const DescString = result.response.text();

return DescString;

}


async function generateDailyPlan(city, tempCelsius,SelectedDate, startTime, endTime, budget, type) {
  const chatSession = model.startChat({
      generationConfig,
      safetySettings,
      history: [],
  });

  const result = await chatSession.sendMessage(`Generate a detailed daily plan based on the following inputs:
  Date: ${SelectedDate}
  Location: ${city}
  Weather: ${tempCelsius.toFixed(1)}°C
  Budget: ${budget} dollars
  Time range: from ${startTime} to ${endTime}
  Preferences: ${type}
  The plan should include activities, places to visit, and meal suggestions. Make sure to spread the activities throughout the day and provide approximate time slots. The output must strictly follow this format without any deviations:
  "8:00 AM - 9:00 AM": {
      "time": "1:30 PM - 3:00 PM",
      "titleActivity": "Explore the Djerba Explore Park",
      "description": "Immerse yourself in the beauty of Djerba's diverse landscape at the Djerba Explore Park. This unique attraction features a variety of activities, including camel rides, quad biking, and a chance to encounter exotic animals. It's an exciting way to experience the island's natural beauty.",
      "cost": "$20"
   },
  9:30 AM - 11:00 AM: time titleActivity description cost
  11:30 AM - 1:00 PM: time titleActivity description cost
  1:30 PM - 2:30 PM: time titleActivity description cost
  3:00 PM - 5:00 PM: time titleActivity description cost
  5:30 PM - 7:00 PM: time titleActivity description cost
  7:30 PM - 9:00 PM: time titleActivity description cost
  ALERT: "This output will go in code so we need strict output. The output is in JSON format and the activity description is 3 lines long."
  `);

  const planString = result.response.text();
  return parsePlan(planString);
}

function parsePlan(plan) {
  const cleanedOutput = plan.replace(/```json/g, '').replace(/```/g, '');
  try {
      const jsonObject = JSON.parse(cleanedOutput);
      return jsonObject;
  } catch (error) {
      console.error("Invalid JSON input:", error.message);
      return null;
  }
}


app.post('/receive-location', async (req, res) => {
  locationData = req.body;

  try {
      const geoResponse = await axios.get(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${locationData.coords.latitude}&longitude=${locationData.coords.longitude}&localityLanguage=en`);
      const city = geoResponse.data.city;
      console.log('City:', city);

      const APIkey = "638bdc506f552e2390c7caa3153d36c9";
      const weatherResponse = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${APIkey}`);
      const tempFahrenheit = weatherResponse.data.main.temp;
      const tempCelsius = (tempFahrenheit - 32) * 5 / 9;
      console.log('Weather in Fahrenheit:', tempFahrenheit);
      console.log('Weather in Celsius:', tempCelsius);

      locationData.city = city;
      locationData.tempCelsius = tempCelsius;
      
      if (userData) {
          const plan = await generateDailyPlan(city, tempCelsius, userData.startTime, userData.endTime, userData.budget, userData.type);
          console.log(plan)
          res.json({ city, tempCelsius: tempCelsius, plan });
      } else {
          res.json({ message: 'Location data received. Waiting for user data.' });
      }
  } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Error in processing the request' });
  }
});


app.post('/data', async (req, res) => {
  userData = req.body;
  console.log('User Data:', userData);

  if (locationData) {
      const { city, tempCelsius } = locationData;
      const { SelectedDate, startTime, endTime, budget, type } = userData;

      try {
          const plan = await generateDailyPlan(city, tempCelsius,SelectedDate, startTime, endTime, budget, type);
          res.json({ city, tempCelsius, plan });
          console.log(plan)
      } catch (error) {
          console.error('Error:', error);
          res.status(500).json({ error: 'Error in generating the plan' });
      }
  } else {
      res.json({ message: 'User data received. Waiting for location data.' });
  }
});






mongoose.connect(mongoURI)
    .then(() => {
        console.log('Connected to MongoDB');
        User.init()
            .then(() => console.log('Comment collection initialized'))
            .catch(error => console.error('Error initializing Comment collection:', error));
    })
    .catch((err) => {
        console.error('Failed to connect to MongoDB', err);
    });

require("dotenv").config()

let transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.AUTH_EMAIL,
    pass: process.env.AUTH_PASS,
  },
});

const generateToken = (user) => {
  const { _id, email } = user;
  const payload = {
    user: {
      id: _id,
      email: email,
    },
  };
  const token = jwt.sign(payload, process.env.SECRET_TOKEN_KEY, { expiresIn: '1h' }); // Token expires in 1 hour
  return token;
};

// Basic route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/posts', async (req, res) => {
    try {
        const { userId, title, description, image, location, rating } = req.body;
        const newPost = new Post({
            userId,
            title,
            description,
            image,
            location,
            rating
        });
        const savedPost = await newPost.save();
        res.status(201).json(savedPost);
    } catch (error) {
        console.error('Error creating post:', error);
        res.status(500).json({ error: 'Failed to create post' });
    }
});

app.post('/comments', async (req, res) => {
    try {
        const { postId, userId, content } = req.body;
        const newComment = new Comment({
            postId,
            userId,
            content
        });
        const savedComment = await newComment.save();
        await Post.findByIdAndUpdate(postId, { $push: { comments: savedComment._id } });
        res.status(201).json(savedComment);
    } catch (error) {
        console.error('Error creating comment:', error);
        res.status(500).json({ error: 'Failed to create comment' });
    }
});

app.get('/posts/:id', async (req, res) => {
    const postId = req.params.id;
    try {
        const post = await Post.findById(postId);
        if (post) {
            res.status(200).json(post);
        } else {
            res.status(404).json({ message: 'Post not found' });
        }
    } catch (error) {
        console.error('Error retrieving post:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.get('/users/:id', async (req, res) => {
    const userId = req.params.id;
    try {
        const user = await User.findById(userId);
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        console.error('Error retrieving user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.get('/getuserposts/:id', async (req, res) => {
  const userId = req.params.id;

  try {
    // Query the database for posts belonging to the specified user ID
    const userPosts = await Post.find({ userId });

    // Check if any posts were found
    if (userPosts.length > 0) {
      // If posts are found, send them in the response
      res.status(200).json(userPosts);
    } else {
      // If no posts are found, send a 404 status with an error message
      res.status(404).json({ message: 'No posts found for this user' });
    }
  } catch (error) {
    // If an error occurs during database query, send a 500 status with an error message
    console.error('Error retrieving user posts:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.post('/users', async (req, res) => {
    try {
        const { username, description, profileimage, likes, backgroundimage, location, email, password } = req.body;
        const newUser = new User({
            username,
            description,
            profileimage,
            location,
            likes,
            backgroundimage,
            email,
            password
        });
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'Failed to create user' });
    }
});

app.post('/register', async (req, res) => {
    try {
      const { username, email, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      const existingUser = await User.findOne({ email });
      if (existingUser && existingUser.verified) {
        return res.status(400).json({ error: 'User with this email already exists' });
      }
      if (existingUser && !existingUser.verified) {
        await User.findByIdAndDelete(existingUser._id);
      }
      const verificationCode = Math.floor(1000 + Math.random() * 9000);
      const newUser = await User.create({ username, email, password: hashedPassword });
      const expirationTime = Date.now() + 3600000; // 1 hour from now
      await UserVerification.create({ userId: newUser._id, uniqueString: verificationCode, expiresAt: expirationTime });
      await transporter.sendMail({
        from: '"PlanGenie" <mouhamedaminkraiem09@gmail.com>',
        to: email,
        subject: 'Email Verification Code',
        text: `Your email verification code is: ${verificationCode}`,
      });
      res.status(201).json({ message: 'User registered successfully. Email verification code sent.', verificationCode });
    } catch (error) {
      console.error('Error registering user:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
});

app.post('/login', async (req, res) => {
    try {
      const { email, password } = req.body;
      console.log(email,password)
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).json({ error: 'Incorrect password' });
      }
      if (!user.verified) {
        return res.status(403).json({ error: 'Account not verified' });
      }
      const token = generateToken(user);
      res.status(200).json({ message: 'Login successful', token, user });
      console.log("login successful");
    } catch (error) {
      console.error('Error logging in:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
});

app.post('/verify', async (req, res) => {
    try {
      const { email, verificationCode } = req.body;
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      const userVerification = await UserVerification.findOne({ userId: user._id, uniqueString: verificationCode });
      if (!userVerification || userVerification.expiresAt < Date.now()) {
        return res.status(400).json({ error: 'Invalid or expired verification code' });
      }
      await User.findOneAndUpdate({ _id: user._id }, { $set: { verified: true } });
      res.status(200).json({ message: 'Verification successful' });
    } catch (error) {
      console.error('Error verifying code:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
});


app.post('/description', async (req, res) => {
  const { location } = req.body;

  if (!location) {
      return res.status(400).json({ error: 'Location is required' });
  }

  try {
      
      
    const Description = await generateDescription(location);

      if (Description) {
          res.json({Description });
      } else {
          res.status(404).json({ error: 'Description not found' });
      }
  } catch (error) {
      console.error('Error fetching description:', error);
      res.status(500).json({ error: 'Internal server error' });
  }
});











// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
