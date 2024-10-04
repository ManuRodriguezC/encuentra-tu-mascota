import { useEffect, useState } from "react"
import { Header } from "./components/Header"
import { Mascotas } from "./components/Mascotas"
// import { mascotas } from "./store/mascotas"



function App() {

  const mascotas = [
    {
        "name": "Milo",
        "years": "3 años",
        "raza": "Border Collie",
        "address": "Bogota - Colombia",
        "image": "/mascotas/image1.jpeg"
    },
    {
        "name": "Bluss",
        "years": "5 años",
        "raza": "Pastor Collie",
        "address": "Buenos Aires - Argentina",
        "image": "/mascotas/image2.jpeg"
    },
    {
        "name": "Lulu",
        "years": "2 años",
        "raza": "Pincher",
        "address": "Ciudad de Mexico - Mexico",
        "image": "/mascotas/image3.jpeg"
    },
    {
        "name": "Yogui",
        "years": "6 años",
        "raza": "PittBull",
        "address": "Medellin - Colombia",
        "image": "/mascotas/image4.jpeg"
    }
]

  const [pets, setPets] = useState([])

  useEffect(() => {
    try {
      const listPets = mascotas
      console.log(listPets)
      setPets(mascotas)
    } catch (error) {
      console.log(error)
    }
  }, [])

  return (
    <>
      <Header/>
      <main className="w-[100%] h-auto">
        <Mascotas pets={pets} />
      </main>
      <footer></footer>
    </>
  )
}

export default App