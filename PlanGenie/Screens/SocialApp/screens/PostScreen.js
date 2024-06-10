import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, FlatList, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import Comment from '../components/Comment';
import DislikeButton from '../components/DislikeButton';
import LikeButton from '../components/LikeButton';
import axios from 'axios';


const img0 = require('../../../assets/erina.jpg');

export default function PostScreen(){
  const [postData,setPostData]=useState();
  const [profileimage,setprofileimage]=useState();
  const [username,setusername]=useState();
  const [userdesc,setuserdesc]=useState();
  const [isFollowing, setIsFollowing] = useState(false);
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
   const [comments, setComments] = useState([ 
    { id: '1', text: 'Great post!', name: 'John Doe', username: '@johndoe', profilePic: 'https://via.placeholder.com/50' },
    { id: '2', text: 'Really informative.', name: 'Jane Smith', username: '@janesmith', profilePic: 'https://via.placeholder.com/50' },
    { id: '3', text: 'Thanks for sharing!', name: 'Alice Johnson', username: '@alicejohnson', profilePic: 'https://via.placeholder.com/50' }
  ]);
  const [commentText, setCommentText] = useState('');
  
  async function getData(){
    axios.get('http://192.168.1.19:3000/posts/66535f14620a8102ec51614a').then(async res =>{
      setPostData(res?.data);
      axios.get(`http://192.168.1.19:3000/users/${res?.data.userId}`).then(async result => {
        console.log(result?.data);
        setprofileimage(result?.data.profileimage);
        setuserdesc(result?.data.description);
        setusername(result?.data.username);
        console.log(profileimage);
      }).catch(error => {
          console.error('Error fetching user data:', error);
      });
    }).catch(error=>{
      console.error('Error fetching post data:', error); 
    })
  };
  useEffect(()=>{
    getData();
  },[]);

  const handleFollow = () => {
    setIsFollowing(!isFollowing);

  };

  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
      setLiked(false);
    } else {
      setLikes(likes + 1);
      if (disliked) {
        setDislikes(dislikes - 1);
        setDisliked(false);
      }
      setLiked(true);
    }
  };

  const handleDislike = () => {
    if (disliked) {
      setDislikes(dislikes - 1);
      setDisliked(false);
    } else {
      setDislikes(dislikes + 1);
      if (liked) {
        setLikes(likes - 1);
        setLiked(false);
      }
      setDisliked(true);
    }
  };

  const addComment = () => {
    if (commentText) {
      setComments([...comments, { id: comments.length.toString(), text: commentText }]);
      setCommentText('');
    }
  };

 

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={5} // 
    >
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Image 
            style={styles.profilePic} 
            source={{ uri: profileimage }} 
          />
          <View style={{ flex: 1 }}> 
            <Text style={styles.username}>{username}</Text>
            <Text style={styles.role}>{userdesc}</Text>
          </View>
          <TouchableOpacity style={styles.followButton} onPress={handleFollow}>
            <Text style={styles.followButtonText}>{isFollowing ? 'Unfollow' : 'Follow'}</Text>
          </TouchableOpacity>
        </View>
        
        <Text style={styles.postTitle}>{postData?.title}</Text>
        <Text style={styles.postDescription}>{postData?.description}</Text>
        <Image 
          style={styles.postImage}
          source={{ uri: postData?.image }} 
        />
         <View style={styles.likeDislikeContainer}>
          <LikeButton onPress={handleLike} likes={likes} />
          <DislikeButton onPress={handleDislike} dislikes={dislikes} />
        </View>
        <FlatList
          data={comments}
          renderItem={({ item }) => <Comment item={item} />}
          keyExtractor={(item) => item.id}
          style={styles.commentsList}
          contentContainerStyle={{ paddingBottom: 100 }}
        />
        </ScrollView>
        
        

        <View style={styles.commentInputContainer}>
          <TextInput
            style={styles.commentInput}
            placeholder="Add a comment..."
            value={commentText}
            onChangeText={setCommentText}
          />
          <TouchableOpacity onPress={addComment}>
            <Image
              source={img0}
              style={styles.commentButtonImage}
            />
          </TouchableOpacity>
        </View>
      
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    marginTop: 50,
    
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  role: {
    fontSize: 16,
    color: '#777',
  },
  followButton: {
    width: 74,
    height: 35,
    backgroundColor: '#6C21DC',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
  },
  followButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  postImage: {
    width: '100%',
    height: 450,
    marginBottom: 10,
    borderRadius: 20,
  },
  postTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  postSubtitle: {
    fontSize: 18,
    color: '#555',
    marginBottom: 10,
  },
  postDescription: {
    fontSize: 16,
    marginBottom: 20,
  },
   likeDislikeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  commentInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal:20
  },
  commentInput: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 100,
    marginRight: 10,
  },
  commentButtonImage: {
    width: 30,
    height: 30,
  },
  
});
