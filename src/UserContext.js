import React, { createContext, useContext, useState } from 'react';

// Creamos el contexto
const UserContext = createContext();

// Definimos un componente proveedor que establecerá el estado y proporcionará funciones para actualizarlo
export const UserProvider = ({ children }) => {
  const [userEmail, setUserEmail] = useState(null);

  const updateUserEmail = (email) => {
    setUserEmail(email);
  };

  return (
    <UserContext.Provider value={{ userEmail, updateUserEmail }}>
      {children}
    </UserContext.Provider>
  );
};

// Función para acceder al contexto
export const useUser = () => {
  return useContext(UserContext);
};
