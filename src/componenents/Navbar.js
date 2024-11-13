import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(page) {
  return (
    <nav className={`navbar navbar-expand-lg bg-${page.mode} navbar-${page.mode}`} >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {page.title}
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/" >Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
          </ul>
          <div className="btn-group" role="group" aria-label="Basic mixed styles example">
            <button type="button" className="btn btn-danger" onClick={page.theme.themeRed}>red</button>
            <button type="button" className="btn btn-warning" onClick={page.theme.themeYellow}>yellow</button>
            <button type="button" className="btn btn-success" onClick={page.theme.themeGreen}>green</button>
          </div>
          <div className="form-check form-switch">
            <input className="form-check-input" onClick={page.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className={`form-check-label text-${page.mode === 'light'?'dark':'light'}`} htmlFor="flexSwitchCheckDefault">{page.mode === 'light'?'Enable':'Disable'} dark mode</label>
          </div>

        </div>
      </div>
    </nav>
  )
}

Navbar.prototypes = {
  title: PropTypes.string.isRequired
}
