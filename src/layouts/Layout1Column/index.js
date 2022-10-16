import Header from '~/layouts/components/Header';
import styles from './Homepage.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
const cx = classNames.bind(styles);
function Layout1Column({ children }) {
    return (
        <div className={cx('main')}>
            <Header />
            <div className={cx('container')}>
                <div className={cx('content-alothme')}>{children}</div>
            </div>
        </div>
    );
}
Layout1Column.propTypes = {
    children: PropTypes.node.isRequired,
};
export default Layout1Column;
