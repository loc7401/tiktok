// import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import Image from '../Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('account-item')}>
            <Image
                className={cx('account-avatar')}
                src={
                    'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/2200133f5549c92679746a9d8bf8e92e~c5_100x100.jpeg?x-expires=1697875200&x-signature=X1Cgea4s25FPe%2FX%2Fd7oWiYFo%2FGw%3D'
                }
                alt=""
            />
            <div className={cx('account-infor')}>
                <div className={cx('account-name')}>
                    <strong className={cx('account-nickName')}>tngvie</strong>
                    <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />
                </div>
                <span className={cx('account-fullName')}>Tường Vy 🐐</span>
            </div>
        </div>
    );
}
AccountItem.propTypes = {};

export default AccountItem;
