// import React, { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import { Link } from 'react-router-dom';


// const PassTutor = () => {
//     const location = useLocation();
//     const pathnameParts = location.pathname.split('passTutor/'); // Divide la ruta en partes
//     const esarData = pathnameParts[pathnameParts.length - 1]; // Obtén la última parte de la ruta

//     useEffect(() => {
//         console.log("Valor de esarData", esarData);
//     }, [location, esarData]);


//     return (
//         <>
//         <div className="containerRegister">

//             <p>{esarData}</p>
//             {/* <form action="https://memo-back-bklt-dev.fl0.io/login/tutor" method="POST" className="formRegistro"> */}
//             <form action="http://localhost:8080/login/tutor" method="POST" className="formRegistro">
//                 <h2 className='subtitulo'>CONTRASEÑA:</h2>
//                 <input type="password" name="password" id="password" required className="inputRegistro" />
//                 <div className='contenedorBotonAzul'>

//                 <Link to={`/homeUsuario/${esarData}`}>
//                         <button>
//                             <img className="botonAzul" src="../back.png" alt="back" />
//                         </button>
//                     </Link>
//                     <button>
//                         <img className="botonAzul" src="../accept.png" alt="accept" />
//                     </button>

//                 </div>
//             </form>
//         </div>
//         </>
//     )
// }

// export default PassTutor
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const PassTutor = () => {
    const location = useLocation();
    const pathnameParts = location.pathname.split('passTutor/');
    const esarData = pathnameParts[pathnameParts.length - 1];

    const [password, setPassword] = useState(''); // Estado para la contraseña
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log("Valor de esarData", esarData);
    }, [location, esarData]);

    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     // Aquí puedes realizar alguna lógica adicional antes de enviar el formulario
    //     // Por ejemplo, puedes realizar una solicitud AJAX con los datos del formulario.

    //     // Verifica si los datos están siendo recopilados correctamente
    //     console.log('Usuario:', esarData);
    //     console.log('Contraseña:', password);
    // };

    return (
        <>
            <div className="containerRegister">
                <p>{esarData}</p>
                <form className="formRegistro" action="https://memo-back-bklt-dev.fl0.io/login/tutor" method="POST">
                    <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        className="inputRegistro"
                        value={esarData}
                        readOnly // Esto evita que el usuario modifique manualmente el campo
                    />
                    <h2 className='subtitulo'>CONTRASEÑA:</h2>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        required
                        className="inputRegistro"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} // Actualiza el estado de la contraseña
                    />
                    <div className='contenedorBotonAzul'>
                        <Link to={`/homeUsuario/${esarData}`}>
                            <button>
                                <img className="botonAzul" src="../back.png" alt="back" />
                            </button>
                        </Link>
                        <button>
                            <img className="botonAzul" src="../accept.png" alt="accept" />
                        </button>
                    </div>
                </form>
                {error && <p>{error}</p>}
            </div>
        </>
    );
};

export default PassTutor;


// http://localhost:3000/passTutor/emy@gmail.com