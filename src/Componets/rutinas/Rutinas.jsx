import React, { useState, useEffect } from 'react';

export const Rutinas = () => {
    // Estado para almacenar la rutina
    const [fetchedRoutine, setFetchedRoutine] = useState(null);

    // Realizar la solicitud cuando se monta el componente
    useEffect(() => {
        const fetchRoutine = async () => {
            try {
                const response = await fetch('https://memo-back-bklt-dev.fl0.io/rutinas/viernes');
                const data = await response.json();
                setFetchedRoutine(data);
            } catch (error) {
                console.error('Error fetching routine:', error);
            }
        };
    
 
    

        fetchRoutine();
    }, []); // El segundo argumento vacío asegura que se ejecute solo una vez al montar el componente

    if (!fetchedRoutine) {
        return <p>Cargando...</p>; 
    }

    return (
        <div>
            <h2>{fetchedRoutine.title}</h2>
            <p>{fetchedRoutine.description}</p>
            <p>Día de la semana: {fetchedRoutine.diaSemana}</p>
            <h3>Mañana</h3>
            <ul>
                {fetchedRoutine.mañana.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>
            <h3>Tarde</h3>
            <ul>
                {fetchedRoutine.tarde.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>
            <h3>Noche</h3>
            <ul>
                {fetchedRoutine.noche.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>

            
        </div>
        
    );
};

