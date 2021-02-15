import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearUser } from '../../actions/user';
import { isEmpty } from 'lodash';
import { Redirect } from 'react-router-dom';

const Logout = () => {
    
    const dispatch = useDispatch();
    const user = useSelector(state=>state=>user)
    useEffect(()=>{
        localStorage.removeItem("token");
        dispatch(clearUser());
    },[])
    if(isEmpty(user)) return <Redirect to="/"/>
    return ( null );
}
 
export default Logout;