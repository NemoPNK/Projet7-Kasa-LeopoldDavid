import Header from "../components/Header"
import Footer from "../components/Footer"

function Layout({ children }) {
  return (
    <>
      <div>
        <Header />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout