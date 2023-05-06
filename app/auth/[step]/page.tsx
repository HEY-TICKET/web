import { notFound } from 'next/navigation';

import EmailLogin from 'features/auth/pages/EmailLogin';
import Login from 'features/auth/pages/Login';
import MobileAuthentication from 'features/auth/pages/MobileAuthentication';
import WritePassword from 'features/auth/pages/WritePassword';

interface PageProps {
  params: { step: string };
}

// type Step = 'login' | 'email-login' | 'mobile-authentication' | 'write-email';

const STEP = ['login', 'email-login', 'mobile-authentication', 'write-password'] as const;

const PAGE_BY_STEP: { [K in (typeof STEP)[number]]: () => JSX.Element } = {
  login: Login,
  'email-login': EmailLogin,
  'mobile-authentication': MobileAuthentication,
  'write-password': WritePassword,
};

const Page = ({ params }: PageProps) => {
  const { step } = params;

  console.log(step);

  if (!STEP.some((allowedPath) => allowedPath === step)) notFound();

  const Component = PAGE_BY_STEP[step as (typeof STEP)[number]];

  return <Component />;
};

export default Page;

/**
 * /auth/login (로그인) (시작)
 * /auth/email-login (이메일 로그인) (이메일이 있는 경우 이동 1)
 * /auth/find-email (이메일 찾기)
 * /auth/find-password (비밀번호 찾기)
 * /auth/terms-agreement (약관동의)
 * /auth/mobile-authentication (인증번호) (이메일이 없는 경우 이동 1)
 * /auth/write-email (이메일 작성) (이메일이 없는 경우 이동 2)
 */
