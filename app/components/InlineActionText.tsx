import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS } from '../constants';
import { InlineActionTextProps } from '../interfaces';

const InlineActionText: React.FC<InlineActionTextProps> = ({
  label,
  clickableText,
  onPress,
  align = 'row',
}) => {
  const isRow = align === 'row';

  return (
    <View style={[styles.container, { flexDirection: isRow ? 'row' : 'column' }]}>
      <Text style={styles.label}>{label}</Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={[styles.clickableText, isRow && { marginLeft: 4 }]}>
          {clickableText}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: '#444',
  },
  clickableText: {
    fontSize: 14,
    color: COLORS.PRIMARY,
    fontWeight: '500',
  },
});

export default InlineActionText;
