import { useDialogPet } from "../store/ui/pet-dialog";
import { ButtonAdd } from "./button";

export const DialogPet = () => {
  const { isDialogOpen, closeDialogPet, infoPet } = useDialogPet()

  const setSize = (size) => {
    if (size === "P") return "Pequeño"
    if (size === "M") return "Mediano"
    if (size === "G") return "Grande"
    return "No se conoce su tamaño"
  }

  return (
    <>
      {
        isDialogOpen
        &&
        <dialog
          className="fixed w-screen h-screen inset-0 bg-transparent z-100 flex justify-center items-center">
          <div
            onClick={() => closeDialogPet()}
            className="w-full h-full bg-transparent backdrop-blur-md brightness-80"></div>
          <div
            onClick={() => console.log("dig")}
            className="absolute w-[70%] h-[80%] bg-colorBlue border-4 border-orange rounded-3xl flex flex-col justify-center items-center shadow-black">

            <div className="flex flex-row justify-center items-center">
              <div className="relative w-[400px] h-[500px] rounded-imagePet">
                <div className="absolute top-0 rounded-backImagePet w-[110%] h-[105%] z-110 -rotate-12 border-2 border-orange"></div>
                <img
                  className="absolute rounded-imagePet w-full h-full object-cover z-120"
                  src={infoPet.imageProfile}
                  alt={infoPet.name}
                />

              </div>

              <div className="w-[50%] p-10 flex flex-col gap-20">
                <div>
                  <h2 className="text-orange text-9xl">{infoPet.name}</h2>
                  <span className="text-5xl text-white mb-5">{infoPet.breed}</span>
                </div>
                <div>
                  <div className="text-white font-medium text-2xl flex flex-col">
                    <p className="text-orange">Personalidad:</p>
                    <p className="font-medium text-2xl mb-5">
                      {infoPet.name} {infoPet.descriptionBreed.toLowerCase().startsWith("es") ? "" : "es"} {infoPet.descriptionBreed.toLowerCase()}
                    </p>
                  </div>
                  <div className="text-white font-medium text-2xl flex flex-col">
                    <p className="text-orange">Estado de salud:</p>
                    <p>{infoPet.healthStatus}</p>
                  </div>
                </div>

                <div className="flex flex-row gap-10 font-medium text-white text-3xl">
                  <p><span className="text-2xl text-orange text-center">Edad:</span> {infoPet.age}</p>
                  <p><span className="text-2xl text-orange">Genero:</span> {infoPet.gender == "M" ? "Macho" : "Hembra"}</p>
                  <p><span className="text-2xl text-orange">Tamaño:</span> {setSize(infoPet.size)}</p>
                </div>
              <ButtonAdd />
              </div>

            </div>
          </div>
        </dialog>
      }
    </>
  );
}
