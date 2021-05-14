// import logo from './logo.svg';
import './App.css';
import NavBar from './components/Nav/Navbar.jsx';
import Features from './components/features/features.jsx';
import Latest from './components/latest_stories/latest_stories.jsx';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/HomePage/HomePage";
import Blog_Page from "./components/Blog_Page/Blog";
import Blog_Write from "./components/Blog_Write/blog_write";
import Test from "./components/CatPage/CatPage";





// import * as ReactBootSrap from "react-bootstrap";

function App() {
  
  return (
<BrowserRouter>
        <Switch>
         <Route component={Home} path="/" exact   />
          <Route component={Blog_Page} path="/blog"   />
          <Route component={Blog_Write} path="/write"   />
          <Route component={Test} path="/test"   />

         </Switch>
</BrowserRouter>

 
 
  );
}

export default App;
