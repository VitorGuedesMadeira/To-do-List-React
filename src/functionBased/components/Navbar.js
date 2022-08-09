import React from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="navigation">
        <span>Vitor Guedes</span>
        <ul>
            <li>
                <Link to="/" className="links">Home</Link>
            </li>
            <li>
                <Link to="/About" className="links">About</Link>
            </li>
            <li>
                <Link to="/NotMatch" className="links">NotMatch</Link>
            </li>
        </ul>
    </nav>
  )
}
export default Navbar