import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import ProjectsList from "./components/projectList/ProjectList";
import ArticlesList from "./components/articlesList/ArticlesList";
import Contact from "./components/contact/Contact";
import './App.css';
import React from "react";



function App() {
  return (
    <div>
        <Intro />
        <About />
        <ProjectsList/>
        <ArticlesList/>
        <Contact />
    </div>
  );
}

export default App;
