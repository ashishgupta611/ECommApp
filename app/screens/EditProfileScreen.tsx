import React, { useState, useEffect, useCallback } from 'react';
import { View, ScrollView, Alert } from 'react-native';
import { ProfileHeader, EditableInfoSection, EditableAddressSection } from '../components';
import styles from '../styles/EditProfileStyles';
import { updateUserProfile } from '../services/ProfileService';
import { Profile } from '../interfaces';
import { LoadingIndicator } from '../components';
import { AppButton } from '../components';

type EditProfileScreenProps = {
  route?: any;
  navigation?: any;
};

const EditProfileScreen: React.FC<EditProfileScreenProps> = ({ navigation, route }) => {
  const userId = '5423'; //useAuth();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);

  // Initialize with default values
  const [formData, setFormData] = useState<Profile>({
    id: userId,
    firstName: '',
    lastName: '',
    email: '',
    mobileNumber: '',
    profilePicture: '',
    permanentAddress: '',
    currentAddress: '',
  });

  const fetchProfile = useCallback(async () => {
    try {
      setIsLoading(true);
      // In a real app, you might fetch the existing profile here
      const mockProfile = {
        id: userId,
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        mobileNumber: '+1 (555) 123-4567',
        profilePicture: 'https://randomuser.me/api/portraits/men/1.jpg',
        permanentAddress: '123 Main St, Apt 4B, New York, NY 10001, United States',
        currentAddress: '456 Downtown Ave, Los Angeles, CA 90015, United States',
      };
      setProfile(mockProfile);
      setFormData(mockProfile);
    } catch (error) {
      Alert.alert('Error', 'Failed to load profile data');
    } finally {
      setIsLoading(false);
    }
  }, [userId]);

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  const handleInputChange = (field: keyof Profile, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
    setHasChanges(true);
  };

  const handleProfilePictureUpdate = (uri: string) => {
    setFormData(prev => ({
      ...prev,
      profilePicture: uri,
    }));
    setHasChanges(true);
  };

  const handleSubmit = async () => {
    try {
      setIsSubmitting(true);
      await updateUserProfile(formData);
      Alert.alert('Success', 'Profile updated successfully');
      navigation.goBack();
    } catch (error) {
      Alert.alert('Error', 'Failed to update profile');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return <LoadingIndicator />;
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <ProfileHeader
          title='Change Photo'
          profilePicture={formData.profilePicture}
          onEditPicture={handleProfilePictureUpdate}
          editable={true}
        />

        <EditableInfoSection
          firstName={formData.firstName}
          lastName={formData.lastName}
          email={formData.email}
          mobileNumber={formData.mobileNumber}
          onInputChange={handleInputChange}
        />

        <EditableAddressSection
          permanentAddress={formData.permanentAddress}
          currentAddress={formData.currentAddress}
          onInputChange={handleInputChange}
        />
      </ScrollView>

      <View style={styles.footer}>
        <AppButton
          title="Save Changes"
          onPress={handleSubmit}
          loading={isSubmitting}
          disabled={!hasChanges || isSubmitting}
        />
      </View>
    </View>
  );
};

export default EditProfileScreen;