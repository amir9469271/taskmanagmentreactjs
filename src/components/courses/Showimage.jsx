import React, { Fragment } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const MyImage = ({ image }) => {
    return (
        <Fragment>
            <LazyLoadImage id="stylesimg"
                height={220}
                effect="blur"
                src={`https://toplearnapi.ghorbany.dev/${image}`} // use normal <img> attributes as props
                placeholderSrc={`https://toplearnapi.ghorbany.dev/images/2020-07-29T16:54:10.560Z-8e43e222-bc1e-406e-8597-ea8ea9385ec9PHP-learning-compressor.png`}
                visibleByDefault={false}
            />
        </Fragment>
    );
}
export default MyImage;