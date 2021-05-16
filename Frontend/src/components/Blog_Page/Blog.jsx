import { Component } from "react";
import NavBar from "../Nav/Navbar";
import pic1 from "./tv.jpg";
import "./Blog.css";


export default class Try extends Component {
  state = {
    Blogs: [],
  };
  async componentDidMount() {
    const url = `http://localhost:8000/blog/getblog/${this.props.match.params.id}`;
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ Blogs: data.result[0] });
    console.log(data.result[0].title);
  }
  render() {
    let {Blogs}= this.state
    return (
      <div>
        <NavBar />
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-lg-8 mt-5">
              <h1 className="h1">
                {Blogs.title}
              </h1>
            </div>
            <div className="col-md-12 col-lg-3 mt-5">
              <div class="user_info">Written by: {Blogs.name} on {Blogs.created_at}</div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12 col-lg-8">
              <img className="img-fluid mt-3" src={pic1}></img>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-lg-8 mt-3">
              <p className="Blog_text">
                {Blogs.content}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
