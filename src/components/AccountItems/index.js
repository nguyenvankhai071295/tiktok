import styles from './AccountItems.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '../Image';
import PropTypes from 'prop-types';
const cx = classNames.bind(styles);

function AccountItems({ props }) {
    return (
        <a href={`/@${props.nickname}`} className={cx('account-item')}>
            <span>
                <Image className={cx('avatar')} src={props.avatar} alt="Hina" />
            </span>
            <div className={cx('item-content')}>
                <h4 className={cx('item-title')}>
                    <span>{props.full_name}</span>
                    {!!props.tick && <FontAwesomeIcon icon={faCheckCircle} />}
                </h4>
                <div className={cx('item-desc')}>{props.nickname}</div>
            </div>
        </a>
    );
}
AccountItems.propTypes = {
    props: PropTypes.object.isRequired,
};
export default AccountItems;
