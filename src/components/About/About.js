import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
        <ScrollAnimation animateIn="fadeInLeft">
          <Image
            src="/d.svg"
            alt="man-svgrepo"
          />
        </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
            👋 Hi there! I'm Shiv Mahobia, an enthusiastic and motivated recent graduate with a passion for Software developer. I'm excited to kick-start my career journey and contribute to innovative projects.
            </ScrollAnimation>

            <br /><br />
            
            <ScrollAnimation animateIn="fadeInLeft">
            🎓 I hold a MCA Degree from PT. Ravishankar Shukla University, Raipur. My academic journey has equipped me with a solid foundation in Programming Languages and a hunger for continuous learning.
            </ScrollAnimation>
            <br /><br />
            
            <ScrollAnimation animateIn="fadeInLeft">
            🚀 Exciting times are ahead, and I'm ready to embrace them with open arms. Let's connect and explore the possibilities together!            
            </ScrollAnimation>
            <br /><br />

            <ScrollAnimation animateIn="fadeInLeft">
              <div className="tagline2">
                I have become confident using the following technologies:
              </div>
            </ScrollAnimation>
            

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>

        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
