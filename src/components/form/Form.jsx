import React from "react";
import s from "./style.module.css";
import Result from "../Result/Result";

const Form = (props) => {
  const { numeros, handleCambio, handleSubmit } = props;
  const media = (parseInt(numeros.num1) + parseInt(numeros.num2) + parseInt(numeros.num3)) / 3;

  return (
    <form className={s.form} onSubmit={(event) => {
      event.preventDefault();
      handleSubmit();
    }}>
      <h1 className={s.formTitle}>Calcula Promedio de 3 Números</h1>
      <input type="number" name="num1" value={numeros.num1} onChange={handleCambio} />
      <input type="number" name="num2" value={numeros.num2} onChange={handleCambio} />
      <input type="number" name="num3" value={numeros.num3} onChange={handleCambio} />
      <button type="submit">Calcular promedio</button>
      <Result media={media} />
    </form>
  );
};

export default Form;
