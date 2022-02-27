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
    <SectionText>
      I've worked with a range of technologies in the app development space,
      from the back-end (AWS Services, Node) to the front-end (React) and design
      (Figma)
      <br />
      Also currently learning: GraphQL and Typescript
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js, MaterialUI, ChakraUI
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            AWS Services <br />
            (Lambda, NeptuneDB, S3, Amplify)
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <CgFigma size="3rem" />
        <ListContainer>
          <ListTitle>UI/ UX</ListTitle>
          <ListParagraph>
            Experience with <br />
            Figma
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
