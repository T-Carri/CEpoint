import {Form, Button, Card, NavbarBrand} from 'react-bootstrap'


   function Totalsignup() {
    
    
   

    
   
    
    
    
    
      return (
        <div className="Bienvenida">
         <nav className="navbar navbar-expand-lg bg-warning w-100 p-5 h-150 d-inline-block">
         <NavbarBrand className="logo" href="/">
          CEpoint
        </NavbarBrand>
       <div className="d-grid gap-2  d-md-flex justify-content-md-end">
     
   
      
    </div>
         </nav>
     
       
    
    
    <div className="justify-content-center">
    <Card>
      <Card.Body>
        <Card.Title >REGISTRATE</Card.Title>
        <Form>
<Form.Group id="email">
<Form.Label>Email</Form.Label>
<Form.Control type="email"  required>
</Form.Control>
</Form.Group>
<Form.Group id="password">
<Form.Label>Password</Form.Label>
<Form.Control type="password"  required>
</Form.Control>
</Form.Group>
<Form.Group id="email">
<Form.Label>Password Confirmation</Form.Label>
<Form.Control type="email"  required>
</Form.Control>
</Form.Group>

<Button>Registrar</Button>

    </Form>
      </Card.Body>
    </Card>
    </div>
   
   
    
    
    
        </div>
      );
    }
    
    export default Totalsignup; 



    /*    <div className='buttonGoogle' >
<GoogleButton 
  onClick={() => { console.log('Google button clicked') }} 
/>
</div>*/