import { Component } from "react";
import "./CatPage.css";
import pic1 from "../images/no.jpg";
import { Link } from "react-router-dom";
import NavBar from "../Nav/Navbar";

export default class Blog_Cat extends Component {
  state = {
    posts: []
    };
  async componentDidMount() {
    const url = `http://localhost:8000/cat/${this.props.match.params.catname}`;
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ posts: data.result });
  }
  render() {
    return (
      <div>
        <NavBar></NavBar>
        <div className="container">
          <h2 className="cat_title mt-5">{this.props.match.params.catname}</h2>

          {this.state.posts.map((post) => (
            <div className="row mb-4">
              <div class="col-lg-4  ">
                <img src={pic1} class="img-fluid mt-3"></img>
              </div>
              <div class="col-lg-6">
                <h3 class="mt-3">
                  <Link className="links" to="/blog">
                    {post.title}
                  </Link>
                </h3>
                <p className="desc">
                  {post.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
