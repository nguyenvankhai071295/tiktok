import styles from './SuggestedAccounts.module.scss';
import classNames from 'classnames/bind';
import AccountItem from '../AccountItem';
import images from '~/assets/images';
const cx = classNames.bind(styles);
function SuggestedAccounts() {
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
            tick: false,
            desc: 'Theanh28 Entertainment',
            followState: false,
            followTotal: '7.8M',
            likeTotal: '547.6M',
        },
    ];
    return (
        <div className={cx('user-container')}>
            <div className={cx('wrapper')}>
                <p className={cx('title')}>Suggested accounts</p>
                {account.map((e) => (
                    <AccountItem
                        srcImage={e.srcImage}
                        title={e.nickname}
                        tick={e.tick}
                        desc={e.desc}
                        to={`/@${e.nickname}`}
                    />
                ))}
                <div className={cx('show-more')}>
                    <p className={cx('see-all')}>See all</p>
                </div>
            </div>
        </div>
    );
}

export default SuggestedAccounts;
