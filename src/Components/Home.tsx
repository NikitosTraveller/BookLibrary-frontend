import { useAppSelector } from '../hooks';
import { selectUser } from './user/redux/selectors';
import React from 'react';


export function Home() {

  const currentUser = useAppSelector(selectUser);
  
  return ( 
    <div>
      <h1>{currentUser != null ?  "Hi, " + currentUser.firstName + " " + currentUser.lastName : "You are not logged in"}</h1>
    </div>
  );
}
