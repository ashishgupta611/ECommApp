import { TouchableOpacity, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import { ProfileNavStackList, RootDrawerParamList } from '../types';
import { NativeStackNavigationProp, createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { memo } from 'react';
import { NAVIGATION } from '../enums';
import LogoutButton from '../components/LogoutButton';

import ProfileScreen from '../screens/ProfileScreen';

const Stack = createNativeStackNavigator<ProfileNavStackList>();

import { DrawerNavigationProp } from '@react-navigation/drawer';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';

type ProfileNavigationProp = CompositeNavigationProp<
  NativeStackNavigationProp<ProfileNavStackList, NAVIGATION.Profile>,
  DrawerNavigationProp<RootDrawerParamList>
>;

type Props = {
  navigation: ProfileNavigationProp;
  route: RouteProp<ProfileNavStackList, NAVIGATION.Profile>;
};

const ProfileNavigator = ({ navigation }: Props) => {
    const { t } = useTranslation();
    const MemoizedLogoutButton = memo(() => <LogoutButton />);

    return (
        <Stack.Navigator screenOptions={{headerShown: true}}>
          <Stack.Screen
            name={NAVIGATION.Profile}
            component={ProfileScreen}
            options={{
              // headerShown: false,
              title: t('Profile'),
              headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                  <Text style={{ padding: 14, paddingLeft:0, fontWeight: 'bold', fontSize:18 }}>☰</Text>
                </TouchableOpacity>
              ),
              headerRight: () => (<MemoizedLogoutButton />)
            }}
          />
        </Stack.Navigator>
    );
  };

  export default ProfileNavigator;