import styles from './AccountItem.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Image from '~/components/Image';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function AccountItem({ srcImage, title, tick, desc, to }) {
    return (
        <div className={cx('item')}>
            <Link to={to} className={cx('avatar')}>
                <Image src={srcImage} />
            </Link>
            <Link to={to} className={cx('content')}>
                <div className={cx('title-wrapper')}>
                    <h4 className={cx('user-title')}>{title}</h4>
                    {tick ? (
                        <span className={cx('tick')}>
                            <FontAwesomeIcon icon={faCheckCircle} />
                        </span>
                    ) : (
                        <></>
                    )}
                </div>
                <p className={cx('desc')}>{desc}</p>
            </Link>
        </div>
    );
}
AccountItem.propTypes = {
    srcImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tick: PropTypes.bool.isRequired,
    desc: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
};
export default AccountItem;
