import React from "react";
import {
  DiCodeBadge,
  DiDatabase,
  DiFirebase,
  DiReact,
  DiZend,
} from "react-icons/di";
import { CgFigma } from "react-icons/cg";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle style={{ marginTop: "2rem" }}>Technologies</SectionTitle>
    {/* // I've worked with a range of technologies in web-app development including
      // experience developing from the back-end (AWS Services, Node) to the
      // front-end (React) as well as the design (Figma)
      // <br /> */}
    <List>
      <ListItem>
        <DiReact size="3rem" style={{ alignSelf: "left" }} />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            React.js, Next.js, TypeScript, JavaScript, GraphQL
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" style={{ alignSelf: "left" }} />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            PostgreSQL, Java, AWS Services <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <CgFigma size="3rem" style={{ alignSelf: "left" }} />
        <ListContainer>
          <ListTitle>UI/ UX</ListTitle>
          <ListParagraph>Figma</ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    {/* <SectionText>Currently learning: GraphQL and TypeScript</SectionText> */}
  </Section>
);

export default Technologies;
