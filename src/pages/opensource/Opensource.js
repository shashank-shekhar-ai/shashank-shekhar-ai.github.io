import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import OpensourceCharts from "../../containers/opensourceCharts/OpensourceCharts";
import Organizations from "../../containers/organizations/Organizations";
import PullRequests from "../../containers/pullRequests/PullRequests";
import Issues from "../../containers/issues/Issues";
import TopButton from "../../components/topButton/TopButton";
import "./Opensource.css";
import Awards from "../../containers/certifications/Awards";
import { awards} from "../../portfolio";
import "../education/EducationComponent.css";
import { Fade } from "react-reveal";
import EducationImg from "../education/EducationImg";

import PublicationCard from "../../components/publicationsCard/PublicationCard";

import {
 
  industryHeader,
  industryAssociations
} from "../../portfolio.js";

class Opensource extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="opensource-main">
        <Header theme={this.props.theme} />
        {/* <Organizations theme={this.props.theme} /> */}
        <Fade bottom duration={2000} distance="40px">
            <div className="heading-div">
              <div className="heading-img-div">
                {/* <img
									src={require("../../assests/images/education.svg")}
									alt=""
								/> */}
                <EducationImg theme={theme} />
              </div>
              <div className="heading-text-div">
                <h1 className="heading-text" style={{ color: theme.text }}>
                  Awards & Recognition
                </h1>
                <h3 className="heading-sub-text" style={{ color: theme.text }}>
                Celebrating Achievements: Honors and <br/>Acknowledgments
                </h3>
                {/* <CompetitiveSites logos={competitiveSites.competitiveSites} /> */}
              </div>
            </div>
          </Fade>
        {awards.awards.length > 0 ? (
            <Awards theme={this.props.theme} />
          ) : null}
        {/* <OpensourceCharts theme={this.props.theme} />
        <PullRequests theme={this.props.theme} />
        <Issues theme={this.props.theme} /> */}
             {industryAssociations.data.length > 0 ? (
          <div className="basic-projects">
            <Fade bottom duration={2000} distance="40px">
              <div className="publications-heading-div">
                <div className="publications-heading-text-div">
                  <h1
                    className="publications-heading-text"
                    style={{ color: theme.text }}
                  >
                    {industryHeader.title}
                  </h1>
                  <p
                    className="projects-header-detail-text subTitle"
                    style={{ color: theme.secondaryText }}
                  >
                    {industryHeader["description"]}
                  </p>
                </div>
              </div>
            </Fade>
          </div>
        ) : null}

        <div className="repo-cards-div-main">
          {industryAssociations.data.map((pub) => {
            return <PublicationCard pub={pub} theme={theme} />;
          })}
        </div>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Opensource;
