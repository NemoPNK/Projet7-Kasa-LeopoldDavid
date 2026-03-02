import { Link } from "react-router-dom"

function Home() {
  return (
    <div>
      <h1>Home</h1>

      <Link to="/about">
        <button>Aller vers About</button>
      </Link>

      <Link to="/logement/test123">
        <button>Aller vers Logement</button>
      </Link>
    </div>
  )
}

export default Home