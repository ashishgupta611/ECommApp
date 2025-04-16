import {TextInputProps} from 'react-native';

export interface TextInputWithLabelProps extends TextInputProps {
  label: string;
  error?: string;
};
