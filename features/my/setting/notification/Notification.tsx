'use client';

import { useRouter } from 'next/navigation';
import styled from 'styled-components';

import ToggleButton from 'components/common/Button/ToggleButton';
import TopBar from 'components/common/Nav/TopBar';
import {
  ContentsWrapper,
  ContentTitle,
  Description,
  Divider,
  ListWrapper,
  Title,
} from 'features/my/setting/Setting.styles';
import { ArrowRight } from 'styles/icons';
import STYLES from 'styles/index';

const Notification = () => {
  const { back } = useRouter();

  return (
    <Container>
      <TopBar
        leftProps={<TopBar.BackButton onClick={back} />}
        middleProps={<TopBar.Title>설정</TopBar.Title>}
      />
      <ListWrapper>
        <Title>알림</Title>
      </ListWrapper>
      <ListWrapper>
        <ContentsWrapper>
          <ContentTitle>관심 정보 알림</ContentTitle>
          <Description>내가 설정한 관심 정보와 관련된 공연을 알려드려요</Description>
        </ContentsWrapper>
        <ToggleButton active={false} />
      </ListWrapper>
      <ListWrapper>
        <ContentsWrapper>
          <ContentTitle>마케팅 알림</ContentTitle>
          <Description>인기있는 공연, 추천 공연 등을 알려드려요</Description>
        </ContentsWrapper>
        <ToggleButton active={false} />
      </ListWrapper>
      <Divider />
      <ListWrapper>
        <Title>서비스 정보</Title>
      </ListWrapper>
      <ListWrapper cursor>
        <ContentTitle>이용약관</ContentTitle>
        <ArrowRight size={24} />
      </ListWrapper>
      <ListWrapper cursor>
        <ContentTitle>개인정보 처리방침</ContentTitle>
        <ArrowRight size={24} />
      </ListWrapper>

      <ListWrapper cursor>
        <ContentTitle>오픈소스 라이선스</ContentTitle>
        <ArrowRight size={24} />
      </ListWrapper>

      <ListWrapper>
        <VersionInfo>
          <ContentTitle>버전정보</ContentTitle>
          <Description>1.2.0</Description>
        </VersionInfo>
      </ListWrapper>
    </Container>
  );
};

export default Notification;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${STYLES.color.white};
`;

const VersionInfo = styled.div`
  display: flex;
  column-gap: 4px;
`;
