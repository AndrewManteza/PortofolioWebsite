import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
      <LinkColumn>
      <LinkTitle>
      Call
      </LinkTitle>
      <LinkItem href="tel: 0916- 1332710">PHP - 09161332710</LinkItem>
      </LinkColumn>
      <LinkColumn>
      <LinkTitle>
      Email
      </LinkTitle>
      <LinkItem href="mailto:manteza14@gmail.com">manteza14@gmail.com</LinkItem>
      </LinkColumn>
        
      <LinkColumn>
      <LinkTitle>
      Discord
      </LinkTitle>
      <LinkItem>MoukMouk#1060</LinkItem>
      </LinkColumn> 
      </LinkList>   
      </FooterWrapper>
  );
};

export default Footer;
