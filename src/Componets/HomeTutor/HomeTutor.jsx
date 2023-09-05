import React from 'react'
import CustomButton from '../Button/Button'
import '../Button/Button.css'
import '../HomeTutor/HomeTutor.css'

const handleClick = () => {
    alert('Botón personalizado clickeado');
};


const Flecha = <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-big-left-filled" width="35" height="43" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
<path d="M9.586 4l-6.586 6.586a2 2 0 0 0 0 2.828l6.586 6.586a2 2 0 0 0 2.18 .434l.145 -.068a2 2 0 0 0 1.089 -1.78v-2.586h7a2 2 0 0 0 2 -2v-4l-.005 -.15a2 2 0 0 0 -1.995 -1.85l-7 -.001v-2.585a2 2 0 0 0 -3.414 -1.414z" stroke-width="0" fill="currentColor"></path> </svg>


const CerrarSesion = <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-bar-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
<path d="M20 12l-10 0"></path>
<path d="M20 12l-4 4"></path>
<path d="M20 12l-4 -4"></path>
<path d="M4 4l0 16"></path>
</svg>


export const HomeTutor = () => {
    return (
        <>
            <div className='HomeTutor'>
                <div>
                    <CustomButton text="MANUAL DE USO" onClick={handleClick} estilo={"custom-button"} />
                    <CustomButton text="AVATAR" onClick={handleClick} estilo={"custom-button"} />
                    <CustomButton text="MI CARNET" onClick={handleClick} estilo={"custom-button"} />
                    <CustomButton text="SEMANA" onClick={handleClick} estilo={"custom-button"} />
                    <CustomButton text="COMUNICACION" onClick={handleClick} estilo={"custom-button"} />
                    <CustomButton text="AJUSTES" onClick={handleClick} estilo={"custom-button"} />
                    <div className='BotonInferior'>
                        <CustomButton text= {Flecha} onClick={handleClick} estilo={"custom-buttonAzulRedondo"} />
                        <CustomButton text= {CerrarSesion} onClick={handleClick} estilo={"custom-buttonAzulRedondo"} />
                    </div>
                </div>
            </div>
        </>
    )
}

