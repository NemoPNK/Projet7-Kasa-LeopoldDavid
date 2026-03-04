import { useParams } from "react-router-dom"
import logements from "../data/logements.json"
import Dropdown from "../components/Dropdown"
import Tag from "../components/Tag"
import Rating from "../components/Rating"
import Carrousel from "../components/Carrousel"

function Logement() {
  const { id } = useParams()

  const logement = logements.find((logement) => logement.id === id)

  if (!logement) {
    return <p>Logement introuvable</p>
  }

  return (
    <div className="logement">
      <Carrousel
        pictures={logement.pictures}
      />
      <div className="logement-content">
        <div className="text-tag">
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>
          <div className="tag">
            {logement.tags.map((tag) => (
              <Tag key={tag} label={tag} />
            ))}
          </div>
        </div>
        <div className="host-rating">
          <div className="host">
            <h2>{logement.host.name}</h2>
            <img src={logement.host.picture} alt={logement.host.name} />
          </div>
          <div className="rating">
            <Rating value={logement.rating} />
          </div>
        </div>
      </div>
      <div className="dropdown-handler">
        <Dropdown title="Description">
          <p>{logement.description}</p>
        </Dropdown>

        <Dropdown title="Équipements">
          <ul>
            {logement.equipments.map((equipement) => (
              <li key={equipement}>{equipement}</li>
            ))}
          </ul>
        </Dropdown>
      </div>
    </div>
  )
}

export default Logement