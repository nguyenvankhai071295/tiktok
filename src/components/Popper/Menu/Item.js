import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import React from 'react';
import Popup from 'reactjs-popup';
import { VscClose } from 'react-icons/vsc';
import PropTypes from 'prop-types';
const cx = classNames.bind(styles);
function Item({ data, onClick }) {
    let classItem = data.classNames;
    return (
        <li className={cx(classItem)}>
            {data.type ? (
                <Popup
                    modal
                    nested
                    className={cx('popup-keyboard')}
                    trigger={
                        <button className={cx('item', 'btn-poppup')}>
                            <span className={cx('icon')}>{data.icon}</span>
                            <span className={cx('text')}>{data.title}</span>
                        </button>
                    }
                >
                    {(close) => (
                        <div className={cx('popup-container')}>
                            <button className={cx('close')} onClick={close}>
                                <VscClose />
                            </button>
                            {data.content}
                        </div>
                    )}
                </Popup>
            ) : (
                <Button className={cx('item')} to={data.to} line onClick={onClick}>
                    <span className={cx('icon')}>{data.icon}</span>
                    <span className={cx('text')}>{data.title}</span>
                </Button>
            )}
        </li>
    );
}
Item.propTypes = {
    data: PropTypes.object,
    onClick: PropTypes.func,
};
export default Item;
