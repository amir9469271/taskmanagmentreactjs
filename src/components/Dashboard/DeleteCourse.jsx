import React, { Fragment, useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { handleDeleteeCourse } from '../../actions/courses';
import  Context  from './common/Context';

const DeleteCourse = ({setBlur3,course}) => {

    const context = useContext(Context);
    const {classblur3,handleclozemodal} = context;
    const dispatch = useDispatch();
  

    return (
        <Fragment>
            {classblur3 ? (<div className="Modalbody animate__animated animate__flipInY ">
                <div className="Modal z-depth-3 ">
                    <div id="dovmodalcontent" >
                        <div>
                            <h5 className="z-depth-1">{course.title}</h5>
                            <h6>آیا مطمعنی میخوای  این دوره رو حذف کنی؟</h6>
                        </div>
                        <div id="Btnmoal">
                            <button onClick={handleclozemodal} className="btn waves-effect z-depth-3">بستن</button>
                            <button onClick={() => dispatch(handleDeleteeCourse(course._id)) && setBlur3(false)
                            } className="btn waves-effect z-depth-3">حذف دوره</button>
                        </div>
                    </div>
                </div>
            </div>) : null}
        </Fragment>
    );
}
export default DeleteCourse;