import { Mascota } from "./Mascota"
import '../index.css'
import { useEffect, useState } from "react"
import 'ldrs/tailChase'
import { mascotas } from "../store/mascotas"

export const Mascotas = () => {

  // const [pets, setPets] = useState([])
  const [pets, setPets] = useState(mascotas.slice(0, 4))

  useEffect(() => {
    const getListPets = async () => {
      try {
        const response = await fetch('https://c21-38-n-java-react.onrender.com/api/pets')
        const data = await response.json()
        console.log(data.body)
        setPets(data.body.slice(0, 4))
        setPets(Array.isArray(data.body) ? data.body.slice(0, 4) : []);
        
      } catch (error) {
        console.log(error)
        setPets([])
      }
    }
    getListPets()
  }, [])

  return (
    <div className="flex flex-col pt-[70px]  justify-center items-center w-full pb-24 ">
      <h1 className="text-4xl color-azul font-bold px-20 mb-[73px] text-center">Encuentra tu mascota, tenemos amigos que buscan cambiar su vida y la tuya</h1>
      {pets.length === 0
      ?
      <div className="mb-14">
        <l-tail-chase
          size="100"
          speed="1.75"
          color="black" 
        ></l-tail-chase>
      </div>
      :
        pets.map((pet , index) => (
          <Mascota key={pet.name} pet={pet} reverse={index % 2 == 0 ? true : false}/>
        ))
      }
      <a href="/huellitas" className="text-2xl font-semibold text-orange underline hover:scale-110 transition-all duration-200">{`>>>> Conoce muchos mas amigos que quieren estar con tigo!! <<<<`}</a>
    </div>
  )
}

