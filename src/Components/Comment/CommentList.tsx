import { useEffect } from 'react';
import { Comment } from '../../models/comment';
import { DateHelper } from "../../helpers/dateHelper";

import { useAppDispatch, useAppSelector } from '../../hooks';
import { selectComments } from './redux/selectors';
import { deleteCommentAsync, getCommentsAsync } from './redux/actions';
import { selectUser } from '../user/redux/selectors';

interface IProps
{
    bookId : number;
}

export function CommentList(props : IProps)
{
    const dispatch = useAppDispatch();

    const commentList = useAppSelector(selectComments);

    const currentUser = useAppSelector(selectUser);
    
    useEffect(() => {
        populateCommentList();
      }, []);

    const deleteComment = (commentId : number) =>
    {
        dispatch(deleteCommentAsync(commentId));
    }
    
    const renderCommentList = (comments : Comment[]) => {
        return (
            <div className="col-sm-5 col-md-6 col-12 pb-4">
                <h4>Comments ({comments.length})</h4>

                {comments.map(comment =>
                    <div className="comment mt-4 text-justify float-left" key={comment.id}>
                        <h4>{comment.authorName}</h4><span> {DateHelper.FormatDate(comment.date)}</span> <br/>
                        <p>{comment.message} <span /> <a style={{visibility: comment.authorId == currentUser.id ? 'visible' : 'hidden' }} onClick={() => deleteComment(comment.id)} className="deleteCommentLink">Delete</a></p>
                    </div>
                )}

            </div>
        );
    }

    const populateCommentList = async () => {
        if(props.bookId > 0)
        {
            dispatch(getCommentsAsync(props.bookId));
        }
    }

    return (currentUser != null ?
        <div>{renderCommentList(commentList)}</div> :
        <div>You are not logged in</div>
      );  
   

}
