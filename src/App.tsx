import { useEffect } from 'react';
import { Route, Routes } from 'react-router';
import { Home } from './Components/Home';
import { Login } from './Components/User/Login';
import { NavMenu } from './Components/NavMenu';
import { Register } from './Components/User/Register';

import './styles/custom.css'
import { BookHandler } from './Components/Book/BookHandler';
import './styles/bootstrap.css';
import './styles/authForm.css';
import { NotFound } from './Components/NotFound';
import { BookInfo } from './Components/Book/BookInfo';
import { useAppDispatch } from './hooks';
import { getUserAsync } from './Components/User/redux/actions';


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
