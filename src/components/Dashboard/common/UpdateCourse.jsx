import React, { Fragment, useState  ,useEffect,useContext } from 'react';
import { useDispatch } from 'react-redux';
import { handleCourseUpdate } from './../../../actions/courses';
import  Context  from './Context';

const UpdateCourse = ({setBlur2,course}) => { 

    const context = useContext(Context);
    const {classblur2,handleclozemodal} = context;
    const [courseId, setCourseId] = useState();
    const [title, setTitle] = useState();
    const [price, setPrice] = useState();
    const [imageUrl, setImageUrl] = useState();
    const [info, setInfo] = useState();
    const dispatch = useDispatch();
    
   
        
    useEffect(()=>{
        setCourseId(course._id)
        setTitle(course.title)
        setPrice(course.price)
        setImageUrl(course.imageUrl)
        setInfo(course.info)
        return()=>{
            setCourseId()
            setTitle()
            setPrice()
            setImageUrl()
            setInfo()
        }
    },[course])
     
    const handleSubmit = (event) => {
        event.preventDefault();
            let data = new FormData();
            data.append("title" , title);
            data.append("price" , price);
            data.append("info" , info);
            if(event.target.imageUrl.files[0]){
                data.append("imageUrl" ,event.target.imageUrl.files[0])
            }else data.append("imageUrl", imageUrl);
            dispatch(handleCourseUpdate(courseId,data));
            setBlur2(false);
            console.log();
    };

    return (
        <Fragment>
                   {classblur2 ? ( <div className="Modalbody animate__animated animate__flipInY ">
                        <div className="Modal z-depth-3 ">
                                <form className="col s12 " onSubmit={handleSubmit}>
                                        <div id="dovmodalcontent" >
                                        <div className="input-field col s6">
                                            <i className="material-icons prefix">monetization_on</i>
                                            <input id="icon_telephone" type="text" placeholder="قیمت دوره"
                                            value={price} name="price" onChange={(event)=>setPrice(event.target.value)} />
                                        </div>
                                        <div className="input-field col s6">
                                            <i className="material-icons prefix">edit</i>
                                            <input id="icon_prefix" type="text" placeholder="نام دوره"
                                            value={title} name="title" onChange={(event)=>setTitle(event.target.value)} />
                                        </div>
                                  
                                    <div className="file-field input-field divinputfile" >
                                        <div className="file-path-wrapper inputtextfile">
                                            <input className="file-path validate" type="text" placeholder="عکس را اتخاب کنید" />
                                        </div>
                                            <i  className="large material-icons prefix">insert_photo</i>
                                            <input type="file" multiple name="imageUrl" aria-describedby="imageUrl"/>
                                    </div>
                                    <div className="input-field col s12 scroolltextarea">
                                        <textarea id="textarea2" className="materialize-textarea" placeholder="درباره دوره"
                                        value={info} name="info" onChange={(event)=>setInfo(event.target.value)}></textarea>
                                    </div>
                                        <div id="Btnmoal">
                                        <button onClick={handleclozemodal} className="btn waves-effect z-depth-3">بستن</button>
                                        <button type="submit" className="btn waves-effect z-depth-3">ویرایش دوره</button>
                                        </div>
                                        </div>
                                </form>
                        </div>
                    </div>): null}
        </Fragment>
    );
}
export default UpdateCourse;