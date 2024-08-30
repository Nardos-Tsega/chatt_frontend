import React, { memo } from 'react';
import { StyleSheet, ViewStyle, TextStyle, ActivityIndicator, Pressable } from 'react-native';
import Colors from '../../constants/Colors';
import CustomText from './CustomText';

interface ButtonProps {
  onPress: () => void;
  title: string;
  disabled?: boolean;
  loading?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
  loadingColor?: string;
}

const CustomButton: React.FC<ButtonProps> = ({
  onPress,
  title,
  disabled = false,
  loading = false,
  style,
  textStyle,
  loadingColor = Colors.white,
}) => {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled || loading}
      style={[styles.button, disabled && styles.disabled, style]}
    >
      {loading ? (
        <ActivityIndicator color={loadingColor} />
      ) : (
        <CustomText style={textStyle}>{title}</CustomText>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.white,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  disabled: {
    backgroundColor: '#A9A9A9',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default memo(CustomButton);
