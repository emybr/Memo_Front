import React , {useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import CustomButton from '../Button/Button'
import '../Button/Button.css'
import './HomeUsuario.css' 

const HomeUsuario = () => {
    const handleClick = () => {
        alert('Botón personalizado clickeado');
    };
    const location = useLocation();
    useEffect(() => {
      const params = new URLSearchParams(location.search);
      const esarData = params.get("esarData");

      console.log("Valor de esarData", esarData)
    },[location]);
  return (
    <>
    <div >
        <button className='botonHomeTutor'> Home Tutor </button>
    </div>
    <div className='homeUsuario'>
        <CustomButton text="RUTINA" onClick={handleClick} estilo={"custom-button"} />
        <CustomButton text="COMUNICACION" onClick={handleClick} estilo={"custom-button"} />
        <CustomButton text="MI CARNET" onClick={handleClick} estilo={"custom-button"} />
    </div>
    </>
  )
}

export default HomeUsuario