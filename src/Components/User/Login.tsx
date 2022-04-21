import {SyntheticEvent, useState} from 'react';
import { useNavigate } from "react-router-dom";
import { UserModel } from '../../Models/UserModel';
import { useAppDispatch } from '../../hooks';
import { loginUserAsync } from './redux/actions';

export function Login()
{
    const dispatch = useAppDispatch();
    
    let navigate = useNavigate();
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);

    const submit = (e : SyntheticEvent) =>
    {
        e.preventDefault();

        let model = new UserModel();
        model.password = password;
        model.username = username;

        dispatch(loginUserAsync(model))
        .then(() => setRedirect(true));
    }

    if(redirect)
    {
        navigate("/");
    }
    
    return (
        <form className="authForm" onSubmit={submit}>
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

            <input onChange={e => setUsername(e.target.value)} type="text" required className="form-control" id="floatingInput" placeholder="Username"/>
            <input onChange={e => setPassword(e.target.value)} type="password" required className="form-control" id="floatingPassword" placeholder="Password" />

            <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
        </form>
    );
}