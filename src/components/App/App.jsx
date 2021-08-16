import React from "react"
import "./App.css"
import Home from "./../Home/Home"
import About from "./../About/About"
import Experience from "./../Experience/Experience"
import Education from "./../Education/Education"
import Projects from "./../Projects/Projects"
import Skills from "./../Skills/Skills"
import Volunteering from "./../Volunteering/Volunteering"
import Contact from "./../Contact/Contact"
import NavBar from "./../NavBar/NavBar"
import Achievements from "./../Achievements/Achievements"
import GoHome from "./../GoHome/GoHome"


import {HashRouter , Route} from "react-router-dom"

const App = () =>
{
    return(
        <div>

            <HashRouter>
            <div>
                <NavBar />
                <Route path = "/" exact component = {Home} />
                <Route path = "/about" component = {About} />
                <Route path = "/experience" component = {Experience}/>
                <Route path = "/education" component = {Education}/>
                <Route path = "/projects" component = {Projects} />
                <Route path = "/skills" component = {Skills}/>
                <Route path = "/contact" component = {Contact}/>
                <Route path = "/achievements" component = {Achievements}/>
                <Route path = "/volunteering" component = {Volunteering}/>
                <GoHome />

            </div>
            </HashRouter>
        </div>
    )
}
  
export default App