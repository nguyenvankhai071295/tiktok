import styles from './AccountItems.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItems() {
    return (
        <div className={cx('account-item')}>
            <span>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/a690093dbc613f1fb6514a6725987c58~c5_300x300.webp?x-expires=1662710400&x-signature=4njiOwDx0fRe1l99FlaSLYn0MVI%3D"
                    alt="Hina"
                />
            </span>
            <div className={cx('item-content')}>
                <h4 className={cx('item-title')}>
                    <span>Nguyen Van Khai</span>
                    <FontAwesomeIcon icon={faCheckCircle} />
                </h4>
                <div className={cx('item-desc')}>khaibeo</div>
            </div>
        </div>
    );
}

export default AccountItems;
