import React, { Fragment } from 'react';

import Dowork from './Dowork';
import { useSelector } from 'react-redux';

const DoWorks = () => {

    const doworks =useSelector(state => state.doworks)

    return ( 
        <Fragment>
                    {doworks.map(D =>(
                        <Dowork
                        key={D.id}
                        fullnamedowork={D.fullnamedowork}
                        />
                    ))}
        </Fragment>
     );
}
 
export default DoWorks;