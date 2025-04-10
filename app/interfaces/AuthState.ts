import { UserState } from "./UserState";

export interface AuthState {
  isAuthenticated: boolean;
  isRegistering: boolean;
  user: UserState | null;
}
