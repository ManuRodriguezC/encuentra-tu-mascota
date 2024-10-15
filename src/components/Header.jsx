import {Nav} from "./Nav.jsx"
import '../index.css'
import { useEffect, useState } from "react"

export const Header=()=>{

    const [scrollPorcent, setScrollPorcent] = useState(0)

    const handleScroll = () => {
        const scrollTop = document.documentElement.scrollTop
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
        const scrollPorcent = (scrollTop / scrollHeight) * 100
        setScrollPorcent(scrollPorcent)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return(
        <header className="flex-col justify-center items-center"> 
            <div className="flex-col justify-center items-center relative">
                <div className={`w-full flex justify-center z-50 transition-all duration-200 ${scrollPorcent > 1.1 ? "fixed mt-0" : "mt-7 absolute"}`}>
                    <Nav></Nav>
                </div>
                <img src="/images/HeaderIMG.jpg" className="w-full h-[550px] object-cover custom-brightness" />
                <p className="absolute w-[64%] bottom-[95.5px] right-20 text-xl text-justify lg:text-3xl md:text-2xl transition-all duration-500 lg:w-[33.8%] text-[#F8F9FA] mr-[106px]"
                style={{ lineHeight: '1.5' }}
                >
                Cada año, miles de mascotas buscan un lugar al que llamar hogar, y en ese proceso, nos enseñan <br/> 
                lo que significa la conexión verdadera.<br /> Al elegir adoptar, no solo estás salvando 
                una vida, estás creando un vínculo de confianza, alegria, cuidado , y sobre todo <strong className="text-[#F39C12] text-5xl absolute transform -translate-y-2 translate-x-3">amor</strong> <br />
                </p>
            </div>
        </header>
    )
}
