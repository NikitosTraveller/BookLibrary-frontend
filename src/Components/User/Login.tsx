import {SyntheticEvent, useState} from 'react';
import { useNavigate } from "react-router-dom";
import { UserModel } from '../../models/userModel';
import { useAppDispatch } from '../../hooks';
import { loginUserAsync } from './redux/actions';

import {
    FormBuilder,
    FieldGroup,
    FieldControl,
    Validators,
 } from "react-reactive-form";
import { PasswordInput, TextInput } from '../form';

export function Login()
{

    const loginForm = FormBuilder.group({
        username: ["", Validators.required],
        password: ["", Validators.required]
    });

    const dispatch = useAppDispatch();
    
    let navigate = useNavigate();
    
    const [redirect, setRedirect] = useState(false);

    const submit = (e : SyntheticEvent) =>
    {
        e.preventDefault();

        let model = new UserModel();

        model.username = loginForm.get('username').value;;
        model.password = loginForm.get('password').value.trim();

        dispatch(loginUserAsync(model))
        .then(() => setRedirect(true));
    }

    if(redirect)
    {
        navigate("/");
    }
    
    return (
        <>
            <FieldGroup
                control={loginForm}
                render={({ get, invalid }) => (
                    <form className="authForm" onSubmit={submit}>
                        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                        <FieldControl
                            name="username"
                            render={TextInput}
                            meta={{ label: "Username" }} />

                        <FieldControl
                            name="password"
                            render={PasswordInput}
                            meta={{ label: "Password" }} />

                        <button
                            type="submit"
                            disabled={invalid}
                            className="w-100 btn btn-lg btn-primary"
                        >
                            Sign in
                        </button>
                    </form>
                )} 
            />    
        </>
    );
}