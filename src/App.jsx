import Footer from "./components/Footer"
import Graficos from "./components/Graficos"
import Inicio from "./components/Inicio"
import NavBar from "./components/NavBar"
import Prevencao from "./components/Prevencao"
import Sintomas from "./components/Sintomas"
import Vacinacao from "./components/Vacinacao"

function App() {

  return (
    <>
      <NavBar />
      <Inicio />
      <Prevencao />
      <Sintomas />
      <Graficos />
      <Vacinacao />
      <Footer />
    </>
  )
}

export default App
