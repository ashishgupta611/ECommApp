import {GestureResponderEvent} from 'react-native';

export interface ButtonWithTextProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  disabled?: boolean;
}
