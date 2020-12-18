import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as GithubSvg } from "../../assets/github.svg";
import { ReactComponent as FacebookSvg } from "../../assets/facebook.svg";
import { ReactComponent as TwitterSvg } from "../../assets/twitter.svg";
import { ReactComponent as LinkedInSvg } from "../../assets/linkedin.svg";

import "./footer.scss";
class Footer extends React.Component {
  state = {
    githubLink: "https://github.com/Eventuaa/eventuaa",
    facebookLink: "https://www.facebook.com/jugshaurya",
   
    linkedinLink: "https://www.linkedin.com/in/megha-kashyap-87610911a/",
    sections: [
      {
        title: "About Us >>",
        values: [
          "We provide good quality articles on affordable price at your door step in a blink of an eye. "
        ],
        links: null
      },
      {
        title: "Quick Links >>",
        values: ["PROFESSIONS", "PARTY THEMES", "INDIAN DANCES", "SUPERHEROES"],
        links: [
          "/shop/Professional",
          "/shop/Party Themes",
          "/shop/Indian Dancers",
          "/shop/Superheroes",
          "/shop"
        ]
      },
      {
        title: "Help >>",
        values: ["Contact"],
        links: ["/contact"]
      },
      {
        title: "Contacts >>",
        values: ["@EVENTUAA"],
        links: ["mailto:megha022mca20@igdtuw.ac.in"]
      }
    ]
  };

  renderSocialLinks = () => {
    return (
      <div className="extra-links social-links">
        <h4> Follow Me  </h4>
        <ul>
          <li>
            <a
              href={this.state.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubSvg className="githubsvg" />
            </a>
          </li>

          <li>
            <a
              href={this.state.linkedinLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInSvg />
            </a>
          </li>
        </ul>
      </div>
    );
  };

  render() {
    const { sections } = this.state;
    return (
      <div className="footer-section">
        <a href="#top" className="backtotop">
          Back to Top
        </a>
        <div className="container">
          {sections.map((section, i) => (
            <div className="extra-links" key={100 + i}>
              <h4>{section.title}</h4>
              <ul>
                {section.values.map((value, i) => (
                  <li key={700 + i}>
                    {section.title === "Contacts >>" ? (
                      <a href={section.links[i]}>{value}</a>
                    ) : (
                      <Link to={section.links ? section.links[i] : null}>
                        {value}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {this.renderSocialLinks()}
        </div>
       
      </div>
    );
  }
}

export default Footer;
