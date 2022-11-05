import styles from './AccountItem.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Image from '~/components/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import PreviewItem from './PreviewItem';
const cx = classNames.bind(styles);
function AccountItem({ ...props }) {
    return (
        <PreviewItem {...props}>
            <Link to={props.to} className={cx('item')} style={{ display: !props.stateAccount ? 'none' : 'flex' }}>
                <div className={cx('avatar')}>
                    <Image src={props.srcImage} />
                </div>
                <div className={cx('content')}>
                    <div className={cx('title-wrapper')}>
                        <h4 className={cx('user-title')}>{props.title}</h4>
                        {props.tick ? (
                            <span className={cx('tick')}>
                                <FontAwesomeIcon icon={faCheckCircle} />
                            </span>
                        ) : (
                            <></>
                        )}
                    </div>
                    <p className={cx('desc')}>{props.desc}</p>
                </div>
            </Link>
        </PreviewItem>
    );
}
export default AccountItem;
