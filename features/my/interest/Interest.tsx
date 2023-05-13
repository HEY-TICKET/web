'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import styled, { css } from 'styled-components';

import TopBar from 'components/common/Nav/TopBar';
import FormHeader from 'components/FormProvider/FormHeader';
import InterestFormProvider, {
  InterestType,
} from 'features/my/interest/FormProvider/InterestFormProvider';
import InterestsCategory from 'features/my/interest/FormsByType/InterestsCategory';
import InterestsKeyword from 'features/my/interest/FormsByType/InterestsKeyword';

const HEADER_TEXT_BY_TYPE: { [K in InterestType]: { title: string; description: string } } = {
  category: {
    title: '관심 카테고리 선택',
    description: '선택한 카테고리 기준으로 공연을 추천해 드려요.',
  },
  keyword: {
    title: '관심 키워드 등록',
    description: '입력한 키워드의 공연이 열리면 바로 알려드려요.',
  },
};

const Interest = () => {
  const { back } = useRouter();
  const type = useSearchParams().get('type') as InterestType;

  const FORM_BY_TYPE: { [K in InterestType]: () => JSX.Element } = {
    category: InterestsCategory,
    keyword: InterestsKeyword,
  };

  const renderHeader = () => {
    const text = HEADER_TEXT_BY_TYPE[type];
    if (!text) return <></>;
    return (
      <>
        <FormHeader.Title>{text.title}</FormHeader.Title>
        <FormHeader.Description>{text.description}</FormHeader.Description>
      </>
    );
  };

  const renderForms = () => {
    const Component = FORM_BY_TYPE[type];
    if (!Component) return <></>;
    return <Component />;
  };

  return (
    <>
      <TopBar leftProps={<TopBar.BackButton onClick={back} />} />
      <Wrapper>
        <InterestFormWrapper>
          <FormHeader
            css={css`
              padding-bottom: 40px;
            `}
          >
            {renderHeader()}
          </FormHeader>
          <InterestFormProvider>{renderForms()}</InterestFormProvider>
        </InterestFormWrapper>
      </Wrapper>
    </>
  );
};

export default Interest;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
`;

const InterestFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 360px;
  min-height: 498px;

  padding-top: 160px;
`;
