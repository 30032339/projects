import React, { Component } from "react";
import Header from "./Header";
import Section from "./Section";
import Footer from "./Footer";
class Main extends Component
{
    render()
    {
        return(
            <div>
                <Header/>
                <Section/>
                <Footer/>

            </div>
        );
    }
}

export default Main;