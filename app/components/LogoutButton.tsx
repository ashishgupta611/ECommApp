import React from 'react';
import {  Text, StyleSheet, TouchableOpacity, GestureResponderEvent } from 'react-native';
import { COLORS } from '../constants';

interface LogoutButtonProps {
    label: string;
    onPress: (event: GestureResponderEvent) => void;
  }

const LogoutButton: React.FC<LogoutButtonProps> = ({ label, onPress }) => {

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
        <Text style={styles.label}> 
            {label} 
        </Text>
      </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
      alignItems: 'center',
      justifyContent: 'center',
      flex: 0.4,
      backgroundColor: COLORS.ERROR,
      marginRight:16,
    },
    label: {
      textAlignVertical: 'center',
      fontSize: 14,
      height:30,
      fontWeight: 'bold',
      color: 'white',
    },
  });

  export default LogoutButton;
  