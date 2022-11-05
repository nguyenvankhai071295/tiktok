import { forwardRef, useState } from 'react';
import images from '~/assets';
import PropTypes from 'prop-types';
const Image = forwardRef(({ src, imgError = images.noimage, ...props }, ref) => {
    const [imageError, setImageError] = useState(src);
    const handleError = () => {
        return setImageError(imgError);
    };
    // eslint-disable-next-line
    return <img ref={ref} src={imageError} {...props} onError={handleError} />;
});
Image.propTypes = {
    src: PropTypes.string,
    ref: PropTypes.string,
    imgError: PropTypes.node,
};
export default Image;
