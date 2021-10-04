import React, {useState} from 'react';
import styles from './header.module.scss'
import logo from '../../assets/images/logo-h.svg'
import burgerMenu from '../../assets/images/burger-menu-icon.svg'
import closeMenu from '../../assets/images/close.svg'
import {NavLink} from "react-router-dom";
import {useActions} from "../../hooks/useActions";
import {routesPath} from "../RootRouter";
import CONSTANTS from "../../constants";
import classnames from "classnames";

export const Header = () => {
    const {logout} = useActions()
    const [isOpen, setIsOpen] = useState(false)

    const handleLogout = e => {
        e.preventDefault()
        logout()
        localStorage.removeItem(CONSTANTS.ACCESS_TOKEN)
        localStorage.removeItem(CONSTANTS.AUTH)
    }

    const menuOpen = () => {
        setIsOpen(true)
    }

    const menuClose = () => {
        setIsOpen(false)
    }

    return (
        <header className={styles.header}>
            <nav className={styles.navbar}>
                <div className={styles['navbar__brand']}>
                    <img src={logo} alt="Loft taxi"/>
                </div>
                <ul className={classnames(styles['navbar__list'], {[styles['navbar__list--active']]: isOpen})}>
                    <li className={styles['navbar__item']}>
                        <NavLink
                            to={routesPath.order}
                            activeClassName={styles['navbar__link--active']}
                            className={styles['navbar__link']}
                            onClick={menuClose}
                        >
                            Карта
                        </NavLink>
                    </li>
                    <li className={styles['navbar__item']}>
                        <NavLink
                            to={routesPath.profile}
                            activeClassName={styles['navbar__link--active']}
                            className={styles['navbar__link']}
                            onClick={menuClose}
                        >
                            Профиль
                        </NavLink>
                    </li>
                    <li className={styles['navbar__item']}>
                        <a href="#" onClick={handleLogout} className={styles['navbar__link']}>Выйти</a>
                    </li>
                    <li className={styles['navbar__close-menu']} onClick={menuClose}>
                        <img src={closeMenu} alt="close menu"/>
                    </li>
                </ul>
                <div
                    className={styles['mobile-menu']}
                    onClick={menuOpen}
                >
                    <img src={burgerMenu} alt="Mobile menu btn"/>
                </div>
            </nav>
        </header>
    );
};