import React from "react"
import { NavLink } from "react-router-dom"
import "./CSS/Nav.css"
//icons
//icons;
import { SiGithub } from "react-icons/si"

function Nav(props) {
  const linkToGithub = () => {
    window.open("https://github.com/five1star", "_blank")
  }

  return (
    <div className="menu w-full inline-flex items-center justify-center">
      <ul className="inline-flex">
        <NavLink exact to="/" className="0" activeClassName="active">
          <li>HB OH</li>
          <span className="spanActive"></span>
        </NavLink>
        <NavLink to="/readme" className="1" activeClassName="active">
          <li>README</li>
          <span className="spanActive"></span>
        </NavLink>
        <NavLink to="/project" className="2" activeClassName="active">
          <li>PROJECT</li>
          <span className="spanActive"></span>
        </NavLink>
      </ul>
      <button
        className="githubbox ml-auto mb-2 inline-flex items-center justify-center"
        onClick={linkToGithub}
      >
        <div className="ml-2 pr-2 border-r">
          <SiGithub size={20} />
        </div>
        <p className="githubPtag">Github</p>
      </button>
    </div>
  )
}

export default Nav
