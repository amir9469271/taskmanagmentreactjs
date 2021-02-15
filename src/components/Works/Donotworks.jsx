import React, { Fragment } from 'react';
import Donotwork from './Donotwork';
import { useSelector } from 'react-redux';


const Donotworks = () => {

    const donotworks =useSelector(state => state.donotworks)

    return ( 
        <Fragment>
            {donotworks.map( z => (
                <Donotwork
                key={z.id}
                fullnamedonotwork ={z.fullnamedonotwork}
                />
            ))}
        </Fragment>
     );
}
 
export default Donotworks;