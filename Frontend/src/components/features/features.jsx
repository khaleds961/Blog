import { Component } from "react";
import React from 'react';
import "./features.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Try from "../Blog_Page/Blog.jsx";
import Button from 'react-bootstrap/Button';




export default class features extends Component{
  state = {
    LimitCat : [],


    
  };
  async componentDidMount(){
const url ="http://localhost:8000/LimitCat";
const response = await fetch(url);
const data = await response.json();
this.setState({LimitCat:data.result});
  }

  
  render() {
    let {LimitCat}=this.state;
    var bgColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';

    return (
 
    <div class="container">
    <h2 className="row title">Featured Topics</h2>
    <div class="row my_row">

    {LimitCat.map(LimitCat => (
    <div class="col-lg first_topic" id={"test"+LimitCat.id}>
      <a href="#" className="feature_link">{LimitCat.cat_name}</a>
    </div>
    
  ))}

      {/* {this.props.items.map(item => (
        <div class="col-lg first_topic" style={{backgroundColor: item.color}}>
          <a href="#" className="feature_link">{item.text}</a>
          
        </div>
        
      ))} */}

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
        
