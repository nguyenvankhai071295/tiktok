import { BsChevronLeft } from 'react-icons/bs';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function Header({ onBack }) {
    return (
        <div className={cx('header')}>
            <BsChevronLeft onClick={onBack} />
            <p className={cx('title')}>Language</p>
        </div>
    );
}

export default Header;
