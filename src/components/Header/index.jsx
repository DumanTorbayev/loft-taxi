import React from 'react';
import styles from './header.module.scss'
import logo from '../../assets/images/logo-h.svg'
import {NavLink} from "react-router-dom";
import {useActions} from "../../hooks/useActions";
import {routesPath} from "../RootRouter";
import CONSTANTS from "../../constants";

export const Header = () => {
    const {logout} = useActions()

    const handleLogout = e => {
        e.preventDefault()
        logout()
        localStorage.removeItem(CONSTANTS.ACCESS_TOKEN)
        localStorage.removeItem(CONSTANTS.AUTH)
    }

    return (
        <header className={styles.header}>
            <nav className={styles.navbar}>
                <div className={styles['navbar__brand']}>
                    <img src={logo} alt="Loft taxi"/>
                </div>
                <ul className={styles['navbar__list']}>
                    <li className={styles['navbar__item']}>
                        <NavLink
                            to={routesPath.order}
                            activeClassName={styles['navbar__link--active']}
                            className={styles['navbar__link']}
                        >
                            Карта
                        </NavLink>
                    </li>
                    <li className={styles['navbar__item']}>
                        <NavLink
                            to={routesPath.profile}
                            activeClassName={styles['navbar__link--active']}
                            className={styles['navbar__link']}
                        >
                            Профиль
                        </NavLink>
                    </li>
                    <li className={styles['navbar__item']}>
                        <a href="#" onClick={handleLogout} className={styles['navbar__link']}>Выйти</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};