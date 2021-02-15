import React, { Fragment } from 'react';
import Work from './Work';
import { useDispatch, useSelector } from 'react-redux';
import { handledeletework } from './../../actions/handledeletework';
import { handledoworks } from './../../actions/handledoworks';

const Works = () => {

    const works = useSelector(state => state.works);
    const dispatch = useDispatch();

    return (
        <Fragment>
                    {works.map(work => (
                        <Work
                            key={work.id}
                            fullnamework={work.fullnamework}
                            handledeletework= {() => dispatch(handledeletework(work.id,work.fullnamework))}
                            handledoworks= {(event) => dispatch(handledoworks(event,work.fullnamework,work.id))}
                        />
                    ))}
                    
        </Fragment>
    );
}

export default Works;