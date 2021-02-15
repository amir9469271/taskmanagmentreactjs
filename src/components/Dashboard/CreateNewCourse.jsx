import React, { Fragment, useState,useContext } from 'react';
import { useDispatch } from 'react-redux';
import { createNewCourse } from '../../actions/courses';
import  Context  from './common/Context';

const CreateNewCourse = ({setBlur1}) => { 
   
    const context = useContext(Context);
    const {classblur1} = context;
    const [title, setTitle] = useState();
    const [price, setPrice] = useState();
    const [info, setInfo] = useState();
    const dispatch = useDispatch();

    const handleclozemodal = () => {
         setBlur1(false)
         setTitle("")
         setPrice("")
         setInfo("")
         };
   
    const handleSubmit = (event) => {
        event.preventDefault();
        try {
            let data = new FormData();
            data.append("title", title);
            data.append("price", Number.parseInt(price));
            data.append("imageUrl", event.target.imageUrl.files[0]);
            data.append("info", info);
            dispatch(createNewCourse(data));
           setTimeout(() => {
            setBlur1(false)
           }, 1000);
        } catch (ex){console.log(ex)}; 
    };

    return (
        <Fragment>
                   {classblur1 ? ( <div className="Modalbody animate__animated animate__flipInY ">
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
                                        <button type="submit" className="btn waves-effect z-depth-3">ثبت دوره</button>
                                        </div>
                                        </div>
                                </form>
                        </div>
                    </div>): null}
        </Fragment>
    );
}
export default CreateNewCourse;