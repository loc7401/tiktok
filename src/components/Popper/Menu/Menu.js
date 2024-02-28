import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import Header from './Header';
import { useState } from 'react';

const cx = classNames.bind(styles);
const defaultFn = () => {};
function Menu({ children, items = [], hideOnClick = false, onChange = defaultFn }) {
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
    const handleReset = () => {
        setHistory((history) => history.slice(0, 1));
    };
    return (
        <Tippy
            placement="bottom-end"
            interactive
            hideOnClick={hideOnClick}
            delay={[0, 500]}
            onHide={handleReset}
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        {history.length > 1 && (
                            <Header
                                title={current.title}
                                onBack={() => {
                                    setHistory((history) => history.slice(0, history.length - 1));
                                }}
                            ></Header>
                        )}
                        <div className={cx('menu-body')}>{renderItem()}</div>
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    hideOnClick: PropTypes.bool,
    onChange: PropTypes.func,
};

export default Menu;
