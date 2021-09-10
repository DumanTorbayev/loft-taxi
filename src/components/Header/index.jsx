import React from 'react';
import './index.scss'
import {NavLink} from "react-router-dom";
import {useActions} from "../../hooks/useActions";

export const Header = () => {
    const {logout} = useActions()

    const handleLogout = e => {
        e.preventDefault()
        logout()
        localStorage.removeItem('auth')
    }

    return (
        <header className="header">
            <nav className="navbar">
                <div className="navbar__brand">
                    <img src={`${process.env.PUBLIC_URL}/images/logo-h.svg`} alt="Loft taxi"/>
                </div>
                <ul className="navbar__list">
                    <li className="navbar__item">
                        <NavLink
                            to="/main/order"
                            activeClassName="navbar__link--active"
                            className="navbar__link"
                        >
                            Карта
                        </NavLink>
                    </li>
                    <li className="navbar__item">
                        <NavLink
                            to="/main/profile"
                            activeClassName="navbar__link--active"
                            className="navbar__link"
                        >
                            Профиль
                        </NavLink>
                    </li>
                    <li className="navbar__item">
                        <a href="#" onClick={handleLogout} className="navbar__link">Выйти</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};