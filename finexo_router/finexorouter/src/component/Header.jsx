import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="header_section" style={{backgroundColor:'black',color:''}}>
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg custom_nav-container">
              <a className="navbar-brand" href="index.html">
                <span>Finexo</span>
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className=""></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                  <li className="nav-item active">
                    {/* <a className="nav-link" href="index.html">
                      Home <span className="sr-only">(current)</span>
                    </a> */}
                    <Link to={'/'} className="nav-link">Home</Link>
                  </li>
                  <li className="nav-item">
                    {/* <a className="nav-link" href="about.html">
                      About
                    </a> */}
                    <Link to={'/about'} className="nav-link">About</Link>
                  </li>
                  <li className="nav-item">
                    {/* <a className="nav-link" href="service.html">
                      Services
                    </a> */}
                    <Link to={'/services'} className="nav-link">Services</Link>
                  </li>
                  <li className="nav-item">
                    {/* <a className="nav-link" href="why.html">
                      Why Us
                    </a> */}
                    <Link to={'/why'} className="nav-link">Why us</Link>
                  </li>
                  <li className="nav-item">
                    {/* <a className="nav-link" href="team.html">
                      Team
                    </a> */}
                    <Link to={'/team'} className="nav-link">Team</Link>
                  </li>
                  <li className="nav-item">
                    {/* <a className="nav-link" href="#">
                      <i className="fa fa-user" aria-hidden="true"></i> Login
                    </a> */}
                    <Link to={'/login'} className="nav-link">Login</Link>
                  </li>
                  <form className="form-inline">
                    <button className="btn my-2 my-sm-0 nav_search-btn" type="submit">
                      <i className="fa fa-search" aria-hidden="true"></i>
                    </button>
                  </form>
                </ul>
              </div>
            </nav>
          </div>
        </header>
  )
}

export default Header
