import { HTMLAttributes } from 'react';

import Image from 'next/image';
import styled from 'styled-components';

import { PerformanceResponse } from 'apis/performance/type';
import * as Styles from 'features/category/performance/Performance.styles';
import STYLES from 'styles/index';

interface Props extends HTMLAttributes<HTMLElement> {
  data: PerformanceResponse;
}

const PerformanceDetail = ({ data }: Props) => {
  const { story, storyUrls } = data;
  return (
    <Styles.InfoWrapper>
      <Styles.InfoTitle>공연 상세</Styles.InfoTitle>
      <UrlImagesWrapper>
        <Text>{story}</Text>
        {storyUrls.map((url) => (
          <Image
            key={url}
            src={url}
            alt={'performance-detail-image'}
            width={568}
            height={366}
            priority={false}
          />
        ))}
      </UrlImagesWrapper>
    </Styles.InfoWrapper>
  );
};

export default PerformanceDetail;

const Text = styled.span`
  color: ${STYLES.color.gray900};
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  white-space: pre-wrap;
`;

const UrlImagesWrapper = styled.div`
  padding: 16px 0;
  display: flex;
  flex-direction: column;
  row-gap: 12px;

  & > img {
    width: auto;
    height: auto;
  }
`;
