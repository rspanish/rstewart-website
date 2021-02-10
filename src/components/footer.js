import React from "react"
import footerStyles from "./footer.module.scss"


const Footer = () => {
  return (
    <footer className={footerStyles.siteFooter}>
      <div className={footerStyles.container}>
      <p>
        No templates here! Website developed through a multitide of sources and continual trial and error! 
        &copy; {new Date().getFullYear().toString()}{" "}
      </p>
      </div>
    </footer>
  )
}

export default Footer