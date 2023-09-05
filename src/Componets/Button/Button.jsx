import React from 'react'


const CustomButton = ({ text, onClick,estilo }) => {
    return (
      <div>

      <button onClick={onClick} className={estilo}>
        {text}
      </button>
      </div>  
      
    );
  };

export default CustomButton