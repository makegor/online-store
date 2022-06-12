import React from 'react'
import { NavLink, Link } from 'react-router-dom'

import cn from 'classnames'
import styles from './Header.module.css'
import logo from '../../assecs/images/logo.png'

const Header = () => {

    const [menuActive, setMenuActive] = React.useState<boolean>(false)

    return (
        <header className={styles.header}>
            <div className={styles.header__wrapper}>
                <div className={styles.header__logo}>
                    <NavLink to="/">
                        <div className={styles.header__logotip}><img alt="" src={logo} /></div>
                    </NavLink>
                </div>

                <div className={cn({ [styles._active]: menuActive }, styles.header__burger)} onClick={() => setMenuActive(!menuActive)} >
                    <span></span>
                </div>

                <Link to="/buy/bag" className={styles.header__basket} onClick={() => setMenuActive(false)} />

                <div className={cn({ [styles.header__menu_active]: menuActive }, styles.header__menu)} >

                    <ul className={styles.header__list} >
                        <li>
                            <NavLink to={`/man`} className={({ isActive }) => isActive ? styles.active : styles.link}
                                onClick={() => setMenuActive(false)}>MAN</NavLink>
                        </li>
                        <li>
                            <NavLink to={`/woman`} className={({ isActive }) => isActive ? styles.active : styles.link}
                                onClick={() => setMenuActive(false)}>WOMAN</NavLink>
                        </li>
                        <li>
                            <NavLink to={`/kids`} className={({ isActive }) => isActive ? styles.active : styles.link}
                                onClick={() => setMenuActive(false)}>KIDS</NavLink>
                        </li>
                        <li>
                            {!menuActive
                                ? <NavLink to="/buy/bag" className={({ isActive }) => isActive ? styles.active : styles.link}
                                    onClick={() => setMenuActive(false)}>BAG</NavLink>
                                : <NavLink to="/" className={styles.link}
                                    onClick={() => setMenuActive(false)}>NEW</NavLink>
                            }
                        </li>
                    </ul>
                </div>
            </div>
        </header >
    )
}

export default Header