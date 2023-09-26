import React, {useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import CustomButton from '../Button/Button'
import '../Button/Button.css'
import { Link } from 'react-router-dom';


const ListaSemana = () => {
       const handleClick = () => {

    };
  const location = useLocation();
    const pathnameParts = location.pathname.split('/semanaTutor/'); // Divide la ruta en partes
    const esarData = pathnameParts[pathnameParts.length - 1]; // Obtén la última parte de la ruta

    useEffect(() => {
        console.log("Valor de esarData", esarData);
    }, [location, esarData]);
  return (
    <>
      <div className='HomeTutor'>
      <p>{esarData}</p>
        <div>
          <CustomButton text="LUNES" onClick={handleClick} estilo={"custom-button"} />
          <CustomButton text="MARTES" onClick={handleClick} estilo={"custom-button"} />
          <CustomButton text="MIERCOLES" onClick={handleClick} estilo={"custom-button"} />
          {/* <Link to="/tutor/rutinas"> */}
          <CustomButton text="JUEVES" estilo={"custom-button"} />
          {/* </Link> */}
          <CustomButton text="VIERNES" onClick={handleClick} estilo={"custom-button"} />
          <CustomButton text="SABADO" onClick={handleClick} estilo={"custom-button"} />
          <CustomButton text="DOMINGO" onClick={handleClick} estilo={"custom-button"} />

          <div className='contenedorBotonAzul'>
            <Link to="/tutor">
              <button>
                <img className="botonAzul" src="back.png" alt="back" />
              </button>
            </Link>
          </div>

        </div>
      </div>
    </>
  )
}

export default ListaSemana