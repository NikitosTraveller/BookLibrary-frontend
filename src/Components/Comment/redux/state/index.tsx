import { Comment } from "../../../../Models/Comment";

export interface CommentState {
    comments: Comment[];
}
  
export const initialState = {
    comments: [],
} as CommentState;