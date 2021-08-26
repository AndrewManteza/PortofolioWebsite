import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Personal Portofolio
        </SectionTitle>
        <SectionText>
          Lorem Ipsum and some other shit
          </SectionText>
          <Button onClick={() => window.location ='https://www.youtube.com/'}> Learn More</Button>
      </LeftSection>
  </Section>
);

export default Hero;