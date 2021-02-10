import React from "react"
import { Link } from "gatsby"
import headerStyles from "./header.module.scss"


const Header = () => {
  return (
    <header className={headerStyles.header}>
      <div className="{headerStyles.overlay}"></div>
      <div className={headerStyles.heroContent}>
        <p className={headerStyles.brand}>
          <Link to="/">Robert Stewart</Link>
        </p>
        <p>Welcome to my website!</p>
      </div>
      <nav className={headerStyles.navContainer}>
        <ul className={headerStyles.navList}>
          <li>
            <Link to="/" activeClassName={headerStyles.activeMenuItem}>Home</Link>
          </li>
          <li>
            <Link to="/resume/" activeClassName={headerStyles.activeMenuItem}>Resume</Link>
          </li>
          <li>
            <Link to="/contact/" activeClassName={headerStyles.activeMenuItem}>Contact</Link>
          </li>
          <li>
            <Link to="/about/" activeClassName={headerStyles.activeMenuItem}>About</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header