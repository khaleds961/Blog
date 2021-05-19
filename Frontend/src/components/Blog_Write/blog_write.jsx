import React, { useState, Component } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Parse from "html-react-parser";
import NavBar from "../Nav/Navbar";
import Footer from "../../components/Footer_Ne/footer";
import "./blog_write.css";
import NavBarList from "../Nav/NavBarList";


class Blog_writing extends Component{
 state={
  name:"",
  email:"",
  category:"",
  title:"",
  content:"",
  image:"",
  text:"",

 }
//  const [text, setText] = useState("");

 handleChange = (event) => {
  let { name, value } = event.target;
  this.setState({ [name]: value });
};
handleSubmit = async (event) => {
  // prevent the default behaviour like: page refresh
  event.nativeEvent.preventDefault();
  let { name, title, image , content,category,email } = this.state;
  let body = new FormData();
  body.append(`name`, name);
  body.append(`title`, title);
  body.append(`image`, image);
  body.append(`content`, content);
  body.append(`category`, category);
  body.append(`email`, email);
  let response = await fetch("http://localhost:8000/post/add/create", {
    method: "post",
    headers: { "Access-Control-Allow-Origin": "http://localhost:3000" },
    body
  });
  await response.json();
  // this.setState({ name: "", title: "", image: "" });
  // this.props.history.push('/blogs')
};
handleChangeField = (event) => {
  let { name, files } = event.target;
  this.setState({ [name]: files[0] });
};

  // handleSubmit= async (e)=> {
  //   e.nativeEvent.preventDefault();
  //   let response = await fetch("url", {
  //     method: "post",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ text }),
  //   });
  //   let data = await response.json();
  // }

render(){
  let {name, title, image , content,category,email}=this.state;
  return (
    <div>
      <NavBar></NavBar>
      <form className="container mt-5" onSubmit={this.handleSubmit}>
        <div className="row ">
          <div className="col-sm-12 col-lg-12 mb-4 ">
            <h2>Please Enter Your Name</h2>
            <input
              type="text"
              name="name"
              placeholder="Name(Not required)"
              value={name}
              onChange={this.handleChange}
            
            ></input>
          </div>

          <div className="col-sm-12 col-lg-12 mb-4 ">
            <h2>Please Enter The Title</h2>
            <input
              type="text"
              name="title"
              placeholder="Title(required)"
              value={title}
              onChange={this.handleChange}
              required
            ></input>
          </div>

          
          <div className="col-sm-12 col-lg-12 mb-4 ">
            <h2>Please Enter The email</h2>
            <input
              type="email"
              name="email"
              placeholder="email(required)"
              value={email}
              onChange={this.handleChange}
              required
            ></input>
          </div>
        </div>

        {/* <div className="row">
          <div className="col-sm-12 col-lg-12 mb-4 ">
            <h2>Please Enter A Short Description</h2>
            <textarea
              type="text"
              name="desripction"
              placeholder="Desicription(required)"
              value={desripction}
              onChange={this.handleChange}
              required
            ></textarea>
          </div>
        </div> */}

        {/* <div className="row">
          <div class="form-group col-md-4">
            <h2>Topics</h2>
            <NavBarList style="inputState" />
          </div>
        </div> */}

        {/* <div className="row">
          <div className="col-sm-12 col-lg-12 mb-4 editor">
            <h2>Write Your Blog</h2>
            <CKEditor
              editor={ClassicEditor}
              data={text}
              onChange={(event, editor) => {
                const data = editor.getData();
                setText(data);
              }}
            ></CKEditor>
          </div>
        </div> */}

        <div>
            <input type="file" name="image" onChange={this.handleChangeField} />
          </div>

        <button type="submit" class="btn btn-dark btn-lg ">
          Post
        </button>
      </form>
      <Footer />
    </div>
  );}
}

export default Blog_writing;
