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
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <Image
            src="/assets/gustavo2.JPG"
            alt="man-svgrepo"
          />
          <div className="AboutBio">
            Hello! My name is <strong>Gustavo Soto Reyes. </strong>  
            I'm senior at Emory Univeristy currently stydying Computer Science. 
            Throughout my undergraduate years  I made use of my summers by working 
            as an intern at technology and digital marketing organizations, where 
            I learned a lot about handling big data, creating dashboards, and web 
            development. I'm currently employed as a full-stack developer at a startup 
            that aims to enable people to realize their goals. I've already experienced a ton of growth in myself, and 
            I'm eager to keep adding to my skill set.            
          </div>
          <div className="AboutBio tagline2">
            I have become confident using the following technologies.
          </div>
          <Technologies>
            {stackList.map((stack, index) => (
              <Tech key={index} className="tech">
                <TechImg src={stack.img} alt={stack.name} />
                <TechName>{stack.name}</TechName>
              </Tech>
            ))}
          </Technologies>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
