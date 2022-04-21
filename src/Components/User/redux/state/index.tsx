import { User } from "../../../../Models/User";

export interface UserState {
    user: User;
    loginRedirect: boolean;
}
  
export const initialState = {
    user: null,
    loginRedirect: false
} as UserState;