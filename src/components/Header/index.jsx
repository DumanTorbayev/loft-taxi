import React, {useState} from 'react'
import styles from './header.module.scss'
import logo from '../../assets/images/logo-h.svg'
import burgerMenu from '../../assets/images/burger-menu-icon.svg'
import closeMenu from '../../assets/images/close.svg'
import {NavLink} from 'react-router-dom'
import {useActions} from '../../hooks/useActions'
import {routesPath} from '../RootRouter'
import Constant from '../../constants'
import classnames from 'classnames'

export const Header = () => {
  const {logout} = useActions()
  const [isOpen, setIsOpen] = useState(false)

  const handleLogout = (e) => {
    e.preventDefault()
    logout()
    localStorage.removeItem(Constant.ACCESS_TOKEN)
    localStorage.removeItem(Constant.AUTH)
  }

  const handleMenuOpenClick = () => {
    setIsOpen(true)
  }

  const handleMenuCloseClick = () => {
    setIsOpen(false)
  }

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.navbarBrand}>
          <img src={logo} alt="Loft taxi" />
        </div>
        <ul
          className={classnames(styles.navbarList, {
            [styles.navbarListActive]: isOpen,
          })}
        >
          <li
            className={classnames(styles.navbarItem, styles.navbarItemLocation)}
          >
            <NavLink
              to={routesPath.order}
              activeClassName={styles.navbarLinkActive}
              className={styles.navbarLink}
              onClick={handleMenuCloseClick}
            >
              Карта
            </NavLink>
          </li>
          <li className={classnames(styles.navbarItem, styles.navbarItemUser)}>
            <NavLink
              to={routesPath.profile}
              activeClassName={styles.navbarLinkActive}
              className={styles.navbarLink}
              onClick={handleMenuCloseClick}
            >
              Профиль
            </NavLink>
          </li>
          <li
            className={classnames(styles.navbarItem, styles.navbarItemLogout)}
          >
            <a href="#" onClick={handleLogout} className={styles.navbarLink}>
              Выйти
            </a>
          </li>
          <li className={styles.navbarCloseMenu} onClick={handleMenuCloseClick}>
            <img src={closeMenu} alt="close menu" />
          </li>
        </ul>
        <div className={styles.navbarMobileMenu} onClick={handleMenuOpenClick}>
          <img src={burgerMenu} alt="Mobile menu btn" />
        </div>
      </nav>
    </header>
  )
}
