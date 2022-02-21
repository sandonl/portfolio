import React from "react";
import { headerImage } from "../../constants/constants";
import {
  Section,
  SectionText,
  SectionTitle,
  Img,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi there! <br />
        I'm Sandon, a Full-Stack Developer from Melbourne
      </SectionTitle>
      <SectionText>
        An aspiring developer interested in the Web-App Development and the
        Metaverse!
      </SectionText>
      <Button
        onClick={() => window.open("https://github.com/sandonl", "_blank")}
      >
        Learn More
      </Button>
    </LeftSection>
    {/* <Img src={"/image/header.png"} /> */}
  </Section>
);

export default Hero;
