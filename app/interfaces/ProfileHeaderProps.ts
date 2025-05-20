export interface ProfileHeaderProps {
  title: string;
  profilePicture: string;
  onEditPicture: (uri: string) => void;
  editable?: boolean;
};