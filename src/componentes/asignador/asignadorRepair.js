
export default function Asignador1(handleSubmit) {

    const [formValues, setFormValues] = useState(
      []
    ) 
  
  
  const handleChange = (event) => {
  
    const {name, value} = event.target
  setFormValues({
    ...formValues, [name]: value })
  }
  
  
  const _handleSubmit = (e) => {
    e.preventDefault()
  handleSubmit({...formValues})
   
      
    
      console.log(formValues) 
    
    
    
  }
  
  
  
  
   
  
   
   
  
  
  
  
  
   /*const handleData = async () => { 
  
    const data = [{
      residente1:{
        Residente: selectedRes1,
        Proyecto: selectedProy1
      }},
      {residente2:{
        Residente: selectedRes2,
        Proyecto: selectedProy2 
      }},
      {residente3:{
        Residente:selectedRes3,
       proyecto: selectedProy3
      }},
      {residente4:{
        Residente:selectedRes4,
       proyecto: selectedProy4
      }}
    ]
    setIsLoading(true);
    await axios.post('http://localhost:8800/api/asignador/planAsignacion/${currentUser._id}',
    { data }).then(res=>{
      console.log(res);
      console.log(res.data);
    })
  
  }
  
  
  
  
  
  
   async function submit(){
  
       
    let url = '';
    const data = [{
      residente1:{
        Residente: selectedRes1,
        Proyecto: selectedProy1
      }},
      {residente2:{
        Residente: selectedRes2,
        Proyecto: selectedProy2 
      }},
      {residente3:{
        Residente:selectedRes3,
       proyecto: selectedProy3
      }},
      {residente4:{
        Residente:selectedRes4,
       proyecto: selectedProy4
      }}
    ]
   
    let response= 
    setIsLoading(true);
    await fetch(url, { 
    
      method: 'POST', // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json(data))
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response),
             );
   
  }*/
  
   
    
   
  const [isLoanding, setIsLoading] = useState(false);
      
   
  
  
  
    
  const optionsResidentes= [
    {value:'', text: '--elige Residente--'},
    {value:'Andres Perez Dimas', text:'Andres Perez Dimas'},
    {value:'Carlos Ruiz', text:'Carlos Ruiz'}, 
    {value:'Julio cesar Borjas', text:'Julio cesar Borjas'},
    {value:'Daniel Rodriguez', text:'Daniel Rodriguez'}
  ];
  
  const optionsProyectos= [
    {value:'', text: '--elige Proyecto--'},
    {value:'proyecto 1', text: 'proyecto 1'},
    {value:'proyecto 2', text: 'proyecto 2'},
    {value:'proyecto 3', text: 'proyecto 3'},
    {value:'proyecto 4', text: 'proyecto 4'} 
  ]
  
  
  //RESIDENTES
  const [selectedRes1, setSelectRes1] = useState(optionsResidentes[0].label)
  const [selectedRes2, setSelectRes2] = useState(optionsResidentes[0].value)
  const [selectedRes3, setSelectRes3] = useState(optionsResidentes[0].value)
  const [selectedRes4, setSelectRes4] = useState(optionsResidentes[0].value)
  
  
  
  const handleChangeRes1 = event => {
  setSelectRes1(event.target.value ); 
  console.log(event.target.value);
  
  
  } 
  
  const handleChangeRes2 = event => {
  setSelectRes2(event.target.value); 
  } 
  
  const handleChangeRes3 = event => {
  setSelectRes3(event.target.value); 
  } 
  const handleChangeRes4 = event => {
    setSelectRes4(event.target.value); 
    } 
  
  //Proyectos
  const [selectedProy1, setSelectProy1] = useState(optionsProyectos[0].value)
  const [selectedProy2, setSelectProy2] = useState(optionsProyectos[0].value)
  const [selectedProy3, setSelectProy3] = useState(optionsProyectos[0].value)
  const [selectedProy4, setSelectProy4] = useState(optionsProyectos[0].value)
  
  const handleChangeProy1 = event => {
  setSelectProy1(event.target.value); 
  console.log(optionsProyectos.text);
  } 
  
  const handleChangeProy2 = event => {
  setSelectProy2(event.target.value); 
  } 
  
  const handleChangeProy3 = event => {
  setSelectProy3(event.target.value); 
  } 
  const handleChangeProy4 = event => {
    setSelectProy4(event.target.value); 
    } 
  
  //relacion residente y proyecto EXPERIMENTACION
  
  
  
  
  function FormAsignador() {
    return(
      <div>
            <Row>
              <Col><h5>Elige el residente</h5></Col>
              <Col><h5>Elige el proyecto</h5></Col>
            </Row>
             
            <Form onSubmit={_handleSubmit} onChange={handleChange}> 
            <div className="asignacion1">
            
            <Row>
             <Col>
              <h6>Residente</h6>
     <Form.Select value={selectedRes1} name='Residente 1'  aria-label="Default select example"  onChange={handleChange && handleChangeRes1}>
       {optionsResidentes.map(option=>(
        <option key={option.value} value={option.value}>
          {option.text}
        </option>
       ))}
     </Form.Select>
                
        </Col>
        <Col > 
        <h6>Proyecto</h6>
     <Form.Select value={selectedProy1}  name='Proyecto de res 1' aria-label="Default select example"  onChange={handleChange &&  handleChangeProy1}>
       {optionsProyectos.map(option=>(
        <option key={option.value} value={option.value}>
          {option.text}
        </option>
       ))}
     </Form.Select> </Col>
            </Row>
            </div>
           
           
            <div className="asignacion2">
            
            <Row>
             <Col>
              <h6>Residente</h6>
     <Form.Select value={selectedRes2} name='Residente 2' aria-label="Default select example"  onChange={handleChange && handleChangeRes2}>
       {optionsResidentes.map(option=>(
        <option key={option.value} value={option.value}>
          {option.text}
        </option>
       ))}
     </Form.Select>
                
        </Col>
        <Col > 
        <h6>Proyecto</h6>
        <Form.Select value={selectedProy2} name='Proyecto de res 2' aria-label="Default select example"  onChange={handleChange &&  handleChangeProy2}>
       {optionsProyectos.map(option=>(
        <option key={option.value} value={option.value}>
          {option.text}
        </option>
       ))}
     </Form.Select>  </Col>
            </Row>
            </div>
            
            <div className="asignacion3">
            
            <Row>
             <Col>
              <h6>Residente</h6>
      <Form.Select value={selectedRes3} name='Residente 3' aria-label="Default select example"  onChange={handleChange && handleChangeRes3}>
       {optionsResidentes.map(option=>(
        <option key={option.value} value={option.value}>
          {option.text}
        </option>
       ))}
      </Form.Select>
                
        </Col>
        <Col > 
        <h6>Proyecto</h6>
      <Form.Select value={selectedProy3} name='Proyecto de res 3' aria-label="Default select example"  onChange={handleChange && handleChangeProy3 }>
       {optionsProyectos.map(option=>(
        <option key={option.value} value={option.value}>
          {option.text}
        </option>
       ))}
     </Form.Select> </Col>
            </Row>
            </div>
            <div className="asignacion4">
            
            <Row>
             <Col>
              <h6>Residente</h6>
      <Form.Select value={selectedRes4} name='Residente 4' aria-label="Default select example"  onChange={handleChange && handleChangeRes4}>
       {optionsResidentes.map(option=>(
        <option key={option.value} value={option.value}>
          {option.text}
        </option>
       ))}
      </Form.Select>
                
        </Col>
        <Col > 
        <h6>Proyecto</h6>
        <Form.Select value={selectedProy4} name='Proyecto de res 4' aria-label="Default select example"  onChange={handleChange && handleChangeProy4}>
       {optionsProyectos.map(option=>(
        <option key={option.value} value={option.value}>
          {option.text}
        </option>
       ))}
        </Form.Select> </Col>
            </Row>
            
            </div>
            <Button type="submit" className='enviar' variant="success"  disabled={isLoanding} 
            >Enviar1</Button>
            </Form>
            
         
          
          </div>
  
    )
    
  }
  
  function Formulario(){
    return( <div>{isLoanding?<Spinner animation="border" variant="danger" />:<FormAsignador/>}</div>)
    
  }
  
  function Asignacion() {
    return(
  
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Residente</th>
          <th>Proyecto</th>
        
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>{selectedRes1}</td>
          <td>{selectedProy1}</td>
          
        </tr>
        <tr>
          <td>2</td>
          <td>{selectedRes2}</td>
          <td>{selectedProy2}</td>
          
        </tr>
        <tr>
          <td>3</td>
          <td>{selectedRes3}</td>
          <td>{selectedProy3}</td>
        </tr>
        <tr>
          <td>3</td>
          <td>{selectedRes4}</td>
          <td>{selectedProy4}</td>
        </tr>
      </tbody>
    </Table>
  
     /* <div className="asignacion2">
            
      <Row>
       <Col>
        <h6>Residente</h6>
  {}
        </Col>
  <Col > 
  <h6>Proyecto</h6>
  {}
   </Col>
      </Row>
      </div>,
     
     
      <div className="asignacion2">
      
      <Row>
       <Col>
        <h6>Residente</h6>
        {selectedRes2}
          
  </Col>
  <Col > 
  <h6>Proyecto</h6>
  {selectedProy2}
   </Col>
      </Row>
      </div>,
      
      <div className="asignacion3">
      
      <Row>
       <Col>
        <h6>Residente</h6>
        {selectedRes3}
          
  </Col>
  <Col > 
  <h6>Proyecto</h6>
  {selectedProy3}
  
   </Col>
      </Row>
      
  
      </div>
      
  */
    )
  }
   return (
    <div>
      {isLoanding? <Asignacion/>:<Formulario/>}
   </div>
    )
  