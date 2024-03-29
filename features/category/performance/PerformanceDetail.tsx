import { HTMLAttributes, useState } from 'react';

import Image from 'next/image';
import styled from 'styled-components';

import { PerformanceResponse } from 'apis/performance/type';
import Button from 'components/common/Button/Button';
import * as Styles from 'features/category/performance/Performance.styles';
import STYLES from 'styles/index';

interface Props extends HTMLAttributes<HTMLElement> {
  data: PerformanceResponse;
}

const PerformanceDetail = ({ data }: Props) => {
  const { story, storyUrls } = data;
  const [readMore, setReadMore] = useState(false);
  return (
    <Styles.InfoWrapper>
      <Styles.InfoTitle>공연 상세</Styles.InfoTitle>
      <UrlImagesWrapper readMore={readMore}>
        <Text>{story}</Text>
        {storyUrls.map((url, index) => (
          <Image
            key={url}
            src={url}
            alt={'performance-detail-image'}
            width={568}
            height={366}
            priority={index === 0}
          />
        ))}
      </UrlImagesWrapper>
      <Button theme={'white'} onClick={() => setReadMore((prev) => !prev)}>
        공연 상세 {readMore ? '접기' : '더 보기'}
      </Button>
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

const UrlImagesWrapper = styled.div<{ readMore: boolean }>`
  padding: 16px 0;
  display: flex;
  flex-direction: column;
  row-gap: 12px;

  max-height: ${({ readMore }) => (readMore ? 'unset' : '336px')};
  overflow: ${({ readMore }) => (readMore ? 'unset' : 'hidden')};

  & > img {
    width: auto;
    height: auto;
  }
`;
