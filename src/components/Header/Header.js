import Link from "next/link";
import React, { useState } from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail,
  AiFillTwitterCircle,
  AiOutlineMenu,
} from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import {
  Container,
  Div1,
  Div3,
  HamburgerMenu,
  Menu,
  MenuStyle,
  SocialIcons,
  Span,
} from "./HeaderStyles";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((showMenu) => !showMenu);
  };

  return (
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
            <DiCssdeck size="2.5rem" /> <Span> Sandon Lai</Span>
          </a>
        </Link>
      </Div1>

      {/* Hamburger Menu settings */}
      <HamburgerMenu onClick={toggleMenu}>
        <SocialIcons>
          <AiOutlineMenu size="2.5rem" />
        </SocialIcons>
      </HamburgerMenu>

      {showMenu && (
        <Menu>
          <MenuStyle href="https://github.com/sandonl" target="_blank">
            GitHub
          </MenuStyle>
          <MenuStyle href="https://linkedin.com/in/sandonlai" target="_blank">
            Linkedin
          </MenuStyle>
          <MenuStyle href="mailto:sandonnlai@gmail.com" target="_blank">
            Email
          </MenuStyle>
          <MenuStyle href="https://twitter.com/snads_build" target="_blank">
            Twitter
          </MenuStyle>
        </Menu>
      )}

      {/* Regular Nav Bar */}
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
        <SocialIcons href="mailto:sandonnlai@gmail.com">
          <AiFillMail size="2.5rem" />
        </SocialIcons>
        <SocialIcons
          onClick={() =>
            window.open("https://twitter.com/snads_build", "_blank")
          }
        >
          <AiFillTwitterCircle size="2.5rem" />
        </SocialIcons>
      </Div3>
    </Container>
  );
};

export default Header;
