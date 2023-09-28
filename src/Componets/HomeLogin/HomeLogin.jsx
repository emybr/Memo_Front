import React from 'react'
import { Link } from 'react-router-dom'
import '../HomeLogin/HomeLogin.css'


export const HomeLogin = () => {
  return ( 
    <div className="containerRegister">
            <div className="hero">
            
                <form action="https://memo-back-txp0-dev.fl0.io/login/login" method="POST" className="formRegistro">
                    <div className="titulo">
                      <h1>Login</h1>
                    </div>
                    <h2 className='subtitulo'>EMAIL:</h2>
                    <input type="email" name="email" id="email" required className="inputRegistro"  />
                    <h2 className='subtitulo'>CONTRASEÑA:</h2>
                    <input type="password" name="password" id="password" required className="inputRegistro"  />
                    <div className='contenerContrasenia'>
                    <h3 className='olvideContrasenia'>OLVIDÉ MI CONTRASEÑA</h3>
                    </div>
                    <div className='contenedorBotonAzul'>
                    <Link to="/inicio">
                    <button>
                    <img className="botonAzul" src="back.png" alt="back" />
                    </button>
                    </Link>
                    <button>
                    <img className="botonAzul" src="accept.png" alt="accept" />
                    </button>
                    </div>
                   
                </form>
            </div>
        </div>
  )
}
