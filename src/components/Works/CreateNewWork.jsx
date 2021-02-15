import React, { Fragment } from 'react';
import Works from './Works';
import DoWorks from './DoWorks';
import Donotworks from './Donotworks';
import Alert from '@material-ui/lab/Alert';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Handleaddwork } from './../../actions/Handleaddwork';
import { EmptyListWorks } from '../../actions/emptyListWorks';
import { Handlecreatenewwork } from './../../actions/Handlecreatenewwork';
import Svgplus from './../Common/Svg/Svgplus';
import Svgemptyworks from './../Common/Svg/Svgemptyworks';

const CreateNewWork = () => {
  
   const work = useSelector(state => state.work);
   const works = useSelector(state => state.works);
   const donotwork =useSelector(state => state.donotwork)
   const donotworks =useSelector(state => state.donotworks)
   const doworks =useSelector(state => state.doworks)
   const dispatch = useDispatch();

    const styleEmptyworks = {
        color: "#BFBFBF",
        position: "relative",
        top: "75px",
        left: "0px",
        textAlign: "center",
        fontSize: "14px"
    }
    return (
        <Fragment>
            <div>
            <div id="DivParentInputCreatework" style={{position:"relative",marginBottom:"10px"}}>
                <div className="row">
                    <form className="" onSubmit={(event) => event.preventDefault()}>
                        <div className="row">
                            <div className="col s12  z-depth-3" id="divinputCreateNewWork">
                            <input  onChange={(event)=>dispatch(Handleaddwork(event))} value={work}
                               
                                  placeholder="چه کاری میخوای انجام بدی؟" type="text" />
                                 <button type="submit" onClick={()=>dispatch(Handlecreatenewwork(work,donotwork))} className="btn-floating btn-large waves-effect waves-light z-depth-3 1#2196f3 ">
                                  <Svgplus/>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <div>
                    <a href="" id="AlertNumberwork">
                        <Alert variant="filled" icon={false} id="Alert">
                            تعداد کارهای وارد شده : <span style={{ fontSize: "18px", color: "gray", fontWeight: "bold" }}>{works.length} </span> مورد است
                </Alert>
                    </a>
                </div>
            </div>
                 <div id="div111">
                    <div>
                        <div className="z-depth-3 scroll" id="scrollbar">
                            {donotworks.length !== 0 ?
                                <div className="dWorks">
                                    <h6 className="black-text H6" >لیست کاراهای انجام نشده</h6>
                                    <Donotworks />
                                </div>
                                :
                                <div>
                                  <Svgemptyworks/>
                                    <p style={styleEmptyworks}>
                                  {/* <Svgemojie/> */}
                                    هیچ کارانجام نشده ای نداری
                                 </p>
                                </div>
                            }
                        </div>
                    </div>
                    <div>
                        <div className="z-depth-3 scroll" id="scrollbar">
                            {doworks.length !== 0 ?
                                <div className="dWorks">
                                    <h6 className="black-text H6" >لیست کاراهای انجام شده</h6>
                                    <DoWorks />
                                </div>
                                :
                                <div>
                                 <Svgemptyworks/>
                                    <p style={styleEmptyworks}>
                                   {/* <Svgemojie2/> */}
                                    هیچ کاری انجام نداده ای
                                 </p>
                                </div>
                            }
                        </div>
                    </div>
                    <div>
                        <div className="z-depth-3 white-text scroll" id="scrollbar">
                            {works.length !== 0 ?
                            
                                <div className="dWorks">
                                    <h6 className="black-text H6" >لیست کاراهای امروزتان</h6>
                                    <Works />
                                </div>
                                :
                                <div>
                                   <Svgemptyworks/>
                                    <p style={styleEmptyworks}>
                                    {/* <Svgemojie/> */}
                                        هیچ کاری یافت نشد</p>
                                </div>
                            }
                        </div>
                    </div>
                </div>
                <div id="DivBtnResult">
                    <div>
                        <NavLink to="/displayresults" id="BtnWork" 
                         className="btn waves-effect waves-light  z-depth-3" >
                             مشاهده نتایج </NavLink>
                    </div>
                </div>
            </div>
        </Fragment >
    );
}

export default CreateNewWork;