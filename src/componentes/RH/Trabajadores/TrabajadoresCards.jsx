import React, {useContext, useState, useEffect, useRef, memo, useMemo} from 'react'
import { Card, Container } from 'react-bootstrap'
import CEpointContext from '../../../context/CEpointContext';
import  TrabajadorCard  from './TrabajadorCard';


//import './Trabajadores.css'




 const TrabajadoresCards = () => {
  const {state,
    getUsuarios}=useContext(CEpointContext)

  const [Civiles, setCiviles] = useState([])
  
  
  useEffect(()=>{
    async function fetchData() {
      await getUsuarios();
    }
    fetchData();
    
  }, [])
  


 
console.log('STATE IN todos:', state)
 
    




//console.log('habilitados?:', Userun)





const civilesWay = useMemo(() => {
  return state.UsuariosActivosDetail&&state.UsuariosActivosDetail.reduce((past, current) => {
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


//console.log(Civiles)

   
  
  
  const empresaRef =useRef("")
  //console.log(nombreRef.current.value)
  
  const ref = useRef(null);

  
  /* const handleClick =  */


 



  return (
    <Container fluid>
  <Card /* className={Civiles.area} */> 
  
    {

Civiles&&Civiles.map((e) => {
  
  return  <Card key={e.area} className={e.area}> 
          <Card.Title ><h4><strong>{e.area}</strong></h4></Card.Title>  
          <Container className='civiles'   > 
         
         
          {e.data.map((s)=><TrabajadorCard key={s.Uid} prop={s}/>)}  
         
         
          </Container>
          </Card>
  
 
   
  } 
  
 
)

}

      </Card>
    </Container>

)
}

export default TrabajadoresCards
