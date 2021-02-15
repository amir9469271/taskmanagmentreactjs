
import { getCourse } from './../Services/coursesService';

export const getSinglecourse = (courseId)=>{
    return async dispatch =>{
        const {data} = await getCourse(courseId)
        await dispatch({type:"GET_COURSE" , payload: data.course})
    }
}