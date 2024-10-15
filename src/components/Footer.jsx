import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { RedesSociales } from "./RedesSociales";

export const Footer=()=>{
    return(
        <footer>
            <div className="flex justify-center bg-orange h-52 mt-6 relative ">
                <img src="/images/perroSinFondo.png" alt="" className="w-64 object-cover absolute bottom-0" />
                <img src="/images/forma1.png" alt="" className="w-96 object-cover mr-[70%]"/>
                <img src="/images/forma2.png" alt="" className="w-96 object-cover ml-[-20%]"/>
                <div className="absolute text-3xl flex items-center justify-center pt-4  h-48  mr-[30%] text-Blue">
                    <div className="mt-7">
                        <RedesSociales href="#" label="Facebook" Icon={FaFacebook} iconClass="h-8 mt-1" />
                        <RedesSociales href="#" label="Instagram" Icon={BsInstagram} iconClass="h-6 mt-1" />
                        <RedesSociales href="#" label="Twitter" Icon={BsTwitterX} iconClass="h-6 mt-2" />
                    </div>
                </div >

                <div className="absolute text-xl ml-[28%] flex-col ">
                    <div className="mt-3">
                        <a href="https://www.linkedin.com/in/azariel-moreno-4267ba254/">
                            <strong>Manuel Cañon</strong> 
                        </a>
                    </div>
                    <div className="mt-3">
                        <a href="https://www.linkedin.com/in/sergiocamejo/" >
                            <strong>Sergio Camejo</strong> 
                        </a>
                    </div>
                    <div className="mt-3">
                        <a href="https://www.linkedin.com/in/manuel-ca%C3%B1on-b6245118a//">
                            <strong>Esteban Castro</strong> 
                        </a>
                    </div>
                    <div className="mt-3">
                        <a href="https://www.linkedin.com/in/azariel-moreno-4267ba254/">
                            <strong>Ingrid Apellido</strong> 
                        </a>
                    </div>
                    <div className="mt-3">
                        <a href="https://www.linkedin.com/in/azariel-moreno-4267ba254/">
                            <strong>Azariel Moreno</strong> 
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}