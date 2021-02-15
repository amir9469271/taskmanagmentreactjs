import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Svguserhelp from './Svg/Svguserhelp';

export default function ResponsiveDialog({setBlur}) {
    const [open, setOpen] = React.useState(false);
   
    const handleClickOpen = () => {
        setOpen(true);
        setBlur(true);
    };

    const handleClose = () => {
        setOpen(false);
        setBlur(false);
    };

    return (
        <div style={{position:"relative", top:"480px" , direction:"rtl",left:"-8px"}} >
            <div className="d-flex flex-row-reverse" id="BtnUserhelp">
                <a href="#lkkj" className="btn-floating  waves-effect waves-light z-depth-3" style={{backgroundColor:"#4e9dfb"}} onClick={handleClickOpen}>
                <Svguserhelp/>
                </a>
            </div>
       
            <Dialog
             className="animate__animated animate__flipInY"
                fullScreen={false}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
             >
                <DialogTitle style={{backgroundColor:"#4e9dfb"}} >
                    <h6 style={{ fontFamily: "BYekan", textAlign:"center" , color:"white" }}>به نکات زیر توجه کن  دوست عزیز</h6> 
                </DialogTitle >
                <DialogContent  >
                    <DialogContentText>
                                <h6  id="Ulhelpuser" className="z-depth-3">
                                   اسم کارهای مورد نطرتان را در کادر وارد کرده
                                </h6>
                                <h6  id="Ulhelpuser" className="z-depth-3" >
                                    به زبان فارسی تایپ کنید
                                </h6>
                                <h6  id="Ulhelpuser"className="z-depth-3">
                                   به تعداد بی نهایت می توانید کار وارد کرده
                                </h6>
                                <h6  id="Ulhelpuser"className="z-depth-3">
                                    در پایان روی دکمه اضافه کردن کلیک کنید
                                </h6>
                                <h6  id="Ulhelpuser"className="z-depth-3">
                                  : جیمیل ادمین <span>younes.gh@chmail.ir</span>
                                </h6>
                                <h6  id="Ulhelpuser" className="z-depth-3">
                                : رمز عبور ادمین<span>123456</span>
                                </h6>
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </div>
    );
}