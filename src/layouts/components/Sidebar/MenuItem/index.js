import { NavLink } from 'react-router-dom';
import styles from './MenuItem.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
const cx = classNames.bind(styles);
function MenuItem({ to, title, iconDefault, iconActive }) {
    return (
        <NavLink to={to} className={(nav) => cx('item', { active: nav.isActive })}>
            <span className={cx('iconDefault', 'icon')}>{iconDefault}</span>
            <span className={cx('iconActive', 'icon')}>{iconActive}</span>
            <h2 className={cx('title')}>{title}</h2>
        </NavLink>
    );
}
MenuItem.propTypes = {
    to: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    iconDefault: PropTypes.element,
    iconClick: PropTypes.element,
};
export default MenuItem;
