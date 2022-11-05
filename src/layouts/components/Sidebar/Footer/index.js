import styles from './Footer.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
function Footer() {
    return (
        <div className={cx('more-link')}>
            <div className={cx('line')}>
                <a href="/" target="_blank">
                    About
                </a>
                <a href="/" target="_blank">
                    Newsroom
                </a>
                <a href="/" target="_blank">
                    Contact
                </a>
                <a href="/" target="_blank">
                    Careers
                </a>
                <a href="/" target="_blank">
                    ByteDance
                </a>
            </div>
            <div className={cx('line')}>
                <a href="/" target="_blank">
                    TikTok for Good
                </a>
                <a href="/" target="_blank">
                    Advertise
                </a>
                <a href="/" target="_blank">
                    Developers
                </a>
                <a href="/" target="_blank">
                    Transparency
                </a>
                <a href="/" target="_blank">
                    TikTok Rewards
                </a>
                <a href="/" target="_blank">
                    TikTok Browse
                </a>
                <a href="/" target="_blank">
                    TikTok Embeds
                </a>
            </div>
            <div className={cx('line')}>
                <a href="/" target="_blank">
                    Help
                </a>
                <a href="/" target="_blank">
                    Safety
                </a>
                <a href="/" target="_blank">
                    Terms
                </a>
                <a href="/" target="_blank">
                    Privacy
                </a>
                <a href="/" target="_blank">
                    Creator Portal
                </a>
                <a href="/" target="_blank">
                    Community Guidelines
                </a>
            </div>
            <div className={cx('copy-right')}>
                <span className={cx('text')}>© 2022 TikTok</span>
            </div>
        </div>
    );
}

export default Footer;
