import React, { Fragment } from 'react';
import Svgdeletework from './../Common/Svg/Svgdeletework';

const Work = ({ fullnamework, handledeletework, handledoworks }) => {
    return (
        <Fragment>
            <div id="Divwork"  >
                <div>
                    <h6>{`${fullnamework}`}</h6>
                </div>
                <div>
                    <button onClick={handledeletework}>
                    <Svgdeletework/>
                    </button>
                </div>
                <div>
                    <label  >
                        <input type="checkbox" className="filled-in " onChange={handledoworks} />
                        <span style={{ fontSize: "12px" }} className="green-text">انتخاب  این کار</span>
                    </label>
                </div>
            </div>
        </Fragment>
    );}
export default Work;