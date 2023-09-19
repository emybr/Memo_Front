
import './App.css';
import { Rutinas } from './Componets/rutinas/Rutinas';
import NavBar from './Componets/navBar/NavBar';
// import CustomButton from './Componets/Button/Button.jsx';
import { HomeTutor } from './Componets/HomeTutor/HomeTutor';
import { HomeLogin } from './Componets/HomeLogin/HomeLogin';
import { BrowserRouter, Route, Routes,useHistory } from 'react-router-dom'
import RegisterUser from './Componets/Register/RegisterUser';
import { HomeInicio } from './Componets/HomeInicio/HomeInicio';
import ImagenesActividad from './Componets/Register/ImagenesRutina';
import { Categorias } from './Componets/Categorias/Categorias.jsx';





function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route exact path='/inicio' element={ <HomeInicio/>} />
        <Route exact path='/login' element={ <HomeLogin/>} />
        <Route exact path='/tutor' element={ <HomeTutor/>} />
        <Route exact path='/tutor/rutinas' element={ <Rutinas/>} />
        <Route exact path='/tutor/categorias' element={<Categorias/>} />
        <Route exact path='/register' element={<RegisterUser/>}/>
        <Route exact path="/actividad/imagenes/abrir" element={<ImagenesActividad />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
