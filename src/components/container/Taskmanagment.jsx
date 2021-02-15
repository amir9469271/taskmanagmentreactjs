import React, { Fragment } from 'react';
import {Switch,Route} from "react-router-dom";
import MainLayout from './../Layouts/MainLayout';
import Login from './../Login/Login';
import Register from './../Register/Register';
import Displayresults from './../Works/Displayresults';
import Courses from './../courses/Courses';
import { useSelector, useDispatch } from 'react-redux';
import Course from '../courses/Course';
import { useEffect } from 'react';
import jwt from 'jsonwebtoken';
import { addUser, clearUser } from './../../actions/user';
import Logout from './../Login/Logout';
import Userprofile from './../user-profile/Userprofile';
import LayoutDashboard from './../Dashboard/LayoutDashboard';



const Taskmanagment = () => {

    const courses = useSelector(state=> state.courses);
    const dispatch = useDispatch();
    useEffect(()=>{
        const token = localStorage.getItem("token");
        if(token){
            const decodedToken = jwt.decode(token,{complete:true});
            const datNow = Math.floor(Date.now() / 1000);
            if(decodedToken.payload.exp < datNow){
                localStorage.removeItem("token");
                dispatch(clearUser())
            }else{
                dispatch(addUser(decodedToken.payload.user));
            }
        }  
    },[])

    return ( 
        <Fragment>
            <Switch>
                <Route path="/layoutDashboard" component={LayoutDashboard}/>
                <Route path="/userprofile" component={Userprofile}/>
                <Route path="/register" component={Register}/>
                <Route path="/logout" component={Logout}/>
                <Route path="/course/:id" component={Course}/>
                <Route path="/courses" render={() => <Courses courses={courses}/>}/>
                <Route path="/displayresults" component={Displayresults}/> 
                <Route path="/login" component={Login}/>
                <Route path="/" exact component={MainLayout}/>
            </Switch>
        </Fragment>
     );
}
export default Taskmanagment;