import { Component } from "react";
import NavBar from "../../components/Nav/Navbar";
import Features from "../../components/features/features.jsx";
import Latest from "../../components/latest_stories/latest_stories.jsx";
import Footer from "../../components/Footer_Ne/footer";
import "../../components/latest_stories/latest_stories";
import { Link } from "react-router-dom"

export default class homePage extends Component {

state={
  Blogs: [],
  search:""
}

async componentDidMount() {
  await this.getAllBlogs();
}

getAllBlogs= async()=>{
  const url =`http://localhost:8000/Blogs`;
  const response = await fetch(url);
  const data = await response.json();
  this.setState({ Blogs: data.result });
}

  handleSearch= async({search})=>{
    const url = `http://localhost:8000/search?title=${search}`;
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ Blogs: data.result });
  }

  handleChange = (e) => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
    this.handleSearch({search: value});
  }

  render() {
    let{search}=this.state;
    return (
      <div>
        <NavBar
        name="search" 
        value={search}
      onChange={this.handleChange}
        />
        <Features></Features>
        <div className="container">
        <h2 className="row titles">Latest Stories</h2>
        
        {this.state.Blogs.map((Blogs) => (
          <div className="row" key={Blogs.id}>
            <div class="col-lg-4 ">
              <img src={Blogs.picture} class="img-fluid mt-3"></img>
            </div>
            <div class="col-lg-7">
              <h3 class="mt-3">
                <Link className="links" to={`/blog/${Blogs.id}`}>
                  {Blogs.title}
                </Link>
              </h3>
              <p className="desc">{Blogs.description}</p>
            </div>
          </div>
        ))}
  
      </div>
        <Footer />
      </div>
    );
  }
}
