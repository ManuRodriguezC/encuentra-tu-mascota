import { Nav } from "./Nav"
import '../index.css'

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
