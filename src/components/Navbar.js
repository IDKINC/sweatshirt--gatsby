import React from 'react'
import { Link } from 'gatsby'

import AniLink from "gatsby-plugin-transition-link/AniLink"
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <AniLink cover bg="#9C27B0" to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="Sweatshirt" style={{ width: '20vw', height: 'auto' }} />
            </AniLink>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <AniLink cover bg="#9C27B0" className="navbar-item" to="/portfolio">
                Portfolio
              </AniLink>
              <AniLink cover bg="#9C27B0" className="navbar-item" to="/team">
                Team
              </AniLink>
              <AniLink cover bg="#9C27B0" className="navbar-item" to="/about">
                About
              </AniLink>
              <AniLink cover bg="#9C27B0" className="navbar-item" to="/contact">
                Contact
              </AniLink>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
