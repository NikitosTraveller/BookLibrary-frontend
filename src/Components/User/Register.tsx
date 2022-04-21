import {SyntheticEvent, useState} from 'react';
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from '../../hooks';
import { registerUserAsync } from './redux/actions';
import { UserModel } from '../../Models/UserModel';
import { loginRedirect } from './redux/selectors';

export function Register()
{
    const dispatch = useAppDispatch();
    
    let navigate = useNavigate();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const redirect = useAppSelector(loginRedirect);

    const validateModel = () : boolean =>
    {
        return firstName.length > 0 && lastName.length > 0 && username.length > 4 && password.trim().length > 6 && confirmPassword == password;
    }

    const sumbit = (e : SyntheticEvent) =>
    {
        e.preventDefault();

        if(validateModel())
        {
            let model = new UserModel();
            model.firstName = firstName;
            model.lastName = lastName;
            model.username = username;
            model.password = password.trim();

            dispatch(registerUserAsync(model));
        }
    }

    if(redirect)
    {
        navigate("/login");
    }

 
        return (
            <form className="authForm" onSubmit={sumbit}>
                <h1 className="h3 mb-3 fw-normal">Please register</h1>

                <input onChange={e => setFirstName(e.target.value.trim())} type="text" required className="form-control" placeholder="First Name"/>
                <input onChange={e => setLastName(e.target.value.trim())} type="text" required className="form-control" placeholder="Last Name"/>
                <input onChange={e => setUsername(e.target.value.trim())} type="text" required className="form-control" placeholder="Username"/>
                <input onChange={e => setPassword(e.target.value)} type="password" required className="form-control" placeholder="Password" />
                <input onChange={e => setConfirmPassword(e.target.value)} type="password" required className="form-control" placeholder="Confirm Password" />

                <button className="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
            </form>
        );
}