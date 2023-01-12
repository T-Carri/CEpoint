import React, {useContext, useState, useEffect, useRef, memo} from 'react'
import { Card,  Button,  Offcanvas, Form, Row, Col, Overlay, Popover, Container } from 'react-bootstrap'


import UsuariosContext from '../../../context/UsuariosContext';

import '../Usuarios.css'
import * as XLSX from "xlsx"
import  CardUsuario from './CardUsuario';


 const Todos = () => {
  const {Usuarios,
    getUsuarios, 
    getUsersUnable, 
    
    desactivaUser,
    fetchOnlyUser,
     OnlyUser, 
     acNombre, 
     acPerfil, 
     acEmpresa,
     ableChecador,
     enableChecador,
     setOnlyUser, 
     ableOcupado,
     enableOcupado, 
     ableAsignador, 
     enableAsignador, 
     ableAsistencias, 
     enableAsistencias 
   }=useContext(UsuariosContext)

  const [Civiles, setCiviles] = useState([])
  
  
  

  //console.log('id:', Id)
   //overlay
   const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);



//console.log('habilitados?:', Userun)


const [excel, setExcel] = useState()
function ExportData() {
  //var XLSX = require("xlsx")

   /* 创建worksheet */
   var ws = XLSX.utils.json_to_sheet(Usuarios);

   /* 新建空workbook，然后加入worksheet */
   var wb = XLSX.utils.book_new();
   XLSX.utils.book_append_sheet(wb, ws, "People");
 
   /* 生成xlsx文件 */
   XLSX.writeFile(wb, `usuarios.xlsx`);
}




const CivilesWay = (props) => {
  
  //console.log('Usuarios desde creado de usuarios:',Usuarios)
  console.log('USUARIO SELECTO', OnlyUser)
  
  
  
    return props.reduce((past, current)=>{
      const foundItem = past.find(it=>it.area===current.area)
     //  console.log('past', past); 
    const r=[]
    r.push(past); 
    setCiviles(r)
    //console.log('perfiles', r);
    if(foundItem){
      foundItem.data=foundItem.data
      ?[...foundItem.data, {
       'nombre': current.nombre,
       'perfil':current.perfil, 
       'email': current.email, 
       'password': current.password,   
       'Uid':current.UID,
       'empresa':current.empresa, 
       'asignador':current.asignador,
       'checador': current.checador, 
       'ocupado': current.ocupado, 
       'lectoreAsistencia': current.lectoreAsistencia}]
     :[{ 'nombre': current.nombre, 
     'perfil':current.perfil,
     'email': current.email, 
     'password': current.password,   
     'Uid':current.UID,
     'empresa':current.empresa, 
     'asignador':current.asignador,
     'checador': current.checador, 
     'ocupado': current.ocupado, 
     'lectoreAsistencia': current.lectoreAsistencia}]
      }else{ past.push(
        {
          'area': current.area, 
          'data':
                     [{ 
                      'nombre': current.nombre,
                      'perfil':current.perfil, 
                      'email': current.email, 
                      'password': current.password,   
                      'Uid':current.UID,
                      'empresa':current.empresa, 
                      'asignador':current.asignador,
                      'checador': current.checador, 
                      'ocupado': current.ocupado, 
                      'lectoreAsistencia': current.lectoreAsistencia
                      
                    }]
          
    
    })}
    return past;
    
    }, [])}





   
  useEffect(()=>{ 
    getUsersUnable()
    },[])
     
    useEffect(()=>{ 
     
      getUsuarios()},[])
    

    useEffect(()=>{
    
    CivilesWay(Usuarios)
    //electricosWay(Usuarios)
  },[Usuarios]) 
    
  
  
  
  const empresaRef =useRef("")
  //console.log(nombreRef.current.value)
  
  const ref = useRef(null);

  
  /* const handleClick =  */


 



  return (
    <Container fluid>
  
      {
      Civiles.map((e)=>(
       e.map((r)=>(
     <Card className={r.area}> 
                 <Card.Title ><h4><strong>{r.area}</strong></h4></Card.Title>  
     <Container className='civiles'   > 
     
     
     
     
     {r.data.map((s)=>(
     
     <CardUsuario prop={s}/> 

  
     
     
     ))}
     
     
    
      
     </Container>
      </Card>
       ))
      ))
     }
    
     
    </Container>
   
    
    
  )
}

export default memo(Todos)