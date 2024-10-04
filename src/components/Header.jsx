import { Nav } from "./Nav"
import '../index.css'

export const Header = () => {
  return (
    <header className="">
      <Nav />
      <div className="image">

      </div>
      <img src="/images/HeaderIMG.jpg" className="w-full h-96 object-cover brightness-50  lg:brightness-50 relative" >
      </img>
        <p className="absolute">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum nisi veritatis ad natus dolorem et omnis a ut sequi reprehenderit consectetur, deleniti hic molestiae? Debitis corrupti quo aperiam nostrum ex?</p>
    </header>
  )
}
