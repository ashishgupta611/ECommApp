import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { EditableInfoSectionProps } from '../interfaces';
import styles from '../styles/EditProfileStyles';

export const EditableInfoSection = ({
  firstName,
  lastName,
  email,
  mobileNumber,
  onInputChange,
}: EditableInfoSectionProps) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.sectionTitle}>Personal Information</Text>
      
      <View style={styles.inputRow}>
        <Text style={styles.inputLabel}>First Name</Text>
        <TextInput
          style={styles.textInput}
          value={firstName}
          onChangeText={(text) => onInputChange('firstName', text)}
          placeholder="Enter first name"
        />
      </View>
      
      <View style={styles.inputRow}>
        <Text style={styles.inputLabel}>Last Name</Text>
        <TextInput
          style={styles.textInput}
          value={lastName}
          onChangeText={(text) => onInputChange('lastName', text)}
          placeholder="Enter last name"
        />
      </View>
      
      <View style={styles.inputRow}>
        <Text style={styles.inputLabel}>Email</Text>
        <TextInput
          style={styles.textInput}
          value={email}
          onChangeText={(text) => onInputChange('email', text)}
          placeholder="Enter email"
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>
      
      <View style={styles.inputRow}>
        <Text style={styles.inputLabel}>Mobile Number</Text>
        <TextInput
          style={styles.textInput}
          value={mobileNumber}
          onChangeText={(text) => onInputChange('mobileNumber', text)}
          placeholder="Enter mobile number"
          keyboardType="phone-pad"
        />
      </View>
    </View>
  );
};