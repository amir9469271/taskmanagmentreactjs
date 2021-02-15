import React, { Fragment } from 'react';
import Svgsuccess from './../Common/Svg/Svgsuccess';

const Donotwork = ({ fullnamedonotwork }) => {
    return (
        <Fragment>
            <div id="Divwork" >
                <div >
                    <h6>{`${fullnamedonotwork}`}</h6>
                </div>
                <div style={{position:"relative",left:"15px"}} id="divBtnsuccess">
                    <span style={{ fontSize: "12px", position: 'relative', bottom: "5px" }}className="red-text">کارتو موفق شدی انجام بدی</span>
                    <a href="##gfg" className="btn-floating btn-small waves-effect waves-light red z-depth-1" id="Btnsuccess">
                        <Svgsuccess/>
                    </a>
                </div>
            </div>
        </Fragment>
    );
}

export default Donotwork;