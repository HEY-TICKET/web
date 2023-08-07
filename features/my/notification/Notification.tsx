'use client';

import { useRouter } from 'next/navigation';
import styled from 'styled-components';

import TopBar from 'components/common/Nav/TopBar';
import CustomSuspense from 'core/CustomSuspense';
import ErrorBoundary from 'core/ErrorBoundary';
import NotificationFallback from 'features/my/notification/NotificationFallback';
import NotificationList from 'features/my/notification/NotificationList';
import STYLES from 'styles/index';

const Notification = () => {
  const { back } = useRouter();

  return (
    <Container>
      <TopBar
        leftProps={<TopBar.BackButton onClick={back} />}
        middleProps={<TopBar.Title>키워드 알림</TopBar.Title>}
      />
      <ErrorBoundary fallback={<div>Error...</div>}>
        <CustomSuspense fallback={<NotificationFallback />}>
          <NotificationList />
        </CustomSuspense>
      </ErrorBoundary>
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
