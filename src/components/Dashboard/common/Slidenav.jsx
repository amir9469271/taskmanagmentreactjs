import React, { Fragment, useState, useContext } from 'react';
import marc from "./marc.jpg"
import { NavLink } from 'react-router-dom';
import Context from './Context';
import { useSelector } from 'react-redux';


const Slidenav = ({ setdisplaydashboard, setDisplaycourse, setBlur5, setBlur4 }) => {

    const context = useContext(Context);
    const { dispslidenav } = context;
    const user = useSelector(state=>state.user);

    const [activeBtn1, setActiveBtn1] = useState(false);
    const [activeBtn2, setActiveBtn2] = useState(false);
    const [activeBtn3, setActiveBtn3] = useState(false);
    const [activeBtn4, setActiveBtn4] = useState(false);
    const [activeBtn5, setActiveBtn5] = useState(false);
    const [activeBtn6, setActiveBtn6] = useState(false);


    const handleActivLink1 = () => {
        setActiveBtn1(true)
        setActiveBtn2(false)
        setActiveBtn3(false)
        setActiveBtn4(false)
        setActiveBtn5(false)
        setActiveBtn6(false)
        setdisplaydashboard(true)
        setDisplaycourse(false)
        setBlur4(false)
    }
    const handleActivLink2 = () => {
        setActiveBtn1(false)
        setActiveBtn2(true)
        setActiveBtn3(false)
        setActiveBtn4(false)
        setActiveBtn5(false)
        setActiveBtn6(false)
        setdisplaydashboard(false)
        setDisplaycourse(true)
        setBlur5(false)
    }
    const handleActivLink3 = () => {
        setActiveBtn3(true)
        setActiveBtn2(false)
        setActiveBtn1(false)
        setActiveBtn4(false)
        setActiveBtn5(false)
        setActiveBtn6(false)
    }
    const handleActivLink4 = () => {
        setActiveBtn3(false)
        setActiveBtn2(false)
        setActiveBtn1(false)
        setActiveBtn4(true)
        setActiveBtn5(false)
        setActiveBtn6(false)
    }
    const handleActivLink5 = () => {
        setActiveBtn3(false)
        setActiveBtn2(false)
        setActiveBtn1(false)
        setActiveBtn4(false)
        setActiveBtn5(true)
        setActiveBtn6(false)
    }
    const handleActivLink6 = () => {
        setActiveBtn3(false)
        setActiveBtn2(false)
        setActiveBtn1(false)
        setActiveBtn4(false)
        setActiveBtn5(false)
        setActiveBtn6(true)
    }
    return (
        <Fragment>
            <div className="layoutdashboard ">
                <div className={dispslidenav ? "z-depth-3 displayslidenav" : "z-depth-3 slidenavdashboard"} >
                    <div id="slidenavdashboard2">
                        <div>
                            <img src={marc} alt="" />
                        </div>
                        <div >
                            <p style={{color:"white"}}>{user.fullname}</p>
                            <p>ادمین</p>
                        </div>
                    </div>
                    <div id="ulnavdashboard">
                        <ul >
                            <a onClick={handleActivLink1} className={activeBtn1 ? "waves-effect waves-light bgActive" : "waves-effect waves-light bgdisibled"} > داشبورد <i className="small material-icons">dashboard</i></a>
                            <a onClick={handleActivLink2} className={activeBtn2 ? "waves-effect waves-light bgActive" : "waves-effect waves-light bgdisibled"} > نمایش دوره ها<i className="small material-icons">book</i></a>
                            <a onClick={handleActivLink3} className={activeBtn3 ? "waves-effect waves-light bgActive" : "waves-effect waves-light bgdisibled"} >پروفایل <i className="small material-icons">account_box</i></a>
                            <a onClick={handleActivLink4} className={activeBtn4 ? "waves-effect waves-light bgActive" : "waves-effect waves-light bgdisibled"} > دور های  حدف شده <i className="small material-icons">delete_forever</i></a>
                            <a onClick={handleActivLink5} className={activeBtn5 ? "waves-effect waves-light bgActive" : "waves-effect waves-light bgdisibled"} >درباره ما <i className="small material-icons">help</i></a>
                            <NavLink to="/logout" onClick={handleActivLink6} className={activeBtn6 ? "waves-effect waves-light bgActive" : "waves-effect waves-light bgdisibled"} >خروج <i className="small material-icons">exit_to_app</i></NavLink>
                        </ul>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Slidenav;