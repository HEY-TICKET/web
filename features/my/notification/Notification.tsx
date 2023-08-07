'use client';

import { useRouter } from 'next/navigation';
import styled from 'styled-components';

import TopBar from 'components/common/Nav/TopBar';
import NotificationFallback from 'features/my/notification/NotificationFallback';
import STYLES from 'styles/index';

const Notification = () => {
  const { back } = useRouter();

  return (
    <Container>
      <TopBar
        leftProps={<TopBar.BackButton onClick={back} />}
        middleProps={<TopBar.Title>키워드 알림</TopBar.Title>}
      />
      <NotificationFallback />
    </Container>
  );
};

export default Notification;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;
  background-color: ${STYLES.color.white};
`;
