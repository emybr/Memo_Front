import React from 'react'
import CustomButton from '../Button/Button'
import '../Button/Button.css'
import '../HomeTutor/HomeTutor.css'
import { Link } from 'react-router-dom';


const handleClick = () => {
    alert('Botón personalizado clickeado');
};


export const HomeTutor = () => {
    return (
        <>
            <div className='HomeTutor'>
                <div>
                    <CustomButton text="MANUAL DE USO" onClick={handleClick} estilo={"custom-button"} />
                    <CustomButton text="AVATAR" onClick={handleClick} estilo={"custom-button"} />
                    <CustomButton text="MI CARNET" onClick={handleClick} estilo={"custom-button"} />
                    <Link to="/semanaTutor">
                        <CustomButton text="SEMANA"  estilo={"custom-button"} />
                    </Link>
                    <CustomButton text="COMUNICACION" onClick={handleClick} estilo={"custom-button"} />
                    <CustomButton text="AJUSTES" onClick={handleClick} estilo={"custom-button"} />
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

