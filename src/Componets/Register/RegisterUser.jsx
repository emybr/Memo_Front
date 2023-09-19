import React from 'react';

//cambio link http://localhost:8080/login/register

const RegisterUser = () => {
    return (
        <div className="containerRegister">
            <div className="hero">
                <form action="https://memo-back-bklt-dev.fl0.io/login/register" method="POST" className="formRegistro">
                    <div className="titulo">REGISTRO</div>
                    <input type="text" name="nombre" className="inputRegistro" placeholder="Nombre" />
                    <input type="text" name="apellido" className="inputRegistro" placeholder="Apellido" />
                    <input type="text" name="edad" className="inputRegistro" placeholder="Edad" />
                    <input type="email" name="email" id="email" required className="inputRegistro" placeholder="Email" />
                    <input type="password" name="password" id="password" required className="inputRegistro" placeholder="Contraseña" />
                    <button className="boton" type="submit">Enviar</button>
                </form>
            </div>
        </div>
    );
};

export default RegisterUser;

