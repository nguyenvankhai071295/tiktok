import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
function useDebounce(value, delay) {
    const [debounce, setDebounce] = useState(value);
    useEffect(() => {
        const handleDebounce = setTimeout(() => setDebounce(value), delay);
        return () => clearTimeout(handleDebounce);
        // eslint-disable-next-line
    }, [value]);

    return debounce;
}
useDebounce.propTypes = {
    value: PropTypes.string,
    delay: PropTypes.number,
};
export default useDebounce;
