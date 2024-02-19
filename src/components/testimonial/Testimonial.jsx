import React from "react";
import "./testimonial.css";
import img from "../../assests/images/suresh.jpg";
import img1 from "../../assests/images/vinod.jpg";
import img3 from "../../assests/images/samuel.jpg";
import { Fade } from "react-reveal";
function Testimonial(props) {
  const theme = props.theme;
  return (
    <div className="container maint--container">
      <Fade bottom duration={2000} distance="20px">
        <h1
          className="skills-header head--test-h"
          style={{ color: theme.text }}
        >
          Testimonials
        </h1>
      </Fade>
      <div className="row align-items-start">
        <div className="col">
          <div className="card card--hun">
            <div className="img--div">
              <img src={img} className="card-img-top imgg--src" alt="..." />
              <div className="head--test--box">
                <h5 className="card-title title--test">Suresh Chintada</h5>
                <p className="card-text designation--test">
                  Ex-Chief Technology Officer, Subex
                </p>
              </div>
            </div>
            <div className="card-body body--test">
              <p className="card-text text--hun">
                Shashank is the visionary architect behind the exponential
                growth of our AI team at Subex, taking it from a modest 6
                members to a powerhouse of 60+ professionals. His ability to
                define a robust charter for the team has been instrumental in
                driving AI product development. Shashank's leadership has
                resulted in groundbreaking AI-first products, such as
                CrunchMetrics and extending HyperSense AI, and a number of other
                AI led solutions to our portfolio. Notably, Shashank's talent
                acquisition strategy has been exemplary. He not only hired but
                also developed and retained the best minds in the industry and
                from campuses, fostering a dynamic and innovative team culture.
                {/* Under Shashank's guidance, Subex AI Labs has become synonymous
                with innovation. His commitment to intellectual contributions is
                evident through patent filings, publications in top ABDC listed
                journals, and active engagement in the open-source community.
                Shashank's presence at industry summits and conferences further
                solidified Subex AI Labs as a thought leader in the field. He
                has successfully created a distinct brand identity for Subex AI
                Labs, both within the organization and in the broader university
                as well as industry landscape. His strategic approach to
                branding has elevated the reputation of our AI division,
                contributing significantly to our overall success. In summary,
                Shashank's leadership at Subex AI Labs has been transformative,
                driving innovation, fostering a talented team, that helped Subex
                as an AI led Products company. I whole heartedly recommend
                Shashank for any leadership position in this burgeoning
                Industry. */}
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card card--hun">
            <div className="img--div">
              <img src={img1} className="card-img-top imgg--src" alt="..." />
              <div className="head--test--box">
                <h5 className="card-title title--test">
                  Vinod Kumar Padmanabhan
                </h5>
                <p className="card-text designation--test">
                  Chief Executive Officer, Subex
                </p>
              </div>
            </div>
            <div className="card-body body--test">
              <p className="card-text text--hun">
                Shashank possesses the ideal blend of technical and leadership
                skills, which he adeptly utilised to lead our AI Labs team at
                Subex to become one of the best in the market. Under his
                guidance, the AI lab has grown significantly, yielding
                groundbreaking AI-first products and establishing a distinctive
                brand identity for Subex AI Labs. Shashank's transformative
                influence has solidified Subex as an AI-led company.
                Furthermore, his talent acquisition strategy stands out, as he
                not only recruited but also nurtured and retained top industry
                talents, cultivating a dynamic and innovative team culture.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card card--hun">
            <div className="img--div">
              <img src={img3} className="card-img-top imgg--src" alt="..." />
              <div className="head--test--box">
                <h5 className="card-title title--test">Samuel Pritchett</h5>
                <p className="card-text designation--test">
                Head of Channel Strategy and Analytics, Atlassian
                </p>
              </div>
            </div>
            <div className="card-body body--test">
              <p className="card-text text--hun">
              Shashank has delivered some amazing results at VMware. We first started working together on a highly complicated analytical model. Even though he was assigned to the project in its final weeks he was able to ramp up quickly and add tremendous value. From there we kicked off some propensity model efforts that revealed previously unknown characteristics about the behaviors of our market. On top of all this, Shashank is taking on more project management responsibilities. It’s been a great please to work with him and looking forward to continued exceptional results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
