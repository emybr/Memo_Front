import React, { useEffect, useState } from 'react';


const Pictograma = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Aquí realizarás la solicitud a la API para obtener las imágenes.
    // Debes usar la URL proporcionada.
    const apiUrl = 'https://memo-back-txp0-dev.fl0.io/actividad/imagenes/abrir&parametros=abuela&parametros=decir';

 // Realiza la solicitud GET a la API utilizando fetch.
 fetch(apiUrl)
 .then((response) => {
   if (!response.ok) {
     throw new Error(`Error de red - ${response.status}`);
   }
   return response.json();
 })
 .then((data) => {
   // Al recibir la respuesta de la API, establece las imágenes en el estado.

   console.log('Data de la respuesta:', data);
   setImages(data.imagenes);
 })
 .catch((error) => {
   console.error('Error al obtener las imágenes:', error);
 });
}, []);

return (
  <div className="image-gallery">
    {images.map((image, index) => (
      <img key={index} src={`data:image/png;base64, ${image.data}`} alt={`Imagen ${index}`} />
    ))}
  </div>
);
};

export default Pictograma