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
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Opensource;
