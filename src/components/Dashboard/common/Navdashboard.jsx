import React, { Fragment, useContext } from 'react';
import Svgarrowdown from './../../Common/Svg/Svgarrowdown';
import SvgUser from './../../Common/Svg/SvgUser';
import SvgUserLogin from './../../Common/Svg/SvgUserLogin';
import SvgUserExit from './../../Common/Svg/SvgUserExit';
import  Context  from './Context';
import { Link } from 'react-router-dom';



const Navdashboard = () => {

    const context = useContext(Context);
    const {dropdown,handledisplayslidenav,handleDropdown} = context;
    
    return ( 
        <Fragment>
                    <nav id="navDashboard" className="">
                <div className="nav-wrapper">
                <i className="large material-icons" onClick={handledisplayslidenav}>menu</i>
              <p href="#!" className="right brand-logo"> داشبورد  </p>
                    <ul className="left hide-on-med-and-down" style={{display:"inline"}} >
                     <div id="DivMainBtnDropdown">
                         <div id="DivBtnDropdown">
                         <a onClick={handleDropdown}
                            className="" id="Btnlogindashboared">
                            <Svgarrowdown />
                  پروفایل</a>
                         </div>
                     </div>
                    </ul>
                </div>
            </nav>
            {dropdown ? (
                <div className="dropdown12 z-depth-1 animate__animated animate__flipInX "  >
                    <ul>
                        <li><SvgUser /><Link className="waves-effect" to="/userprofile">امیرحیدری</Link></li>
                        <hr />
                        <li><SvgUserLogin /><Link className="waves-effect" to="/userprofile">ورود</Link></li>
                        <hr />
                        <li><SvgUserExit /><Link className="waves-effect" to="/logout">خروج</Link></li>
                    </ul>
                </div>
            ) : null}
        </Fragment>
     );
}
 
export default Navdashboard;