import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import CustomButton from '../Button/Button'
import '../Button/Button.css'
import '../HomeTutor/HomeTutor.css'
import { Link } from 'react-router-dom';




export const HomeTutor = () => {
    const handleClick = () => {
        alert('Botón personalizado clickeado');
    };
    const location = useLocation();
    const pathnameParts = location.pathname.split('/esarData='); // Divide la ruta en partes
    const esarData = pathnameParts[pathnameParts.length - 1]; // Obtén la última parte de la ruta

    useEffect(() => {
        console.log("Valor de esarData", esarData);
    }, [location, esarData]);
    return (
        <>
            <div className='HomeTutor'>
                <p>{esarData}</p>
                <div>
                    <CustomButton text="MANUAL DE USO" onClick={handleClick} estilo={"custom-button"} />
                    <CustomButton text="AVATAR" onClick={handleClick} estilo={"custom-button"} />
                    <CustomButton text="MI CARNET" onClick={handleClick} estilo={"custom-button"} />
                    <Link to={`/semanaTutor/${esarData}`}>
                        <CustomButton text="SEMANA" estilo={"custom-button"} />
                    </Link>
                    <CustomButton text="COMUNICACION" onClick={handleClick} estilo={"custom-button"} />
                    <CustomButton text="AJUSTES" onClick={handleClick} estilo={"custom-button"} />
                    <div className='contenedorBotonAzul'>
                        <Link to="/inicio">
                            <button>
                                <img className="botonAzul" src="../back.png" alt="back" />
                            </button>
                        </Link>
                        <Link to="/inicio">
                            <button>
                                <img className="botonAzul" src="../logout.png" alt="logout" />
                            </button>
                        </Link>
                    </div>

                </div>
            </div>
        </>
    )
}

