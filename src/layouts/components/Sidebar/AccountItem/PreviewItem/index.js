import Tippy from '@tippyjs/react/headless';
import React from 'react';
import styles from './PreviewItem.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Button from '~/components/Button';
import Image from '~/components/Image';
const cx = classNames.bind(styles);
function PreviewItem({ children, ...props }) {
    return (
        <Tippy
            interactive={true}
            placement={'bottom-end'}
            hideOnClick={'false'}
            delay={[500, 500]}
            offset={[-10, 0]}
            render={(attrs) => (
                <div className={cx('profile-container')} tabIndex="-1" {...attrs}>
                    <div className={cx('header-profile')}>
                        <Link to={props.to} className={cx('avatar')}>
                            <Image src={props.srcImage} />
                        </Link>
                        <Button medium>{props.followState ? 'Following' : 'Follow'}</Button>
                    </div>
                    <Link to={props.to} className={cx('user-title')}>
                        {props.title}
                    </Link>
                    <Link to={props.to} className={cx('desc')}>
                        {props.desc}
                    </Link>
                    <p className={cx('user-stat')}>
                        <span className={cx('amount')}>{props.followTotal}</span>
                        <span className={cx('text')}>Followers</span>
                        <span className={cx('amount')}>{props.likeTotal}</span>
                        <span className={cx('text')}>Likes</span>
                    </p>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default PreviewItem;
