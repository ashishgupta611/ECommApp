import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/ProfileScreenStyles';

interface UserInfoSectionProps {
  firstName: string;
  lastName: string;
  email: string;
  mobileNumber: string;
}

export const UserInfoSection = ({
  firstName,
  lastName,
  email,
  mobileNumber,
}: UserInfoSectionProps) => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Personal Information</Text>
      
      <View style={styles.infoRow}>
        <Text style={styles.infoLabel}>First Name</Text>
        <Text style={styles.infoValue}>{firstName}</Text>
      </View>
      
      <View style={styles.infoRow}>
        <Text style={styles.infoLabel}>Last Name</Text>
        <Text style={styles.infoValue}>{lastName}</Text>
      </View>
      
      <View style={styles.infoRow}>
        <Text style={styles.infoLabel}>Email</Text>
        <Text style={styles.infoValue}>{email}</Text>
      </View>
      
      <View style={styles.infoRow}>
        <Text style={styles.infoLabel}>Mobile</Text>
        <Text style={styles.infoValue}>{mobileNumber}</Text>
      </View>
    </View>
  );
};