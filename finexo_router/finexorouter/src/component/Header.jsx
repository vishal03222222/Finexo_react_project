import React from 'react';
import { Link, NavLink } from 'react-router-dom'
const Header = () => {
  return (
    
     <header className="header_section" style={{position:"absolute"}}>
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
                  <Link to={'/'} className="nav-link">Home</Link>
                    <a>
                      hoe
                    </a>
                  </li>
                  <li className="nav-item active">
                  <Link to={'about'} className="nav-link">About</Link>
                    
                  </li>
                  <li className="nav-item active">
                    
                    <Link to={'Services'} className="nav-link">Services</Link>
                    
                  </li>
                  <li className="nav-item active">
                    
                    <Link to={'Why'} className="nav-link" >Why Us</Link>
                  </li>
                  <li className="nav-item active">
                    {/* <a className="nav-link" href="team.html">
                      Team
                    </a> */}
                    <Link to={'Team'} className="nav-link">Team</Link>

                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <i className="fa fa-user" aria-hidden="true"></i> Login
                    </a>
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
