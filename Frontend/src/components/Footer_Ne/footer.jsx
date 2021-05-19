import { Component } from "react";
import "./footer.css";
import { Link } from "react-router-dom";



export default class Footer extends Component {
 
  render() {
    return (
      <div className="fluid mt-3 bg-dark ">
    <div className="info">
    <Link className="Nav_links" to="/"><p>Daily Blogs</p></Link> 
    <Link className="Nav_links" to="/about"><p>About Us</p></Link>
    </div>
    <div className="copy">
    © 2021 - Copyright
    </div>
      </div>
    );
  }
}
