import React, {SyntheticEvent, useState} from 'react';
import { useAppDispatch } from '../../hooks';
import { createCommentAsync } from './redux/actions';
import { CommentModel } from '../../models/CommentModel';

interface IProps
{
    bookId : number;
}

export function CommentCreator(props : IProps)
{
    const dispatch = useAppDispatch();
    
    const textAreaRef : React.RefObject<HTMLTextAreaElement> = React.createRef();

    const [commentMessage, setCommentMessage] = useState<string>('');

    const writeComment = (e : any) =>
    {
        let commentText : string = e.target.value;
        setCommentMessage(commentText);
    };

    const postComment = async(e: SyntheticEvent) =>
    {
        e.preventDefault();

        let message = commentMessage.trim();

        if(message === '')
        {
            return;
        }

        let model = new CommentModel();
        model.bookId = props.bookId;
        model.message = message;

        dispatch(createCommentAsync(model))        
            .then(() => setCommentMessage(''))
            .then(() => textAreaRef.current.focus());
    };

        return (
            <div className="col-lg-4 col-md-5 col-sm-4 offset-md-1 offset-sm-1 col-12 mt-4">
                <form onSubmit={postComment} id="algin-form">
                    <div className="form-group">
                        <h4>Leave a comment</h4> <label htmlFor="message">Message</label> <textarea ref={textAreaRef} name="msg" value={commentMessage} onChange={writeComment} className="form-control"></textarea>
                    </div>
                    <div className="form-group"> <button type="submit" id="post" className="btn">Post Comment</button> </div>
                </form>
            </div>
        );
}
