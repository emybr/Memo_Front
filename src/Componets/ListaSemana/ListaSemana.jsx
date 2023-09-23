// import React from 'react'
// import CustomButton from '../Button/Button'
// import '../Button/Button.css'
// import { Link } from 'react-router-dom';


// const ListaSemana = () => {
//     const handleClick = () => {
        
//     };
//   return (
//     <>
//             <div className='HomeTutor'>
//                 <div>
//                     <CustomButton text="LUNES" onClick={handleClick} estilo={"custom-button"} />
//                     <CustomButton text="MARTES" onClick={handleClick} estilo={"custom-button"} />
//                     <CustomButton text="MIERCOLES" onClick={handleClick} estilo={"custom-button"} />
//                     {/* <Link to="/tutor/rutinas"> */}
//                         <CustomButton text="JUEVES"  estilo={"custom-button"} />
//                     {/* </Link> */}
//                     <CustomButton text="VIERNES" onClick={handleClick} estilo={"custom-button"} />
//                     <CustomButton text="SABADO" onClick={handleClick} estilo={"custom-button"} />
//                     <CustomButton text="DOMINGO" onClick={handleClick} estilo={"custom-button"} />
                    
//                     <div className='contenedorBotonAzul'>
//                     <Link to="/tutor">
//                         <button>
//                             <img className="botonAzul" src="back.png" alt="back" />
//                         </button>
//                     </Link>
//                 </div>
                   
//                 </div>
//             </div>
//         </>
//   )
// }

// export default ListaSemana

import React, { useState } from 'react';
import CustomButton from '../Button/Button';
import '../Button/Button.css';
import { useHistory } from 'react';

const ListaSemana = () => {
  // Estado para almacenar el día de la semana seleccionado
  const [selectedDay, setSelectedDay] = useState(null);

  // Acceso al objeto history para redirigir a la pantalla de información
  const history = useHistory();

  // Función de manejo de clic para el botón de día
  const handleClick = (day) => {
    setSelectedDay(day); // Actualiza el estado con el día seleccionado
  };

  // Función para redirigir a la pantalla de información
  const redirectToInfo = () => {
    if (selectedDay) {
      // Redirige a la pantalla de información con el día como parámetro
      history.push(`/informacion/${selectedDay}`);
    }
  };

  return (
    <>
      <div className='HomeTutor'>
        <div>
          <CustomButton text="LUNES" onClick={() => handleClick('LUNES')} estilo={"custom-button"} />
          <CustomButton text="MARTES" onClick={() => handleClick('MARTES')} estilo={"custom-button"} />
          <CustomButton text="MIERCOLES" onClick={() => handleClick('MIERCOLES')} estilo={"custom-button"} />
          <CustomButton text="JUEVES" onClick={() => handleClick('JUEVES')} estilo={"custom-button"} />
          <CustomButton text="VIERNES" onClick={() => handleClick('VIERNES')} estilo={"custom-button"} />
          <CustomButton text="SABADO" onClick={() => handleClick('SABADO')} estilo={"custom-button"} />
          <CustomButton text="DOMINGO" onClick={() => handleClick('DOMINGO')} estilo={"custom-button"} />

          <div className='contenedorBotonAzul'>
            <button onClick={redirectToInfo}>
              <img className="botonAzul" src="back.png" alt="back" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListaSemana;
