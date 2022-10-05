import React from "react";
import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi there! <br />
        I'm Sandon, <br />a Full Stack Developer, <br />
        originally from Melbourne
      </SectionTitle>
      <SectionText>
        I'm interested in building innovative projects, exploring the <br />
        3D World and learning Korean!
      </SectionText>
      <Button
        onClick={() => window.open("https://sandonl.vercel.app/", "_blank")}
      >
        New Portfolio!
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
