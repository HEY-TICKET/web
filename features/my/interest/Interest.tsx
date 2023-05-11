'use client';

import { useRouter } from 'next/navigation';
import styled, { css } from 'styled-components';

import Button from 'components/common/Button/Button';
import ConnectForm from 'components/FormProvider/ConnectForm';
import FormHeader from 'components/FormProvider/FormHeader';
import { GENRE } from 'constants/perform/genre';
import { REGION } from 'constants/perform/region';
import ChipSelectBox from 'features/my/interest/ChipSelectBox';
import InterestFormProvider, {
  InterestFormValue,
} from 'features/my/interest/FormProvider/InterestFormProvider';
import * as Styles from 'features/my/interest/Interest.styles';
import { ArrowRight } from 'styles/icons';

const Interest = () => {
  const { back } = useRouter();

  return (
    <>
      <Styles.Header>
        <button onClick={back}>
          <ArrowRight size={28} />
        </button>
      </Styles.Header>
      <Wrapper>
        <InterestFormWrapper>
          <FormHeader>
            <FormHeader.Title>관심 카테고리 선택</FormHeader.Title>
            <FormHeader.Description>
              선택한 카테고리 기준으로 공연을 추천해 드려요.
            </FormHeader.Description>
          </FormHeader>
          <InterestFormProvider>
            <ConnectForm<InterestFormValue>>
              {({ formState: { isValid, isSubmitting } }) => (
                <>
                  <ChipSelectBox<InterestFormValue>
                    name={'region'}
                    title={'지역'}
                    description={'복수 선택 가능해요'}
                    list={Object.values(REGION)}
                    css={css`
                      padding-top: 40px;
                    `}
                  />

                  <ChipSelectBox<InterestFormValue>
                    name={'genre'}
                    title={'공연 장르'}
                    description={'복수 선택 가능해요'}
                    list={Object.values(GENRE)}
                    css={css`
                      padding: 28px 0 60px;
                    `}
                  />
                  <Button disabled={!isValid || isSubmitting}>다음</Button>
                </>
              )}
            </ConnectForm>
          </InterestFormProvider>
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
  padding-top: 56px;
`;

const InterestFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 360px;
  min-height: 498px;

  padding-top: 160px;
`;
