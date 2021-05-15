import { Component } from "react";
// import logo from './logo.svg';
import NavBar from "../../components/Nav/Navbar";
import Features from "../../components/features/features.jsx";
import Latest from "../../components/latest_stories/latest_stories.jsx";
import pic1 from "../images/no.jpg";
import pic2 from "./no1.jpg";
import pic3 from "./sauce.jpg";
import pic4 from "./vac.jpg";

export default class about extends Component {
  render() {
    let LimitCat = [
      { color: "#DE4251" },
      { color: "#39AD53" },
      { color: "#29A9BD" },
      { color: "#FFC417" },
    ];

    let stories = [
      {
        sub: [
          {
            title: "Amazing Knafee!! So It's Tripoli",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
            img: pic1,
          },
          {
            title: "Amazing Knafee!! So It's Tripoli",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
            img: pic1,
          },
        ],
      },
      {
        sub: [
          {
            title: "Amazing Knafee!! So It's Tripoli",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
            img: pic1,
          },
          {
            title: "Amazing Knafee!! So It's Tripoli",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
            img: pic1,
          },
        ],
      },
    ];

    return (
      <div style={{ height: "2000px" }}>
        <NavBar />
        <Features LimitCat={LimitCat}></Features>
        <Latest stories={stories} />
      </div>
    );
  }
}
