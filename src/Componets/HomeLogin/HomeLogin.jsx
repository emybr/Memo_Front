import React from 'react'
import CustomButton from '../Button/Button'
import '../HomeLogin/HomeLogin.css'

//cambio link http://localhost:8080/login/login

export const HomeLogin = () => {
  return ( 
    <div className="containerRegister">
            <div className="hero">
                <form action="https://memo-back-bklt-dev.fl0.io/login/login" method="POST" className="formRegistro">
                    <div className="titulo">Login</div>
                    <input type="email" name="email" id="email" required className="inputRegistro" placeholder="Email" />
                    <input type="password" name="password" id="password" required className="inputRegistro" placeholder="Contraseña" />
                    <button className="boton" type="submit">Enviar</button>
                </form>
            </div>
        </div>
  )
}
