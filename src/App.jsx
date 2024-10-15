import { Header } from "./components/Header"
import { Footer } from "./components/Footer"

import { BotonFlotante } from "./components/BotonFlotante"
import { Outlet } from "react-router-dom"
import { DialogPet } from "./components/DialogPet"

function App() {
  return (
    <>
      <Header/>

      <main className="w-full h-auto flex-col  justify-center">
        <Outlet />
        <DialogPet />
      </main>
      <footer>
        <Footer/>
      </footer>

      <div className="">
        <BotonFlotante/>
      </div>
    </>
  )
}

export default App