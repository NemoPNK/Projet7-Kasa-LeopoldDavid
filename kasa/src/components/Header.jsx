import { Link } from "react-router-dom"
import logo from "../images/LogoKasa.png"

function Header() {
  return (
    <header>
      <div><img src={logo} alt="Logo de Kasa" /></div>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/about">A Propos</Link>
      </nav>
    </header>
  )
}

export default Header