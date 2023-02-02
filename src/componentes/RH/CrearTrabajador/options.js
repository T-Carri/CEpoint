export const options = [
 
    {
      type: "group",
      name: "CIVILES",
      items: [
        
        { name: "Residente de obra", value: "Residente de obra" },
        { name: "Arquitecto proyectista", value: "Arquitecto proyectista" },
        { name: "Administrador de obra", value: "Administrador de obra"},
        { name: "Cabo albañil", value: "Cabo albañil" },
        { name: "Oficial albañil", value: "Oficial albañil" },
        { name: "Oficial medio albañil", value: "Oficial medio albañil" }, 
        { name: "Ayudante albañil", value: "Ayudante albañil" },
        { name: "Ayudante general", value: "Ayudante general" },
        { name: "Operador", value: "Operador" }
        
      ] 
    },
    {
      type: "group",
      name: "SEGURIDAD E HIGIENE",
      items: [
        { name: "Coordinador de SHE", value: "Coordinador de SHE" },
        { name: "Supervision de SHE", value: "Supervision de SHE" }
       
      ]
    },
    {
      type: "group",
      name: "ELECTRICOS",
      items: [ 
        { name: "Residente electrico", value: "Residente electrico" },
        { name: "Oficial electrico", value: "Oficial electrico" },
        { name: "Ayudante electrico", value: "Ayudante electrico" }      
      ]
    }, 
    {
      type: "group",
      name: "HERRERIA",
      items: [ 
        { name: " Cabo soldador", value: "Cabo soldador" },
        { name: "Soldador", value: "Soldador" },
        { name: "Herrero", value: "Herrero" },
        { name: "Ayudante de soldador", value: "Ayudante de soldador" },
        { name: "Maestro aluminiero", value: "Maestro aluminiero" },
           ]
    },
    {
      type: "group",
      name: "DIRECCION",
      items: [ 
        { name: "Director MacBrick", value: "Director MacBrick" },
        { name: "Director inmobiliaria", value: "Director inmobiliaria" },
        { name: "Director SIARSA", value: "Director SIARSA" },
        { name: "Director SECMA", value: "Director SECMA" }, 
        { name: "Director CE2000", value: "Director CE2000" },
        { name: "Director SOLCOM", value: "Director SOLCOM" }     
      ]
    },
    {
      type: "group",
      name: "SIARSA",
      items: [ 
        { name: "Gerente de operaciones", value: "Gerente de operaciones" },
        { name: "Tecnico especialista", value: "Tecnico especialista" }
      ]
    },
    {
      type: "group",
      name: "SECMA",
      items: [ 
        { name: "Proyectos CCTV", value: "Proyectos CCTV" },
        { name: "Operacion CCTV", value: "Operacion CCTV" },
        { name: "Tecnico CCTV", value: "Tecnico CCTV" }
      ]
    },
    {
      type: "group",
      name: "SOLCOM",
      items: [ 
        { name: "Asistente Direccion", value: "Asistente Direccion" }
      
      ]
    },
    {
      type: "group",
      name: "ALMACEN",
      items: [ 
        { name: "Chofer", value: "Chofer" }
      
      ]
    },
    {
      type: "group",
      name: "CORPORATIVO",
      items: [ 
        { name: "Portero", value: "Portero" }
      
      ]
    }

  ];

 export function searchArea(dato) {
    let area;
      switch (dato) {
            case "CHECADOR": 
          area = "CUENTAKEYCHECADOR";
          break;
    case "Residente de obra": 
          area = "CIVIL";
          break;
    case "Arquitecto proyectista": 
          area = "CIVIL";
          break;
    case "Cabo albañil": 
          area = "CIVIL";
          break; 
    case "Administrador de obra": 
          area = "CIVIL";
          break; 
          
          case "Oficial albañil": 
          area = "CIVIL";
          break;       
    case "Ayudante albañil": 
          area = "CIVIL";
          break; 
    case "Ayudante general": 
          area = "CIVIL";
          break; 
    case "Oficial medio albañil": 
          area = "CIVIL";
          break;
    case "Operador": 
          area = "CIVIL";
          break; 
          case "Director MacBrick": 
          area = "CIVIL";
          break; 
          case "Director inmobiliaria": 
          area = "CIVIL";
          break; 
          case "Director CE2000": 
          area = "CIVIL";
          break; 
    case "Coordinador de SHE": 
          area = "SHE";
          break; 
    case "Supervision de SHE": 
          area = "SHE";
          break; 
    case "Residente electrico": 
          area = "ELECTRICOS";
          break; 
    case "Oficial electrico": 
          area = "ELECTRICOS";
          break;
          case "Ayudante electrico": 
          area = "ELECTRICOS";
          break;
    case "Cabo soldador": 
          area = "HERREROS";
          break;
    case "Soldador": 
          area = "HERREROS";
          break;      
    case "Herrero": 
          area = "HERREROS";
          break; 
    case "Ayudante de soldador": 
          area = "HERREROS";
          break; 
    case "Maestro aluminiero": 
          area = "HERREROS";
          break; 
    case "Director SIARSA": 
          area = "SIARSA";
          break; 
    case "Gerente de operaciones": 
          area = "SIARSA";
          break; 
    case "Tecnico especialista": 
          area = "SIARSA";
          break; 
    case "Director SECMA": 
           area = "SECMA";
          break;
    case "Proyectos CCTV": 
          area = "SECMA";
          break;
    case "Operacion CCTV": 
          area = "SECMA";
          break;
    case "Tecnico CCTV": 
          area = "SECMA";
          break;      
    case "Director SOLCOM": 
          area = "SOLCOM";
          break; 
    case "Asistente Direccion": 
          area = "SOLCOM";
          break; 
    case "Chofer": 
          area = "CORPORATIVO";
          break; 
    case "Portero": 
          area = "CORPORATIVO";
          break; 
             
    
      
      }
      console.log('funcion:', area)
     //setArea(area)
    return area;
    }
  export  const optionsEmpresas=[
        {name: 'CE2000', value: 'CE2000'},
        {name: 'SECMA', value: 'SECMA'},
        {name: 'SIARSA', value: 'SIARSA'},
        {name: 'MCBRICK', value: 'MCBRICK'},
        {name: 'SOLCOM', value: 'SOLCOM'},
        {name: 'INMOBILIARIA', value: 'INMOBILIARIA'}
      ]