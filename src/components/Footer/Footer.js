import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  Slogan,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>
            <h6>This site was built with Next.js and Deployed on Netlify</h6>
          </Slogan>
        </CompanyContainer>
        <SocialIcons
          onClick={() => window.open("https://github.com/sandonl", "_blank")}
        >
          <AiFillGithub size="2.5rem" />
        </SocialIcons>
        <SocialIcons
          onClick={() =>
            window.open("https://linkedin.com/in/sandonlai", "_blank")
          }
        >
          <AiFillLinkedin size="2.5rem" />
        </SocialIcons>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
