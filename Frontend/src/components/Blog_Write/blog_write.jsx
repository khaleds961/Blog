import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Parse from "html-react-parser";
import NavBar from "../Nav/Navbar";
import Footer from "../../components/Footer_Ne/footer";
import "./blog_write.css";
import NavBarList from "../Nav/NavBarList";

function Blog_writing() {
  const [text, setText] = useState("");

  async function handleSubmit(e) {
    e.nativeEvent.preventDefault();
    let response = await fetch("url", {
      method: "post",             
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });
    let data = await response.json();
  }

  return (
    <div>
      <NavBar></NavBar>
      <form className="container mt-5" onSubmit={handleSubmit}>
        <div className="row ">
          <div className="col-sm-12 col-lg-12 mb-4 ">
            <h2>Please Enter Your Name</h2>
            <input
              type="text"
              name="FullName"
              placeholder="Name(Not required)"
            ></input>
          </div>

          <div className="col-sm-12 col-lg-12 mb-4 ">
            <h2>Please Enter The Title</h2>
            <input
              type="text"
              name="title"
              placeholder="Title(required)"
              required
            ></input>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12 col-lg-12 mb-4 ">
            <h2>Please Enter A Short Description</h2>
            <textarea
              type="text"
              name="desripction"
              placeholder="Desicription(required)"
              required
            ></textarea>
          </div>
        </div>

        <div className="row">
          <div class="form-group col-md-4">
            <h2>Topics</h2>
            <NavBarList style="inputState" />
          </div>
        </div>

        <div className="row">
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
        </div>
        <button type="submit" class="btn btn-dark btn-lg ">
          Post
        </button>
      </form>
      <Footer />
    </div>
  );
}

export default Blog_writing;
