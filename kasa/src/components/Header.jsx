import { NavLink } from "react-router-dom"
import logo from "../images/LogoKasa.png"

function Header() {
  return (
    <header>
      <div><img src={logo} alt="Logo de Kasa" /></div>
      <nav>
        <NavLink to="/" end className={({ isActive }) => (isActive ? "active-header" : "")}>Accueil</NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? "active-header" : "")}>A Propos</NavLink>
      </nav>
    </header>
  )
}

export default Header