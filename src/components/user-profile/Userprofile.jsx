import React, { Fragment } from 'react';
import img2 from "./img2.jpg";
import { useSelector, useDispatch } from 'react-redux';
import { NavLink,Redirect } from 'react-router-dom';
import Svgregister from './../Common/Svg/Svgregister';
import Svgexitprofile from './../Common/Svg/Svgexitprofile';
import { clearUser } from '../../actions/user';
import { isEmpty } from 'lodash';


const Userprofile = () => {
    const user = useSelector(state=>state.user);
    const dispatch = useDispatch();
    // if(!isEmpty(user)) return <Redirect to="/userprofile"/>; 
    if(isEmpty(user)) return <Redirect to="/"/>; 
   
    return ( 
        <Fragment>
            <div id="DivMainUserprofile" >
                <div className="z-depth-5">
                    <div>
                        <img src={img2} alt="" style={{width:"100%"}}/>
                        <h6 style={{textAlign:"center"}}>{user.fullname}  خوش آمدید</h6>
                        <p style={{textAlign:"center"}}>{user.fullname}  خوش آمدید</p>
                        <div className="divBtnexitanddashboard">              
                  <div>
                  <NavLink to="/logout"
                        onClick={()=>dispatch(clearUser())}
                            className="btn waves-effect z-depth-3" id="Btnlogin"style={{backgroundColor:"#04ac04",direction:"ltr"}}>
                           <Svgexitprofile/>
                       خروج</NavLink>
                  {user.isAdmin ? (
                            <NavLink to="/layoutDashboard"
                            
                            className="btn  waves-effect z-depth-3" id="Btnlogin2"style={{backgroundColor:"#04ac04",direction:"ltr"}}>
                            <Svgregister />
                داشبورد</NavLink>
                  ) : null}
                  </div>
                </div>
                    </div>
                    <div>
                       <div>
                        <h5>اطلاعات کاربر</h5>
                        <hr className="hruserProfile"/>
                  <p>نام کاربری  : <span style={{color:"green"}}>{user.fullname}</span></p>
                  <p>ایمیل کاریر : <span style={{color:"green"}}>{user.email}</span></p>
                        <p>تاریخ ورود : </p>
                  <p>وضعیت کاربر : {user.isAdmin ? (<span style={{color:"green"}}>ادمین</span>) : (<span style={{color:"green"}}>معمولی</span>) }</p>
                        <p>شهر : </p>
                        <p>استان : </p>
                       </div>
                    </div>
           
                </div>
            </div>
        </Fragment>
     );
}
 
export default Userprofile;