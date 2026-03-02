import { Link } from "react-router-dom"

function Header() {
  return (
    <header>
      <nav>
        <p>header</p>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  )
}

export default Header