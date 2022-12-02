import React from 'react'
import { useEffect } from 'react';

export const Ubicacion = () => {
  const[semana, setSemana] =React.useState()
  const fetchSemana =()=>{
    const currentdate = new Date();
    var oneJan = new Date(currentdate.getFullYear(),0,1);
    var numberOfDays = Math.floor((currentdate - oneJan) / (24 * 60 * 60 * 1000));
    let result = Math.ceil(( currentdate.getDay() + 1 + numberOfDays) / 7);
    
      /* console.log('currentdate:  ',currentdate)
      console.log('Onejan:  ', oneJan)
      console.log('numberOfDays:  ', numberOfDays) */
      console.log('result:  ', result)
  }
useEffect(
  ()=>{
  
    setSemana(numeroDeSemana(new Date()))

  },[])

  const numeroDeSemana = fecha => {
    const DIA_EN_MILISEGUNDOS = 1000 * 60 * 60 * 24,
        DIAS_QUE_TIENE_UNA_SEMANA = 7,
        JUEVES = 4;
    fecha = new Date(Date.UTC(fecha.getFullYear(), fecha.getMonth(), fecha.getDate()));
    let diaDeLaSemana = fecha.getUTCDay(); // Domingo es 0, sábado es 6
    if (diaDeLaSemana === 0) {
        diaDeLaSemana = 7;
    }
    fecha.setUTCDate(fecha.getUTCDate() - diaDeLaSemana + JUEVES);
    const inicioDelAño = new Date(Date.UTC(fecha.getUTCFullYear(), 0, 1));
    const diferenciaDeFechasEnMilisegundos = fecha - inicioDelAño;
    return Math.ceil(((diferenciaDeFechasEnMilisegundos / DIA_EN_MILISEGUNDOS) + 1) / DIAS_QUE_TIENE_UNA_SEMANA);

   
};

const numeroDeSemanaActual = numeroDeSemana(new Date());
console.log("El número de semana es: %d", numeroDeSemanaActual);
  console.log('Semana',semana)
  return (
    <div>TEST</div>
  )
}
