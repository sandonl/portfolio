import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillMail, AiFillLinkedin } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  Span,
  SocialIcons,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a
          style={{
            display: "flex",
            alignItems: "center",
            color: "white",
          }}
        >
          <DiCssdeck size="2.5rem" /> <Span>Sandon Lai</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
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
      <SocialIcons href="sandonl@outlook.com.au">
        <AiFillMail size="2.5rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
