'use client';

import { useRouter } from 'next/navigation';
import styled from 'styled-components';

import TopBar from 'components/common/Nav/TopBar';

const Setting = () => {
  const { back } = useRouter();

  return (
    <Container>
      <TopBar
        leftProps={<TopBar.BackButton onClick={back} />}
        middleProps={<TopBar.Title>설정</TopBar.Title>}
      />
    </Container>
  );
};

export default Setting;

const Container = styled.div``;
