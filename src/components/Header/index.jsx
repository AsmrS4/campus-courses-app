import React from 'react';
import TemporaryDrawer from '../Drawer';
import styles from './Header.module.scss';

const Header = () => {
    return (
        <>
            <header className={styles.header}>
                <TemporaryDrawer />
                <div className={styles.title}>Кампусные курсы</div>
            </header>
        </>
    );
};

export default Header;
