import React, { Fragment, useState } from 'react';
import { Link, NavLink, Redirect } from "react-router-dom";
import { pagination } from './../../Utils/pagination';
import { range } from 'lodash';
import MyImage from './Showimage';
import ClipLoader from "react-spinners/ClipLoader";



const Courses = ({courses}) => {


    const [perPage] = useState(7);
    const [currentPage , setcurrentPage] = useState(1);
    const [render] = useState(true)
    
    const handlePage = (page)=>{
        setcurrentPage(page);
        
    }
    const coursesLength = pagination(courses , currentPage , perPage);
    const conterPage = Math.ceil(courses.length / perPage);
    const pages = range(1, conterPage + 1);

 
    return (
    
        <Fragment>
            <div className="container  containerCourses">
                    <h5 style={{textAlign:"center"}}>دوره های آموزش برنامه نویسی وب</h5>
            </div>
            <div className="connumbercourses ">
                <div className="z-depth-1">
                    <p style={{ textAlign: "center", color: "black", fontSize: "17px" }}>   تعداد دوره ها : <span >{courses.length} </span></p>
                </div>
            </div>
            
            <div className="contcourses">
                <div className="z-depth-1">
                    {coursesLength.map(course => (
                        <div className="z-depth-1">
                            <Link   to={`/course/${course._id}`} >
                              {render ? (
                                  <div>
                                      {/* <img src={`https://toplearnapi.ghorbany.dev/${course.imageUrl}`} alt="" style={{width:"350px",height:"220px"}}/> */}
                                      <MyImage  image={course.imageUrl}/>
                                      {courses.length === 0 ? (<div id="spiner"><ClipLoader size={35}loading={true} id="spiner" /></div>): null}
                                  </div>
                  ) : null}
                            </Link>
                <h6 ><NavLink to={`/course/${course._id}`}>{course.title}</NavLink></h6>
                            <p style={{ textAlign: "center", color: "black", fontSize: "15px" }}>
                                قیمت : {course.price === 0 ? (
                                    <span style={{ color: "green" }}>رایگان</span> 
                                    ):(
                                    <span style={{ color: "green" }}>{course.price} 
                                    <span style={{fontSize:"12px"}}> تومان</span>  </span>
                                )} 
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <div id="paginarion">
                    <ul className="pagination">
                        <li className={currentPage === 1 ? "disabled" : "waves-effect"}><a href="#!" style={{fontSize:"13px"}}>صغحه قبل</a></li>
                        {pages.map(page=>(
                           <Fragment>
                                <li className={page === currentPage ? "active waves-effect" : "waves-effect"}>
                                <Link onClick={()=>handlePage(page)}>
                                    {page}
                                    </Link>
                                </li>
                           </Fragment>
                        ))}
                        <li className={currentPage >= 3 ? "disabled" : "waves-effect"}><a style={{fontSize:"13px"}}>صفحه بعد</a></li>
                    </ul>
                </div>
        </Fragment>
    );
}

export default Courses;