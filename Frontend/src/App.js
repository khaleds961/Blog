// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/HomePage/HomePage";
import Blog_Page from "./components/Blog_Page/Blog";
import Blog_Write from "./components/Blog_Write/blog_write";
import BlogCat from "./components/CatPage/CatPage";
import AboutUs from "./components/aboutUs/aboutUs";

function App() {
  return (
    <BrowserRouter>
              
      <Switch>
                 
        <Route component={Home} path="/" exact />
                  
        <Route component={Blog_Page} path="/blog/:id" />
                  
        <Route component={Blog_Write} path="/write" />
                  
        <Route component={BlogCat} path="/cat/:catname" />
        <Route component={AboutUs} path="/about" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
