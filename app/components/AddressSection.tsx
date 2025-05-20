import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/ProfileScreenStyles';

interface AddressSectionProps {
  permanentAddress: string;
  currentAddress: string;
}

export const AddressSection = ({
  permanentAddress,
  currentAddress,
}: AddressSectionProps) => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Address</Text>
      
      <View style={styles.addressContainer}>
        <Text style={styles.addressTitle}>Permanent Address</Text>
        <Text style={styles.addressText}>{permanentAddress}</Text>
      </View>
      
      <View style={[styles.addressContainer, { marginTop: 15 }]}>
        <Text style={styles.addressTitle}>Current Address</Text>
        <Text style={styles.addressText}>
          {currentAddress || 'Same as permanent address'}
        </Text>
      </View>
    </View>
  );
};