import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Svglogin2 from './Svg/Svglogin2';
import Svgregister2 from './Svg/Svgregister.2';
import Svglistworks from './Svg/Svglistworks';
import Svgdashboard from './Svg/Svgdashboard';
import Svghelp from './Svg/Svghelp';
import Svgaboutme from './Svg/Svgaboutme';
import { NavLink,Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { EmptyListWorks } from './../../actions/emptyListWorks';
import { isEmpty } from 'lodash';



const useStyles = makeStyles({
  list: {width: 250,},fullList: {width: 'auto', },
});

export default function SlideNav({setBlur}) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const dispatch = useDispatch();


  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  
  const user = useSelector(state=>state.user);
  const handleToast=()=>{
    setBlur(true)
    setTimeout(()=>{
      setBlur(false)
    },5500)
      toast.warning("شما ادمین نیستید برای ورود به داشبورد  و  مشاهده ایمیل و رمز عبور ادمین روی دکمه راهنمای کاربر در پایین صفحه سمت راست کلیک کنید",{
        position:"top-center",
        closeOnClick:true
      })
      
   
   
  }

  const list = (anchor) => (
    <div style={{marginTop:"40px"}} id="DivParentSlidenav"
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
    <ul id="ListMenu" style={{position:"relative",marginTop:"155px"}}>

    {isEmpty(user) ? (
      <NavLink to="/login"   onClick={()=> dispatch(EmptyListWorks())} >
      <Button id="li" size="small" className={classes.margin}>
        <Svglogin2/>
     ورود </Button>
     </NavLink> 
    ) : null}

    {isEmpty(user) ? (
       <NavLink to="/register" onClick={()=> dispatch(EmptyListWorks())}>
       <Button id="li" size="small" className={classes.margin}>
         <Svgregister2/>
         عضویت</Button>
         </NavLink> 
    ) : null}

        {!isEmpty(user) ? (<Link to="/userprofile" onClick={()=> dispatch(EmptyListWorks())}>
      <Button id="li" size="small" className={classes.margin}>
        <Svglistworks/>
       پروفایل کاربری</Button>
        </Link>):(<Link to="/courses" onClick={()=> dispatch(EmptyListWorks())}>
      <Button id="li" size="small" className={classes.margin}>
        <Svglistworks/>
        مشاهده دوره ها</Button>
        </Link>)}
    </ul>
      <Divider />
      <ul id="ListMenu">
        
      {user.isAdmin ? (<NavLink to="/LayoutDashboard" onClick={()=> dispatch(EmptyListWorks())}>
      <Button id="li" size="small" className={classes.margin}>
        <Svgdashboard/>
      داشبورد</Button>
        </NavLink> ) : (<NavLink to="/" onClick={()=> dispatch(EmptyListWorks())}>
      <Button  id="li1" onClick={handleToast} size="small" className={classes.margin}>
        <Svgdashboard/>
      داشبورد</Button>
        </NavLink>  )}
        
  <NavLink to="/">
  <Button id="li" size="small" className={classes.margin}><a href="#gggg">
     <Svghelp/>
      </a>
      راهنمایی</Button>
  </NavLink>
        
    <NavLink to="/">
    <Button id="li" size="small" className={classes.margin}><a href="#jjkk">
         <Svgaboutme/>  
      </a>
      درباره ما</Button>
    </NavLink>
    </ul>
    </div>
  );
  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <svg onClick={toggleDrawer(anchor, true)} version="1.1" className="BtnMenu" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            viewBox="0 0 409.6 409.6">
            <path d="M392.533,17.067H17.067C7.641,17.067,0,24.708,0,34.133S7.641,51.2,17.067,51.2h375.467
			c9.426,0,17.067-7.641,17.067-17.067S401.959,17.067,392.533,17.067z"/>
            <path d="M392.533,187.733H17.067C7.641,187.733,0,195.374,0,204.8s7.641,17.067,17.067,17.067h375.467
			c9.426,0,17.067-7.641,17.067-17.067S401.959,187.733,392.533,187.733z"/>
            <path d="M392.533,358.4H17.067C7.641,358.4,0,366.041,0,375.467s7.641,17.067,17.067,17.067h375.467
			c9.426,0,17.067-7.641,17.067-17.067S401.959,358.4,392.533,358.4z"/>
          </svg>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}