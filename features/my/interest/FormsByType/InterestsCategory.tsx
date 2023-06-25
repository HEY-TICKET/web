'use client';

import { css } from 'styled-components';

import Button from 'components/common/Button/Button';
import ConnectForm from 'components/FormProvider/ConnectForm';
import { AREA_LIST_MAP, GENRE_LIST_MAP } from 'constants/performance/common';
import ChipSelectBox from 'features/my/interest/ChipSelectBox';
import { InterestFormValue } from 'features/my/interest/FormProvider/InterestFormProvider';

const InterestsCategory = () => {
  return (
    <ConnectForm<InterestFormValue>>
      {({ formState: { isValid, isSubmitting } }) => (
        <>
          <ChipSelectBox<InterestFormValue>
            name={'areas'}
            title={'지역'}
            description={'복수 선택 가능해요'}
            list={AREA_LIST_MAP}
            css={css`
              padding-bottom: 28px;
            `}
          />

          <ChipSelectBox<InterestFormValue>
            name={'genres'}
            title={'공연 장르'}
            description={'복수 선택 가능해요'}
            list={GENRE_LIST_MAP}
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
