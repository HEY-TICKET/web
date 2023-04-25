'use client';

import GlobalLayout from 'components/Layouts/GlobalLayout';
import NavigationBar from 'features/Index/NavigationBar';

const Index = () => {
  return (
    <>
      <GlobalLayout>
        <div className={'flex-col'}>
          {/*GNB*/}
          <NavigationBar />
          {/*Banner*/}
          <div>배너</div>

          <div>슬라이드 카드 컴포넌트</div>
        </div>
      </GlobalLayout>
    </>
  );
};

export default Index;
