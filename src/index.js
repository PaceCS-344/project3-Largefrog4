import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import { BrowserRouter, Routes, Route, Link, } from 'react-router-dom';
import App from "./App";
import { useState } from 'react';

 function Contact(){
  return <div>
    <p>Contact me<br></br>
    <a href="mailto:bif@metafreed.net">Email</a><br></br>
    <a href="linkedin.com/in/ben-freed-415844330/">LinkedIn</a><br></br>
    <a href="https://github.com/Largefrog4">Github</a><br></br>
    </p>
  </div>
}
 function About(){
return <div>
  <p>About me<br></br>
    I am a junior studying computer science at Pace university, with a minor in IT.
  </p>
</div>
}
 function Skills(){
  return <div>
    <p>Skills<br></br>
    Programming Languages: Java, Python, HTML<br></br>
    Software / Tools: Google Workspace (Docs, Drive, Sheets, Slides)<br></br>
    Operating Systems: Windows OS
    </p>
  </div>
}
 function Projects(){
  return <div>
    <p>Projects</p>
    <p>Team Web Design Project – Fictional Game Company Website                                       Jan 2024 – May 2024<br></br>
Collaborated with a student team of 4 to design and build a website for a fictional game company using HTML and CSS.
Implemented page layouts and visual elements to improve site presentation and usability.<br></br>
</p><p>
Python Blackjack Game                                                                                                              Jan 2024 – May 2024<br></br>
Developed a simplified blackjack game in Python as part of coursework.
Applied core programming concepts such as loops, conditional logic, and user interaction.

    </p>
  </div>
}
function Home(){
  
  return (
    <BrowserRouter>
    
      {/* Navigation */}
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/skills">Skills</Link> |{" "}
        <Link to="/projects">Projects</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}

const ToggleSidebar = () => {
    const [isOpen, setIsopen] = useState(false);

    const ToggleSidebar = () => {
        isOpen === true ? setIsopen(false) : setIsopen(true);
    }
    return (
      <BrowserRouter>
        <>
            <div className="container-fluid mt-3">
                
                    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-md">
                        <div className="container-fluid p-2">
                            <a className="navbar-brand text-primary mr-0">Ben Freed Portfolio</a>
                            <div className="form-inline ml-auto">
                                <div className="btn btn-primary" onClick={ToggleSidebar} >
                                    <i className="fa fa-bars"></i>
                                </div>
                            </div>
                        </div>
                    </nav>
                    <div className={`sidebar ${isOpen == true ? 'active' : ''}`}>
                        <div className="sd-header">
                            <h4 className="mb-0">Page Navigation</h4>
                            <div className="btn btn-primary" onClick={ToggleSidebar}><i className="fa fa-times"></i></div>
                        </div>
                        <div className="sd-body">
                            <ul>
                                <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/skills">Skills</Link> |{" "}
        <Link to="/projects">Projects</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </nav>
                            </ul>
                        </div>
                    </div>
                    <div className={`sidebar-overlay ${isOpen == true ? 'active' : ''}`} onClick={ToggleSidebar}></div>
           </div>
           
        </>
        <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>)
}
const root = createRoot(document.getElementById("root"));
root.render(

    <ToggleSidebar />

);
// const root2 = createRoot(document.getElementById("root2"));
// root2.render(
//   <StrictMode><Contact /></StrictMode> );
// const root3 = createRoot(document.getElementById("root3"));
// root3.render(
//   <StrictMode><About /></StrictMode> );
//   const root4 = createRoot(document.getElementById("root4"));
// root4.render(
//   <StrictMode><Skills /></StrictMode> );
//   const root5 = createRoot(document.getElementById("root5"));
// root5.render(
//   <StrictMode><Projects /></StrictMode> );