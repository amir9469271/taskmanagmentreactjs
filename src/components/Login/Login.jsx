import React, { Fragment,useState,useRef } from 'react';
import { toast } from 'react-toastify';
import {loginUser} from "../../Services/userservice";
import SimpleReactValidator from 'simple-react-validator';
import { NavLink, Redirect } from 'react-router-dom';
import  Button  from '@material-ui/core/Button';
import { Sugar } from 'react-preloaders';
import { Helmet } from 'react-helmet';
import Svglogin3 from './../Common/Svg/Svglogin3';
import { addUser } from './../../actions/user';
import  jwt  from 'jsonwebtoken';
import { useDispatch, useSelector } from 'react-redux';
import { isEmpty } from 'lodash';
import { Toast } from 'react-toast-component';


const Login = ({history}) => {

    const dispatch = useDispatch();
    const user = useSelector(state=>state.user)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [,forceUpdate] = useState();
    const [preloaders , setpreloaders] = useState(false);
    const [isOpen, setToast] = useState(true);

    const validator = useRef(new SimpleReactValidator({
        messages: {
            required: "پر کردن این فیلد الزامی می  باشد",
            email: "ایمیل وارد شده صحیح نمی باشد",
            min: " باید حداقل 6 حرف باشد",
        },
        element: message => <div id="Tooltip"><div>{message}</div></div>,
    }));
    
    const handleSubmit = async (event) =>{
        event.preventDefault();
        let Datauser ={};
        if(!isEmpty(user)) {
            Datauser = {email:user.email , password:user.password};
        }
        else{ Datauser = {email , password}}
        try {
           if(validator.current.allValid()){
            //    setpreloaders(true)
               const {status , data} = await loginUser(Datauser);
               if(status === 200){
                // toast.info("ورود انجام شد",{
                //     position:"top-right",
                //     closeOnClick:true
                // })
             
                localStorage.setItem("token" , data.token);
                const decodedToken = jwt.decode(data.token,{complete:true});
                dispatch(addUser(decodedToken.payload.user))
                history.replace("/");
                // setpreloaders(false)
                console.log(data);
            }
        }
                else{
                    validator.current.showMessages();
                    forceUpdate(1);
                }
        } catch (ex) {
            // toast.error("مشکلی پیش آمده",{
            //     position:"top-right",
            //     closeOnClick:true
            // })
            // setpreloaders(false)
            console.log(ex);
        }
    }
// if(preloaders){
//     history.replace("/login")
// }else{
//     history.replace("/")
// }
    return (
        <Fragment>
             <Helmet><title>Login</title></Helmet>
            <form className="form-signin" style={{marginTop:"100px"}} onSubmit={handleSubmit}>
                <div style={{textAlign:"center"}}>
                    <Svglogin3/>
                    <h5 className="h3 mb-3 font-weight-normal">ورود به حساب کاربری</h5>
                </div>
                {/* {preloaders ? (
                    <Sugar time={0} color="#4e9dfb" />
                ) : null} */}
                <div className="form-label-group" >
                    <input value={user.email} name="email" 
                    onChange={event => {
                        setEmail(event.target.value)
                        validator.current.showMessageFor("email")
                    }}
                    type="email" id="inputEmail" style={{ fontFamily: "BYekan" }} className="form-control" placeholder="Email address"  />
                    <label for="inputEmail">ایمیل</label>
                    {!isEmpty(user) ? validator.current.message("email" , user.email , "required|email") :
                    validator.current.message("email" , email , "required|email")}
                </div>

                <div className="form-label-group">
                    <input value={user.password} name="password"
                     onChange={event => {
                        setPassword(event.target.value)
                        validator.current.showMessageFor("password")
                     }}
                    type="password" id="inputPassword" style={{ fontFamily: "BYekan" }} className="form-control" placeholder="Password"  />
                    <label for="inputPassword">رمز عبور</label>
                    {!isEmpty(user) ? validator.current.message("password" , user.password , "required|min:6"):
                    validator.current.message("password" , password , "required|min:6")}
                </div>

                <div className="checkbox mb-3" style={{ direction:"rtl"}}>
                    <p>
                    <label >
                        <input type="checkbox"/>
                        <span id="checkboxText" style={{color:"#595959"}}>مرا به خاطر بسپار</span>
                    </label>
                    </p>
                   {!isEmpty(user) ? null : ( <Button  size="small"id="btnregistersite" color="primary">
                    <NavLink to="/register" >تبت نام در سایت؟</NavLink>
                    </Button>)}
                </div>
                <button id="BtnSubmitLogin" className="waves-effect waves-light  btn-large z-depth-3" type="submit">ورود</button>
                <p id="CopyrightsText">&copy; 2017-2020</p>
            </form>
        </Fragment>
    );
}
export default Login;