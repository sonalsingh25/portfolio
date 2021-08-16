import React, {Component} from "react"
import {withRouter} from "react-router-dom"
import HomeIconWhite from "./../../assets/home_white.png"
import HomeIconBlack from "./../../assets/home_black.png"
import "./GoHome.css"

class GoHome extends Component{
    navigateToHome = () =>
    {
        const { history } = this.props;
        history.push("/");
    }
    render()
  
    {
        const {location} = this.props;
        const whiteBtn = location.pathname === "/"
        return(
            <button className = {`go-home-btn ${
                whiteBtn ? 'white-bkg' : 'gradient-bkg'
            }`}  onClick={this.navigateToHome}>
              <img className = "home-icon"
                 src = {whiteBtn ? HomeIconBlack : HomeIconWhite} 
                 alt = "home-icon"></img>
            </button>
        )
    }
}

export default withRouter (GoHome)