import { useEffect } from 'react';
import { Route, Routes } from 'react-router';
import { Home } from './components/home';
import { Login } from './components/user/login';
import { NavMenu } from './components/navMenu';
import { Register } from './components/user/register';

import './styles/custom.css'
import { BookHandler } from './components/book/bookHandler';
import './styles/bootstrap.css';
import './styles/authForm.css';
import { NotFound } from './components/notFound';
import { BookInfo } from './components/book/bookInfo';
import { useAppDispatch } from './hooks';
import { getUserAsync } from './components/user/redux/actions';


export default function App() {

  const dispatch = useAppDispatch();

  useEffect(() => {
    getUserData();
  }, []);


  const getUserData = () =>
  {
    dispatch(getUserAsync());
  }

    return (
        <div>
          <NavMenu/>

          <Routes>
            <Route path='*' element={<NotFound />} />
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/books" element={<BookHandler/>}>
                <Route path=":bookId" element={<BookInfo/>} />
            </Route>
          </Routes>
        </div>
    );
}
