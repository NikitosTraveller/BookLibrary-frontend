import React from 'react';
import {BookUploader} from './BookUploader';
import {BookList} from './BookList';

import '../../Styles/BooksPage.css';
import { Outlet } from 'react-router';

export function BookHandler()
{
    return (
        <React.Fragment>
            <div className="bookSection">
                <BookUploader />
                <BookList />
            </div>
            <div className="bookInfoSection">
                <Outlet />
            </div>
        </React.Fragment>
    );
}
