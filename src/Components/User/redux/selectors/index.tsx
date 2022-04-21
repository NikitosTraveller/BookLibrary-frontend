import { RootState } from "../../../../store";

export const selectUser = (state: RootState) => state.userState.user;

export const loginRedirect = (state: RootState) => state.userState.loginRedirect;