'use client';

import { useEffect, useState } from 'react';

import { useFormContext } from 'react-hook-form';

import Button from 'components/common/Button/Button';
import Logo from 'components/common/Logo/Logo';
import FormHeader from 'components/FormProvider/FormHeader';
import Input from 'components/Input/Input';
import AuthenticationNumberInput from 'features/signIn/Input/AuthenticationNumberInput';
import PasswordInput from 'features/signIn/Input/PasswordInput';
import * as Styles from 'features/signIn/SignIn.styles';
import { SignInFormValues, SignInStep } from 'features/signIn/SignInFormProvider';

const SignInFormContentsByStep = () => {
  const [currentStep, setCurrentStep] = useState<SignInStep>('email');
  const methods = useFormContext<SignInFormValues>();
  const {
    formState: { isSubmitting, submitCount, isValid },
    getValues,
    setValue,
  } = methods;

  const initializeAuthenticationNumber = () => {
    setValue('authenticationNumber', '');
  };

  const renderHeader = () => {
    switch (currentStep) {
      case 'email': {
        return <Logo />;
      }
      case 'password': {
        return <Logo />;
      }
      case 'authenticationNumber': {
        return (
          <>
            <FormHeader.Title>인증 메일이 발송되었어요</FormHeader.Title>
            <FormHeader.Description>
              입력하신 이메일 주소로 인증 코드가 발송되었어요.
              <br />
              인증 코드를 입력해 주세요.
            </FormHeader.Description>
          </>
        );
      }
      case 'initialPassword': {
        return (
          <>
            <FormHeader.Title>비밀번호를 입력해 주세요</FormHeader.Title>
          </>
        );
      }
      default: {
        return <Logo />;
      }
    }
  };

  const renderInputs = () => {
    switch (currentStep) {
      case 'email': {
        return <Input<SignInFormValues> autoFocus name={'email'} label={'이메일 주소'} />;
      }
      case 'password': {
        return (
          <>
            <Input<SignInFormValues> autoFocus name={'email'} label={'이메일 주소'} />
            <PasswordInput<SignInFormValues> name={'password'} />
          </>
        );
      }
      case 'authenticationNumber': {
        return (
          <>
            <Input<SignInFormValues> autoFocus name={'email'} label={'이메일 주소'} />
            <AuthenticationNumberInput<SignInFormValues>
              name={'authenticationNumber'}
              initializeAuthenticationNumber={initializeAuthenticationNumber}
            />
          </>
        );
      }
      case 'initialPassword': {
        return <PasswordInput<SignInFormValues> name={'password'} />;
      }
      default: {
        return <></>;
      }
    }
  };

  const renderSubmitButton = () => {
    const buttonText = () => {
      switch (currentStep) {
        case 'email': {
          return '이메일로 계속하기';
        }
        case 'password': {
          return '로그인';
        }
        case 'authenticationNumber': {
          return '다음';
        }
        case 'initialPassword': {
          return '완료';
        }
        default: {
          return '';
        }
      }
    };

    return <Button disabled={!isValid || isSubmitting}>{buttonText()}</Button>;
  };

  useEffect(() => {
    const currentStep = getValues('signInStep');
    console.log('currentStep', currentStep);
    setCurrentStep(currentStep);
  }, [getValues, submitCount]);

  return (
    <Styles.FormContentsWrapper>
      <FormHeader>{renderHeader()}</FormHeader>
      <Styles.InputWrapper>{renderInputs()}</Styles.InputWrapper>
      <Styles.ButtonWrapper>{renderSubmitButton()}</Styles.ButtonWrapper>
    </Styles.FormContentsWrapper>
  );
};

export default SignInFormContentsByStep;
