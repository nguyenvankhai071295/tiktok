import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import Search from '~/components/Popper/Search';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import Keyboard from '~/components/Popup/Keyboard';
import Tippy from '@tippyjs/react';
import { Link } from 'react-router-dom';
import 'tippy.js/dist/tippy.css';
import { useState } from 'react';
import { GoSearch } from 'react-icons/go';
const cx = classNames.bind(styles);
const hasUser = true;
const MENU_ITEM = [
    {
        icon: <img className={cx('image-icon')} src={images.language} alt="Language" />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Việt Nam',
                },
                {
                    code: 'ar',
                    title: 'العربية',
                },
                {
                    code: 'at',
                    title: 'বাঙ্গালি (ভারত)',
                },
                {
                    code: 'ce',
                    title: 'Cebuano (Pilipinas)',
                },
                {
                    code: 'cs',
                    title: 'Čeština (Česká republika)',
                },
                {
                    code: 'de',
                    title: 'Deutsch',
                },
                {
                    code: 'ea',
                    title: 'Ελληνικά (Ελλάδα)',
                },
                {
                    code: 'es',
                    title: 'Español',
                },
                {
                    code: 'su',
                    title: 'Suomi (Suomi)',
                },
                {
                    code: 'fa',
                    title: 'Français',
                },
            ],
        },
    },
    {
        icon: <img className={cx('image-icon')} src={images.feedback} alt="Feedback" />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <img className={cx('image-icon')} src={images.keyboard} alt="Keyboard" />,
        title: 'Keyboard shortcuts',
        content: <Keyboard />,
        type: 'popup',
    },
];
function Header() {
    const [eventInput, setEventInput] = useState('');
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
                        <Search event={eventInput}>
                            <form className={cx('search-form')}>
                                <input
                                    onChange={(e) => {
                                        return setEventInput(e.target.value);
                                    }}
                                    placeholder="Search accounts and videos"
                                    autoComplete="off"
                                />
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
                                    <GoSearch />
                                </button>
                                <div className={cx('input-border')}></div>
                            </form>
                        </Search>
                    </div>
                    <div className={cx('header__right')}>
                        <div className={cx('upload')}>
                            <Link to="/upload">
                                <img src={images.increase} alt="inscrease" />
                                <span>Upload</span>
                            </Link>
                        </div>
                        {hasUser ? (
                            <>
                                <div className={cx('message', 'has-tooltip')}>
                                    <Tippy interactive content="Message" placement={'bottom'}>
                                        <Link to="./message" className={cx('message-action')}>
                                            <img src={images.message} alt="Message" />
                                        </Link>
                                    </Tippy>
                                </div>
                                <div className={cx('inbox', 'has-tooltip')}>
                                    <Tippy inlinePositioning="true" interactive content="Inbox" placement={'bottom'}>
                                        <div className={cx('inbox-action')}>
                                            <img src={images.inbox} alt="Inbox" />
                                        </div>
                                    </Tippy>
                                </div>
                            </>
                        ) : (
                            <>
                                <Button medium children="Log in" className="login" />
                            </>
                        )}
                        <Menu items={MENU_ITEM}>
                            {hasUser ? (
                                <div className={cx('profile')}>
                                    <img
                                        src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7130843581685694470~c5_720x720.jpeg?x-expires=1662980400&x-signature=L0UDnpleuhlV2vUH2%2BmVXJO2o3w%3D"
                                        alt="Nguyen van khai"
                                    />
                                </div>
                            ) : (
                                <img className={cx('see-more')} src={images.seemore} alt="See more" />
                            )}
                        </Menu>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
