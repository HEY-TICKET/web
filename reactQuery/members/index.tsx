'use client';

import { useMutation, UseMutationOptions, UseMutationResult } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import memberService from 'apis/members';
import {
  AuthenticationCode,
  RefreshTokenParams,
  SignInParams,
  SignUpParams,
  ValidationParams,
  ValidationResponse,
  VerificationSendParams,
  VerificationSendResponse,
  VerifyParams,
  VerifyResponse,
} from 'apis/members/type';

// const MEMBERS_KEYS = {
//   all: ['members'],
// } as const;

export const useMemberValidationQuery = (
  config?: UseMutationOptions<ValidationResponse, AxiosError, ValidationParams>,
): UseMutationResult<ValidationResponse, AxiosError, ValidationParams> => {
  return useMutation((params: ValidationParams) => memberService.validation(params), {
    ...config,
  });
};

export const useMemberVerificationSendQuery = (
  config?: UseMutationOptions<VerificationSendResponse, AxiosError, VerificationSendParams>,
): UseMutationResult<VerificationSendResponse, AxiosError, VerificationSendParams> => {
  return useMutation((params: VerificationSendParams) => memberService.sendVerification(params), {
    ...config,
  });
};
export const useMemberVerifyQuery = (
  config?: UseMutationOptions<VerifyResponse, AxiosError, VerifyParams>,
): UseMutationResult<VerifyResponse, AxiosError, VerifyParams> => {
  return useMutation((params: VerifyParams) => memberService.verify(params), {
    ...config,
  });
};

export const useMemberSignUpQuery = (
  config?: UseMutationOptions<AuthenticationCode, AxiosError, SignUpParams>,
): UseMutationResult<AuthenticationCode, AxiosError, SignUpParams> => {
  return useMutation((params: SignUpParams) => memberService.signUp(params), {
    ...config,
  });
};

export const useMemberSignInQuery = (
  config?: UseMutationOptions<AuthenticationCode, AxiosError, SignInParams>,
): UseMutationResult<AuthenticationCode, AxiosError, SignInParams> => {
  return useMutation((params: SignInParams) => memberService.signIn(params), {
    ...config,
  });
};

export const useMemberRefreshTokenQuery = (
  config?: UseMutationOptions<AuthenticationCode, AxiosError, RefreshTokenParams>,
): UseMutationResult<AuthenticationCode, AxiosError, RefreshTokenParams> => {
  return useMutation((params: RefreshTokenParams) => memberService.refreshToken(params), {
    ...config,
  });
};
