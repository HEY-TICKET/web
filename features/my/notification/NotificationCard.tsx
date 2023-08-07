'use client';

import Image from 'next/image';
import styled from 'styled-components';

import STYLES from 'styles/index';

type Props = {
  src: string;
  keyword: string;
  title: string;
  openDate: string;
};

// TODO : props 데이터에 맞게 설정 필요
const NotificationCard = ({ src, keyword, title, openDate }: Props) => {
  return (
    <Wrapper>
      <Poster src={src} alt={''} fill />
      <ContentsWrapper>
        <Contents>
          <Keyword>
            <em>{`"${keyword}" 공연 소식`}</em>
          </Keyword>
          <Title>{title}</Title>
        </Contents>
        <RegistrationTime>{openDate}</RegistrationTime>
      </ContentsWrapper>
    </Wrapper>
  );
};

export default NotificationCard;

const Wrapper = styled.div`
  display: flex;
  column-gap: 16px;
  padding: 16px;
`;

const Poster = styled(Image)`
  width: 100%;
  border-radius: 4px;
  aspect-ratio: 1 / 1.414;
`;

const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: space-between;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;

  row-gap: 4px;
`;

const Keyword = styled.span`
  color: ${STYLES.color.gray850};

  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  em {
    font-weight: 700;
  }
`;

const Title = styled.p`
  color: ${STYLES.color.gray800};

  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const RegistrationTime = styled.p`
  color: ${STYLES.color.gray500};

  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
