import React, {useState} from 'react'
import moment from 'moment'
import { Card, Button, Col, Row, Container, Overlay,Popover } from 'react-bootstrap'
import { MdNavigation } from "react-icons/md";
import MyMap from '../MyMap'

import { Foto } from './Foto';
import { useRef } from 'react';
moment.locale('es');


export const CardAsistencia = ({dato}) => {

  
  const [contador, setContador] = useState(0)
  const date = moment(dato.date)
  const day = date.date()
  const month = date.month()
  const year = date.year()

 const [showPhoto, setShowPhoto] = useState(false);
 const handleShowPhoto = () => setShowPhoto(!showPhoto);
 const targetRef = useRef(null)

 const [showUbicacion, setShowUbicacion] = useState(false);
 const handleShowUbicacion = () => setShowUbicacion(!showUbicacion);
 const targetRefUbicacion = useRef(null)




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




return (
    <Container fluid>
  <Card key={dato.date}  className="text-center ">
    <Card.Header><strong>{dato.tipoAsistencia}</strong></Card.Header>
    <Card.Body>
   
      <Card>
        <Card.Header><strong>{dato.trabajador}</strong> </Card.Header>
        <Card.Body>
{dato.latitud}
<Row>

    <Col>
    <br />
      Hora:  <strong>{date.format('HH:mm')}</strong> 
      <br />
   Fecha:  <strong>{date.format('DD/MMMM/YYYY')}</strong> 
    
    </Col>

</Row>

       

        </Card.Body>
      </Card>

    
  
    
    
    
    </Card.Body>
    <Card.Footer  className="text-muted">
    <Row >
        <Col>
        <Button key={dato.date} ref={targetRef} onClick={handleShowPhoto} variant="primary">Foto</Button>



        
        <Overlay
        show={showPhoto}
        target={targetRef.current}
        placement="left"
        //container={ref}
        containerPadding={20}
      >
        <Popover id="popover-contained">
          <Popover.Header as="h3"></Popover.Header>
          <Popover.Body>
          
              <Foto  dato={dato} />   
                
          </Popover.Body>
        </Popover>
      </Overlay>
      
        </Col>
        <Col>
        <Button key={dato.date}  ref={targetRefUbicacion}variant="warning" onClick={handleShowUbicacion}>Ubicacion</Button>


       <Overlay
        show={showUbicacion}
        target={targetRefUbicacion.current}
        placement="right"
        
        containerPadding={20}
      >
        <Popover id="popover-contained">
          <Popover.Header as="h3"></Popover.Header>
          <Popover.Body>
        
        Aqui va ir el mapa
    <MyMap latitud={dato.latitud} longitud={dato.longitud}/> 
                
          </Popover.Body>
        </Popover>
      </Overlay> 

        </Col>

    </Row>
    </Card.Footer>
    </Card>
    </Container>
  
  )
}
