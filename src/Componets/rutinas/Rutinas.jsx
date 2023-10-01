// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// const Rutinas = () => {
//   const { esarData, dia } = useParams();
//   const [fetchedRoutine, setFetchedRoutine] = useState(null);

//   useEffect(() => {
//     const fetchRoutine = async () => {
//       try {
//         const response = await fetch(`https://memo-back-txp0-dev.fl0.io/rutinas/${esarData}/${dia}`);
//         if (!response.ok) {
//           throw new Error('No se pudo obtener la rutina');
//         }
//         const data = await response.json();
//         console.log('Data from API:', data); // Verifica los datos de la API
//         setFetchedRoutine(data);
//       } catch (error) {
//         console.error('Error fetching routine:', error);
//         setFetchedRoutine(null);
//       }
//     };

//     fetchRoutine();
//   }, [esarData, dia]);

//   return (
//     <>
//       <div>
//         <p>Valor de esarData: {esarData}</p>
//         <p>Día de la semana: {dia}</p>

//         {fetchedRoutine !== null && (
//           <div>
//             <h2>Rutina de la Mañana</h2>
//             <ul>
//               {fetchedRoutine.mañana.map((item, index) => (
//                 <li key={index}>{item}</li>
//               ))}
//             </ul>

//             <h2>Rutina de la Tarde</h2>
//             <ul>
//               {fetchedRoutine.tarde.map((item, index) => (
//                 <li key={index}>{item}</li>
//               ))}
//             </ul>

//             <h2>Rutina de la Noche</h2>
//             <ul>
//               {fetchedRoutine.noche.map((item, index) => (
//                 <li key={index}>{item}</li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default Rutinas;


import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Rutinas = () => {
  const { esarData, dia } = useParams();
  const [fetchedRoutine, setFetchedRoutine] = useState(null);

  const [morningImagesData, setMorningImagesData] = useState([]);
  const [afternoonImagesData, setAfternoonImagesData] = useState([]);
  const [nightImagesData, setNightImagesData] = useState([]);


  useEffect(() => {
    const fetchRoutine = async () => {
      try {
        const response = await fetch(`https://memo-back-txp0-dev.fl0.io/rutinas/${esarData}/${dia}`);
        if (!response.ok) {
          throw new Error('No se pudo obtener la rutina');
        }
        const data = await response.json();
        console.log('Data from API:', data); // Verifica los datos de la API
        setFetchedRoutine(data);

         // Mapea los arrays y realiza solicitudes para obtener las imágenes por su nombre
      const morningImagePromises = data.mañana.map(item => fetch(`https://memo-back-txp0-dev.fl0.io/actividad/abrir`).then(response => response.blob()));
      const afternoonImagePromises = data.tarde.map(item => fetch(`URL_DE_TU_API_DE_IMAGENES/${item.nombreImagen}`).then(response => response.blob()));
      const nightImagePromises = data.noche.map(item => fetch(`URL_DE_TU_API_DE_IMAGENES/${item.nombreImagen}`).then(response => response.blob()));
        console.log( morningImagePromises );

      // Espera a que se completen todas las solicitudes
      const morningImagesData = await Promise.all(morningImagePromises);
      const afternoonImagesData = await Promise.all(afternoonImagePromises);
      const nightImagesData = await Promise.all(nightImagePromises);

      // Almacena los datos de las imágenes en los estados correspondientes
      setMorningImagesData(morningImagesData);
      setAfternoonImagesData(afternoonImagesData);
      setNightImagesData(nightImagesData);

      } catch (error) {
        console.error('Error fetching routine:', error);
        setFetchedRoutine(null);
      }
    };

    fetchRoutine();
  }, [esarData, dia]);

  return (
    <>
      <div>
        <p>Valor de esarData: {esarData}</p>
        <h1 className='dia'> {dia}</h1>

        {fetchedRoutine !== null && (
          <div>
            
           
            <h2>Rutina de la Mañana</h2>
            <ol>
              {fetchedRoutine.mañana.map((item, index) => (
                <p key={index}> {item} </p>
              ))}
            </ol>

            <h2>Rutina de la Tarde</h2>
            <ol>
              {fetchedRoutine.tarde.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ol>

            <h2>Rutina de la Noche</h2>
            <ol>
              {fetchedRoutine.noche.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ol>
          </div>
        )}
        <div>
        <ol>
              {morningImagesData.map((imageData, index) => (
                <li key={index}>
                  <img src={URL.createObjectURL(imageData)} alt={`Imagen ${index}`} />
                </li>
              ))}
            </ol>
        </div>
      </div>
    </>
  );
};

export default Rutinas;







// import React, { useState, useEffect } from 'react';
// import { Link, useParams } from 'react-router-dom';
// import CustomButton from '../Button/Button';

// export const Rutinas = () => {
//     const [fetchedRoutine, setFetchedRoutine] = useState(null);
//     const [buttonText, setButtonText] = useState('mañana'); // Estado para la palabra del botón

        
//         useEffect(() => {
//             const fetchRoutine = async () => {
//                 try {
//                     const response = await fetch('https://memo-back-bklt-dev.fl0.io/rs');
//                     const data = await response.json();
//                     console.log('Data', data)
//                     setFetchedRoutine(data);
//                 } catch (error) {
//                     console.error('Error fetching routine:', error);
//                 }
//             };

//             fetchRoutine();
//         }, []);


//         //cambio lick http://localhost:8080/seleccion
//         // Controlador de eventos para el clic del botón
//         const handleButtonClick = async () => {
           
//             try {
//                 // Realiza una solicitud POST con la palabra del botón a la dirección deseada
//                 const response = await fetch('https://memo-back-bklt-dev.fl0.io/seleccion', {
//                     method: 'POST',
//                     headers: {
//                         'Content-Type': 'application/json',
//                     },
//                     body: JSON.stringify({ palabra: buttonText }), // Envía la palabra
//                 });

//                 // Maneja la respuesta de la solicitud POST aquí

//             } catch (error) {
//                 console.error('Error al enviar la palabra:', error);
//             }
//         };

//         if (!fetchedRoutine) {
//             return <p>Cargando...</p>;
//         }
//         //cambio link linea 130 http://192.168.100.2:3000/actividad/imagenes/abrir
//         return (
//             <div>
//                 <div>
//                     <p>Valor de esarData: {esarData}</p>
//                     <p>Día de la semana: {dia}</p>
//                 </div>
                
//                 <h2>{fetchedRoutine.title}</h2>
//                 <p>{fetchedRoutine.description}</p>
//                 <p>Día de la semana: {fetchedRoutine.diaSemana}</p>
//                 <h3>Mañana</h3>
//                 {/* <ol>
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
//             </ol> */}

//                 <Link to="/actividad/imagenes/abrir">
//                     <CustomButton text={buttonText} estilo={"custom-button"} onClick={handleButtonClick} />
//                 </Link>
//             </div>
//         );
//     }
