import React from 'react'
import CustomButton from '../Button/Button'
import { Link } from 'react-router-dom'
import '../HomeInicio/HomeInicio.css'


export const HomeInicio = () => {
    return (
        <div className='homeLogin'>
            <div className='imgMemoContenedor'>
                <img className='imgMemo' src="logo.png" alt="" />
            </div>
            <div className='botonComenzar'>
                <Link to = "/login">
                <CustomButton text="LOGIN"  estilo={"custom-button"} />
                </Link>
                <Link to= "/register">
                <CustomButton text="REGISTRO"  estilo={"custom-button"}></CustomButton>
                </Link>
            </div>
        </div>
    )
}
