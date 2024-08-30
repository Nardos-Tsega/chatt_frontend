import React, { memo } from 'react';
import { Text, TextStyle, StyleSheet } from 'react-native';
import { fontFamilies } from '../../utils/fontFamilies';

type TextVariant = 'body' | 'title' | 'subtitle' | 'caption' | 'button';

interface TextProps {
  children: React.ReactNode;
  variant?: TextVariant;
  style?: TextStyle;
  color?: string;
  align?: 'auto' | 'left' | 'right' | 'center' | 'justify';
  numberOfLines?: number;
  onPress?: () => void;
}

const CustomText: React.FC<TextProps> = ({
  children,
  variant = 'body',
  style,
  color,
  align,
  numberOfLines,
  onPress,
}) => {
  return (
    <Text
      style={[
        styles.base,
        styles[variant],
        color && { color },
        align && { textAlign: align },
        style,
      ]}
      numberOfLines={numberOfLines}
      onPress={onPress}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  base: {
    fontFamily: fontFamilies.LORA.medium,
  },
  body: {
    fontSize: 12,
    lineHeight: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 28,
  },
  caption: {
    fontSize: 12,
    lineHeight: 16,
  },
  button: {
    fontSize: 18,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
});

export default memo(CustomText);
