import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import Header from './Header';
import { useState } from 'react';

const cx = classNames.bind(styles);
function Menu({ children, items = [], onChange }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];
    const renderItem = () => {
        return current.data.map((item, index) => {
            const isHasChildren = !!item.children;
            const isHaslogout = !!item.logout;

            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isHasChildren) {
                            setHistory((prev) => [...prev, item.children]);
                        } else if (isHaslogout) {
                            item.logout();
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };
    return (
        <Tippy
            placement="bottom-end"
            interactive
            trigger="click"
            delay={[0, 500]}
            onHide={() => setHistory((history) => history.slice(0, 1))}
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        {history.length > 1 && (
                            <Header
                                title="Language"
                                onBack={() => {
                                    setHistory((history) => history.slice(0, history.length - 1));
                                }}
                            ></Header>
                        )}
                        {renderItem()}
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
