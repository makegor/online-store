import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import cn from 'classnames';

import logo from '../../assecs/images/logo.png';

const Header = (props) => {
    const [menuActive, setMenuActive] = React.useState(false);

    return (
        <header className={styles.header}>
            <div className={styles.header__logo}>
                <NavLink to="/">
                    <div className={styles.header__logotip}><img alt="" src={logo} /></div>
                </NavLink>
            </div>

            <div className={cn({ [styles._active]: menuActive }, styles.header__burger)} onClick={() => setMenuActive(!menuActive)} >
                <span></span>
            </div>

            <div className={cn({ [styles.header__menu_active]: menuActive }, styles.header__menu)} >

                <ul className={styles.header__list} >
                    <li>
                        <NavLink to={`/man`} className={styles.link}
                            activeClassName={styles.activ} onClick={() => setMenuActive(false)}>MAN</NavLink>
                    </li>
                    <li>
                        <NavLink to={`/woman`} className={styles.link}
                            activeClassName={styles.activ} onClick={() => setMenuActive(false)}>WOMAN</NavLink>
                    </li>
                    <li>
                        <NavLink to={`/kids`} className={styles.link}
                            activeClassName={styles.activ} onClick={() => setMenuActive(false)}>KIDS</NavLink>
                    </li>
                    <li>
                        <NavLink to="/buy/bag" className={styles.link}
                            activeClassName={styles.activ} onClick={() => setMenuActive(false)}>BAG</NavLink>
                    </li>
                </ul>
            </div>

        </header>
    )
}

export default Header;