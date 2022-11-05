import styles from './Keyboard.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets';
const cx = classNames.bind(styles);
function Keyboard() {
    return (
        <div className={cx('keyboard-container')}>
            <div className={cx('title')}>Keyboard shortcuts</div>
            <div className={cx('content')}>
                <ul>
                    <li>
                        <span className={cx('text')}>Go to previous video</span>
                        <img src={images.prev} alt="Previous video" />
                    </li>
                    <li>
                        <span className={cx('text')}>Go to next video</span>
                        <img src={images.next} alt="Next video" />
                    </li>
                    <li>
                        <span className={cx('text')}>Like video</span>
                        <img src={images.like} alt="Like video" />
                    </li>
                    <li>
                        <span className={cx('text')}>Mute / unmute video</span>
                        <img src={images.mute} alt="Mute video" />
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Keyboard;
