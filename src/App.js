
import './App.css';
import  Rutinas  from './Componets/rutinas/Rutinas';
import NavBar from './Componets/navBar/NavBar';
// import CustomButton from './Componets/Button/Button.jsx';
import { HomeTutor } from './Componets/HomeTutor/HomeTutor';
import { HomeLogin } from './Componets/HomeLogin/HomeLogin';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import RegisterUser from './Componets/Register/RegisterUser';
import { HomeInicio } from './Componets/HomeInicio/HomeInicio';
import ImagenesActividad from './Componets/Register/ImagenesRutina';
import { Categorias } from './Componets/Categorias/Categorias.jsx';
import Terminos from './Componets/Terminos/Terminos';
import ListaSemana from './Componets/ListaSemana/ListaSemana';
import HomeUsuario from './Componets/HomeUsuario/HomeUsuario';
import { UserProvider } from './UserContext'; // Importa el contexto
import PassTutor from './Componets/PassTutor/PassTutor';
import Pictograma from './Componets/Pictograma/Pictograma';






function App() {
  return (
    <>
    <UserProvider>
    <BrowserRouter>
      <Routes>
      <Route exact path='/inicio' element={ <HomeInicio/>} />
        <Route exact path='/login' element={ <HomeLogin/>} />
        <Route exact path='/tutor/:esarData' element={ <HomeTutor/>} />
        <Route exact path='/tutor/rutinas/:esarData/:dia' element={ <Rutinas/>} />
        <Route exact path='/tutor/categorias' element={<Categorias/>} />
        <Route exact path='/register' element={<RegisterUser/>}/>
        <Route exact path="/actividad/imagenes/abrir" element={<ImagenesActividad />} />
        <Route exact path='/terminos' element={<Terminos/>}/>
        <Route path='/*' element={<Navigate to='/inicio' />} />
        <Route exact path='/semanaTutor/:esarData' element={<ListaSemana/>}/>
        <Route exact path='/homeUsuario/:esarData' element={<HomeUsuario/>}/>
        <Route exact path='/passTutor/:esarData' element={<PassTutor/>}/>
        <Route exact path='/pictograma' element={<Pictograma/>}/>
      </Routes>
    </BrowserRouter>
    </UserProvider>
    </>
  );
}

export default App;
