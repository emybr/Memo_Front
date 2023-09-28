import React, { useState } from 'react';
import './RegisterUser.css';
import { Link } from 'react-router-dom';
//cambio link http://localhost:8080/login/register

const RegisterUser = () => {

    const [aceptaTerminos, setAceptaTerminos] = useState(false);

    const handleAceptaTerminosChange = (event) => {
        setAceptaTerminos(event.target.checked);
    };
    return (
        <div className="containerRegister">
            <form action="https://memo-back-txp0-dev.fl0.io//login/register" method="POST" className="formRegistro">
                <div className="titulo">
                    <h1>Registro</h1>
                </div>
                <h2 className='subtitulo'>NOMBRE DEL TUTOR:</h2>
                <input type="text" name="nombre" required className="inputRegistro" />
                <h2 className='subtitulo'>APELLIDO DEL TUTOR: </h2>
                <input type="text" name="apellido" required className="inputRegistro" />
                <h2 className='subtitulo'>EMAIL DEL TUTOR:</h2>
                <input type="email" name="email" id="email" required className="inputRegistro" />
                <h2 className='subtitulo'> CONTRASEÑA:</h2>
                <input type="password" name="password" id="password" required className="inputRegistro" />
                
                <div className="terminosYCondiciones">
                    <label>
                        <input
                            className='inputRegister'
                            type="checkbox"
                            name="aceptaTerminos"
                            checked={aceptaTerminos}
                            onChange={handleAceptaTerminosChange}
                            required
                        />

                    </label>
                    <Link className='terminos' to='/terminos'>
                    <h3 className='olvideContrasenia'>TÉRMINOS Y CONDICIONES</h3>
                    </Link>
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
    );
};

export default RegisterUser;

