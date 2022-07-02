import { Comment } from "../../../../models/Comment";

export interface CommentState {
    comments: Comment[];
}
  
export const initialState = {
    comments: [],
} as CommentState;