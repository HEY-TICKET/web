import { HTMLAttributes } from 'react';

import styled from 'styled-components';

import { PerformancesResponses } from 'apis/performance/type';
import * as Styles from 'features/category/performance/Performance.styles';

interface Props extends HTMLAttributes<HTMLElement> {
  data: PerformancesResponses;
}

const PerformanceETC = ({ data }: Props) => {
  const { age, crew } = data;

  return (
    <Styles.InfoWrapper>
      <Styles.InfoTitle>기타 정보</Styles.InfoTitle>
      <ContentsWrapper>
        <SubTitle>관람 등급</SubTitle>
        <DescriptionWrapper>
          <Description>{age}</Description>
        </DescriptionWrapper>
        {!!crew.trim() && (
          <>
            <SubTitle>작가/출연자</SubTitle>
            <DescriptionWrapper>
              <Description>{crew}</Description>
            </DescriptionWrapper>
          </>
        )}
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
