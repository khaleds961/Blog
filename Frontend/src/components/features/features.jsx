import { Component } from "react";
import React from 'react';
import "./features.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Try from "../Blog_Page/Blog.jsx";
import Button from 'react-bootstrap/Button';




export default class features extends Component{
  state= {
    name:this.props.name
  }

  
  render() {
    let {name}=this.props;
    //let name=this.props.name
    console.log(name)
    return (
 
    <div class="container">
    <h2 className="row title">Featured Topics</h2>
    <div class="row my_row">

      {this.props.items.map(item => (
        <div class="col-lg first_topic" style={{backgroundColor: item.color}}>
          <a href="#" className="feature_link">{item.text}</a>
          
        </div>
        
      ))}

    {/* <div class="col-lg bg-danger first_topic  ">
      <a href="#" className="feature_link">{name}</a>
      </div>

      <div class="col-lg bg-success first_topic">
      <a href="" className="feature_link">LEBANON</a>
        </div>

      <div class="col-lg bg-info first_topic">
      <a href="#" className="feature_link">CODI TECH</a>
        </div>

      <div class="col-lg bg-warning first_topic">
      <a href="#" className="feature_link">Z OF THE Zs</a>
        </div> */}

    </div>
    </div>
    );
  }
            }
        
