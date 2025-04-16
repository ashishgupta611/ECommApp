import { GestureResponderEvent } from 'react-native';

export interface InlineActionTextProps {
  label: string;
  clickableText: string;
  onPress: (event: GestureResponderEvent) => void;
  align?: 'row' | 'column'; // optional: row (default) or column layout
};
