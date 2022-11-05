import styles from './MainHome.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Image from '~/components/Image';
import Button from '~/components/Button';
import Video from '~/components/Video';
import { Heart, Comment, Share, Music } from '~/components/Icons';
const cx = classNames.bind(styles);
function MainHome({ data, user }) {
    return (
        <div className={cx('item')}>
            <Link className={cx('avatar')} to={`/@${user.nickname}`}>
                <Image src={user.avatar} />
            </Link>
            <div className={cx('content')}>
                <div className={cx('text-infor')}>
                    <div className={cx('text-wrapper')}>
                        <div className={cx('author')}>
                            <Link className={cx('author-anchor')} to={`/@${user.nickname}`}>
                                <h3 className={cx('author-title')}>{user.nickname}</h3>
                                <h4 className={cx('author-name')}>{user.first_name + ' ' + user.last_name}</h4>
                            </Link>
                        </div>
                        <div className={cx('btn-follow')}>
                            <Button small className={cx('btn')}>
                                Follow
                            </Button>
                        </div>

                        <p className={cx('text-desc')} to="/">
                            <span>{data.description}</span>
                        </p>
                        <div className={cx('music')}>
                            {' '}
                            <Music width="16px" height="16px" />
                            {data.music}
                        </div>
                    </div>
                </div>
                <div className={cx('video-infor')}>
                    <div className={cx('video-wrapper')}>
                        <Video data={data} />
                        <div className={cx('action-items')}>
                            <button className={cx('item')}>
                                <span className={cx('icon')}>
                                    <Heart />
                                </span>
                                <strong className={cx('text')}>{data.likes_count}</strong>
                            </button>
                            <button className={cx('item')}>
                                <span className={cx('icon')}>
                                    <Comment />
                                </span>
                                <strong className={cx('text')}>{data.comments_count}</strong>
                            </button>
                            <button className={cx('item')}>
                                <span className={cx('icon')}>
                                    <Share />
                                </span>
                                <strong className={cx('text')}>{data.comments_count}</strong>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainHome;
