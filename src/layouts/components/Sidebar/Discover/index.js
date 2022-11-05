import styles from './Discover.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets';
import Image from '~/components/Image';
import { Link } from 'react-router-dom';
import { Music } from '~/components/Icons';
const cx = classNames.bind(styles);

function Discover() {
    return (
        <div className={cx('discover')}>
            <p className={cx('discover-title')}>Discover</p>
            <div className={cx('discover-list')}>
                <Link className={cx('item')} to={'#'}>
                    <Image className={cx('logo')} src={images.tag} alt="Tag" />
                    <span className={cx('name')}>suthatla</span>
                </Link>
                <Link className={cx('item')} to={'#'}>
                    <Image className={cx('logo')} src={images.tag} alt="Tag" />
                    <span className={cx('name')}>mackedoi</span>
                </Link>
                <Link className={cx('item')} to={'#'}>
                    <Image className={cx('logo')} src={images.tag} alt="Tag" />
                    <span className={cx('name')}>sansangthaydoi</span>
                </Link>
                <Link className={cx('item')} to={'#'}>
                    <Music />
                    <span className={cx('name')}>Yêu Đơn Phương Là Gì (MEE Remix) - Mee Media & h0n</span>
                </Link>
                <Link className={cx('item')} to={'#'}>
                    <Music />
                    <span className={cx('name')}>
                        Về Nghe Mẹ Ru - NSND Bach Tuyet & Hứa Kim Tuyền & 14 Casper & Hoàng Dũng
                    </span>
                </Link>
                <Link className={cx('item')} to={'#'}>
                    <Music />
                    <span className={cx('name')}>Thiên Thần Tình Yêu - RICKY STAR</span>
                </Link>
                <Link className={cx('item')} to={'#'}>
                    <Image className={cx('logo')} src={images.tag} alt="Tag" />
                    <span className={cx('name')}>7749hieuung</span>
                </Link>
                <Link className={cx('item')} to={'#'}>
                    <Image className={cx('logo')} src={images.tag} alt="Tag" />
                    <span className={cx('name')}>genzlife</span>
                </Link>
                <Link className={cx('item')} to={'#'}>
                    <Music />
                    <span className={cx('name')}>Tình Đã Đầy Một Tim - Huyền Tâm Môn</span>
                </Link>
                <Link className={cx('item')} to={'#'}>
                    <Music />
                    <span className={cx('name')}>Thằng Hầu (Thái Hoàng Remix) [Short Version] - Dunghoangpham</span>
                </Link>
            </div>
        </div>
    );
}

export default Discover;
