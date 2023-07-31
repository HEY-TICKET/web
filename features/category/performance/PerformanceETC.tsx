import { HTMLAttributes } from 'react';

import styled from 'styled-components';

import { PerformanceResponse } from 'apis/performance/type';
import Description from 'features/category/performance/Description';
import * as Styles from 'features/category/performance/Performance.styles';
import STYLES from 'styles/index';
import { isEmptyValue } from 'utils/common';

interface Props extends HTMLAttributes<HTMLElement> {
  data: PerformanceResponse;
}

const PerformanceETC = ({ data }: Props) => {
  const { age, crew, company, phoneNumber } = data;

  const renderContentsWithEmptyCheck = (value: unknown) => {
    const isEmpty = isEmptyValue(value);
    const result = isEmpty ? '-' : value;
    return <Description>{String(result)}</Description>;
  };

  return (
    <Styles.InfoWrapper>
      <Styles.InfoTitle>기타 정보</Styles.InfoTitle>
      <ContentsWrapper>
        <SubTitle>주최/기획</SubTitle>
        <DescriptionWrapper>{renderContentsWithEmptyCheck(company)}</DescriptionWrapper>
        <SubTitle>고객문의</SubTitle>
        <DescriptionWrapper>{renderContentsWithEmptyCheck(phoneNumber)}</DescriptionWrapper>
        <SubTitle>관람 등급</SubTitle>
        <DescriptionWrapper>{renderContentsWithEmptyCheck(age)}</DescriptionWrapper>
        <SubTitle>작가/출연자</SubTitle>
        <DescriptionWrapper>{renderContentsWithEmptyCheck(crew)}</DescriptionWrapper>
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
