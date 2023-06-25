import { AreaTypes, GenreTypes } from 'types/performance';

export type RefreshTokenParams = {
  email: string;
  refreshToken: string;
};

export type SetPasswordParams = {
  email: string;
  password: string;
  verificationCode: string;
};

export type SetKeywordsParams = {
  email: string;
  keywords: string[];
};

export type SetCategoriesParams = {
  email: string;
  genres: string[];
  areas: string[];
};

export type ValidationParams = {
  email: string;
};

export type ValidationResponse = boolean;

export type VerifyParams = {
  email: string;
  code: string;
};

export type VerifyResponse = boolean;

export type VerificationSendParams = {
  email: string;
  verificationType: keyof typeof VERIFICATION_TYPE;
};
export type VerificationSendResponse = string;

export type SignInParams = {
  email: string;
  password: string;
};

export type LikeParams = {
  email: string;
  performanceId: string;
};

export type WithdrawalParams = {
  email: string;
  password: string;
};

export type SignUpParams = {
  email: string;
  password: string;
  genres?: GenreTypes[];
  areas?: AreaTypes[];
  keywords?: string[];
  verificationCode: string;
  keywordPush: boolean;
};

export type GetUserParams = {
  id: string;
};

export type AuthenticationCode = {
  grantType: string;
  accessToken: string;
  refreshToken: string;
};

const VERIFICATION_TYPE = { SIGN_UP: 'SIGN_UP', PASSWORD_CHANGE: 'PASSWORD_CHANGE' } as const;
