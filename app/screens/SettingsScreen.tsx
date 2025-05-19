import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Switch, ScrollView, Platform, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationProps } from '../types';
import { styles } from '../styles/SettingsScreenStyle';
import Header from '../components/Header';

type Language = 'en' | 'ar';
type PermissionStatus = 'granted' | 'denied' | 'not-determined';

interface UserProfile {
  name: string;
  email: string;
  avatarUri?: string;
}

interface AppSettings {
  language: Language;
  locationPermission: PermissionStatus;
  pushNotificationPermission: PermissionStatus;
  pushNotificationsEnabled: boolean;
}

const SettingsScreen: React.FC<DrawerNavigationProps<'Settings'>> = () => {
  const navigation = useNavigation();
  
  // Sample user data - in a real app, this would come from your state management
  const [user, setUser] = useState<UserProfile>({
    name: 'Ayansh Gupta',
    email: 'ayansh.gupta@gmail.com',
    avatarUri: 'https://randomuser.me/api/portraits/men/1.jpg',
  });

  // App settings state
  const [settings, setSettings] = useState<AppSettings>({
    language: 'en',
    locationPermission: 'not-determined',
    pushNotificationPermission: 'not-determined',
    pushNotificationsEnabled: true,
  });

  // Available languages for localization
  const languages: { code: Language; name: string }[] = [
    { code: 'en', name: 'English' },
    { code: 'ar', name: 'Arabic' },
  ];

  const handleEditProfile = () => {
    
  };

  const togglePushNotifications = () => {
    if (settings.pushNotificationPermission === 'denied') {
      Alert.alert('Permission Required', 'Please enable notification permissions in your device settings', 
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          {
            text: 'Open Settings',
            onPress: () => {
              // Platform-specific code to open settings
              if (Platform.OS === 'ios') {
                // Linking.openURL('app-settings:');
              } else {
                // Linking.openSettings();
              }
            },
          },
        ],
      );
      return;
    }

    setSettings(prev => ({
      ...prev,
      pushNotificationsEnabled: !prev.pushNotificationsEnabled,
    }));
  };

  const requestLocationPermission = () => {
    // In a real app, you would use a library like react-native-permissions
    Alert.alert(
      'Location Permission',
      'This app would like to access your location to provide better services.',
      [
        {
          text: 'Deny',
          onPress: () => {
            setSettings(prev => ({
              ...prev,
              locationPermission: 'denied',
            }));
          },
          style: 'cancel',
        },
        {
          text: 'Allow',
          onPress: () => {
            setSettings(prev => ({
              ...prev,
              locationPermission: 'granted',
            }));
          },
        },
      ],
    );
  };

  const changeLanguage = (language: Language) => {
    setSettings(prev => ({
      ...prev,
      language,
    }));
    // In a real app, you would also update your localization provider here
  };

  const getPermissionStatusText = (status: PermissionStatus): string => {
    switch (status) {
      case 'granted':
        return 'Allowed';
      case 'denied':
        return 'Denied';
      case 'not-determined':
        return 'Not determined';
      default:
        return 'Unknown';
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* <Header title='Settings' showBackButton={true}/> */}
      {/* User Profile Header */}
      <View style={styles.profileHeader}>
        <View style={styles.avatarContainer}>
          <Image
            source={{ uri: user.avatarUri || 'https://via.placeholder.com/150' }}
            style={styles.avatar}
          />
          <TouchableOpacity style={styles.editButton} onPress={handleEditProfile}>
            <Text style={styles.editButtonText}>Edit</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.userName}>{user.name}</Text>
        <Text style={styles.userEmail}>{user.email}</Text>
      </View>

      {/* Settings Sections */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Preferences</Text>

        {/* Language Selection */}
        <View style={styles.settingItem}>
          <Text style={styles.settingLabel}>Language</Text>
          <View style={styles.languageOptions}>
            {languages.map(lang => (
              <TouchableOpacity
                key={lang.code}
                style={[
                  styles.languageOption,
                  settings.language === lang.code && styles.languageOptionActive,
                ]}
                onPress={() => changeLanguage(lang.code)}
              >
                <Text
                  style={[
                    styles.languageOptionText,
                    settings.language === lang.code && styles.languageOptionTextActive,
                  ]}
                >
                  {lang.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Push Notifications */}
        <View style={styles.settingItem}>
          <View>
            <Text style={styles.settingLabel}>Push Notifications</Text>
            <Text style={styles.settingSubtext}>
              Status: {getPermissionStatusText(settings.pushNotificationPermission)}
            </Text>
          </View>
          <Switch
            value={settings.pushNotificationsEnabled}
            onValueChange={togglePushNotifications}
            disabled={settings.pushNotificationPermission === 'denied'}
          />
        </View>

        {/* Location Permission */}
        <View style={styles.settingItem}>
          <View>
            <Text style={styles.settingLabel}>Location Access</Text>
            <Text style={styles.settingSubtext}>
              Status: {getPermissionStatusText(settings.locationPermission)}
            </Text>
          </View>
          <TouchableOpacity
            style={[
              styles.permissionButton,
              settings.locationPermission === 'granted' && styles.permissionButtonGranted,
            ]}
            onPress={requestLocationPermission}
          >
            <Text style={styles.permissionButtonText}>
              {settings.locationPermission === 'granted' ? 'Allowed' : 'Request'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default SettingsScreen;