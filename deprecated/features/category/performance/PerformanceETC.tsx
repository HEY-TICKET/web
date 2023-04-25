import { HTMLAttributes } from 'react';

import styled from 'styled-components';

import { PerformancesResponses } from 'apis/performance/type';
import { GetPlaceReturnValue } from 'apis/place/type';
import Description from 'deprecated/features/category/performance/Description';
import * as Styles from 'deprecated/features/category/performance/Performance.styles';
import STYLES from 'deprecated/styles';

interface Props extends HTMLAttributes<HTMLElement> {
  data: PerformancesResponses;
  placeData: GetPlaceReturnValue;
}

const PerformanceETC = ({ data, placeData }: Props) => {
  const { age, crew } = data;
  const { fcltychartr, phoneNumber } = placeData;

  return (
    <Styles.InfoWrapper>
      <Styles.InfoTitle>기타 정보</Styles.InfoTitle>
      <ContentsWrapper>
        <SubTitle>주체/기획</SubTitle>
        <DescriptionWrapper>
          <Description>{fcltychartr}</Description>
        </DescriptionWrapper>
        <SubTitle>고객문의</SubTitle>
        <DescriptionWrapper>
          <Description>{phoneNumber}</Description>
        </DescriptionWrapper>
        <SubTitle>관람 등급</SubTitle>
        <DescriptionWrapper>
          <Description>{age}</Description>
        </DescriptionWrapper>
        <SubTitle>작가/출연자</SubTitle>
        <DescriptionWrapper>
          <Description>{crew}</Description>
        </DescriptionWrapper>
      </ContentsWrapper>
    </Styles.InfoWrapper>
  );
};

export default PerformanceETC;

const ContentsWrapper = styled.div`
  padding: 16px 0;
  display: grid;
  grid-template-columns: 72px 1fr;
  row-gap: 12px;
  column-gap: 6px;
`;
const SubTitle = styled.span`
  color: ${STYLES.color.gray500};
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
`;
const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
