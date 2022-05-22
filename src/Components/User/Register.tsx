import {SyntheticEvent} from 'react';
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from '../../hooks';
import { registerUserAsync } from './redux/actions';
import { UserModel } from '../../Models/UserModel';
import { loginRedirect } from './redux/selectors';

import {
    FormBuilder,
    FieldGroup,
    FieldControl,
    Validators,
 } from "react-reactive-form";
import { PasswordInput, TextInput } from '../Form';

export function Register()
{

    const registrationForm = FormBuilder.group({
        username: ["", Validators.required],
        password: ["", Validators.required],
        confirmPassword: ["", Validators.required],
        lastName: ["", Validators.required],
        firstName: ["", Validators.required]
    });

    const dispatch = useAppDispatch();
    
    let navigate = useNavigate();

    const redirect = useAppSelector(loginRedirect);

    const sumbit = (e : SyntheticEvent) =>
    {
        e.preventDefault();
        
        let model = new UserModel();
        model.firstName = registrationForm.get('firstName').value;
        model.lastName = registrationForm.get('lastName').value;;
        model.username = registrationForm.get('username').value;;
        model.password = registrationForm.get('password').value.trim();

        dispatch(registerUserAsync(model));
    }

    if(redirect)
    {
        navigate("/login");
    }

 
        return (
            <>
                <FieldGroup
                    control={registrationForm}
                    render={({ get, invalid }) => (
                        <form className="authForm" onSubmit={sumbit}>
                            <h1 className="h3 mb-3 fw-normal">Please register</h1>

                            <FieldControl
                                name="firstName"
                                render={TextInput}
                                meta={{ label: "First Name" }} />

                            <FieldControl
                                name="lastName"
                                render={TextInput}
                                meta={{ label: "Last Name" }} />

                            <FieldControl
                                name="username"
                                render={TextInput}
                                meta={{ label: "Username" }} />

                            <FieldControl
                                name="password"
                                render={PasswordInput}
                                meta={{ label: "Password" }} />

                            <FieldControl
                                name="confirmPassword"
                                render={PasswordInput}
                                meta={{ label: "Confirm Password" }} />

                            <button
                                type="submit"
                                disabled={invalid}
                                className="w-100 btn btn-lg btn-primary"
                            >
                                Submit
                            </button>
                        </form>
                    )} 
                />   
            </>
        );
}