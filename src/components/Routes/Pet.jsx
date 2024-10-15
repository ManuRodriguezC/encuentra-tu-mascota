import { useDialogPet } from "../../store/ui/pet-dialog"

export const Pet = (pet) => {

  const {openDialogPet} = useDialogPet()

  const handleDialog = (pet) => {
    openDialogPet(pet)
  }

  return (
    <div
      onClick={() => handleDialog(pet)}
      key={pet.name}
      className="group cursor-pointer relative hover:scale-105 hover:z-30 transition-all duration-200">
      <div
        className="flex flex-col border-gray-400 h-[400px] w-[400px] bg-gray-100 group-hover:brightness-100">
        <img
          src={pet.imageProfile || "/images/cachorro3.jpg"}
          alt={pet.name}
          className="w-full h-full object-cover brightness-50 group-hover:brightness-80"
          onError={(e) => e.target.src = "/images/perro8.jpg"}
        />
        <div className="absolute w-[30%] bottom-4 left-4 font-semibold text-2xl text-gray-200 group-hover:text-white">
          <p>{pet.name}</p>
          <p>{pet.breed}</p>
        </div>
      </div>
    </div>
  )
}