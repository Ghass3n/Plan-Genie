import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Comment = ({ item }) => (
  <View style={styles.commentContainer}>
    <Image style={styles.commentProfilePic} source={{ uri: item.profilePic }} />
    <View style={styles.commentTextContainer}>
      <Text style={styles.commentName}>
        {item.name} <Text style={styles.commentUsername}>{item.username}</Text>
      </Text>
      <Text style={styles.commentText}>{item.text}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  commentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  commentProfilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  commentTextContainer: {
    flex: 1,
  },
  commentName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  commentUsername: {
    fontSize: 14,
    color: '#555',
  },
  commentText: {
    fontSize: 16,
    marginTop: 2,
  },
});

export default Comment;