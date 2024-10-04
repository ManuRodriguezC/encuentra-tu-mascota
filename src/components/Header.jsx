import {Nav} from "./Nav.jsx"
import '../index.css'

<<<<<<< HEAD
export const Header = () => {
  return (
    <header className="">
      <Nav />
      <div className="w-full h-96 relative">
        <img src="/images/HeaderIMG.jpg" className="w-full h-full object-cover brightness-50" />
        <p className="absolute bottom-10 right-0 px-10 text-white w-[80%] text-lg 2xl:w-[50%] 2xl:text-3xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum nisi veritatis ad natus dolorem et omnis a ut sequi reprehenderit consectetur, deleniti hic molestiae? Debitis corrupti quo aperiam nostrum ex?</p>
      </div>
    </header>
  )
}
=======
export const Header=()=>{
    return(
            <header> 
            <Nav></Nav>
            <div className="flex justify-center items-center relative">
                <img src="/images/HeaderIMG.jpg" className="w-full h-96 object-cover custom-brightness" />
                <p className="absolute w-[50%] bottom-10 right-20 text-xl text-justify lg:text-3xl md:text-2xl transition-all duration-500 lg:w-[40%] ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum nisi veritatis ad natus dolorem et omnis a ut sequi reprehenderit consectetur, deleniti hic molestiae? Debitis corrupti quo aperiam nostrum ex?</p>
            </div>
        </header>
    )
}
>>>>>>> 17386910da63ea42e661640df4515a1d4ff14cbf
