'use client';

import styled from 'styled-components';

import Button from 'components/common/Button/Button';
import { Text } from 'components/common/Checkbox/Checkbox';
import ConnectForm from 'components/FormProvider/ConnectForm';
import ArrayInput from 'components/Input/ArrayInput';
import CheckInput from 'components/Input/CheckInput';
import { InterestFormValue } from 'features/my/interest/FormProvider/InterestFormProvider';
import STYLES from 'styles/index';

const InterestsKeyword = () => {
  return (
    <>
      <FormWrapper>
        <ArrayInput<InterestFormValue>
          name={'keyword'}
          placeholder={'공연, 출연진 입력'}
          fallback={
            <InputGuideWrapper>
              <h3>이런 키워드를 등록할 수 있어요</h3>
              <section>
                <div>
                  <span>공연</span>
                  <p>캣츠, 아기상어, 베토벤, 맘마미아, 미스터트롯 등</p>
                </div>
                <div>
                  <span>출연진</span>
                  <p>김윤아, 아이유, 박효신, 이은결, 최현우, 국립발레단 등</p>
                </div>
              </section>
            </InputGuideWrapper>
          }
        />
      </FormWrapper>

      {/* TODO: value 설정 */}
      <TermsAgreement>
        <CheckInput<InterestFormValue>
          name={'termsAgreement'}
          value={'수신'}
          text={'관심 키워드 등록 시 키워드 알림 수신(앱 푸시, 카카오톡 알림 톡)에 동의합니다.'}
        />
        <CheckInput<InterestFormValue>
          name={'termsAgreement'}
          value={'이용약관'}
          text={
            <>
              <strong>회원 이용 약관</strong>과<strong>개인정보 처리 방침</strong>을 확인하고
              동의합니다.
            </>
          }
        />
      </TermsAgreement>
      <ConnectForm<InterestFormValue>>
        {({ formState: { isValid, isSubmitting } }) => (
          <Button disabled={!isValid || isSubmitting}>가입 완료</Button>
        )}
      </ConnectForm>
    </>
  );
};

export default InterestsKeyword;

const FormWrapper = styled.div`
  display: flex;
  column-gap: 8px;

  padding-bottom: 16px;

  & > div:first-child {
    flex: 1;
  }
`;

const InputGuideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;

  padding: 12px 16px;
  background-color: ${STYLES.color.gray150};
  border-radius: 8px;

  & > h3 {
    color: ${STYLES.color.gray700};

    font-style: normal;
    font-weight: 600;
    font-size: 13px;
    line-height: 16px;
  }

  & > section {
    display: flex;
    flex-direction: column;
    row-gap: 4px;

    & > div {
      display: grid;
      grid-template-columns: 32px auto;
      column-gap: 8px;

      & > span {
        color: ${STYLES.color.gray500};

        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 14px;
      }
      & > p {
        color: ${STYLES.color.gray700};

        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
      }
    }
  }
`;

const TermsAgreement = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;

  margin: 70px 0 20px;

  & > label {
    margin: 0;
  }
  ${Text} {
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
  }
`;
