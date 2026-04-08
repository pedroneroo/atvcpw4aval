import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import Detalhes from "./pages/detalhes"
import Favoritos from "./pages/favoritos"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/curso/:id" element={<Detalhes />} />
        <Route path="/favoritos" element={<Favoritos />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App