import styles from './HomePage.module.scss';
import classNames from 'classnames/bind';
import * as videoService from '~/apiServices/videoService';
import { useState, useEffect } from 'react';
import MainHome from './MainHome';
const cx = classNames.bind(styles);
function Home() {
    const [video, setVideo] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        const fetchVideo = async () => {
            const res = await videoService.video('for-you', page);
            setVideo((olddata) => [...olddata, ...res]);
        };
        fetchVideo();
        // eslint-disable-next-line
    }, [page]);
    const handleScroll = (e) => {
        if (e.target.documentElement.scrollTop + window.innerHeight >= e.target.documentElement.scrollHeight) {
            setPage((page) => page + 1);
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
        // eslint-disable-next-line
    }, []);

    return (
        <div className={cx('home-page')}>
            <div className={cx('wrapper')}>
                {video.map((e, key) => {
                    return <MainHome key={key} data={e} user={e.user} />;
                })}
            </div>
        </div>
    );
}

export default Home;
