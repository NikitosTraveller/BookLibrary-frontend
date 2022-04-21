import { useAppSelector } from '../hooks';
import { selectUser } from './User/redux/selectors';


export function Home() {

  const currentUser = useAppSelector(selectUser);
  
  return ( 
    <div>
      <h1>{currentUser != null ?  "Hi, " + currentUser.firstName + " " + currentUser.lastName : "You are not logged in"}</h1>
    </div>
  );
}
