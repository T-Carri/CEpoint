import React, {useState, useEffect, useContext} from 'react'

import { Card, Button, Accordion, Table, Overlay, Popover, Modal } from 'react-bootstrap'

import '../Horario.css'
import MyMap from '../MyMap';
import {getStorage, ref, getDownloadURL, getStream} from "firebase/storage"
import CEpointContext from '../../../context/CEpointContext';

export const Semana = () => {
 
  const {state} = useContext(CEpointContext)
 
  const [Presupuestos, setPresupuesto] = useState([]);
  const [Asistencias, setAsistencias] = useState([]); 
  const [itinerante, setItinerante] = useState([])
  const [Pi, setPi] = useState([])
  const [Source, setSource] = useState()
  const [show1, setShow1] = useState(false);
  const [target, setTarget] = useState(null);



  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  const storage = getStorage()


      
    useEffect(()=>{
      getDownloadURL (ref(storage,  `Asistencias/${storageData.presupuesto}/${storageData.trabajador}/${storageData.clave}` )).then((url)=>{
        //const img= document.getElementById(data.clave)
        console.log('testURL: ', url )
        //console.log('Pi:  ', Pi)
        setSource(url)})
    },[Pi])
    
     const storageData={
      clave: Pi?Pi.clave:null, 
      date:Pi?Pi.date:null,
      presupuesto:Pi?Pi.presupuesto:null,
      tipoAsistencia: Pi?Pi.tipoAsistencia:null, 
      trabajador: Pi?Pi.trabajador:null
     }
    
//`Asistencias/${data.presupuesto}/${data.trabajador}/${data.clave}`
     
    const AsistenciasPresupuesto = (props) => {

      return props.reduce((past, current)=>{
        const foundItem =  past.find(it => it.semana === current.semana)
      
       const r= []
       r.push(past);
       setItinerante(r)
       
        if (foundItem ){
     foundItem.data=foundItem.data
     ?[...foundItem.data, {'trabajador': current.trabajador,'tipoAsistencia':current.tipoAsistencia, 'date': current.date, 'clave':current.clave, 'presupuesto': current.presupuesto, 'latitud':current.latitud,'longitud':current.longitud}]
     :[{ 'trabajador': current.trabajador,'tipoAsistencia':current.tipoAsistencia, 'date': current.date, 'clave':current.clave, 'presupuesto': current.presupuesto, 'latitud':current.latitud,'longitud':current.longitud   }]
  }else{ past.push( {
    'semana': current.semana,
    'data': [{
      'trabajador': current.trabajador,'tipoAsistencia':current.tipoAsistencia, 'date': current.date, 'clave':current.clave, 'presupuesto': current.presupuesto, 'latitud':current.latitud,'longitud':current.longitud
    }]
  } ) }  
  
  return past;
  
      }, [])}
  
      const Monday = (dato)=>{
        let exReg = /Mon/
if(exReg.test(dato)){
  return dato
}else{return null}
       }

       const Martes = (dato)=>{
        let exReg = /Tue/
if(exReg.test(dato)){
  return dato
}else{return null}
       }

       const Miercoles = (dato)=>{
        let exReg = /Wed/
if(exReg.test(dato)){
  return dato
}else{return null}
       }

       const Jueves = (dato)=>{
        let exReg = /Thu/
if(exReg.test(dato)){
  return dato
}else{return null}
       }
       const Viernes = (dato)=>{
        let exReg = /Fri/
if(exReg.test(dato)){
  return dato
}else{return null}
       }

       const Sabado = (dato)=>{
        let exReg = /Sat/
if(exReg.test(dato)){
  return dato
}else{return null}
       }
    
      
       
     
      return (
    <Card>  
     <div className='presupuestos'>
     {ProyectosFiltrados&&
      ProyectosFiltrados.map((presupuesto)=>(
        <Button variant="danger" 
             id={presupuesto.obra}
         
         value={presupuesto.presupuesto}
         /* onClick={
              async (e)=>{
               e.preventDefault()
               setExcel(presupuesto.asistencias)
               console.log("objeto completo:", presupuesto.asistencias)
               setAsistencias(presupuesto.asistencias)
               //await AsistenciasPresupuesto(Asistencias)
               darkness(Asistencias)
               //AsistenciasPresupuestodos(Asistencias)
               setNombreProyecto(presupuesto.presupuesto)
               //  await  orden(itinerante)
               //console.log("asistencias:", Asistencias)       

        
      }} */> {presupuesto.presupuesto} </Button>))
      } 
    </div>
    
                  
  
  
  
          <div className='horariosemanas'>
             <Card id="prueba" className='lg'>
        
             {
  itinerante.map((e=> (
   
   e.map((r)=>(
  
  <Accordion  >
  <Accordion.Item eventKey={r.semana} >
    <Accordion.Header>{r.semana}</Accordion.Header>
    <Accordion.Body>
  
    <Table striped bordered hover responsive='sm'>
        <thead>
          <tr>
          <th>Trabajador</th>
               <th>Asistencia</th>

               <th>Lunes</th>
               <th>Martes</th>
               <th>Miercoles</th>
               <th>Jueves</th>
               <th>Viernes</th> 
               <th>Sabado</th> 


          </tr>
        </thead>
        <tbody>
        {
    r.data.map((s)=>{ 

     



  
   return   <tr>
           <td key={s.trabajador}>{s.trabajador}</td>
            <td>{s.tipoAsistencia} 
            <Button key={s.trabajador} onClick={  
              
       async (event) => {
           
         try {
          if(show1){
            setShow1(false)
          
           
          }else{
            setShow1(true)
            setTarget(event.target);
          
            await setPi(s)
            //getPicture(Pi)
          }
          
         } catch (error) {
          console.log(error)
         }
      
        
        }}>Ver foto</Button>
   <br />      
<br />
         <Button variant='success' onClick={handleShow}>Ubicacion</Button>
           </td>


           <Overlay
        show={show1}
        target={target}
        placement="bottom"
        //container={ref}
        containerPadding={20}
      >
        <Popover id="popover-contained">
          <Popover.Header as="h3"></Popover.Header>
          <Popover.Body>
          <img  /* id={Pi.clave} */ src={Source&&Source} style={{width: '6em', height:'8em'}}></img>
                 
                
          </Popover.Body>
        </Popover>
      </Overlay>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
       <h6>{s.latitud}</h6>
       <h6>{s.longitud}</h6>

      <MyMap  latitud={s.latitud} longitud={s.longitud}/>  

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
         
        </Modal.Footer>
      </Modal>
            <td>{Monday(s.date)}</td>
            <td>{Martes(s.date)}</td>
            <td>{Miercoles(s.date)}</td>
            <td>{Jueves(s.date)}</td>
            <td>{Viernes(s.date)}</td>
            <td>{Sabado(s.date)}</td>
       </tr>
        
  
     
      
  
})
  } 
  </tbody>
       
      </Table>
  
  
  
  
    </Accordion.Body>
  </Accordion.Item>
  </Accordion>
  
  ))
   
  )))
  
        }
    
              </Card>
           </div>
    </Card>
     )
    }


 
      

 
   
    
