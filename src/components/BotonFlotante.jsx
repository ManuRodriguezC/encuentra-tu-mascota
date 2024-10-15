import { useState } from "react";
import { RiWhatsappFill } from "react-icons/ri";
import { TbMessageChatbotFilled } from "react-icons/tb";
import { IoCloseSharp } from "react-icons/io5";
import { MdAddCircle } from "react-icons/md";
import { Lista } from "./Lista";

export const BotonFlotante = () => {
    const [size, setSize] = useState({
        width: '25vh', // devolver a 25vh
        height: '12vh', //devolver a 12
        marginLeft: '15px',
        marginBottom: '25px',
        marginRight: '15px',
        
    });
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleSize = () => {
        setSize(prevSize => ({
            width: prevSize.width === '25vh' ? '56vh' : '25vh',//devolver a 25 
            height: prevSize.height === '12vh' ? '90vh' : '12vh',//devolver a 12
            marginLeft: prevSize.marginLeft === '15px' ? '17vh' : '15px',
            marginRight: prevSize.marginRight === '15px' ? '17vh' : '15px',
            marginBottom: prevSize.marginBottom === '25px' ? '20vh' : '25px'
        }));
        setIsExpanded(prev => !prev);
    };

    return (
        <div
            className={`text-7xl flex-col fixed mr-6 mb-8  bottom-4 right-4 p-[2.1vh] shadow-xl z-50 bg-opacity-5 backdrop-blur-3xl transition-all border-2 border-orange  ${isExpanded ? 'rounded-3xl' : 'rounded-full'}`}
            style={{
                width: size.width,
                height: size.height,
                transition: 'width 0.8s ease, height 0.8s ease, margin 0.8s ease'
            }}
        >

            <div className="flex justify-between  bg-red-400 h-0 mb-20">
                {/*boton agregar formulario */}
                <div>
                    <button className="hover:scale-110  transition-all" onClick={toggleSize} >
                    {isExpanded ? (
                            <IoCloseSharp className="text-orange transition-all ml-[15px]" style={{ marginBottom: size.marginBottom }} />
                        ) : (
                            <MdAddCircle className="text-orange transition-all ml-[15px]" style={{ marginBottom: size.marginBottom }} />
                        )}
                    </button>
                </div>
                {/*boton whats */}
                <div className="">
                    <a 
                        href="https://api.whatsapp.com/send?phone=542236979758&text=Me%20gustaria%20adopar%2C%20dame%20mas%20informacion%20%F0%9F%98%87"
                        target="_blank"
                        rel="noopener noreferrer"
                        
                    >
                        <button className="hover:scale-110   transition-all">
                        <   RiWhatsappFill className="text-green-600 mr-[15px] " style={{ marginBottom:size.marginBottom }} />
                        </button> 
                    </a>
                </div>

            </div>

            {/*Formulario */}

            <div className={`bg-Blue rounded-2xl h-[90%] overflow-auto p-4 flex-col justify-center items-center ${isExpanded ? 'flex-col': 'hidden'}`} style={{transition: 'width 0.8s ease, height 0.8s ease, margin 0.8s ease'}}> {/* overflow-auto permite el scroll si el contenido es mayor */}
                <form action="" className="flex w-full flex-col gap-3 justify-center items-center mt-5">
                    <ul className="flex flex-col gap-7">
                        <Lista nombreCampo={"Nombre"} tipo={"text"} isImput={1}/>
                        <Lista nombreCampo={"Especie"} tipo={"text"} isImput={1}/>
                        <Lista nombreCampo={"Raza"} tipo={"text"} isImput={1}/>
                        <Lista nombreCampo={"Edad"} tipo={"text"} isImput={1}/>
                        <Lista nombreCampo={"Genero"} tipo={"text"} isImput={0}/>
                        <Lista nombreCampo={"Tamaño"} tipo={"text"} isImput={1}/>
                        <Lista nombreCampo={"Estado de salud"} tipo={"text"} isImput={1}/>
                        <Lista nombreCampo={"Foto"} tipo={"file"} isImput={1} />
                    </ul>
                    <button className="text-xl w-[70%] mt-3 flex justify-center items-center h-12 text-Newhite  border-2 rounded-2xl p-4 hover:scale-105 transition-all hover:bg-orange">
                        Agregar
                    </button>
                </form>
            </div>
        </div>
    );
};


