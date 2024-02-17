import React, { Component } from "react";
import "./Certifications.css";
import { Fade } from "react-reveal";
import { awards } from "../../portfolio";
import CertificationCard from "../../components/certificationCard/CertificationCard";

class Awards extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="main" id="certs">
        <div className="certs-header-div">
          <Fade bottom duration={2000} distance="20px">
            <h1 className="certs-header" style={{ color: theme.text }}>
              
            </h1>
          </Fade>
        </div>
        <div className="certs-body-div">
          {awards.awards.map((cert) => {
            return <CertificationCard certificate={cert} theme={theme} />;
          })}
        </div>
      </div>
    );
  }
}

export default Awards;