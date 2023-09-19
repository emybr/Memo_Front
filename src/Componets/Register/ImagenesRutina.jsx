
// import React, { useState, useEffect } from 'react';

// function ImagenesActividad() {
//     const [imagenes, setImagenes] = useState([]);
//     const [parametros, setParametros] = useState(['bajar_1.png','abrir.png']);

//     useEffect(() => {
//         async function fetchImagenes() {
//             try {
//                 const parametrosString = parametros.join('&parametros='); // Convierte el array en una cadena para la URL
//                 const response = await fetch(`http://localhost:8080/actividad/imagenes/${parametrosString}`);
//                 if (!response.ok) {
//                     throw new Error('No se pudieron cargar las imágenes');
//                 }

//                 const data = await response.json();
//                 console.log(data)
//                 setImagenes(data.imagenes);
//             } catch (error) {
//                 console.error('Error al cargar las imágenes:', error);
//             }
//         }

//         fetchImagenes();
//     }, [parametros]); // Agrega los parámetros como dependencia para que la solicitud se realice cuando cambien

//     return (
//         <div>
//             <h1>Imágenes de {parametros.join(' y ')}</h1>
//             <div className="imagenes-container">
//                 {imagenes.map((imagenData, index) => (
//                     <img
//                         key={index}
//                         src={`data:image/png;base64,${imagenData.data}`}
//                         alt={`Imagen ${index}`}
//                     />
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default ImagenesActividad;


import React, { useState, useEffect } from 'react';

function ImagenesActividad() {
    const [imagenes, setImagenes] = useState([]);
    const [parametros, setParametros] = useState(['bajar_1.png', 'abrir.png']);
    const [imagenesSeleccionadas, setImagenesSeleccionadas] = useState([]);

    const toggleSeleccion = (imagenIndex) => {
        // Clonar el array de imágenes seleccionadas para no mutar el estado directamente
        const nuevasImagenesSeleccionadas = [...imagenesSeleccionadas];
        if (nuevasImagenesSeleccionadas.includes(imagenIndex)) {
            // Si la imagen ya está seleccionada, quítala
            const index = nuevasImagenesSeleccionadas.indexOf(imagenIndex);
            nuevasImagenesSeleccionadas.splice(index, 1);
        } else {
            // Si la imagen no está seleccionada, agrégala
            nuevasImagenesSeleccionadas.push(imagenIndex);
        }
        setImagenesSeleccionadas(nuevasImagenesSeleccionadas);
    };

    const enviarSeleccion = async () => {
        try {
            const imagenesSeleccionadasNombres = imagenesSeleccionadas.map(
                (index) => imagenes[index].nombre
            );
            const response = await fetch('http://localhost:8080/actividad/seleccion', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    imagenes: imagenesSeleccionadasNombres,
                }),
            });

            if (!response.ok) {
                throw new Error('No se pudo enviar la selección de imágenes');
            }

            // Aquí puedes manejar la respuesta del servidor si es necesario

        } catch (error) {
            console.error('Error al enviar la selección de imágenes:', error);
        }
    };

    useEffect(() => {
        async function fetchImagenes() {
            try {
                const parametrosString = parametros.join('&parametros='); // Convierte el array en una cadena para la URL
                const response = await fetch(
                    `http://localhost:8080/actividad/imagenes/${parametrosString}`
                );
                if (!response.ok) {
                    throw new Error('No se pudieron cargar las imágenes');
                }

                const data = await response.json();
                console.log(data);
                setImagenes(data.imagenes);
            } catch (error) {
                console.error('Error al cargar las imágenes:', error);
            }
        }

        fetchImagenes();
    }, [parametros]); // Agrega los parámetros como dependencia para que la solicitud se realice cuando cambien

    return (
        <div>
            <h1>Imágenes de {parametros.join(' y ')}</h1>
            <div>
                <button onClick={enviarSeleccion}>Enviar Selección</button>
            </div>
            <div className="imagenes-container">
                {imagenes.map((imagenData, index) => (
                    <div key={index} onClick={() => toggleSeleccion(index)}>
                        <img
                            src={`data:image/png;base64,${imagenData.data}`}
                            alt={`Imagen ${index}`}
                            style={{
                                border: imagenesSeleccionadas.includes(index)
                                    ? '2px solid blue'
                                    : '2px solid transparent',
                            }}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ImagenesActividad;
