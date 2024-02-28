import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import 'tippy.js/dist/tippy.css';
import Tippy from '@tippyjs/react';
import styles from './Header.module.scss';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import images from '~/assets/images';
import Image from '~/components/Image';
import Search from '../Search';
import {
    UserIcon,
    CreatorIcon,
    DeviceIcon,
    EnglishIcon,
    FavoriteIcon,
    FeedbackIcon,
    GetcoinIcon,
    KeyBoardIcon,
    LogoutIcon,
    MessageIcon,
    SettingIcon,
    InboxIcon,
} from '../Icons';
const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        icon: <EnglishIcon />,
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
        icon: <FeedbackIcon />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <KeyBoardIcon />,
        title: 'Keyboard shortcuts',
    },
];

const currentUser = true;

const userMenu = [
    {
        icon: <UserIcon />,
        title: 'View Profile',
        to: '/profile',
    },
    {
        icon: <FavoriteIcon />,
        title: 'Favorite',
        to: '/feedback',
    },
    {
        icon: <GetcoinIcon />,
        title: 'Get Coins',
        to: '/feedback',
    },
    {
        icon: <CreatorIcon />,
        title: 'LIVE Creator Hub',
        to: '/feedback',
    },
    {
        icon: <SettingIcon />,
        title: 'Setting',
        to: '/following',
    },
    ...MENU_ITEMS,
    {
        icon: <LogoutIcon />,
        title: 'Log Out',
        to: '/feedback',
        separate: true,
    },
];
function Header() {
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
                <a href="https://www.tiktok.com/" className={cx('logo')}>
                    <img src={images.logo} alt="tiktok"></img>
                </a>

                <Search />

                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            <Button text leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                                <span> Upload</span>
                            </Button>
                            <button className={cx('action-btn')}>
                                <DeviceIcon width="2.6rem" height="2.6rem" className={cx('device-img')} />
                            </button>
                            <Tippy content="Message" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon
                                        width="2.6rem"
                                        height="2.6rem"
                                        className={cx('message-img')}
                                    />
                                </button>
                            </Tippy>
                            <Tippy content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon width="3.4rem" height="3.4rem" />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                                <span> Upload</span>
                            </Button>
                            <Button primary>Log in</Button>
                            <DeviceIcon width="2.6rem" height="2.6rem" className={cx('device-icon')} />
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
