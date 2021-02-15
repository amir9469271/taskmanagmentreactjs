import React, { Fragment,useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getSinglecourse } from './../../actions/course';



const Course = ({match}) => {

    const course = useSelector(state=>state.course);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getSinglecourse(match.params.id))
    },[])

    return ( 
        <Fragment>
            <div className="DivSinglecourse ">
             <div className="z-depth-2">
             <div>
                    <img src={`https://toplearnapi.ghorbany.dev/${course.imageUrl}`} style={{width:"100%",height:"400px"}} alt=""/>
                </div>
                <div>
                   <h6 style={{fontWeight:"bold"}}>{course.title}</h6>
                </div>
                <div>
                    <p>{course.info}</p>
                </div>
             </div>
            </div>
        </Fragment>
     );
}
export default Course;