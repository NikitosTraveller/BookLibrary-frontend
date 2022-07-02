import { Comment } from "../../../../models/comment";

export interface CommentState {
    comments: Comment[];
}
  
export const initialState = {
    comments: [],
} as CommentState;