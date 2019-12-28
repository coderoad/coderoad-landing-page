import React from "react"
import PropTypes from "prop-types"

import Button from "../components/button"
import headerImage from "../images/header.png"
import mockupFrame from "../images/sample.png"

const Header = ({ siteTitle }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      padding: "4rem 1rem",
    }}
  >
    <div
      style={{
        backgroundImage: `url(${headerImage})`,
        position: "absolute",
        top: 0,
        zIndex: -5,
        height: "100vh",
        width: "100vw",
        opacity: 0.5,
      }}
    /> 
    <h1 style={{ textAlign: "center" }}>CodeRoad</h1>
    <p style={{ textAlign: "center", maxWidth: 440 }}>
      The VSCode extension for interactive coding tutorials.
    </p>
    <a href='http://eepurl.com/gKj3bD' target='_blank'>
      <Button>Get Early Access</Button>
    </a>
    <div style={{ margin: 30, marginTop: 60, position: "relative" }}>
        <img
          src={mockupFrame}
          alt="outlines of shapes and confetti in the background "
        />
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
