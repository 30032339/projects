import React, { Component } from "react";
class Header extends Component
{
    render(){
        return(
    <header id="home" className="hero-area">    
      <div className="overlay">
        <span></span>
        <span></span>
      </div>
      <nav className="navbar navbar-expand-md bg-inverse fixed-top scrolling-navbar">
        <div className="container">
          <a href="index.html" className="navbar-brand"><img src="images/scp-foundation.png" height="60px" alt=""></img> SCP FOUNDATION</a>       
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <i className="lni-menu"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mr-auto w-100 justify-content-end">
              <li className="nav-item">
                <a className="nav-link page-scroll" href="#SCP-002">SCP-002</a>
              </li>
              <li className="nav-item">
                <a className="nav-link page-scroll" href="#SCP-003">SCP-003</a>
              </li>  
              <li className="nav-item">
                <a className="nav-link page-scroll" href="#SCP-004">SCP-004</a>
              </li>                            
              <li className="nav-item">
                <a className="nav-link page-scroll" href="#SCP-005">SCP-005</a>
              </li>       
              <li className="nav-item">
                <a className="nav-link page-scroll" href="#SCP-006">SCP-006</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>  
      <div className="container">      
        <div className="row space-100">
          <div className="col-lg-6 col-md-12 col-xs-12">
            <div className="contents">
              <h2 className="head-title">SCP FOUNDATION</h2>
              <p>Secure Contain Protect</p>
              
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-xs-12 p-0">
            <div className="intro-img">
              <img src="images/bg.jpg" alt=""></img>
            </div>            
          </div>
        </div> 
      </div>             
    </header>
    
        );
    }

}
export default Header;