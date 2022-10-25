import MenuItem from '../MenuItem';
import routes from '~/components/config/routes';
import { Home, Live, Follow, HomeClick, LiveClick, FollowClick } from '~/components/Icons';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function Menu() {
    return (
        <div className={cx('menu')}>
            <MenuItem to={routes.home} title={'For You'} iconDefault={<HomeClick />} iconActive={<Home />} />
            <MenuItem to={routes.following} title={'Following'} iconDefault={<Follow />} iconActive={<FollowClick />} />
            <MenuItem to={routes.live} title={'LIVE'} iconDefault={<Live />} iconActive={<LiveClick />} />
        </div>
    );
}

export default Menu;
