import React from 'react'
import CustomButton from '../Button/Button'
import '../Button/Button.css'
import { Link } from 'react-router-dom';

const ListaSemana = () => {
    const handleClick = () => {
        alert('Botón personalizado clickeado');
    };
  return (
    <>
            <div className='HomeTutor'>
                <div>
                    <CustomButton text="LUNES" onClick={handleClick} estilo={"custom-button"} />
                    <CustomButton text="MARTES" onClick={handleClick} estilo={"custom-button"} />
                    <CustomButton text="MIERCOLES" onClick={handleClick} estilo={"custom-button"} />
                    {/* <Link to="/tutor/rutinas"> */}
                        <CustomButton text="JUEVES"  estilo={"custom-button"} />
                    {/* </Link> */}
                    <CustomButton text="VIERNES" onClick={handleClick} estilo={"custom-button"} />
                    <CustomButton text="SABADO" onClick={handleClick} estilo={"custom-button"} />
                    <CustomButton text="DOMINGO" onClick={handleClick} estilo={"custom-button"} />
                    
                    <div className='contenedorBotonAzul'>
                    <Link to="/inicio">
                        <button>
                            <img className="botonAzul" src="back.png" alt="back" />
                        </button>
                    </Link>
                    <Link to= "/inicio">
                    <button>
                        <img className="botonAzul" src="logout.png" alt="accept" />
                    </button>
                    </Link>
                </div>
                   
                </div>
            </div>
        </>
  )
}

export default ListaSemana