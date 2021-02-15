import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import SlideNav from './SlideNav';
import { useDispatch, useSelector } from 'react-redux';
import { EmptyListWorks } from '../../actions/emptyListWorks';
import Svglogin from './Svg/Svglogin';
import Svgregister from './Svg/Svgregister';
import { isEmpty } from 'lodash';
import Svguserprofile from './Svg/Svguser-profile';
import Svgexitprofile from './Svg/Svgexitprofile';


const Nav = ({setBlur}) => {

    const dispatch = useDispatch();
    const user = useSelector(state=>state.user)

    return (
        <Fragment>
            <div id="nav">
                <div id="btnnav" style={{ display: "flex", justifyContent: "flex-end", width: "300px", alignItems: "flex-end" }}>
                    <div><SlideNav setBlur={setBlur} /> </div>
                </div>
                <div style={{ display: "flex", justifyContent: "center", width: "300px", alignItems: "center" }} id="Divtaskmanahment">
                    <div id="Divtaskmanahment2">
                        <a href="#dfdffd"><h5 id="Logo">Task<span id="Logo2">Managment</span></h5></a>
                    </div>
                </div>
                <div style={{ display: "flex", justifyContent: "center", width: "300px", alignItems: "center" }} id="DivBtsnav2" >
                  {isEmpty(user) ? (
                        <div id="DivBtsnav">
                        <NavLink to="/login"
                            onClick={() => dispatch(EmptyListWorks())}
                            className="btn waves-effect z-depth-3" id="Btnlogin">
                            <Svglogin />
                       ورود</NavLink>
                        <NavLink to="/register"
                            onClick={() => dispatch(EmptyListWorks())}
                            className="btn  waves-effect z-depth-3" id="Btnlogin2">
                            <Svgregister />
                ثبت نام</NavLink>
                    </div>
                  ) : (
                    <div id="DivBtsnav">
                    <NavLink to="/logout"
                        onClick={() => dispatch(EmptyListWorks())}
                        className="btn  waves-effect z-depth-3" id="Btnlogin2"style={{backgroundColor:"#04ac04"}}>
                    <Svgexitprofile/>
            خروج</NavLink>
                    <NavLink to="/userprofile"
                        onClick={() => dispatch(EmptyListWorks())}
                        className="btn waves-effect z-depth-3" id="Btnlogin"style={{backgroundColor:"#04ac04"}}>
                        <Svguserprofile/>
                  {user.fullname}</NavLink>
            
                </div>
                  )}
                </div>
            </div>
        </Fragment>
    );
}
export default Nav;