'use client';

import { css } from 'styled-components';

import Button from 'components/common/Button/Button';
import ConnectForm from 'components/FormProvider/ConnectForm';
import { GENRE } from 'constants/perform/genre';
import { REGION } from 'constants/perform/region';
import ChipSelectBox from 'features/my/interest/ChipSelectBox';
import { InterestFormValue } from 'features/my/interest/FormProvider/InterestFormProvider';

const InterestsCategory = () => {
  return (
    <ConnectForm<InterestFormValue>>
      {({ formState: { isValid, isSubmitting } }) => (
        <>
          <ChipSelectBox<InterestFormValue>
            name={'region'}
            title={'지역'}
            description={'복수 선택 가능해요'}
            list={Object.values(REGION)}
            css={css`
              padding-bottom: 28px;
            `}
          />

          <ChipSelectBox<InterestFormValue>
            name={'genre'}
            title={'공연 장르'}
            description={'복수 선택 가능해요'}
            list={Object.values(GENRE)}
            css={css`
              padding-bottom: 60px;
            `}
          />
          <Button disabled={!isValid || isSubmitting}>다음</Button>
        </>
      )}
    </ConnectForm>
  );
};

export default InterestsCategory;
