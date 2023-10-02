import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
    faPlus,
    faEllipsisVertical,
} from '@fortawesome/free-solid-svg-icons';
import { faMessage, faUser } from '@fortawesome/free-regular-svg-icons';
import classNames from 'classnames/bind';
import 'tippy.js/dist/tippy.css';
import Tippy from '@tippyjs/react';
import TippyHeadless from '@tippyjs/react/headless';
import styles from './Header.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import images from '~/assets/icons/images';
import device from '~/assets/icons/device';
import message from '~/assets/icons/message';
import favorite from '~/assets/icons/favorite';
import getCoin from '~/assets/icons/getCoin';
import creator from '~/assets/icons/creator';
import english from '~/assets/icons/english';
import feedback from '~/assets/icons/feedback';
import keyboards from '~/assets/icons/keyboards';
import logOut from '~/assets/icons/logOut';
import setting from '~/assets/icons/setting';
import Image from '~/components/Image';

const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        icon: <img src={english.logo} className={cx('menu-icon')} alt="english"></img>,
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
        icon: <img src={feedback.logo} className={cx('menu-icon')} alt="feedback"></img>,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <img src={keyboards.logo} className={cx('menu-icon')} alt="keyboards"></img>,
        title: 'Keyboard shortcuts',
    },
];
function Header() {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            // setSearchResult([1, 2, 3]);
        }, 5);
    }, []);

    const handleClick = (item) => {
        switch (item.type) {
            case 'language':
                //handle//
                break;
            default:
        }
    };

    const currentUser = true;

    const userMenu = [
        {
            icon: <FontAwesomeIcon className={cx('menu-icon')} icon={faUser} />,
            title: 'View Profile',
            to: '/profile',
        },
        {
            icon: <img src={favorite.logo} className={cx('menu-icon')} alt="favorite"></img>,
            title: 'Favorite',
            to: '/feedback',
        },
        {
            icon: <img src={getCoin.logo} className={cx('menu-icon')} alt="getCoin"></img>,
            title: 'Get Coins',
            to: '/feedback',
        },
        {
            icon: <img src={creator.logo} className={cx('menu-icon')} alt="creator"></img>,
            title: 'LIVE Creator Hub',
            to: '/feedback',
        },
        {
            icon: <img src={setting.logo} className={cx('menu-icon')} alt="setting"></img>,
            title: 'Setting',
            to: '/feedback',
        },
        ...MENU_ITEMS,
        {
            icon: <img src={logOut.logo} className={cx('menu-icon')} alt="logOut"></img>,
            title: 'Log Out',
            to: '/feedback',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="tiktok"></img>
                </div>

                <TippyHeadless
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
                </TippyHeadless>

                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            <Button text leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                                <span> Upload</span>
                            </Button>
                            <button className={cx('action-btn')}>
                                <img src={device.logo} className={cx('device-img')} alt="device"></img>
                            </button>
                            <Tippy content="Message" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <img src={message.logo} className={cx('message-img')} alt="message"></img>
                                </button>
                            </Tippy>
                            <Tippy content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faMessage} />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                                <span> Upload</span>
                            </Button>
                            <Button primary>Log in</Button>
                            <img src={device.logo} className={cx('device-img')} alt="device"></img>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleClick}>
                        {currentUser ? (
                            <Image
                                alt="user-avatar"
                                className={cx('user-avatar')}
                                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7283796408564940806~c5_720x720.jpeg?x-expires=1696143600&x-signature=jJ9vSkMmUM0uWEUg5ERqNKq5naI%3D"
                                fallback="https://lh3.googleusercontent.com/ogw/AKPQZvyxYd_Fn9Wio2hbQXUOk-I2H5jZgl8bQUWV7P3FyQ=s32-c-mo"
                            />
                        ) : (
                            <button className={cx('more')}>
                                {<FontAwesomeIcon icon={faEllipsisVertical} />}
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
