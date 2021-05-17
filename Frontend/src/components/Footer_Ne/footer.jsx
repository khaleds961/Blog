import { Component } from "react";
import "./footer.css";
import { Link } from "react-router-dom";



export default class Footer extends Component {
 
  render() {
    return (
      <div className="fluid mt-3 bg-dark ">
    <div className="info">
    <Link className="Nav_links" to="/"><h2>Daily Blogs</h2></Link>© 2021-copyright
    </div>
      </div>
    );
  }
}
