import React, { Fragment } from 'react';

const WellcomeToapp = () => {

    return (
        <Fragment>
            <div>
                <div className="col s12 m6" style={{display:"flex",justifyContent:"center"}}>
                    <div className="card " style={{width:"70%",backgroundColor:"#4e9dfb"}}>
                        <div className="card-content white-text" style={{textAlign:"center"}}>
                           <p style={{fontSize:"24px"}}>خوش آمدید به برنامه خودتون در اینجا میتونی کارهای روزانتو مدیریت کنی</p>
                        </div>
                    </div>
                </div>
            </div>                
        </Fragment>
    );
}
export default WellcomeToapp;