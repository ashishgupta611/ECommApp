import React from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from '../styles/EditProfileStyles';
import { EditableAddressSectionProps } from '../interfaces';

export const EditableAddressSection = ({
  permanentAddress,
  currentAddress,
  onInputChange,
}: EditableAddressSectionProps) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.sectionTitle}>Address</Text>
      
      <View style={styles.inputRow}>
        <Text style={styles.inputLabel}>Permanent Address</Text>
        <TextInput
          style={[styles.textInput, styles.addressInput]}
          value={permanentAddress}
          onChangeText={(text) => onInputChange('permanentAddress', text)}
          placeholder="Enter permanent address"
          multiline
        />
      </View>
      
      <View style={styles.inputRow}>
        <Text style={styles.inputLabel}>Current Address</Text>
        <TextInput
          style={[styles.textInput, styles.addressInput]}
          value={currentAddress}
          onChangeText={(text) => onInputChange('currentAddress', text)}
          placeholder="Enter current address"
          multiline
        />
      </View>
    </View>
  );
};