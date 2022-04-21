import { Link, useNavigate } from 'react-router-dom';
import '../Styles/NavMenu.css';
import { useAppDispatch, useAppSelector } from '../hooks';
import { selectUser } from './User/redux/selectors';
import { logoutUserAsync } from './User/redux/actions';

export function NavMenu() {

  const dispatch = useAppDispatch();

  const currentUser = useAppSelector(selectUser);

  const navigate = useNavigate();

  const logout = () =>
  {
  
    dispatch(logoutUserAsync()).then(() => navigate("/login"));
  }

  let menu;

  if(currentUser == null)
  {
      menu = (
        <ul className="navbar-nav me-auto mb-2 mb-md-0">
          <li className="nav-item">
              <Link to="/login" className="nav-link">Login</Link>
          </li>
          <li className="nav-item">
              <Link to="/register" className="nav-link">Register</Link>
          </li>
        </ul>
      );
  }  
  else{
    menu = (
      <ul className="navbar-nav me-auto mb-2 mb-md-0">
        <li className="nav-item">
            <Link to="/books" className="nav-link">Books</Link>
        </li>
        <li className="nav-item">
            <a className="nav-link" onClick={logout}>Logout</a>
        </li>
      </ul>
    );
  }


    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
      <div className="container-fluid">
          <Link to="/" className="navbar-brand">Home</Link>
          <div>
          {menu}
          </div>
      </div>
      </nav>
    );
}
