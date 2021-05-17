import { Component } from "react";
import React from "react";
import "./features.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Try from "../Blog_Page/Blog.jsx";
import Button from "react-bootstrap/Button";

export default class features extends Component {
  state = {
    LimitCat: [],
  };
  async componentDidMount() {
    const url = "http://localhost:8000/LimitCat";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ LimitCat: data.result });
  }

  render() {
    let { LimitCat } = this.state;

    return (
      <div class="container">
        <h2 className="row title">Featured Topics</h2>
        <div class="row my_row">
          {LimitCat.map((LimitCat) => (
            <div class="col-lg first_topic" id={"test" + LimitCat.id}>
              <Link
                class="text-decoration-none text-white"
                to={`/cat/${LimitCat.cat_name}`}
              >
                {LimitCat.cat_name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
