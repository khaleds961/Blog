import { Component } from "react";
import NavBar from "../../components/Nav/Navbar";
import Features from "../../components/features/features.jsx";
import Latest from "../../components/latest_stories/latest_stories.jsx";
import Footer from "../../components/Footer_Ne/footer";


export default class about extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Features></Features>
        <Latest/>
        <Footer />
      </div>
    );
  }
}
