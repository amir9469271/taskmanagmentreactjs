import React , { Fragment, useState, useContext } from 'react';
import { useSelector } from 'react-redux';
import { range } from 'lodash';
import { pagination } from './../../../Utils/pagination';
import { NavLink, Link } from 'react-router-dom';
import  Context  from './Context';


const Dashboard = () => {

    const context = useContext(Context);
    const {classblur4,handleModalCreateNewCourse,handleModalUpdateCourse,handleModalDeleteCourse,dispslidenav} = context;
    const courses = useSelector(state => state.courses);
    const [perPage] = useState(5);
    const [currentPage , setcurrentPage] = useState(1);
    const [search , setSearch] = useState("");

    const flitredcourses = courses.filter(course=>course.title.includes(search));
    const counterPage = Math.ceil(flitredcourses.length / perPage);
    const pages = range(1,counterPage + 1);
    const handlePage = (page)=>{
        setcurrentPage(page)
    }
    const numberPage = pagination (flitredcourses, currentPage , perPage);
   
    
    return (
        <Fragment>
            <div className={classblur4 ? "backgroundBlur" : null} >
            <div style={{ position: "relative", marginTop: "60px",zIndex:"0" }}  >
                <div id="divparentdashboard" style={{ position: "relative", marginBottom: "0px" }}>
                    <div className="row">
                        <form onSubmit={(event) => event.preventDefault()}  id="Inputsearchdashbpard">
                          <input onChange={(event)=>setSearch(event.target.value)}
                          placeholder="جستجوی دوره ها ..." type="text" />
                        </form>
                    </div>
                     <div>
                     <NavLink  to="/LayoutDashboard" style={{position:"relative",}} onClick={handleModalCreateNewCourse} className=" waves-effect " >
                     <span><i class="tick material-icons">add_circle</i>  ساخت دوره جدید</span></NavLink>
                     </div>
                </div>
            </div>
            <div id="Divtable">
                <div >
                    <table >
                        <thead>
                            <tr id="td1" >
                                <th>  عنوان دوره 
                                   
                                    </th>
                                <th>تصویر </th>
                                <th>قیمت  <span id="spanprice">(تومان)</span></th>
                                <th>ویرایش</th>
                                <th>حذف </th>
                            </tr>
                        </thead>
                        {numberPage.map(course => (
                            <tbody>
                                <tr id="trTable">
                                    <td>{course.title}</td>
                                    <td><a href={`https://toplearnapi.ghorbany.dev/${course.imageUrl}`} target="_blank" className="btn waves-effect z-depth-3">نمایش  تصویر</a></td>
                        <td>{course.price === 0 ? "رایگان" : course.price }</td>
                                    <td><NavLink to="/LayoutDashboard" onClick={()=>handleModalUpdateCourse(course)} className="btn waves-effect z-depth-3">ویرایش دوره</NavLink></td>
                                    <td><NavLink to="/LayoutDashboard" onClick={()=>handleModalDeleteCourse(course)} className="btn waves-effect z-depth-3">حذف دوره</NavLink></td>
                                </tr>
                            </tbody>
                        ))}
                    </table>
                </div>
            </div>

         {courses.length === 0 || dispslidenav ?  null : (   <div  id="paginariondashboard">
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
                </div>)}

            </div>
              
        </Fragment>
    );
}

export default Dashboard;




