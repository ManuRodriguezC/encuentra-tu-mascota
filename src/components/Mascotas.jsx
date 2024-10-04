import { Mascota } from "./Mascota"

export const Mascotas = ({ pets }) => {
  return (
    <div className="flex flex-col mt-10 justify-center items-center">
      <h1 className="text-3xl font-bold px-20 mb-20 text-center">En encuentra Tu mascota, tenemos amigos que buscan cambiar su vida y la tuya</h1>
      {
        pets.map((pet , index) => (
          <Mascota key={pet.name} pet={pet} reverse={index % 2 == 0 ? true : false}/>
        ))
      }
    </div>
  )
}
