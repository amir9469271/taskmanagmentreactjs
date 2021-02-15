import React, { Fragment, useState } from 'react';
import AnimatedProgressProvider from './../../Utils/CircularProgressbar/AnimatedProgressProvider';
import { easeQuadInOut } from 'd3-ease';
// import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { EmptyListWorks } from '../../actions/emptyListWorks';
import Svgempty2 from './../Common/Svg/Svgempty2';
import Svgemojie2 from './../Common/Svg/Svgemojie2';
import Svgempty3 from './../Common/Svg/Svgempty3';
import { Link } from 'react-router-dom';

const Displayresults = () => {

   const works = useSelector(state => state.works);
   const donotworks =useSelector(state => state.donotworks)
   const doworks =useSelector(state => state.doworks)
   const dispatch = useDispatch();

    const [getDisplayBtn1, setDisplayBtn1] = useState(true)
    const [getDisplayBtn2, setDisplayBtn2] = useState(false)
    const [getDisplayBtn3, setDisplayBtn3] = useState(false)
    const [getDisplayBtn4, setDisplayBtn4] = useState(false)

    const handleDisplayBtn1 = () => {
        setDisplayBtn1(!getDisplayBtn1)
        setDisplayBtn2(false)
        setDisplayBtn3(false)
        setDisplayBtn4(false)
    }
    const handleDisplayBtn2 = () => {
        setDisplayBtn2(!getDisplayBtn2)
        setDisplayBtn3(false)
        setDisplayBtn4(false)
        setDisplayBtn1(false)
    }
    const handleDisplayBtn3 = () => {
        setDisplayBtn3(!getDisplayBtn3)
        setDisplayBtn1(false)
        setDisplayBtn2(false)
        setDisplayBtn4(false)
    }
    const handleDisplayBtn4 = () => {
        setDisplayBtn4(!getDisplayBtn4)
        setDisplayBtn3(false)
        setDisplayBtn1(false)
        setDisplayBtn2(false)
    }
  
    let val =[];
    if(works.length === 0) {
        val=doworks.length
    }
    else{
        val=doworks.length * 100 / works.length
    }

    let val2 =[];
    if(works.length === 0) {
        val2=donotworks.length
    }
    else{
        val2= donotworks.length * 100 / works.length
    }
  
    const styleEmptyworks = {
        color: "#595959",
        position: "relative",
        top: "75px",
        left: "50px",
        textAlign: "center",
        fontSize: "14px",
        fontFamily:"BYekan"  
    }
    return (
        <Fragment>
            <div id="DivparentDisplayresults" >             
               <div style={{position:"relative",top:"50px"}} className="container z-depth-5 displayresultwork">
               <div style={{display:"flex",justifyContent:"center",height:"70px" , backgroundColor: "#4e9dfb", border: "3px solid white", borderRadius: "10px", fontFamily: "BYekan", position: "relative", bottom: "0px" }}>
                   <div >
               <p style={{ fontSize: "20px",bottom:"15px",color:"white" }}>لیست نتایج کارهای امروزتون</p>
                   </div>
               </div>
               </div>
            <div id="DivBtnsNavbar" className="container">
                   <div>
                    <a href="#lklk"  className={getDisplayBtn1 ? "Activelink btn-small z-depth-3" : "Disiblelink btn-small z-depth-3"} id="BtnDisplayresults" onClick={handleDisplayBtn1}>کل کارهای امروز شما  </a>
                    </div>
                    <div>
                    <a href="#ggfh"  className={getDisplayBtn2 ? "Activelink btn-small z-depth-3" : "Disiblelink btn-small z-depth-3"}id="BtnDisplayresults" onClick={handleDisplayBtn2}> کارهای انجام شده</a>
                    </div>
                    <div>
                    <a href="#fgfgf"  className={getDisplayBtn3 ? "Activelink btn-small z-depth-3" : "Disiblelink btn-small z-depth-3"}id="BtnDisplayresults" onClick={handleDisplayBtn3}>کارهای انجام نشده</a>
                    </div>
                    <div>
                    <a  href="#gfgdd" className={getDisplayBtn4 ? "Activelink btn-small z-depth-3" : "Disiblelink btn-small z-depth-3"}id="BtnDisplayresults" onClick={handleDisplayBtn4}>امتیازهای شما</a>
                    </div>
            </div>
                {getDisplayBtn1 ? <div id="Div1btn" className="z-depth-3">
                            <div>
                                 <div id="DivAlertdisplayresults" className="z-depth-1 ">
                                 <p style={{  }}>تعداد کل کارهای امروزتان {" "}:{" "}
                                        <span id="Numberworks">{`${works.length}`}
                                        </span>{" "}
                                        <span> مورد است</span>
                                    </p>
                                 </div>
                            </div>
                            {works.length === 0 ? <div style={{position:"relative",left:"40px"}} id="divnotwork">
                                <Svgempty2/>
                                    <p style={styleEmptyworks}>
                                  <Svgemojie2/>
                                     امروز هیچ کاری وارد نکردی   
                                 </p>
                                </div> : <div className="scroll2" id="scrollbar"style={{backgroundColor:"#BFBFBF",position:"relative",left:"14px"}}>
                                {works.map(wo => (
                                    <ul id="Ullistwo" >
                                        <li>
                                            <Link href="#gfgf" className="waves-effect waves-light btn-small z-depth-1"id="BtnDisplayresults2">
                                            {`${wo.fullnamework}`}
                                            </Link>
                                        </li>
                                    </ul>
                                ))}
                            </div> }
                </div> : null}
                {getDisplayBtn2 ? <div id="Div1btn2" className="z-depth-3">
                    <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                <div style={{width:"400px"}}>
                                 <div id="DivAlertdisplayresults" className="z-depth-1 ">
                                 <p >تعداد کل کارهایی که انجام دادید  {" "}:{" "}
                                        <span id="Numberworks">{`${doworks.length}`}
                                        </span>{" "}
                                        <span> مورد است</span>
                                    </p>
                                 </div>
                            </div>
                            <div>
                        {/* <AnimatedProgressProvider
                                    valueStart={0}
                                    valueEnd={val}
                                    duration={1.4}
                                    easingFunction={easeQuadInOut}
                            
                                >
                                    {value => {
                                        const roundedValue = Math.round(value);
                                        return (
                                            <CircularProgressbar
                                                value={value}
                                                text={`${roundedValue}%`}
                                                styles={buildStyles({ pathTransition: "none" })}
                                            />
                                        );
                                    }}
                                </AnimatedProgressProvider> */}
                        </div>
                        {/* <div style={{ display: "flex", color: "gray", position: "relative", left: "0px", bottom: "75px", fontSize: "16px" }}>
                                    <div>
                                        <p style={{ position: "relative", left: "62px" }}>
                                            <span>درصد کارها انجام شده</span></p>
                                    </div>
                                    <div>
                                        <p>
                                            <span id="Numberworks2">%{Math.round(val)}{" "}</span></p>
                                    </div>
                                </div> */}
                    </div>
                    {doworks.length === 0 ? <div>
                              <Svgempty3/>
                                    <p id="styleEmptyworks2"> 
                                 <Svgemojie2/>
                                     امروز هیچ کاری انجام ندادی   
                                 </p>
                                </div> : <div className="scroll2" id="scrollbar"style={{backgroundColor:"#BFBFBF"}}>
                                {doworks.map(wo => (
                                    <ul id="Ullistwo" >
                                        <li>
                                            <Link href="#fgfkk" className="waves-effect waves-light btn-small z-depth-1"id="BtnDisplayresults2">
                                            {`${wo.fullnamedowork}`}
                                            </Link>
                                        </li>
                                    </ul>
                                ))}
                            </div> }
                </div> : null}
                {getDisplayBtn3 ? <div id="Div1btn2" className="z-depth-3">
                <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                <div style={{width:"400px"}}>
                                 <div id="DivAlertdisplayresults" className="z-depth-1 ">
                                 <p >تعداد کل کارهایی که نتونستید انجام بدید  {" "}:{" "}
                                        <span id="Numberworks">{`${donotworks.length}`}
                                        </span>{" "}
                                        <span> مورد است</span>
                                    </p>
                                 </div>
                            </div>
                            <div>
                        {/* <AnimatedProgressProvider
                                    valueStart={0}
                                    valueEnd={val2}
                                    duration={1.4}
                                    easingFunction={easeQuadInOut}
                                >
                                    {value => {
                                        const roundedValue = Math.round(value);
                                        return (
                                            <CircularProgressbar
                                                value={value}
                                                text={`${roundedValue}%`}
                                                styles={buildStyles({ pathTransition: "none" })}
                                            />
                                        );
                                    }}
                                </AnimatedProgressProvider> */}
                        </div>
                        {/* <div style={{ display: "flex", color: "gray", position: "relative", left: "0px", bottom: "75px", fontSize: "16px" }}>
                                    <div>
                                        <p style={{ position: "relative", left: "62px" }}>
                                            <span>درصد کارها انجام نشده</span></p>
                                    </div>
                                    <div>
                                        <p>
                                            <span id="Numberworks3">%{Math.round(val2)}{" "}</span></p>
                                    </div>
                                </div> */}
                    </div>
                    {donotworks.length === 0 ? <div>
                                 <Svgempty3/>
                                    <p id="styleEmptyworks2">
                                    <Svgemojie2/>
                                     همه کارهاتو انجام دادی آفرین   
                                 </p>
                                </div> : <div className="scroll2" id="scrollbar"style={{backgroundColor:"#BFBFBF"}}>
                                {donotworks.map(wo => (
                                    <ul id="Ullistwo" >
                                        <li>
                                            <Link href="#hggfghf" className="waves-effect waves-light btn-small z-depth-1"id="BtnDisplayresults2">
                                            {`${wo.fullnamedonotwork}`}
                                            </Link>
                                        </li>
                                    </ul>
                                ))}
                            </div> }
                </div> : null}
                {getDisplayBtn4 ? <div id="Div1btn3" className="z-depth-3">
                <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                <div style={{width:"400px"}}>
                                 <div id="DivAlertdisplayresults" className="z-depth-1 ">
                                 <p >تعداد کل کارهایی که انجام ندادید  {" "}:{" "}
                                        <span id="Numberworks">{`${donotworks.length}`}
                                        </span>{" "}
                                        <span> مورد است</span>
                                    </p>
                                 </div>
                            </div>
                            <div id="AnimatedProgressProvider">
                        {/* <AnimatedProgressProvider
                                    valueStart={0}
                                    valueEnd={val2}
                                    duration={1.4}
                                    easingFunction={easeQuadInOut}
                                >
                                    {value => {
                                        const roundedValue = Math.round(value);
                                        return (
                                            <CircularProgressbar
                                                value={value}
                                                text={`${roundedValue}%`}
                                                styles={buildStyles({ pathTransition: "none" })}
                                            />
                                        );
                                    }}
                                </AnimatedProgressProvider> */}
                        </div>
                        {/* <div style={{ display: "flex", color: "gray", position: "relative", left: "0px", bottom: "75px", fontSize: "16px" }}>
                                    <div>
                                        <p style={{ position: "relative", left: "62px" }}>
                                            <span>درصد کارها انجام نشده</span></p>
                                    </div>
                                    <div>
                                        <p>
                                            <span id="Numberworks3">%{Math.round(val2)}{" "}</span></p>
                                    </div>
                                </div> */}
                    </div>
                <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                <div style={{width:"400px"}}>
                                 <div id="DivAlertdisplayresults" className="z-depth-1 ">
                                 <p >تعداد کل کارهایی که انجام دادید  {" "}:{" "}
                                        <span id="Numberworks">{`${doworks.length}`}
                                        </span>{" "}
                                        <span> مورد است</span>
                                    </p>
                                 </div>
                            </div>
                            <div id="AnimatedProgressProvider">
                        {/* <AnimatedProgressProvider
                                    valueStart={0}
                                    valueEnd={val}
                                    duration={1.4}
                                    easingFunction={easeQuadInOut}
                                >
                                    {value => {
                                        const roundedValue = Math.round(value);
                                        return (
                                            <CircularProgressbar
                                                value={value}
                                                text={`${roundedValue}%`}
                                                styles={buildStyles({ pathTransition: "none" })}
                                            />
                                        );
                                    }}
                                </AnimatedProgressProvider> */}
                        </div>
                        {/* <div style={{ display: "flex", color: "gray", position: "relative", left: "0px", bottom: "75px", fontSize: "16px" }}>
                                    <div>
                                        <p style={{ position: "relative", left: "62px" }}>
                                            <span>درصد کارها انجام شده</span></p>
                                    </div>
                                    <div>
                                        <p>
                                            <span id="Numberworks2">%{Math.round(val)}{" "}</span></p>
                                    </div>
                                </div> */}
                    </div>
                </div> : null}
                <div style={{position:"relative",top:"110px"}}>
                <NavLink to="/" class="waves-effect waves-light btn-small z-depth-3"
                id="BtnDisplayresults3"
                 onClick={()=>dispatch(EmptyListWorks())}
                 >ساخت لیست جدید</NavLink>
                </div>
             </div>
        </Fragment>
    );
}
export default Displayresults;