'use client';

import { useRouter } from 'next/navigation';
import styled from 'styled-components';

import CloseButton from 'components/common/Button/CloseButton';
import TopBar from 'components/common/Nav/TopBar';
import {
  ContentsWrapper,
  ContentTitle,
  Description,
  ListWrapper,
  Title,
} from 'features/my/setting/Setting.styles';
import { ArrowRight } from 'styles/icons';
import STYLES from 'styles/index';

const Account = () => {
  const { back } = useRouter();

  const clickCloseButton = () => console.log('click close button');

  return (
    <Container>
      <TopBar
        leftProps={<TopBar.BackButton onClick={back} />}
        middleProps={<TopBar.Title>계정 관리</TopBar.Title>}
        rightProps={<CloseButton onClick={clickCloseButton} />}
      />
      <ListWrapper>
        <Title>내 계정</Title>
      </ListWrapper>

      <ListWrapper cursor>
        <ContentTitle>비밀번호 변경</ContentTitle>
        <ArrowRight size={24} />
      </ListWrapper>

      <ListWrapper cursor>
        <ContentsWrapper>
          <ContentTitle>관심 카테고리 수정</ContentTitle>
          <Description>지역 : 서울, 부산, 대구, 인천</Description>
          <Description>공연 장르 : 연극, 뮤지컬, 클래식, 국악, 대중음악, 제주특별</Description>
        </ContentsWrapper>
        <ArrowRight size={24} />
      </ListWrapper>

      <ListWrapper cursor>
        <ContentsWrapper>
          <ContentTitle>관심 키워드 수정</ContentTitle>
          <Description>지역 : 서울, 부산, 대구, 인천</Description>
          <Description>공연 장르 : 연극, 뮤지컬, 클래식, 국악, 대중음악, 제주특별</Description>
        </ContentsWrapper>
        <ArrowRight size={24} />
      </ListWrapper>

      <ListWrapper cursor>
        <ContentTitle>로그아웃</ContentTitle>
      </ListWrapper>

      <SubAreaContainer>
        <ListWrapper>
          <Description underline>탈퇴하기</Description>
        </ListWrapper>
      </SubAreaContainer>
    </Container>
  );
};

export default Account;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;
  background-color: ${STYLES.color.white};
`;

const SubAreaContainer = styled.div`
  flex: 1;
  background-color: ${STYLES.color.gray150};
`;
