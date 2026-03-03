import { Link } from "react-router-dom"

function Card({ logement }) {
  return (
    <Link to={`/logement/${logement.id}`}>
      <img src={logement.cover} alt={logement.title} />
      <h3>{logement.title}</h3>
    </Link>
  )
}

export default Card