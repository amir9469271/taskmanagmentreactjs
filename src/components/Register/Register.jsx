import React, { Fragment, useState, useRef } from 'react';
import { registerUser } from './../../Services/userservice';
import { toast } from "react-toastify";
import SimpleReactValidator from 'simple-react-validator';
import {Sugar} from "react-preloaders";
import { Helmet } from 'react-helmet';
import Svgregister3 from '../Common/Svg/Svgregister3';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { isEmpty } from 'lodash';
import { addUser } from './../../actions/user';
import Toast from 'react-toast-component';


const Register = ({history}) => {

    const dispatch = useDispatch();
    const user = useSelector(state=>state.user)
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [policy, setPolicy] = useState();
    const [, forceUpdate] = useState();
    const [preloaders , setpreloaders] = useState(false);

    const validator = useRef(new SimpleReactValidator({
        messages: {
            required: "پر کردن این فیلد الزامی می  باشد",
            email: "ایمیل وارد شده صحیح نمی باشد",
            min: " باید حداقل 6 حرف باشد",
            accepted: "قوانین سایت را می پذیرید ؟",
        },
        element: message => <div id="Tooltip"><div>{message}</div></div>,
    }));

    const handleSubmit = async event => {
        event.preventDefault();
        const user = { fullname, email, password };
        try {
            if (validator.current.allValid()) {
                // setpreloaders(true)
                const {  status} = await registerUser(user);
                if (status === 201) {
                    // toast.info("ثبت نام با موقیت انجام شد", {
                    //     position: "top-right",
                    //     closeOnClick: true,
                    // })
                 
                    history.replace("/login");
                   dispatch(addUser(user))
                    // setpreloaders(false);
                }
            }
            else {
                validator.current.showMessages();
                forceUpdate(1);
            }
        } catch (ex) {
            // toast.error("مشکلی رخ داده ", {
            //     position: "top-right",
            //     closeOnClick: true
            // })
            // setpreloaders(false)
            console.log(ex);
        }
    };
    if(!isEmpty(user)) return <Redirect to="/"/>;
    return (
        <Fragment>
            <Helmet><title>Register</title></Helmet>
            <form className="form-signin" style={{ marginTop: "50px" }} onSubmit={handleSubmit} >
                <div style={{ textAlign: "center" }}>
                    <Svgregister3/>
                    <h5 className="h3 mb-3 font-weight-normal">ثبت نام کاربر</h5>
                </div>
                {/* {preloaders ? (
                    <Sugar  time={0} color="#4e9dfb"/>
                ) : null} */}
                <div className="form-label-group">
                    <input value={fullname} name="fullname"
                        onChange={event => {
                            setFullname(event.target.value)
                            validator.current.showMessageFor("fullname")
                        }}
                        type="text" id="inputText" style={{ fontFamily: "BYekan" }} className="form-control" placeholder="Email address" />
                    <label >نام کاربری</label>
                    {validator.current.message("fullname", fullname, "required|min:6")}
                </div>
                <div className="form-label-group">
                    <input value={email} name="email"
                        onChange={event => {
                            setEmail(event.target.value)
                            validator.current.showMessageFor("email")
                        }}
                        type="email" id="inputEmail" style={{ fontFamily: "BYekan" }} className="form-control" placeholder="Email address" />
                    <label for="inputEmail" >ایمیل</label>
                    {validator.current.message("email", email, "required|email")}
                </div>

                <div className="form-label-group">
                    <input value={password} name="password"
                        onChange={event => {
                            setPassword(event.target.value)
                            validator.current.showMessageFor("password")
                        }}
                        type="password" id="inputPassword" style={{ fontFamily: "BYekan" }} className="form-control" placeholder="Password" />
                    <label for="inputPassword">رمز عبور</label>
                    {validator.current.message("password", password, "required|min:6")}
                </div>

                <div className="checkbox mb-3" style={{ direction: "rtl" }}>
                    <p>
                        <label >
                            <input type="checkbox" value={policy} name="policy"
                                onChange={event => {
                                    setPolicy(event.currentTarget.checked)
                                    validator.current.showMessageFor("polycy")
                                }}
                            />
                            <span id="checkboxText" style={{ color: "#595959" }}>شرابط و قواتین را می پذیرم</span>
                        </label>
                        {validator.current.message("policy", policy, "required|accepted")}
                    </p>
                    <button id="BtnSubmitLogin" className="waves-effect waves-light  btn-large z-depth-3" type="submit">ثبت نام</button>
                    <p id="CopyrightsText">&copy; 2017-2020</p>
                </div>
            </form>
        </Fragment>
    );
}

export default Register;