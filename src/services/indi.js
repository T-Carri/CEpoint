import React, {useSelector}  from 'react'
import axios from 'axios'
//import qs from 'qs'
//FormData()   crea un nuevo objeto 
/*const {currentAsignacion}= useSelector((state)=>
state.asignacion)
const {currentUser} = useSelector((state)=>
state.user)

 */


//FETCH POST ASIGNACION
       
export async function saveAsignacion(asignacionData ){
    
    try{

        console.log(asignacionData)
        
       const formData = [
        { residente: asignacionData.Residente1,
          proyecto: asignacionData.Proyecto_de_res_1 },
        { residente: asignacionData.Residente2,
          proyecto: asignacionData.Proyecto_de_res_2,},
        { residente: asignacionData.Residente3,
          proyecto: asignacionData.Proyecto_de_res_3},       
        { residente: asignacionData.Residente4,
          proyecto: asignacionData.Proyecto_de_res_4}


        
       ]
      /*  
        const formData = new FormData() 

formData.append('Residente 1', asignacionData.Residente1)
formData.append('Bandeja Proyecto 1', asignacionData.Proyecto_de_res_1)
formData.append('Residente 2', asignacionData.Residente2)
formData.append('Bandeja de Proyectos 2', asignacionData.Proyecto_de_res_2 )
formData.append('Residente 3', asignacionData.Residente3)
formData.append('Bandeja de Proyectos 3', asignacionData.Proyecto_de_res_3)
formData.append('Residente 4', asignacionData.Residente4)
formData.append('Bandeja de Proyectos 4', asignacionData.Proyecto_de_res_4)
*/


        console.log(formData)


        const response= await axios({  

            url: `http://localhost:8800/planAsignacion`,
            method: 'POST',
            data: formData
        
        })
        
 //TODO Agregar id de usuario que guarda asignacion, checar useSelector de redux
 //https://cepointbackend.herokuapp.com
        return response
    }catch(e){
        console.log(e)
    }
    
    
}




  















/*
  async function sendGetRequest(){
 

    const up  = await axios.post(
      "http://localhost:8800/planAsignacion/", {

             params: {
              userId:currentUser
             }
      }

    ) 

   

         console.log(up.data); 


  }




*/


