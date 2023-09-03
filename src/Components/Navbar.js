import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Sleepy Panda</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
       
        <li className="nav-item">
          <a className="nav-link" href="/bitcoin">Bitcoin</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/apple">Apple</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/tesla">Tesla</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
      </div>
    )
  }
}
