import Header from '../components/Header';
import Sidebar from '~/layouts/components/Sidebar';
import styles from './defaultLayout.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <>
            <Header />
            <div className={cx('main')}>
                <div className={cx('container')}>
                    <div className={cx('wrapper')}>
                        <div className={cx('sidebar')}>
                            <Sidebar />
                        </div>

                        <div className={cx('content')}>{children}</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DefaultLayout;
