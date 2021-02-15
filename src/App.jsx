import React, { Fragment, useEffect } from 'react';
import { BrowserRouter } from "react-router-dom";
import Taskmanagment from './components/container/Taskmanagment';
import { ToastContainer } from 'react-toastify';
import { Helmet } from 'react-helmet';
// import { SlideDown } from 'react-slidedown';
import WellcomeToapp from './components/Common/WellcomeToapp';
import { useSelector, useDispatch } from 'react-redux';
import {  setshowcomponentwellcom } from './actions/showcomponentwellcome';
import { setshowtaskmanagment } from './actions/showtaskmanagment';

const App = () => {

    const showcomponentwell = useSelector(state => state.showcomponentwell);
    const showtaskmanagment = useSelector(state => state.showtaskmanagment);
    const dispatch = useDispatch();

    useEffect(() => {
        setTimeout(() => {
            dispatch(setshowcomponentwellcom())
        }, 4000);
        setTimeout(() => {
            dispatch(setshowtaskmanagment())
        },5500)
    }, [])
    
    return (
        <Fragment>
                      <Helmet>
                    <title>TaskManagment</title>
                </Helmet>
                <BrowserRouter>
                    <ToastContainer />
                    {/* <SlideDown> */}
                        {showcomponentwell ? <WellcomeToapp /> : null}
                    {/* </SlideDown> */}
                    {showtaskmanagment ? <Taskmanagment /> : null}
                </BrowserRouter>
            </Fragment>
    );
}
export default App;