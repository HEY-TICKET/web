'use client';

import { HTMLAttributes } from 'react';

import Link, { LinkProps } from 'next/link';
import styled from 'styled-components';

import { ArrowRight } from 'styles/icons';
import STYLES from 'styles/index';

interface CurateSectionProps extends HTMLAttributes<HTMLElement> {
  title: string;
  readMoreLinkProps: LinkProps;
}

const Curation = ({ title, readMoreLinkProps, children }: CurateSectionProps) => {
  const { href } = readMoreLinkProps;

  return (
    <CurateSectionWrapper>
      <Header>
        <InfoTitle>{title}</InfoTitle>
        <ReadMoreButton href={href}>
          <span>더보기</span>
          <ArrowRight size={20} />
        </ReadMoreButton>
      </Header>
      {children}
    </CurateSectionWrapper>
  );
};

export default Curation;

Curation.CardSliderFallback = function CardSliderFallback() {
  return (
    <FallbackWrap>
      현재 이 카테고리의
      <br />
      진행중인 공연이 없어요
    </FallbackWrap>
  );
};

const FallbackWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 295.27px;
  padding: 24px 16px;

  color: ${STYLES.color.gray400};

  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
`;

const CurateSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: ${STYLES.color.white};
`;

const InfoTitle = styled.div`
  color: ${STYLES.color.gray900};
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
`;

const ReadMoreButton = styled(Link)`
  display: flex;
  align-items: center;
`;
