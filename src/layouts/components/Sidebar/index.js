import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import Menu from './Menu';
import SuggestedAccounts from './SuggestedAccounts';
import FollowingAccounts from './Following accounts';
import account from '~/components/config/accounts';
import Button from '~/components/Button';
import Discover from './Discover';
import Footer from './Footer';
const cx = classNames.bind(styles);
function Sidebar() {
    return (
        <div className={cx('sidenav-container')}>
            <div className={cx('sidenav-wrapper')}>
                <Menu />
                {!account.accountStatus && (
                    <div className={cx('wrapper-login')}>
                        <p className={cx('log-hint')}>Log in to follow creators, like videos, and view comments.</p>
                        <Button large children={'Log in'} />
                    </div>
                )}
                <SuggestedAccounts />
                {account.accountStatus && <FollowingAccounts />}
                <Discover />
                <Footer />
            </div>
        </div>
    );
}

export default Sidebar;
