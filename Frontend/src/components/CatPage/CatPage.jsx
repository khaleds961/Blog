import { Component } from "react";
import "./CatPage.css";
import pic1 from "../images/no.jpg";
import { Link } from "react-router-dom";
import NavBar from "../Nav/Navbar";

export default class BlogCat extends Component {
  state = {
    catname: null,
    posts: [],
  };

  componentDidMount = async () => {
    let catname = this.props.match.params.catname;
    let data = await this.getData();
    this.setState({ posts: data, catname });
  };

  componentDidUpdate = async (prevProps, prevState) => {
    let prevCatname = prevProps.match.params.catname;
    let catname = this.props.match.params.catname;
    if (prevCatname != catname) {
      let data = await this.getData(catname);
      this.setState({ posts: data, catname });
    }
  };

  async getData(catname) {
    let param = catname || this.props.match.params.catname;
    const url = `http://localhost:8000/cat/${param}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.result;
  }

  render() {
    // console.log(this.state);
    return (
      <div>
        <NavBar></NavBar>
        <div className="container">
          <h2 className="cat_title mt-5">{this.props.match.params.catname}</h2>

          {this.state.posts.map((post) => (
            <div className="row mb-4">
              <div class="col-lg-4  ">
                <img src={post.picture} class="img-fluid mt-3"></img>
              </div>
              <div class="col-lg-6">
                <h3 class="mt-3">
                  <Link className="links" to={`/blog/${post.id}`}>
                    {post.title}
                  </Link>
                </h3>
                <p className="desc">{post.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
