import React from 'react';

import { Twitter } from 'styled-icons/boxicons-logos/Twitter';
import { Facebook } from 'styled-icons/boxicons-logos/Facebook';

import * as S from './styled';

const SocialLinks = () => {
  return (
    <S.SocialLinksList>
      <S.SocialLinksItem>
        <S.SocialLinksLink
          href="https://twitter.com/_diogorodrigues"
          title="Twitter"
          target="_blank"
        >
          <Twitter />
        </S.SocialLinksLink>
      </S.SocialLinksItem>
      <S.SocialLinksItem>
        <S.SocialLinksLink
          href="https://github.com/diogorodrigues/iceberg-gatsby-multilang"
          title="Facebook"
          target="_blank"
        >
          <Facebook />
        </S.SocialLinksLink>
      </S.SocialLinksItem>
    </S.SocialLinksList>
  );
};

export default SocialLinks;
