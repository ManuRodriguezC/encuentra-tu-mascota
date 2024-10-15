export const Huellita = ({ width, marR, marT ,rot }) => {
    return (
        <img 
            src="/images/Huella.svg" 
            style={{
                width: `${width}vh`,
                right: `${marR}vw`,
                marginTop: `${marT}vh`,
                transform: `rotate(${rot}deg)`,
            }} 
            className="absolute z-0 md:z-30" 
        />
    );
  };