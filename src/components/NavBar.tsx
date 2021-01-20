import React, { useState } from "react"
import { Link } from "react-router-dom"

// Assets
import doubleArrowRight from "../assets/double-arrow-right.svg"
import navBarLogo from "../assets/navbar-logo/navbar-logo.svg"
// Utils
import { bounceIn, zoomIn } from "../utils/animateCss/animateCss"
import {
  facebook,
  linkedin,
  mailTo,
  twitter,
} from "../utils/social-links/socialLinks"

export default function NavBar(): JSX.Element {
  // State that handles the icons to be seen
  const [showIcons, setShowIcons] = useState<Boolean>(false)

  const handleShowIcons = (): void => {
    setShowIcons(!showIcons)
  }

  return (
    <div id="hero" className="NavBar">
      <div className="NavBar__logo">
        <h1 className={`NavBar__logo-title ${bounceIn}`}>
          <Link to="/">
            <img src={navBarLogo} alt="navbar-logo" />
            LuisFer
          </Link>
        </h1>
      </div>
      <div className={`NavBar__links {fadeIn}`}>
        <Link to="/">Home</Link>
        <Link to="/contact-me">Contact me</Link>
        <div className="NavBar__social-media">
          <span
            className={
              showIcons
                ? "NavBar__social-media__span"
                : "NavBar__social-media__span NavBar__notShowIcons-rounded"
            }
            onClick={handleShowIcons}
          >
            <img
              src={doubleArrowRight}
              alt="double-arrow-right"
              className={showIcons ? "" : "NavBar__img-volted"}
            />
            Social Media
            {showIcons ? ":" : ""}
          </span>

          {showIcons ? (
            <div className="NavBar__social-media-icons">
              <div className={`NavBar__social-media-icons-anchors ${zoomIn}`}>
                <a href={facebook} target="_blank" rel="noreferrer">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href={twitter} target="_blank" rel="noreferrer">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href={linkedin} target="_blank" rel="noreferrer">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href={mailTo} target="_blank" rel="noreferrer">
                  <i className="fas fa-paper-plane"></i>
                </a>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  )
}
