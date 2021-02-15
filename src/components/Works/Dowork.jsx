import React, { Fragment } from 'react';
import Svgunsuccess from './../Common/Svg/Svgunsuccess';

const Dowork = ({ fullnamedowork }) => {
    return (
        <Fragment>
            <div id="Divwork" >
                <div >
                    <h6>{`${fullnamedowork}`}</h6>
                </div>
                <div style={{position:"relative",left:"15px"}} id="divBtnsuccess">
                    <span style={{ fontSize: "12px" ,position:'relative',bottom:"5px" }} className="green-text">کارتو موفق شدی انجام بدی</span>
                    <a href="#gf" className="btn-floating btn-small waves-effect waves-light green" id="Btnsuccess">
                    <Svgunsuccess/>
                    </a>
                </div>
            </div>
        </Fragment>
    );
}

export default Dowork;