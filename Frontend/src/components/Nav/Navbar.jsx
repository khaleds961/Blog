import { Component } from "react";
import * as ReactBootSrap from "react-bootstrap";
import "./Navbar.css";
import { Link } from "react-router-dom";
import axios from "axios"

export default class NavBar extends Component{
  state = {
    Categories : []
  };
  async componentDidMount(){
const url ="http://localhost:8000/Categories";
const response = await fetch(url);
const data = await response.json();
this.setState({Categories:data.result});
  }
    render(){
        return (
            <div className=".container-fluid ">
             
        
            <ReactBootSrap.Navbar collapseOnSelect expand="lg" className="NavBars" bg="dark" variant="dark" >
          <ReactBootSrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <ReactBootSrap.Navbar.Collapse id="responsive-navbar-nav">
            <ReactBootSrap.Nav className="mr-auto">
            <ReactBootSrap.Navbar.Brand href="#home">
              <Link className="Nav_links" to="/"><h2>Daily Blogs</h2></Link>  
                </ReactBootSrap.Navbar.Brand>
              <ReactBootSrap.Nav.Link href="#features" className="text-light" >
               <Link className="Nav_links" to="/write"><h4>+Write Your Blog</h4></Link> 
                </ReactBootSrap.Nav.Link>
              {/* <ReactBootSrap.Nav.Link href="#pricing">Pricing</ReactBootSrap.Nav.Link> */}
   
              <h4>
              <ReactBootSrap.NavDropdown title="Topics"  id="collasible-nav-dropdown" >
               

              {this.state.Categories.map( (Categories) => (
         <ReactBootSrap.NavDropdown.Item  href="#action/3.1" >
          {Categories.cat_name}
          </ReactBootSrap.NavDropdown.Item>
      ))}
              
                
                
                <ReactBootSrap.NavDropdown.Divider />
                {/* <ReactBootSrap.NavDropdown.Item href="#action/3.4">Separated link</ReactBootSrap.NavDropdown.Item> */}
              </ReactBootSrap.NavDropdown>
              </h4>
              
        
            </ReactBootSrap.Nav>
            {/* <ReactBootSrap.Nav>
              <ReactBootSrap.Nav.Link href="#deets">More deets</ReactBootSrap.Nav.Link>
              <ReactBootSrap.Nav.Link eventKey={2} href="#memes">
                Dank memes
              </ReactBootSrap.Nav.Link>
            </ReactBootSrap.Nav> */}
            <ReactBootSrap.Form inline>
              <ReactBootSrap.FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <ReactBootSrap.Button variant="secondary">Search</ReactBootSrap.Button>
            </ReactBootSrap.Form> 
          </ReactBootSrap.Navbar.Collapse>
        </ReactBootSrap.Navbar>
            </div>
        )
    }
}
