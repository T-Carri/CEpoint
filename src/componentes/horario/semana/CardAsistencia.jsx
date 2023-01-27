import React, {useState} from 'react'
import moment from 'moment'
import { Card, Button, Col, Row, Container } from 'react-bootstrap'
import { MdNavigation } from "react-icons/md";
import {getStorage, ref,  getDownloadURL } from "firebase/storage"
import { useEffect } from 'react';
moment.locale('es');


export const CardAsistencia = ({dato}) => {
  const storage = getStorage()
  const [contador, setContador] = useState(0)
  const date = moment(dato.date)
  const day = date.date()
  const month = date.month()
  const year = date.year()



/* 
    const date =moment(dato.date)
       const day= date.date() */
      /*
      dato.clave
      dato.date
      date.identidadChecador
      date.latitud
      date.longitud
      dato.presupuesto
      dato.semana
      dato.tipoAsistencia
      dato.trabajador
      
      */



     /*  if (dato.tipoAsistencia === 'Entrada' || dato.tipoAsistencia === 'Salida') {
        const trabajador = dato.trabajador
        const asistencias = dato.filter(item => item.trabajador === trabajador && item.tipoAsistencia !== dato.tipoAsistencia && moment(item.date).date() === day && moment(item.date).month() === month && moment(item.date).year() === year)
        if (asistencias.length > 0) {
            setContador(contador + 1)
        }
    }





console.log(dato.trabajador, ':', contador) */

useEffect(

  ()=>{
    ()=>{
          
      getDownloadURL (ref(storage,  `Asistencias/${dato.presupuesto}/${dato.trabajador}/${dato.clave}` )).then((url)=>{
        //const img= document.getElementById(data.clave)
        console.log('URL',url)
       setPhoto
        })
   
}
  }, []
)


return (
    <Container fluid>
  <Card key={dato.date} className="text-center ">
    <Card.Header><strong>{dato.tipoAsistencia}</strong></Card.Header>
    <Card.Body>
    <Row>
      <Col>
      <Container fluid>
       
        <img  /* id={Pi.clave} */ src={} style={{width: '6em', height:'8em'}}></img>
        
      </Container>
      </Col>
      <Col>
      <Card>
        <Card.Header><strong>{dato.trabajador}</strong> </Card.Header>
        <Card.Body>
        <br />
      Hora:  <strong>{date.format('HH:mm')}</strong> 
      <br />
   Fecha:  <strong>{date.format('DD/MMMM/YYYY')}</strong> 
    
        </Card.Body>
      </Card>
      </Col>

    </Row>
    
  
    
    
    
    </Card.Body>
    <Card.Footer className="text-muted">
    <Row >
        <Col>
        <Button key={dato.date} variant="primary">Foto</Button>
      
        </Col>
        <Col>
        <Button variant="warning">Ubicacion</Button>
        </Col>

    </Row>
    </Card.Footer>
    </Card>
    </Container>
  
  )
}
