import styles from './HomePage.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function Home() {
    return <h1 className={cx('home-page')}>Home page</h1>;
}

export default Home;
