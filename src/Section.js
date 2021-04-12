import { render } from "@testing-library/react";
import React, { Component } from "react";
import Game from "./data.json";

const games = Game.map(
    (Game) => 
    {
                return(
                    <section key={Game.id} id={Game.id.toString()} className="section">
      <div className="container border border-primary bg-light">

                    <div className="row">
                    <div className="col-lg-12 col-md-6 col-xs-12">
            <div className="services-item text-left ">
              
              <h4 className="text-primary text-center">{Game.item.toString()}</h4>
              <div className="business-item-img text-center">
              <img src={Game.image} className="img-fluid rounded" alt={Game.item}></img>
            </div>
            <h5 className="text-muted">{Game["main-heading"]}</h5>
            <h5>{Game["heading-1"]}</h5>
              <p className="text-secondary">{Game["paragraph-1"]}</p>
              <h5>{Game["heading-2"]}</h5>
              <p  className="text-secondary">{Game["paragraph-2"]}</p>
              <h5>{Game["heading-3"]}</h5>
              <p  className="text-secondary">{Game["paragraph-3"]}</p>
            </div>
          </div>
          </div>
          
      </div>
      <hr></hr>
    </section>
            
                    );
        
       
    }
);
class Section extends Component {
    render() {
        return (
            <div>
        {games}
            </div>            
                );
    }
}

export default Section;
