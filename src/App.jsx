import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Hombre from "./pages/Hombre"
import Mujer from "./pages/Mujer"
import Cosas from "./pages/Cosas"
import Tienda from "./pages/Tienda"

function App() {

  return (
    <>
     <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/hombre" element={<Hombre/>}></Route>
      <Route path="/mujer" element={<Mujer/>}></Route>
      <Route path="/cosas" element={<Cosas/>}></Route>
      <Route path="/tienda" element={<Tienda/>}></Route>
     </Routes>
    </>
  )
}

export default App
