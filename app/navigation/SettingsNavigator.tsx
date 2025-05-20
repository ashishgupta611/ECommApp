import { TouchableOpacity, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import { RootDrawerParamList, SettingsNavStackList } from '../types';
import { NativeStackNavigationProp, createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { memo } from 'react';
import { NAVIGATION } from '../enums';

import SettingsScreen from '../screens/SettingsScreen';

const Stack = createNativeStackNavigator<SettingsNavStackList>();

import { DrawerNavigationProp } from '@react-navigation/drawer';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';

type SettingsNavigationProp = CompositeNavigationProp<
  NativeStackNavigationProp<SettingsNavStackList, NAVIGATION.Settings>,
  DrawerNavigationProp<RootDrawerParamList>
>;

type Props = {
  navigation: SettingsNavigationProp;
  route: RouteProp<SettingsNavStackList, NAVIGATION.Settings>;
};

const SettingsNavigator = ({ navigation }: Props) => {
    const { t } = useTranslation();

    return (
        <Stack.Navigator screenOptions={{headerShown: true}}>
          <Stack.Screen
            name={NAVIGATION.Settings}
            component={SettingsScreen}
            options={{
              // headerShown: false,
              title: t('Settings'),
              headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                  <Text style={{ padding: 14, paddingLeft:0, fontWeight: 'bold', fontSize:18 }}>☰</Text>
                </TouchableOpacity>
              ),
            }}
          />
        </Stack.Navigator>
    );
  };

  export default SettingsNavigator;