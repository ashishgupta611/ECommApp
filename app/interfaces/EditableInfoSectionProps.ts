import { Profile } from "./Profile";

export interface EditableInfoSectionProps {
  firstName: string;
  lastName: string;
  email: string;
  mobileNumber: string;
  onInputChange: (field: keyof Profile, value: string) => void;
};