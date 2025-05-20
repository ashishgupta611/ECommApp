import React from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { ProfileHeaderProps } from '../interfaces';

export const ProfileHeader = ({ title, profilePicture, onEditPicture, editable = false }: ProfileHeaderProps) => {
  const handleEditPress = () => {
    // In a real app, this would launch an image picker
    // For demo, we'll use a mock image URL
    onEditPicture('https://randomuser.me/api/portraits/men/2.jpg');
  };

  return (
    <View style={styles.profileHeader}>
      <Image
        source={{ uri: profilePicture || 'https://via.placeholder.com/150' }}
        style={styles.profileImage}
      />
      {editable && (
        <TouchableOpacity style={styles.editButton} onPress={handleEditPress}>
          <Text style={styles.editButtonText}>{title}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  profileHeader: {
    alignItems: 'center',
    paddingVertical: 24,
    backgroundColor: '#fff',
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
  },
  editButton: {
    position: 'absolute',
    bottom: 30,
    backgroundColor: '#007AFF',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    marginLeft: 90,
  },
  editButtonText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '500',
  }
});