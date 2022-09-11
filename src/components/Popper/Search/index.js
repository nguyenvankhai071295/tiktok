import styles from './Search.module.scss';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import AccountItems from '~/components/AccountItems';
import { useState, useEffect } from 'react';

const cx = classNames.bind(styles);
function Search({ children, event }) {
    const [searchResult, setSearchResult] = useState([]);
    useEffect(() => {
        return () => {
            setTimeout(() => {
                return setSearchResult([]);
            }, 5000);
        };
    }, []);
    return (
        <Tippy
            interactive
            visible={searchResult.length > 0}
            placement={'bottom-end'}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <h4 className={cx('result-title')}>Accounts</h4>
                    <div className={cx('account-items')}>
                        <AccountItems />
                        <AccountItems />
                        <AccountItems />
                        <AccountItems />
                        <AccountItems />
                        <AccountItems />
                        <AccountItems />
                        <AccountItems />
                        <AccountItems />
                        <AccountItems />
                        <AccountItems />
                        <AccountItems />
                        <AccountItems />
                        <AccountItems />
                        <AccountItems />
                        <AccountItems />
                    </div>
                    <div className={cx('result-for')}>View all results for {event ? JSON.stringify(event) : ''}</div>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Search;
