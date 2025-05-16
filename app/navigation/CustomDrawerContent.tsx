import React, { memo } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerContentComponentProps, DrawerItemList } from '@react-navigation/drawer';
import LogoutButton from '../components/LogoutButton';

const CustomDrawerContent: React.FC<DrawerContentComponentProps> = (props) => {
  const MemoizedLogoutButton = memo(() => <LogoutButton />);

  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View style={styles.header}>
          <Text style={styles.headerText}>My App</Text>
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View style={styles.footer}>
        <MemoizedLogoutButton />
        {/* <TouchableOpacity onPress={() => console.log('Logout pressed')}>
          <Text style={styles.footerText}>Logout</Text>
        </TouchableOpacity> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 12,
    marginBottom:10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  footer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  footerText: {
    fontSize: 16,
  },
});

export default CustomDrawerContent;