import { useEffect, useState } from 'react';
import '../index.css'



export const SobreNosotros=()=>{

    const [visible, setVisible] = useState(false);

    useEffect(() => {
        
        const timer = setTimeout(() => {
            setVisible(true);
        }, 1000); 

        return () => clearTimeout(timer); 
    }, []);

    return(
<section className={`bg-[#1F485C] flex w-full h-[403px] items-center justify-end transition-opacity duration-1000 ${visible ? 'opacity-100' : 'opacity-0'}`}>
    <div className='pl-6 md:pl-52 flex relative justify-end'>
        <div className='flex-shrink-0 mr-48 bounce '>
            <img 
                src="/images/chica-y-gato.jpg" 
                style={{ transform: 'rotate(-4deg)' }}
                className='w-48 h-56 md:w-60 md:h-72 rounded-3xl object-cover border-8 border-[#F39C12] ' 
            />
        </div>

        <div className='flex-shrink-0 absolute w-24 md:w-32 bounce2' style={{ top: '25%', left: '20%' }}> {/* Ajusta según sea necesario */}
            <img 
                src="/images/PerroPrimerPlano.jpg" 
                style={{ transform: 'rotate(5deg)' }}
                className='h-32 md:h-40 rounded-3xl object-cover border-4 border-[#F8F9FA]  ' 
            />
        </div>
    </div>

    <div className='flex-col absolute lg:w-[55.5%] lg:mr-[34.9%]  text-Newhite text-justify' style={{ lineHeight: '1.8' }}>
        <strong><h2 className='lg:text-4xl mb-5 text-orange '>Sobre Nosotros</h2></strong>
        <p className='lg:text-3xl'>Somos una familia dedicada a crear 
        conexiones únicas entre personas y mascotas. Queremos brindarle una nueva oportunidad 
        a vidas que están en búsqueda de un hogar. Creemos que cada una
        merece un lugar donde ser feliz, una adopción a la vez.</p>
    </div>
</section>
    )
}