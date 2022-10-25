import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import Menu from './Menu';
import SuggestedAccounts from './SuggestedAccounts';
const cx = classNames.bind(styles);
function Sidebar() {
    return (
        <div className={cx('sidenav-container')}>
            <div className={cx('sidenav-wrapper')}>
                <Menu />
                <SuggestedAccounts />
            </div>
        </div>
    );
}

export default Sidebar;
