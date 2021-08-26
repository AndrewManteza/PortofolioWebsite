import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id= "tech">
    <SectionDivider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      QQdsfgsdafasd
    </SectionText>
    <List>
      <ListItem>
      <DiReact size = "3rem" />
      <ListContainer>
        <ListTitle>Front-End</ListTitle>
        <ListParagraph>
          Experience with<br />
          React.js<br />
          Html <br />
          CSS<br />
          </ListParagraph>
        </ListContainer>
        </ListItem>
    <ListItem>
      <DiFirebase size = "3rem" />
      <ListContainer>
        <ListTitle>Back-end</ListTitle>
        <ListParagraph>
          Experience with<br />
          PHP<br />
          DialogFlow<br />
          Node<br />
          Databases<br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
    <ListItem>
      <DiZend size = "3rem" />
      <ListContainer>
        <ListTitle>UI/UX</ListTitle>
        <ListParagraph>
          Experience with<br />
          Figma<br />
          Adobe Illustrator<br />
          </ListParagraph>
        </ListContainer>
        </ListItem>
    </List>
    </Section>

);

export default Technologies;
