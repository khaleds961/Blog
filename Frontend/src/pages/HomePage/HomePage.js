import { Component } from "react";
// import logo from './logo.svg';
import NavBar from '../../components/Nav/Navbar';
import Features from '../../components/features/features.jsx';
import Latest from '../../components/latest_stories/latest_stories.jsx';


export default class about extends Component{
    render(){
        return(
<div style={{height: "2000px"}}>
<NavBar/>
<Features/>
<Latest/>
</div>
        );
    }
}

