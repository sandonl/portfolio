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
        <DiReact size="3rem" style={{ alignSelf: "center" }} />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>React, Next.js, HTML, CSS, JS</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" style={{ alignSelf: "center" }} />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            SQL, Java, AWS Services <br />
            (Lambda, NeptuneDB, Cognito, API Gateway, S3, Amplify)
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <CgFigma size="3rem" style={{ alignSelf: "center" }} />
        <ListContainer>
          <ListTitle>UI/ UX</ListTitle>
          <ListParagraph>Figma</ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionText>
      I'm currently focused on also learning: GraphQL and TypeScript
    </SectionText>
  </Section>
);

export default Technologies;
