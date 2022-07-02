import {useEffect} from 'react';
import { CommentCreator } from '../Comment/CommentCreator';
import { CommentList } from '../Comment/CommentList';

import '../../styles/bookInfoPage.css';
import { useParams } from 'react-router';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getSelectedBook } from './redux/selectors';
import { downloadBookAsync, getBookAsync } from './redux/actions';
import { BookModel } from '../../models/BookModel';

export function BookInfo()
{
    const dispatch = useAppDispatch();

    const selectedBook = useAppSelector(getSelectedBook);

    const { bookId } = useParams();

    const getBook = () =>
    {
        dispatch(getBookAsync(bookId));
    }

    useEffect(() => {
        getBook();
      }, [bookId]);

    const downloadBook = () =>
    {
        if (selectedBook != null && selectedBook != undefined && selectedBook.id > 0)
        {
            let model = new BookModel();
            model.id = selectedBook.id;
            model.name = selectedBook.name;

            dispatch(downloadBookAsync(model));
        }
    }

    if(selectedBook)
    {
        return (
                    <section>
                        <div className="container">
                            <div className="row">
                                <a href="#" onClick={downloadBook}><h2>{selectedBook.name} (click to download)</h2></a>
                                <CommentCreator bookId={selectedBook.id} />
                                <CommentList bookId={selectedBook.id}/>
                            </div>
                        </div>
                    </section>
        );
    }
    else{
        return (
            <section>
                <div className="container">
                    Nothing
                </div>
            </section>
        );
    }
}
