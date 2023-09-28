import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
    faPlus,
    faEllipsisVertical,
    faGlobe,
    faCommentDollar,
    faKeyboard,
} from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import 'tippy.js/dist/tippy.css';
import Tippy from '@tippyjs/react/headless';

import styles from './Header.module.scss';
import images from '~/assets/images';
import device from '~/assets/device';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';

const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faGlobe} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'Eng',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'VN',
                    title: 'Việt Nam',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCommentDollar} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];
function Header() {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            // setSearchResult([1, 2, 3]);
        }, 0);
    }, []);

    const handleClick = (item) => {
        switch (item.type) {
            case 'language':
                //handle//
                break;
            default:
        }
    };
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="tiktok"></img>
                </div>

                <Tippy
                    placement="bottom-end"
                    interactive
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Accounts</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Search accounts and videos" spellCheck="false" />
                        <button className={cx('close-btn')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon icon={faSpinner} className={cx('loading')} />
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>

                <div className={cx('action')}>
                    <Button text leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                        <span> Upload</span>
                    </Button>
                    <Button primary>Log in</Button>
                    <img src={device.logo} className={cx('device-img')} alt="device"></img>

                    <Menu items={MENU_ITEMS} onChange={handleClick}>
                        <button className={cx('more')}>
                            {<FontAwesomeIcon icon={faEllipsisVertical} />}
                        </button>
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
