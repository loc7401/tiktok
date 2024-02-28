import classNames from 'classnames/bind';

import styles from './Footer.module.scss';
import Image from '~/components/Image';

const cx = classNames.bind(styles);
function Footer() {
    return (
        <div className={cx('wrapper')}>
            <a className={cx('effect-link')} href="https://www.tiktok.com/foryou">
                <Image
                    className={cx('effect-image')}
                    src="https://sf16-website-login.neutral.ttwstatic.com/obj/tiktok_web_login_static/tiktok/webapp/main/webapp-desktop/045b2fc7c278b9a30dd0.png"
                    alt=""
                />
                <div className={cx('effect-content')}>
                    <img
                        className={cx('effect-logo')}
                        src="https://lf16-effect.tiktokcdn.com/obj/tiktok-effect-public-us/icons/effecthouse-icon-48x48.png"
                        alt=""
                    />
                    <span className={cx('effect-title')}>Create effects</span>
                </div>
            </a>

            <div className={cx('footer-wrapper')}>
                <a href="https://www.tiktok.com/about?lang=en" alt="">
                    About
                </a>
                <a href="https://www.tiktok.com/about?lang=en" alt="">
                    Newsroom
                </a>
                <a href="https://www.tiktok.com/about?lang=en" alt="">
                    Contact
                </a>
                <a href="https://www.tiktok.com/about?lang=en" alt="">
                    Careers
                </a>
            </div>

            <div className={cx('footer-wrapper')}>
                <a href="https://www.tiktok.com/about?lang=en" alt="">
                    Tiktok for Good
                </a>
                <a href="https://www.tiktok.com/about?lang=en" alt="">
                    Advertise
                </a>
                <br />
                <a href="https://www.tiktok.com/about?lang=en" alt="">
                    Developer
                </a>
                <a href="https://www.tiktok.com/about?lang=en" alt="">
                    Transparency
                </a>
                <br />
                <a href="https://www.tiktok.com/about?lang=en" alt="">
                    Tiktok Rewards
                </a>
                <a href="https://www.tiktok.com/about?lang=en" alt="">
                    Tiktok Embeds
                </a>
            </div>

            <div className={cx('footer-wrapper')}>
                <a href="https://www.tiktok.com/about?lang=en" alt="">
                    Help
                </a>
                <a href="https://www.tiktok.com/about?lang=en" alt="">
                    Safety
                </a>
                <a href="https://www.tiktok.com/about?lang=en" alt="">
                    Terms
                </a>
                <a href="https://www.tiktok.com/about?lang=en" alt="">
                    Privacy
                </a>
                <br />
                <a href="https://www.tiktok.com/about?lang=en" alt="">
                    Creator Portal
                </a>
                <br />
                <a href="https://www.tiktok.com/about?lang=en" alt="">
                    Comunity Guidelines
                </a>
            </div>

            <div className={cx('footer-wrapper')}>
                <span>© 2023 TikTokk</span>
            </div>
        </div>
    );
}

export default Footer;
