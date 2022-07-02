import {useEffect} from 'react';
import { Book } from '../../models/book';
import { DateHelper } from "../../helpers/dateHelper";

import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';

import {
  deleteBookAsync,
  getBooksAsync,
} from './redux/actions';
import { selectBooks } from './redux/selectors';
import { selectUser } from '../user/redux/selectors';


export function BookList()
{
    const dispatch = useAppDispatch();

    const booksList = useAppSelector(selectBooks);

    const currentUser = useAppSelector(selectUser);

    useEffect(() => {
      populateBookList();
    }, []);

    const deleteBook = (bookId : number) =>
    {
      dispatch(deleteBookAsync(bookId));
    }

    const populateBookList = () => {
      dispatch(getBooksAsync());
    }
    
    const renderBooksList = (books : Book[])  => {

        return (

            <div className="list-group">
                <h3>All books ({books.length})</h3>
                <br/>
                {books.map(book =>
                                <div key={book.id} className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
                                  <div className="d-flex gap-2 w-100 justify-content-between">
                                    <div>
                                      <Link to={book.id.toString()} className="mb-0">{book.name}</Link>
                                      <p className="mb-0 opacity-75">Author: {book.authorName}. {book.commentsCount} comments.
                                      <a style={{visibility: book.userId == currentUser.id ? 'visible' : 'hidden' }} onClick={() => deleteBook(book.id)} className="deleteCommentLink">Delete</a>
                                      </p>
                                    </div>
                                    <small className="opacity-50 text-nowrap">{DateHelper.FormatDate(book.date)}</small>
                                  </div>
                                </div>
                )}
            </div>
            
        );
    }

      return (currentUser != null ?
        <div>{renderBooksList(booksList)}</div> :
        <div>You are not logged in</div>
      );  
}
