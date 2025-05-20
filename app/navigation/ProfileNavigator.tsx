import { TouchableOpacity, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import { ProfileNavStackList, RootDrawerParamList } from '../types';
import { NativeStackNavigationProp, createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { memo } from 'react';
import { ProfileNavigation } from '../enums';

import ProfileScreen from '../screens/ProfileScreen';

const Stack = createNativeStackNavigator<ProfileNavStackList>();

import { DrawerNavigationProp } from '@react-navigation/drawer';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';
import EditProfileScreen from '../screens/EditProfileScreen';

type ProfileNavigationProp = CompositeNavigationProp<
  NativeStackNavigationProp<ProfileNavStackList, ProfileNavigation.Profile>,
  DrawerNavigationProp<RootDrawerParamList>
>;

type Props = {
  navigation: ProfileNavigationProp;
  route: RouteProp<ProfileNavStackList, ProfileNavigation.Profile>;
};

const ProfileNavigator = ({ navigation }: Props) => {
    const { t } = useTranslation();

    return (
        <Stack.Navigator screenOptions={{headerShown: true}}>
          <Stack.Screen
            name={ProfileNavigation.Profile}
            component={ProfileScreen}
            options={{
              // headerShown: false,
              title: t('Profile'),
              headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                  <Text style={{ padding: 14, paddingLeft:0, fontWeight: 'bold', fontSize:18 }}>☰</Text>
                </TouchableOpacity>
              ),
              headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate(ProfileNavigation.EditProfile)}>
                  <Text style={{ fontWeight: 'bold', fontSize:16, width:50 }}>EDIT</Text>
                </TouchableOpacity>
              )
            }}
          />
          <Stack.Screen
            name={ProfileNavigation.EditProfile}
            component={EditProfileScreen}
            options={{
              title: t('Edit Profile')
            }}
          />
        </Stack.Navigator>
    );
  };

  export default ProfileNavigator;

  