import React, {useContext, useState, useEffect, useRef, memo, useMemo} from 'react'
import { Card, Container } from 'react-bootstrap'
import CEpointContext from '../../../context/CEpointContext';



import '../Usuarios.css'
import * as XLSX from "xlsx"
import  CardUsuario from './CardUsuario';


 const Todos = () => {
  const {state,
    getUsuarios}=useContext(CEpointContext)

  const [Civiles, setCiviles] = useState([])
  
  
  

console.log('STATE IN todos:', state)
 
   




//console.log('habilitados?:', Userun)


const [excel, setExcel] = useState()
function ExportData() {
  //var XLSX = require("xlsx")

   /* 创建worksheet */
   var ws = XLSX.utils.json_to_sheet(state.UsuariosActivosDetail);

   /* 新建空workbook，然后加入worksheet */
   var wb = XLSX.utils.book_new();
   XLSX.utils.book_append_sheet(wb, ws, "People");
 
   /* 生成xlsx文件 */
   XLSX.writeFile(wb, `usuarios.xlsx`);
}

/* 
useEffect(() => {
  getUsuarios()
}, []) */

const civilesWay = useMemo(() => {
  return state.UsuariosActivosDetail.reduce((past, current) => {
    const foundItem = past.find(it => it.area === current.area)
    if (foundItem) {
      foundItem.data = foundItem.data
        ? [...foundItem.data, {
          'nombre': current.nombre,
          'perfil': current.perfil,
          'email': current.email,
          'password': current.password,
          'Uid': current.UID,
          'empresa': current.empresa,
          'asignador': current.asignador,
          'checador': current.checador,
          'ocupado': current.ocupado,
          'lectoreAsistencia': current.lectoreAsistencia
        }]
        : [{
          'nombre': current.nombre,
          'perfil': current.perfil,
          'email': current.email,
          'password': current.password,
          'Uid': current.UID,
          'empresa': current.empresa,
          'asignador': current.asignador,
          'checador': current.checador,
          'ocupado': current.ocupado,
          'lectoreAsistencia': current.lectoreAsistencia
        }]
        } else {
        past.push({
        'area': current.area,
        'data': [
        {
        'nombre': current.nombre,
        'perfil': current.perfil,
        'email': current.email,
        'password': current.password,
        'Uid': current.UID,
        'empresa': current.empresa,
        'asignador': current.asignador,
        'checador': current.checador,
        'ocupado': current.ocupado,
        'lectoreAsistencia': current.lectoreAsistencia
        }
        ]
        })
        }
        return past;
        }, [])
        }, [state.UsuariosActivosDetail])
        
        useEffect(() => {
        setCiviles(civilesWay)
        }, [civilesWay])


console.log(Civiles)

/* 

const CivilesWay = (props) => {
  
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
      
        getUsuarios()
     
  
     },[])
    


useEffect(()=>{
  CivilesWay(state.UsuariosActivosDetailstate)
},[])

    */
    
   
  
  
  const empresaRef =useRef("")
  //console.log(nombreRef.current.value)
  
  const ref = useRef(null);

  
  /* const handleClick =  */


 



  return (
    <Container fluid>
  <Card /* className={Civiles.area} */> 
    {

Civiles.map((e) => {
  
  return  <Card className={e.area}> 
          <Card.Title ><h4><strong>{e.area}</strong></h4></Card.Title>  
          <Container className='civiles'   > 
          {e.data.map((s)=><CardUsuario prop={s}/>)}  
          </Container>
          </Card>
  
 
   
  } 
  
 
)

}

      </Card>
    </Container>

)
}

export default memo(Todos)





    
      
   
   
 
  
 
    
      
    
     
   
    
    




/*
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
*/