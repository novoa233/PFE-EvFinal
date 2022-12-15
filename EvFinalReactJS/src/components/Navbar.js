import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={'/landing'}>
              mi empresa
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={'/ingreso'}>
                    Ingresa
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/registro'}>
                    Regístrate
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/dashboard'}>
                    Dashboard
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
  )
}
