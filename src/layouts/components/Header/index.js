import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import Keyboard from '~/components/Popup/Keyboard';
import Tippy from '@tippyjs/react';
import { Link } from 'react-router-dom';
import 'tippy.js/dist/tippy.css';
import { useState } from 'react';
import FormSearch from '~/components/Form/Search';
import { InboxAction, Message, MessageAction } from '~/components/Icons';
import { Inbox } from '~/components/Icons';
import Image from '~/components/Image';
import routesConfig from '~/components/config/routes';
const cx = classNames.bind(styles);
const hasUser = true;
const MENU_ITEM = [
    {
        icon: <Image className={cx('image-icon')} src={images.language} alt="Language" />,
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
        icon: <Image className={cx('image-icon')} src={images.feedback} alt="Feedback" />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <Image className={cx('image-icon')} src={images.keyboard} alt="Keyboard" />,
        title: 'Keyboard shortcuts',
        content: <Keyboard />,
        type: 'popup',
    },
];
const MENU_ITEM_LOGIN = [
    {
        icon: <Image className={cx('image-icon')} src={images.profile} alt="View profile" />,
        title: 'View profile',
    },
    {
        icon: <Image className={cx('image-icon')} src={images.coins} alt="Get coins" />,
        title: 'Get coins',
    },
    {
        icon: <Image className={cx('image-icon')} src={images.setting} alt="Settings" />,
        title: 'Settings',
    },
];
const LOGOUT = {
    icon: <Image className={cx('image-icon')} src={images.logout} alt="Log out" />,
    title: 'Log out',
    classNames: 'login',
};
function Header() {
    const [colorMessage, setColorMessage] = useState(false);
    const [colorInbox, setColorInbox] = useState(false);
    return (
        <div className={cx('header')}>
            <div className={cx('container')}>
                <div className={cx('content')}>
                    <div className={cx('header__left')}>
                        <Link to={routesConfig.home} className={cx('logo')}>
                            <Image className={cx('image--logo')} src={images.logo} alt="Tiktok" />
                        </Link>
                    </div>
                    <div className={cx('header__center')}>
                        <FormSearch />
                    </div>
                    <div className={cx('header__right')}>
                        <div className={cx('upload')}>
                            <Link to={routesConfig.upload}>
                                <Image src={images.increase} alt="inscrease" />
                                <span>Upload</span>
                            </Link>
                        </div>
                        {hasUser ? (
                            <>
                                <div className={cx('message', 'has-tooltip')}>
                                    <Tippy zIndex={10000} interactive content="Message" placement={'bottom'}>
                                        <Link
                                            to={routesConfig.message}
                                            className={cx('message-action')}
                                            onClick={() => {
                                                return setColorMessage(!colorMessage);
                                            }}
                                        >
                                            {colorMessage ? <MessageAction /> : <Message />}
                                        </Link>
                                    </Tippy>
                                </div>
                                <div className={cx('inbox', 'has-tooltip')}>
                                    <Tippy zIndex={10000} interactive content="Inbox" placement={'bottom'}>
                                        <div
                                            className={cx('inbox-action')}
                                            onClick={() => {
                                                return setColorInbox(!colorInbox);
                                            }}
                                        >
                                            {colorInbox ? <InboxAction /> : <Inbox />}
                                        </div>
                                    </Tippy>
                                </div>
                            </>
                        ) : (
                            <>
                                <Button medium children="Log in" className="login" />
                            </>
                        )}
                        <Menu items={hasUser ? [...MENU_ITEM_LOGIN, ...MENU_ITEM, LOGOUT] : MENU_ITEM}>
                            {hasUser ? (
                                <div className={cx('profile')}>
                                    <Image src={images.login} alt="Nguyen van khai" />
                                </div>
                            ) : (
                                <Image className={cx('see-more')} src={images.seemore} alt="See more" />
                            )}
                        </Menu>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
