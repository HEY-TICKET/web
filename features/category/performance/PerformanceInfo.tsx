import styled from 'styled-components';

import * as Styles from 'features/category/performance/Performance.styles';

const PerformanceInfo = () => {
  return (
    <Styles.InfoWrapper>
      <Styles.InfoTitle>공연 정보</Styles.InfoTitle>
      <ContentsWrapper>
        <SubTitle>기간</SubTitle>
        <DescriptionWrapper>
          <Description>{'2022.12.21(수) ~ 2023.02.04(일)'}</Description>
        </DescriptionWrapper>
        <SubTitle>시간</SubTitle>
        <DescriptionWrapper>
          {['{공연시간}', 'R석 110,000원', 'S석 80,000원'].map((desc, index) => (
            <Description key={index}>{desc}</Description>
          ))}
        </DescriptionWrapper>
        <SubTitle>출연진</SubTitle>
        <DescriptionWrapper>
          {['V석 130,000원', 'R석 110,000원', 'S석 80,000원'].map((desc, index) => (
            <Description key={index}>{desc}</Description>
          ))}
        </DescriptionWrapper>
        <SubTitle>예매가</SubTitle>
        <DescriptionWrapper>
          {['V석 130,000원', 'R석 110,000원', 'S석 80,000원'].map((desc, index) => (
            <Description key={index}>{desc}</Description>
          ))}
        </DescriptionWrapper>
        <SubTitle>공연장</SubTitle>
        <DescriptionWrapper>
          {['V석 130,000원', 'R석 110,000원', 'S석 80,000원'].map((desc, index) => (
            <Description key={index}>{desc}</Description>
          ))}
        </DescriptionWrapper>
      </ContentsWrapper>
      <MapWrapper>
        <Map />
      </MapWrapper>
    </Styles.InfoWrapper>
  );
};

export default PerformanceInfo;

const ContentsWrapper = styled.div`
  padding: 16px 0 10px;
  display: grid;
  grid-template-columns: 72px 1fr;
  row-gap: 12px;
  column-gap: 6px;
`;
const SubTitle = styled.span`
  color: ${({ theme }) => theme.COLOR.gray500};
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
`;
const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Description = styled.p`
  color: ${({ theme }) => theme.COLOR.gray900};
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
`;
const MapWrapper = styled.div``;
const Map = styled.div`
  width: 100%;
  height: 190px;
  background-color: ${({ theme }) => theme.COLOR.gray200};
`;
