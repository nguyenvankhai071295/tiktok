import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { BiSearch } from 'react-icons/bi';
import styles from './Search.module.scss';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import AccountItems from '~/components/AccountItems';
import { useState, useEffect } from 'react';
import { useDebounce } from '~/hooks';
import * as searchService from '~/apiServices/searchService';
const cx = classNames.bind(styles);

function FormSearch() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [searchFocus, setSearchFocus] = useState(true);
    const [loading, setLoading] = useState(false);
    const handleDelay = useDebounce(searchValue, 500);
    const handleClickOutSide = () => {
        return setSearchFocus(false);
    };
    const handleInputFocus = () => {
        return setSearchFocus(true);
    };
    const handleRemoveSearch = () => {
        setSearchResult([]);
        setSearchValue('');
    };
    const handleChangeSearch = (e) => {
        const searchForm = e.target.value;
        if (!searchForm.startsWith(' ')) {
            setSearchValue(searchForm);
        }
        if (searchForm.length === 0) {
            setSearchResult([]);
        }
    };
    useEffect(() => {
        if (!handleDelay.trim()) {
            return setSearchResult([]);
        }
        setLoading(true);

        //Axios;
        const fetchApi = async () => {
            setLoading(true);
            const res = await searchService.search(handleDelay);
            setSearchResult(res);
            setLoading(false);
        };

        fetchApi();
    }, [handleDelay]);

    return (
        <Tippy
            interactive
            visible={searchResult.length > 0 && searchFocus}
            placement={'bottom-end'}
            onClickOutside={handleClickOutSide}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <h4 className={cx('result-title')}>Accounts</h4>
                    <div className={cx('account-items')}>
                        {searchResult.map((e) => {
                            return <AccountItems key={e.id} props={e} />;
                        })}
                    </div>
                    <div className={cx('result-for')}>
                        View all results for {searchValue ? JSON.stringify(searchValue) : ''}
                    </div>
                </div>
            )}
        >
            <form className={cx('search-form')}>
                <input
                    onChange={(e) => handleChangeSearch(e)}
                    value={searchValue}
                    placeholder="Search accounts and videos"
                    autoComplete="off"
                    onFocus={handleInputFocus}
                />
                <div className={cx('actions')}>
                    {searchValue && !loading && (
                        <div onClick={() => handleRemoveSearch()} className={cx('action', 'clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </div>
                    )}
                    {loading && (
                        <div className={cx('action', 'loading')}>
                            <FontAwesomeIcon icon={faSpinner} />
                        </div>
                    )}
                </div>
                <span className={cx('spliter')}></span>
                <button className={cx('search-icon')} onClick={(e) => e.preventDefault()}>
                    <BiSearch color={searchValue ? 'rgba(22, 24, 35, 0.75)' : 'rgba(22, 24, 35, 0.34)'} />
                </button>
                <div className={cx('input-border')}></div>
            </form>
        </Tippy>
    );
}

export default FormSearch;
