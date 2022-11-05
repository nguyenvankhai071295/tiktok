import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import images from '~/assets';
import Item from './Item';
import { useState } from 'react';
import Header from './Header';
import PropTypes from 'prop-types';
const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {
    const [history, setHistory] = useState([{ data: items }]);
    const [addClass, setAddClass] = useState('');
    const final = history[history.length - 1];
    const renderItem = () => {
        return final.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <Item
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setAddClass('children');
                            setHistory((prev) => [...prev, item.children]);
                        }
                    }}
                />
            );
        });
    };
    return (
        <Tippy
            interactive={true}
            placement={'bottom-end'}
            hideOnClick={'false'}
            delay={[0, 750]}
            offset={[10, 10]}
            onHide={() => {
                setAddClass('');
                setHistory((prev) => {
                    return prev.slice(0, 1);
                });
            }}
            render={(attrs) => (
                <div className={cx('show-more', addClass)} tabIndex="-1" {...attrs}>
                    <img className={cx('arrow-up')} src={images.arrowup} alt="" />
                    {history.length > 1 && (
                        <Header
                            onBack={() => {
                                setAddClass('');
                                setHistory((prev) => {
                                    return prev.slice(0, history.length - 1);
                                });
                            }}
                        />
                    )}
                    <ul className={cx('see-more-poppup')}>{renderItem()}</ul>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}
Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
};
export default Menu;
