import { useState } from "react";
import s from "./style.module.css"
import Form from './components/form/Form';
import Result from "./components/Result/Result";

const App = () => {
  const [numeros, setNumeros] = useState({
    num1: 0,
    num2: 0,
    num3: 0
  });
  const [media, setMedia] = useState(0);

  const calcularMedia = (a, b, c) => {
    const prom = (parseFloat(a) + parseFloat(b) + parseFloat(c)) / 3;
    return Math.round(prom);
  };

  const handleCambio = (e) => {
    setNumeros({
      ...numeros,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    
    const { num1, num2, num3 } = numeros;
    setMedia(calcularMedia(num1, num2, num3));
  };

  return (
    <div>
      <Form 
        numeros={numeros}
        handleCambio={handleCambio}
        handleSubmit={handleSubmit}
        />
        
    </div>
  );
};

export default App;