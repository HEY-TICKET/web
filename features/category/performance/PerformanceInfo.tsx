import { HTMLAttributes } from 'react';

import styled from 'styled-components';

import { PerformanceResponse } from 'apis/performance/type';
import NaverMap from 'components/common/Map/NaverMap';
import Description from 'features/category/performance/Description';
import * as Styles from 'features/category/performance/Performance.styles';
import STYLES from 'styles/index';
import { getArrayPerformanceTime, getArrayPrice } from 'utils/performance';
import { getPeriod } from 'utils/times';

interface Props extends HTMLAttributes<HTMLElement> {
  data: PerformanceResponse;
}

const PerformanceInfo = ({ data }: Props) => {
  const {
    startDate,
    endDate,
    cast,
    schedule,
    runtime,
    price,
    theater,
    latitude,
    longitude,
    address,
  } = data;

  const period = getPeriod(startDate, endDate);

  return (
    <Styles.InfoWrapper>
      <Styles.InfoTitle>공연 정보</Styles.InfoTitle>
      <ContentsWrapper>
        <SubTitle>기간</SubTitle>
        <DescriptionWrapper>
          <Description>{period}</Description>
        </DescriptionWrapper>
        <SubTitle>런타임</SubTitle>
        <DescriptionWrapper>
          <Description>{runtime}</Description>
        </DescriptionWrapper>
        <SubTitle>시간</SubTitle>
        <DescriptionWrapper>
          {getArrayPerformanceTime(schedule).map((desc, index) => (
            <Description key={index}>{desc}</Description>
          ))}
        </DescriptionWrapper>
        <SubTitle>출연진</SubTitle>
        <Description>{cast}</Description>
        <SubTitle>예매가</SubTitle>
        <DescriptionWrapper>
          {getArrayPrice(price).map((desc, index) => (
            <Description key={index}>{`${desc}`}</Description>
          ))}
        </DescriptionWrapper>
        <SubTitle>공연장</SubTitle>
        <DescriptionWrapper>
          <Description>{theater}</Description>
          <Description>{address}</Description>
        </DescriptionWrapper>
      </ContentsWrapper>
      <MapWrapper>
        <NaverMap latitude={latitude} longitude={longitude} />
      </MapWrapper>
    </Styles.InfoWrapper>
  );
};

export default PerformanceInfo;

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
const MapWrapper = styled.div`
  width: 100%;
  height: 190px;
`;
