import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Parse from "html-react-parser";
import NavBar from "../Nav/Navbar";


function Blog_writing() {
  const [text, setText] = useState("");
  return (
    <div>
    <NavBar></NavBar>
    <div className="container mt-5">
      <div className="row">
        <div className="col-sm-12 col-lg-6 mb-4 editor">
          <CKEditor
            editor={ClassicEditor}
            data={text}
            onChange={(event, editor) => {
              const data = editor.getData();
              setText(data);
            }}
          ></CKEditor>
        </div>
        <div className="col-sm-12 col-lg-6">
          <h2>Content</h2>
          <p>{Parse(text)}</p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Blog_writing;
