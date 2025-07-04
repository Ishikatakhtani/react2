import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { PiLineVertical } from "react-icons/pi";
import { PiUserCircleBold } from "react-icons/pi";
const Header=()=>{
    return(
        <>
      
    <Navbar expand="lg" style={{ backgroundColor: "#1a1a1a" }}>
      <Container>
        {/* <Navbar.Brand href="#home" style={{ color: "white", fontFamily:"Butler", paddingRight:"26%"}}>CAFE </Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav"  style={{ backgroundColor: "white" }}   />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="me-auto" >
            <Nav.Link as={Link} to="/Home" style={{color:"white",fontFamily:"Georgia",fontSize:"18px"}}>Home</Nav.Link>
             <Nav.Link as={Link} to="/Consulting" style={{color:"white",fontFamily:"Georgia",fontSize:"18px"}}>Consulting</Nav.Link>
              <Nav.Link as={Link} to="/Training" style={{color:"white",fontFamily:"Georgia",fontSize:"18px"}}>Training</Nav.Link>
               <Nav.Link as={Link} to="/RecruitmentService" style={{color:"white",fontFamily:"Georgia",fontSize:"18px"}}>Recruitment Services</Nav.Link>
  <Nav.Link as={Link} to="/Career" style={{color:"white",fontFamily:"Georgia",fontSize:"18px"}}>Career</Nav.Link>
 <Nav.Link as={Link} to="/ContactUs" style={{color:"white",fontFamily:"Georgia",fontSize:"18px"}}>Contact Us</Nav.Link>

          </Nav>
         
          {/* <Nav.Link as={Link} to="/Aboutus" style={{color:"white",fontFamily:"Georgia",fontSize:"18px"}}><PiUserCircleBold />  Signin</Nav.Link> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div id="header2" style={{ backgroundColor:"white" }}> </div>
   </>
   )
}
export  default Header;