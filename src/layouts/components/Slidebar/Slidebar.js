import styles from './Slidebar.module.scss';
import classNames from 'classnames/bind';

import Menu, { MenuItem } from './Menu/';
import SuggestedAccounts from '~/components/SuggestedAccounts';
import config from '~/config';
import Footer from '~/components/Footer';
import {
    HomeIcon,
    HomeActiveIcon,
    UserGroupIcon,
    UserGroupActiveIcon,
    LabanIcon,
    LabanActiveIcon,
    CameraIcon,
    CameraActiveIcon,
} from '../Icons';

const cx = classNames.bind(styles);

function Slidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu className={cx('menu')}>
                <MenuItem
                    title="For You"
                    to={config.routes.home}
                    icon={<HomeIcon />}
                    iconActive={<HomeActiveIcon />}
                />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<UserGroupIcon />}
                    iconActive={<UserGroupActiveIcon />}
                />
                <MenuItem
                    title="Explore"
                    to={config.routes.explore}
                    icon={<LabanIcon />}
                    iconActive={<LabanActiveIcon />}
                />
                <MenuItem
                    title="LIVE"
                    to={config.routes.live}
                    icon={<CameraIcon />}
                    iconActive={<CameraActiveIcon />}
                />
            </Menu>
            <SuggestedAccounts label="Following accounts" />
            <Footer />
        </aside>
    );
}

export default Slidebar;
