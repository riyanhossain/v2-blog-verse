import React, { useContext } from 'react'
import { Navigate, Outlet} from 'react-router-dom'
import { UserContex } from '../../App';

function PrivateRoute(){

    const [ state ] = useContext(UserContex);
    const { isSignIn } = state;

  return !isSignIn ?  <Navigate to="/login"/> : <Outlet />;
  
}

export default PrivateRoute;