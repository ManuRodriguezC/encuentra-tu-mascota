import './Error.css'
import {Nav} from "../Nav.jsx"

export const Error = () => {
    return (
        <main className="w-screen h-screen flex flex-col items-center justify-center bg-Blue relative">
            <div className='w-full mb-28 flex justify-center'>
                <Nav />
            </div>
            <div className='flex flex-col items-center'>
                <h1 className="text-orange text-8xl mb-32 error-page tracking-wider z-10 efecText">
                    ¡Woooof! - ¡Parece que algo salió mal!
                </h1>
                <img src="/public/images/404.svg" alt="404 Not Found" className="w-[25%] z-20" />
            </div>

                <h2 className='error-page absolute mr-[55%] mt-[18%] text-9xl  p-10 rounded-3xl z-30 tracking-widest'>404</h2>

                <div className="container">
                    <div className="relative flex z-0 w-full">
                    {Array.from({ length: 100 }, (_, index) => (
                        <span
                            key={index}
                            className="spanB  relative w-[10px] h-[2px] rounded-full bg-orange"
                        ></span>
                    ))}
                        

                    </div>
                </div>
            
        </main>
    );
};