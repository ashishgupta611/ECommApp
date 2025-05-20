import React, { useState, useCallback, useEffect } from 'react';
import { View, ScrollView, Text, TouchableOpacity, RefreshControl, Alert } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { ProfileHeader, UserInfoSection, AddressSection } from '../components';
import styles from '../styles/ProfileScreenStyles';
import { getUserProfile, updateProfilePicture } from '../services/ProfileService';
import { Profile } from '../interfaces';
//import { useAPI } from '../hooks/useAPI';
import { LoadingIndicator } from '../components';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ProfileNavStackList } from '../types';
import { ProfileNavigation } from '../enums';

type ProfileScreenNavigationProps = NativeStackNavigationProp<ProfileNavStackList, typeof ProfileNavigation.EditProfile>;

type ProfileScreenProps = {
  navigation: ProfileScreenNavigationProps;
};

const ProfileScreen: React.FC<ProfileScreenProps> = ({ navigation }) => {
  const userId = '5423';

  // const { data, loading, error } = useAPI<Profile>({
  //   url: '',
  //   initialData: {
  //     id: '5423',
  //     firstName: 'Ayansh',
  //     lastName: 'Gupta',
  //     email: 'ayansh.gupta@gmail.com',
  //     mobileNumber: '9971418369',
  //     profilePicture: '',
  //     permanentAddress: 'Barnahal',
  //     currentAddress: 'Barnahal'
  //   },
  //   token: 'token'
  // });

  const [profile, setProfile] = useState<Profile | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const fetchProfile = useCallback(async () => {
    try {
      setIsLoading(true);
      const userProfile = await getUserProfile(userId);
      setProfile(userProfile);
    } catch (error) {
      Alert.alert('Error', 'Failed to fetch profile data');
    } finally {
      setIsLoading(false);
      setRefreshing(false);
    }
  }, [userId]);

  useFocusEffect(
    useCallback(() => {
      fetchProfile();
    }, [fetchProfile])
  );

  const handleRefresh = () => {
    setRefreshing(true);
    fetchProfile();
  };

  // Set up header right button
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate(ProfileNavigation.EditProfile)}>
          <Text style={{ fontWeight: 'bold', fontSize: 16, width: 50 }}>EDIT</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const handleProfilePictureUpdate = async (imageUri: string) => {
    try {
      await updateProfilePicture(userId, imageUri);
      fetchProfile();
    } catch (error) {
      Alert.alert('Error', 'Failed to update profile picture');
    }
  };

  if (isLoading && !refreshing) {
    return <LoadingIndicator />;
  }

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
      >
        {profile && (
          <>
            <ProfileHeader
              title='Edit'
              profilePicture={profile.profilePicture}
              onEditPicture={handleProfilePictureUpdate}
              editable={true}
            />
            <UserInfoSection
              firstName={profile.firstName}
              lastName={profile.lastName}
              email={profile.email}
              mobileNumber={profile.mobileNumber}
            />
            <AddressSection
              permanentAddress={profile.permanentAddress}
              currentAddress={profile.currentAddress}
            />
          </>
        )}
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;