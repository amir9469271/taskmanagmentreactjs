import React, { Fragment, useContext } from 'react';
import { useSelector } from 'react-redux';
import emptyImg from "./emptyImg.jpg";
import  Context  from './common/Context';


const Coursesdashboard = () => {

    const context = useContext(Context);
    const {classblur5} = context;
    const courses = useSelector(state => state.courses);
    return ( 
        <Fragment>
          <div 
          className={classblur5 ? "backgroundBlur" : null}
          >
          <div id="Divcoursesdashboard">
                   <div className="z-depth-3 container"> <h6>تعداد دوره ها <span className="z-depth-1">{courses.length}</span> مورد می باشد</h6></div>
                    {courses.length === 0 ?
                     (<div className="z-depth-0"><h5>هیچ دوره ای برای نمایش یافت نشد</h5>
                     <img src={emptyImg} alt=""/></div>) : null}
                </div>
             {courses.length === 0 ? null : (   <div id="DivMainCoursedashboard" className="scrolldashboard">
                {courses.map(course=>(
                      <div className="z-depth-3 ">
                         <div className="z-depth-5" id="titlecourse">{course.title}</div>
                         <div><p className="statusecourse"> وضعیت دوره  : <span> به اتمام رسیده </span></p></div>
                         <div><p className="timecourse">زمان دوره : <span>22 : 26 دقیقه</span></p></div>
                      </div>
                  ))}
                </div>)}
          </div>
        </Fragment>
     );
}
export default Coursesdashboard;