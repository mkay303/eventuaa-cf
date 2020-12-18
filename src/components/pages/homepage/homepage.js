import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import SlideShow from "./SlideShow";

import Home1 from "../../../assets/homepage/home1.jpg";
import Home2 from "../../../assets/homepage/home2.jpg";
import Home3 from "../../../assets/homepage/home3.jpg";
import Home4 from "../../../assets/homepage/home4.jpg";
import "./homepage.scss";

class HomePage extends React.Component {
  state = {
    sections: [
      {
        img: Home1,
        link: "/shop/Party Themes",
        name: "PARTY WEAR"
      },
      {
        img: Home2,
        link: "/shop/Professional",
        name: "PROFESSION WEAR"
      },
      {
        img: Home3,
        link: "/shop/Superheroes",
        name: "SUPERHEROES WEAR"
      },
      {
        img: Home4,
        link: "/shop/Indian Dancers",
        name: "DANCE COSTUMES"
      }
    ]
  };

  render() {
    return (
      <div className="homepage">
        <div className="container">
          <header className="heading">
            <h2>EVENTUAA</h2>
            <h4>UNIQUELY CATERING TO YOUR EVERY DESIRE</h4>
          </header>
          <SlideShow />
         

          
          <div className="homepage-sections">
            {this.state.sections.map((section, i) => (
              <div className="homepage-section" key={600 + i}>
                <img src={section.img} alt="sectionpic" />

                <div className="homepage-section-outer-box">
                  <div className="homepage-section-inner-box">
                    <div className="texta">
                      SHOP FOR {section.name.toUpperCase()}
                    </div>
                    <p className="textb">
                      Fill your closet with our top {section.name.toLowerCase()}
                      's collection, choose from variety of products.
                    </p>
                    <Link to={section.link} className="homepage-section-button">
                      SHOP
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  sections: state.data.sections
});

export default connect(mapStateToProps)(HomePage);
