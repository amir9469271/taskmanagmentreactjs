import { getCourses, newCourse, updateCourse, deleteCourse } from './../Services/coursesService';
import { toast } from 'react-toastify';



export const getAllcourses = () =>{
    return async dispatch =>{
        const {data} = await getCourses();
        await dispatch({type:"GET_COURSES" , payload:data.courses})
    }
}

export const createNewCourse = (course) => {
    return async (dispatch, getState) => {
        const { data, status } = await newCourse(course);
        if (status === 201) {
            toast.success("دوره ساخته شد",{
                position:"top-right"
            })
        }
        await dispatch({
            type: "ADD_COURSE",
            payload: [...getState().courses, data.course],
        });
    };
};

export const handleCourseUpdate = (courseId , updatedCourse)=>{
    return async (dispatch,getState)=>{
        const courses = [...getState().courses]
        const filtredCourses = courses.filter(course => course._id !== courseId)
        try{
            const {data, status} = await updateCourse(courseId, updatedCourse)
            await dispatch({type:"UPDATE_COURSE" , payload:[...filtredCourses , data.course]})
            if(status === 200){
               toast.success("دوره با موفقیت ویرایش شد",
               {position:"top-right",closeOnClick:true})
        }
    }catch(ex){
        await dispatch({type:"UPDATE_COURSE" ,  payload:[...courses]})
        }
    }
}

export const handleDeleteeCourse = (courseId)=>{
    return async(dispatch,getState)=>{
        const courses = [...getState().courses]
        const filtercourse = courses.filter(course => course._id !== courseId)

        try {
            await dispatch({type:"DELETE_COURSE" , payload: [...filtercourse]})
            const {status} =await deleteCourse(courseId)
            if(status === 200) {
             toast.success("دوره حذف شد")
            }
        } catch (ex) {
            await dispatch({type:"DELETE_COURSE" , payload:[...courses]})
        } 
    }
}

