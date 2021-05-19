import { Component } from "react";
import * as ReactBootSrap from "react-bootstrap";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
  state = {
    Categories: [],
    search: ""
  };
  async componentDidMount() {
    const url = "http://localhost:8000/Categories";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ Categories: data.result });
  }

  render() {
    let{search}= this.state;
    return (
      <div className=".container-fluid ">
        <ReactBootSrap.Navbar
          collapseOnSelect
          expand="lg"
          className="NavBars"
          bg="dark"
          variant="dark"
        >
          <ReactBootSrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <ReactBootSrap.Navbar.Collapse id="responsive-navbar-nav">
            <ReactBootSrap.Nav className="mr-auto">
              <ReactBootSrap.Navbar.Brand href="#home">
                <Link className="Nav_links" to="/">
                  <h2>Daily Blogs</h2>
                </Link>
              </ReactBootSrap.Navbar.Brand>
              <ReactBootSrap.Nav.Link href="#features" className="text-light">
                <Link className="Nav_links" to="/write">
                  <h4>+Write Your Blog</h4>
                </Link>
              </ReactBootSrap.Nav.Link>

              <h4>
                <ReactBootSrap.NavDropdown
                  title="Topics"
                  id="collasible-nav-dropdown"
                >
                  {this.state.Categories.map((Categories, index) => (
                    <ReactBootSrap.NavDropdown.Item
                      key={index}
                      className="font-weight-bold
          "
                    >
                      <Link
                        class="text-decoration-none text-dark"
                        to={`/cat/${Categories.cat_name}`}
                      >
                        {Categories.cat_name}
                      </Link>
                    </ReactBootSrap.NavDropdown.Item>
                  ))}

                  <ReactBootSrap.NavDropdown.Divider />
                </ReactBootSrap.NavDropdown>
              </h4>
            </ReactBootSrap.Nav>

            <ReactBootSrap.Form inline
            >
              <ReactBootSrap.FormControl
                type="text"
                placeholder="Search..."
                className="mr-sm-2"
                name={this.props.name}
                value={this.props.value}
                onChange={this.props.onChange}
              />
              
            
            </ReactBootSrap.Form>
          </ReactBootSrap.Navbar.Collapse>
        </ReactBootSrap.Navbar>
      </div>
    );
  }
}
