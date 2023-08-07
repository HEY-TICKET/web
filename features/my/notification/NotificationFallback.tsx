import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import styled, { css } from 'styled-components';

import Button from 'components/common/Button/Button';
import InputComponents from 'components/Input/InputComponents';
import STYLES from 'styles/index';

type NotificationFallbackFormValues = {
  keyword: string;
};

const NotificationFallback = () => {
  const methods = useForm<NotificationFallbackFormValues>({
    mode: 'onTouched',
    defaultValues: { keyword: '' },
  });

  const { handleSubmit } = methods;

  const onValidSubmit: SubmitHandler<NotificationFallbackFormValues> = (data) => {
    console.log(data);
  };

  return (
    <Wrapper>
      <Container>
        <Title>등록된 키워드 알림이 없어요</Title>
        <Description>
          관심 키워드를 등록하고 공연 알림 소식 받아보세요
          <br />
          (실시간 알림은 App에서 받을 수 있어요)
        </Description>
        <FormProvider {...methods}>
          <Form onSubmit={handleSubmit(onValidSubmit)}>
            <InputComponents<NotificationFallbackFormValues>
              name={'keyword'}
              disabled={false}
              css={css`
                width: 100%;
              `}
            >
              <InputComponents.Input<NotificationFallbackFormValues>
                name={'keyword'}
                placeholder={'공연, 출연진 입력'}
              />
            </InputComponents>
            <Button>등록</Button>
          </Form>
        </FormProvider>
      </Container>
    </Wrapper>
  );
};

export default NotificationFallback;

const Wrapper = styled.div`
  display: flex;

  justify-content: center;

  margin-top: 46px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 328px;

  align-items: center;
`;

const Title = styled.span`
  text-align: center;
  color: ${STYLES.color.gray900};

  margin-bottom: 4px;

  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const Description = styled.p`
  text-align: center;
  color: ${STYLES.color.gray500};

  margin-bottom: 24px;

  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;

const Form = styled.form`
  display: flex;
  column-gap: 8px;

  width: 100%;

  button {
    width: 84px;
    height: 44px;
  }
`;
