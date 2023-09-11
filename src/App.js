import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Container from 'react-bootstrap/Container';
import {Navbar,Nav, Button,  }from 'react-bootstrap';
import {AiOutlineCopyright} from "react-icons/ai";
import React from 'react';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';

const back=( )=>{
  window.scrollTo({ top: 0, behavior: "smooth" });
 
}
function App() {
	return (
		<div  className="main">
      
      <>
   
    <Navbar expand="lg" className="bg-body-tertiary" sticky="top"  bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home" className="brand"> ALBIN K P</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"  className="ml-auto"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">about</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  



      
    </>
  
			
    
   <div className="intro" id="home">
   <div className="dir">
   <img src="logo192.png" className="image"></img>
   <div >
   <div className="col-div"><h3>Albin's website</h3><h6>This website will lead you to the skills and works of albin</h6></div>
   </div>

   </div>
   
   </div>
   <div id="about" className="features">
   <h1><b>Features</b></h1>  
     about this website
   </div>
   <div id="pricing" className="features">
   <h1><b>contact</b></h1>   
   the this division the contact modes are given
   </div>
<div className="btn"><Button onClick={()=>back()} >back</Button></div>
  <div><footer className="foot">this website is owned by <AiOutlineCopyright/>albin  </footer></div>
  
		</div>
	);
}

export default App;
