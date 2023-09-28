import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/5c98890331f20987545f2483aacf443d.jpeg?x-expires=1695441600&x-signature=VtuadmzRuOBphOsaqhOSSOZHzsk%3D"
                alt="picturegg"
            />
            <div className={cx('infor')}>
                <h4 className={cx('name')}>
                    <span>vo xuan loc</span>
                    <FontAwesomeIcon className={cx('icon')} icon={faCheckCircle} />
                </h4>
                <p className={cx('username')}>voxuanloc</p>
            </div>
        </div>
    );
}

export default AccountItem;
