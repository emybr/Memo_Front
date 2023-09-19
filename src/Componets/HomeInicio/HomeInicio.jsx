import React from 'react'
import CustomButton from '../Button/Button'
import '../HomeInicio/HomeInicio.css'

const handleClick = () => {
    alert('Botón personalizado clickeado');
};
export const HomeInicio = () => {
    return (
        <div className='HomeLogin'>
            <div className='ImgMemoContenedor'>
                <img className='ImgMemo' src="logo.png" alt="" />
            </div>
            <div className='BotonComenzar'>
                <CustomButton text="COMENZAR" onClick={handleClick} estilo={"custom-button"} />
            </div>
        </div>
    )
}
