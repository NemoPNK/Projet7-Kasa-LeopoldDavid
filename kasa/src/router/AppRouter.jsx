import { Routes, Route, Navigate } from "react-router-dom"

import Home from "../pages/Home"
import About from "../pages/About"
import Logement from "../pages/Logement"
import Error from "../pages/Error"

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/logement/:id" element={<Logement />} />
      <Route path="/error" element={<Error />} />
      <Route path="*" element={<Navigate to="/error" replace />} />
    </Routes>
  )
}

export default AppRouter