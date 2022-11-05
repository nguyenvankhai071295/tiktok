import styles from './Video.module.scss';
import classNames from 'classnames/bind';
import { SoundMute, PlayVideo, Report, PauseVideo, SoundPlay } from '../Icons';
import React, { useRef, useState, useEffect } from 'react';
import Image from '../Image';
const cx = classNames.bind(styles);

function Video({ data }) {
    const [statusVideo, setStatusVideo] = useState(true);
    const [statusVolume, setStatusVolume] = useState(true);
    const vidRef = useRef();
    const handlePlayVideo = () => {
        vidRef.current.play();
    };
    const handlePauseVideo = () => {
        vidRef.current.pause();
    };

    const handleToggleStatusVideo = () => {
        setStatusVideo(!statusVideo);
        statusVideo ? handlePlayVideo() : handlePauseVideo();
    };
    const handleToggleStatusVolume = () => {
        setStatusVolume(!statusVolume);
    };
    const handleVolumeRange = (e) => {
        if (e.target.id === 'volume') {
            let target = e.target;
            if (e.target.type !== 'range') {
                target = document.getElementById('range');
            }
            const min = target.min;
            const max = target.max;
            const val = target.value;

            target.style.backgroundSize = ((val - min) * 100) / (max - min) + '% 100%';
        }
    };
    useEffect(() => {
        document.addEventListener('input', handleVolumeRange);
        return () => {
            document.removeEventListener('input', handleVolumeRange);
        };
        // eslint-disable-next-line
    }, []);
    return (
        <div className={cx('video')}>
            <div className={cx('video-content')}>
                <div className={cx('image')}>
                    <Image src={data.thumb_url} alt="Image Video"></Image>
                </div>
                <div className={cx('video-container')}>
                    <video ref={vidRef} src={data.file_url} muted={statusVolume}></video>
                </div>
            </div>
            <div className={cx('sound')}>
                <div className={cx('volume')}>
                    <input type="range" step="0.01" id={cx('volume')} />
                </div>
                <div className={cx('status')} onClick={handleToggleStatusVolume}>
                    {statusVolume ? <SoundMute /> : <SoundPlay />}
                </div>
            </div>
            <div className={cx('play')} onClick={handleToggleStatusVideo}>
                {statusVideo ? <PauseVideo /> : <PlayVideo />}
            </div>
            <div className={cx('report')}>
                <Report />
                <span>Report</span>
            </div>
        </div>
    );
}

export default Video;
