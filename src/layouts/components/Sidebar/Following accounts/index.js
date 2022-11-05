import styles from './FollowingAccounts.module.scss';
import classNames from 'classnames/bind';
import AccountItem from '../AccountItem';
import images from '~/assets';
import { useState } from 'react';
import React from 'react';
const cx = classNames.bind(styles);
function FollowingAccounts() {
    const account = [
        {
            srcImage: images.account.datvilla94,
            nickname: 'datvilla94',
            tick: true,
            desc: '🔥Đạt Villa🔥',
            followState: false,
            followTotal: '7.1M',
            likeTotal: '232.6M',
        },
        {
            srcImage: images.account.manhtienkhoi,
            nickname: 'manhtienkhoi_',
            tick: false,
            desc: 'Mạnh Tiến Khôi 🐯',
            followState: false,
            followTotal: '5M',
            likeTotal: '341.2M',
        },
        {
            srcImage: images.account.luongthingocha,
            nickname: 'luongthingocha',
            tick: true,
            desc: '𝐍𝐠𝐚̂𝐧 𝐇𝐚̀',
            followState: false,
            followTotal: '6.2M',
            likeTotal: '214.6M',
        },
        {
            srcImage: images.account.theanh28entertainment,
            nickname: 'theanh28entertainment',
            tick: true,
            desc: 'Theanh28 Entertainment',
            followState: false,
            followTotal: '7.8M',
            likeTotal: '547.6M',
        },
        {
            srcImage: images.account.yeah1trending,
            nickname: 'yeah1.trending',
            tick: true,
            desc: 'Yeah1 Trending',
            followState: false,
            followTotal: '5.8M',
            likeTotal: '260.6M',
        },
        {
            srcImage: images.account.datvilla94,
            nickname: 'datvilla94',
            tick: true,
            desc: '🔥Đạt Villa🔥',
            followState: false,
            followTotal: '7.1M',
            likeTotal: '232.6M',
        },
        {
            srcImage: images.account.manhtienkhoi,
            nickname: 'manhtienkhoi_',
            tick: false,
            desc: 'Mạnh Tiến Khôi 🐯',
            followState: false,
            followTotal: '5M',
            likeTotal: '341.2M',
        },
        {
            srcImage: images.account.luongthingocha,
            nickname: 'luongthingocha',
            tick: true,
            desc: '𝐍𝐠𝐚̂𝐧 𝐇𝐚̀',
            followState: false,
            followTotal: '6.2M',
            likeTotal: '214.6M',
        },
        {
            srcImage: images.account.theanh28entertainment,
            nickname: 'theanh28entertainment',
            tick: true,
            desc: 'Theanh28 Entertainment',
            followState: false,
            followTotal: '7.8M',
            likeTotal: '547.6M',
        },
        {
            srcImage: images.account.yeah1trending,
            nickname: 'yeah1.trending',
            tick: true,
            desc: 'Yeah1 Trending',
            followState: false,
            followTotal: '5.8M',
            likeTotal: '260.6M',
        },
    ];
    const [seeall, setSeeall] = useState(false);
    const handleSeeall = () => {
        setSeeall(!seeall);
    };

    return (
        <div className={cx('user-container')}>
            <div className={cx('wrapper')}>
                <p className={cx('title')}>Following accounts</p>
                {account.map((e, key) => (
                    <div key={key} className={cx('items')}>
                        <AccountItem
                            key={key}
                            srcImage={e.srcImage}
                            title={e.nickname}
                            tick={e.tick}
                            desc={e.desc}
                            to={`/@${e.nickname}`}
                            stateAccount={key > 4 ? seeall : true}
                            followState={e.followState}
                            followTotal={e.followTotal}
                            likeTotal={e.likeTotal}
                        />
                    </div>
                ))}

                <div className={cx('show-more')}>
                    <p className={cx('see-all')} onClick={() => handleSeeall()}>
                        {!seeall ? 'See more' : 'See less'}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default FollowingAccounts;
