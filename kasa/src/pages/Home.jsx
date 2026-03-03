import Banner from "../components/Banner"
import Card from "../components/Card"
import logements from "../data/logements.json"


function Home() {
  return (
    <div className="home">
      <Banner />
      <section className="card-handler">

        {logements.map((logement) => (
          <Card key={logement.id} logement={logement} />
        ))}
      </section>
    </div>
  )
}

export default Home