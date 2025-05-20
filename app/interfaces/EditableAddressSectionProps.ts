import { Profile } from '../interfaces';

export interface EditableAddressSectionProps {
  permanentAddress: string;
  currentAddress: string;
  onInputChange: (field: keyof Profile, value: string) => void;
};