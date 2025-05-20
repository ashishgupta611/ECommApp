import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator, StyleSheet, View } from 'react-native';
import { AppButtonProps } from '../interfaces';
import { Colors } from '../constants';

export const AppButton: React.FC<AppButtonProps> = ({
  title,
  onPress,
  disabled = false,
  loading = false,
  variant = 'primary',
  fullWidth = false,
  style,
  textStyle,
  leftIcon,
  rightIcon,
}) => {
  const getButtonStyle = () => {
    switch (variant) {
      case 'secondary':
        return styles.secondaryButton;
      case 'outline':
        return styles.outlineButton;
      default:
        return styles.primaryButton;
    }
  };

  const getTextStyle = () => {
    switch (variant) {
      case 'secondary':
        return styles.secondaryText;
      case 'outline':
        return styles.outlineText;
      default:
        return styles.primaryText;
    }
  };

  return (
    <TouchableOpacity
      style={[
        styles.button,
        getButtonStyle(),
        disabled && styles.disabledButton,
        fullWidth && styles.fullWidth,
        style,
      ]}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.7}
    >
      {loading ? (
        <ActivityIndicator 
          color={variant === 'primary' ? Colors.white : Colors.primary} 
          size="small" 
        />
      ) : (
        <View style={styles.contentContainer}>
          {leftIcon && <View style={styles.iconContainer}>{leftIcon}</View>}
          <Text style={[getTextStyle(), textStyle]}>{title}</Text>
          {rightIcon && <View style={styles.iconContainer}>{rightIcon}</View>}
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    flexDirection: 'row',
  },
  fullWidth: {
    width: '100%',
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    marginHorizontal: 4,
  },
  // Primary Button
  primaryButton: {
    backgroundColor: Colors.primary,
  },
  primaryText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
  // Secondary Button
  secondaryButton: {
    backgroundColor: Colors.secondary,
  },
  secondaryText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
  // Outline Button
  outlineButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: Colors.primary,
  },
  outlineText: {
    color: Colors.primary,
    fontSize: 16,
    fontWeight: '600',
  },
  // Disabled State
  disabledButton: {
    opacity: 0.6,
  },
});