import {
  GestureResponderEvent,
  NativeSyntheticEvent,
  TextInputSubmitEditingEventData,
  TextInputProps
} from 'react-native';

export interface TextInputWithButtonProps extends TextInputProps {
  onButtonPress: (event: GestureResponderEvent) => void;
  disabled?: boolean;
}
