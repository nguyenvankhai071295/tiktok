import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
const cx = classNames.bind(styles);
function Header() {
    const [state, setstate] = useState('');

    return (
        <div className={cx('header')}>
            <div className={cx('container')}>
                <div className={cx('content')}>
                    <div className={cx('header__left')}>
                        <a href="/" className={cx('logo')}>
                            <img className={cx('image--logo')} src={images.logo} alt="Tiktok" />
                        </a>
                    </div>
                    <div className={cx('header__center')}>
                        <form className={cx('search-form')}>
                            <input placeholder="Search accounts and videos" autoComplete="off" />
                            <div className={cx('action')}>
                                <button>
                                    <FontAwesomeIcon icon={faSpinner} />
                                </button>
                                <button>
                                    <FontAwesomeIcon icon={faCircleXmark} />
                                </button>
                            </div>
                            <span className={cx('spliter')}></span>
                            <button className={cx('search-icon')}>
                                <img className={cx('image-logo')} src={images.search} alt="Tiktok" />
                            </button>
                            <div className={cx('input-border')}></div>
                        </form>
                    </div>
                    <div className={cx('header__right')}>
                        <div className={cx('upload')}>
                            <a href="/upload">
                                <img src={images.increase} alt="inscrease" />
                                <span>Upload</span>
                            </a>
                        </div>
                        <button className="login">Log in</button>
                        <img className={cx('see-more')} src={images.seemore} alt="See more" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
