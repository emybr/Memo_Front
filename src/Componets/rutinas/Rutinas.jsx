
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Rutinas = () => {
    const { esarData, dia } = useParams();
    const [fetchedRoutine, setFetchedRoutine] = useState(null);
    const [morningImage, setMorningImage] = useState(null);

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
            </div>
        )}
        </div>
    </>
    );
};

export default Rutinas;



