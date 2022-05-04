import React from 'react'
import api from '../api'
// import logo from '../logo.svg'
import { Link, NavLink } from 'react-router-dom'
import { withRouter } from 'react-router'
import logo from "../assets/images/AeroDepotT.png"

function MainNavbar(props) {
  console.log('PROPS ::: ', props);
  function handleLogoutClick(e) {
    api.logout()
  }

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src={logo} alt="" width="150" height="60" />
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                {/* <a class="nav-link active" aria-current="page" href="#">Home</a> */}
              </li>
            </ul>
            <form class="d-flex">

              <a class="nav-link aeroLink" aria-current="page" href="mailto:alain@aero-depot.com">Contact Us</a>

            </form>
            {/* <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><hr class="dropdown-divider" /></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled">Disabled</a>
              </li>
            </ul>
            <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form> */}
          </div>
        </div>
      </nav>
    </div>
  )
  // return (
  //   <nav className="App-header">
  //     <img src={logo} className="App-logo" alt="logo" />
  //     <h1 className="App-title">MERN Boilerplate</h1>
  //     <NavLink to="/" exact>
  //       Home
  //     </NavLink>
  //     <NavLink to="/countries">Countries</NavLink>
  //     <NavLink to="/add-country">Add country</NavLink>
  //     {!api.isLoggedIn() && <NavLink to="/signup">Signup</NavLink>}
  //     {!api.isLoggedIn() && <NavLink to="/login">Login</NavLink>}
  //     {api.isLoggedIn() && (
  //       <Link to="/" onClick={handleLogoutClick}>
  //         Logout
  //       </Link>
  //     )}
  //     <NavLink to="/secret">Secret</NavLink>
  //   </nav>
  // )
}

export default withRouter(MainNavbar)
