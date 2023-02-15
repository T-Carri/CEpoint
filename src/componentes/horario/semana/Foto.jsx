import React, {useEffect, useState} from 'react'
import { ref,  getDownloadURL, getStorage } from "firebase/storage"
export const Foto = ({dato}) => {
    const storage = getStorage()
    const [Photo, setPhoto] = useState('')


    useEffect(

        ()=>{
       
                
            getDownloadURL (ref(storage,  `Asistencias/${dato.presupuesto}/${dato.trabajador}/${dato.clave}` )).then((url)=>{
              //const img= document.getElementById(data.clave)
              console.log('URL',url)
             setPhoto(url)
              })
         
      
        }, [dato]
      )


  return (
    <img  /* id={Pi.clave} */ src={Photo} style={{width: '15em', height:'20em'}}></img>
  )
}
