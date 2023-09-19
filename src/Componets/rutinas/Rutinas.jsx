// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import CustomButton from '../Button/Button';


// export const Rutinas = () => {
//     // Estado para almacenar la rutina
//     const [fetchedRoutine, setFetchedRoutine] = useState(null);

//     // Realizar la solicitud cuando se monta el componente
//     useEffect(() => {
//         const fetchRoutine = async () => {
//             try {
//                 const response = await fetch('https://memo-back-bklt-dev.fl0.io/rutinas/viernes');
//                 const data = await response.json();
//                 console.log('Data', data)
//                 setFetchedRoutine(data);
//             } catch (error) {
//                 console.error('Error fetching routine:', error);
//             }
//         };




//         fetchRoutine();
//     }, []); // El segundo argumento vacío asegura que se ejecute solo una vez al montar el componente

//     if (!fetchedRoutine) {
//         return <p>Cargando...</p>;
//     }

//     return (
//         <div>
//             <h2>{fetchedRoutine.title}</h2>
//             <p>{fetchedRoutine.description}</p>
//             <p>Día de la semana: {fetchedRoutine.diaSemana}</p>
//             <h3>Mañana</h3>
//             <ol>
//                 {fetchedRoutine.mañana.map((item, index) => (
//                     <li key={index}>
//                         <p>Horario de inicio: {item.horarioInicio}</p>
//                         <p>Horario de fin: {item.horarioFin}</p>
//                         <p>Actividades:</p>
//                         <ol>
//                             {item.actividades.map((actividad, actividadIndex) => (
//                                 <li key={actividadIndex}>{actividad}</li>
//                             ))}
//                         </ol>
//                     </li>
//                 ))}
//             </ol>
//             <Link to="http://192.168.100.2:3000/actividad/imagenes/abrir">
//                 <CustomButton text="+" estilo={"custom-button"} />
//             </Link>

//         </div>
//     );
// }

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CustomButton from '../Button/Button';

export const Rutinas = () => {
    const [fetchedRoutine, setFetchedRoutine] = useState(null);
    const [buttonText, setButtonText] = useState('mañana'); // Estado para la palabra del botón

    useEffect(() => {
        const fetchRoutine = async () => {
            try {
                const response = await fetch('https://memo-back-bklt-dev.fl0.io/rutinas/viernes');
                const data = await response.json();
                console.log('Data', data)
                setFetchedRoutine(data);
            } catch (error) {
                console.error('Error fetching routine:', error);
            }
        };

        fetchRoutine();
    }, []);


    //cambio lick http://localhost:8080/seleccion
    // Controlador de eventos para el clic del botón
    const handleButtonClick = async () => {
        try {
            // Realiza una solicitud POST con la palabra del botón a la dirección deseada
            const response = await fetch('https://memo-back-bklt-dev.fl0.io/seleccion', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ palabra: buttonText }), // Envía la palabra
            });

            // Maneja la respuesta de la solicitud POST aquí

        } catch (error) {
            console.error('Error al enviar la palabra:', error);
        }
    };

    if (!fetchedRoutine) {
        return <p>Cargando...</p>;
    }
//cambio link linea 130 http://192.168.100.2:3000/actividad/imagenes/abrir
    return (
        <div>
            <h2>{fetchedRoutine.title}</h2>
            <p>{fetchedRoutine.description}</p>
            <p>Día de la semana: {fetchedRoutine.diaSemana}</p>
            <h3>Mañana</h3>
            <ol>
                {fetchedRoutine.mañana.map((item, index) => (
                    <li key={index}>
                        <p>Horario de inicio: {item.horarioInicio}</p>
                        <p>Horario de fin: {item.horarioFin}</p>
                        <p>Actividades:</p>
                        <ol>
                            {item.actividades.map((actividad, actividadIndex) => (
                                <li key={actividadIndex}>{actividad}</li>
                            ))}
                        </ol>
                    </li>
                ))}
            </ol>
            
            <Link to="/actividad/imagenes/abrir">
                <CustomButton text={buttonText} estilo={"custom-button"} onClick={handleButtonClick} />
            </Link>
        </div>
    );
}
