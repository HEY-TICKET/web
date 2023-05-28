export type RefreshTokenParams = { email: string; refreshToken: string };

export type PasswordChangeParams = {
  email: string;
  password: string;
  verificationCode: string;
};

export type VerifyParams = {
  email: string;
  code: string;
};

export type VerificationParams = {
  email: string;
  verificationType: keyof typeof VERIFICATION_TYPE;
};

export type LoginParams = {
  email: string;
  password: string;
};

export type SignUpParams = {
  email: string;
  password: string;
  verificationCode: string;
  genres: string[];
  area: string[];
  keywords: string[];
};

const VERIFICATION_TYPE = { SIGN_UP: 'SIGN_UP', PASSWORD_CHANGE: 'PASSWORD_CHANGE' } as const;
