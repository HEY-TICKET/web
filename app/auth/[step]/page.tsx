import EmailSignIn from 'features/auth/_components/EmailSignIn';
import FindPassword from 'features/auth/_components/FindPassword';
import MobileAuthentication from 'features/auth/_components/MobileAuthentication';
import SignIn from 'features/auth/_components/SignIn';
import SignUp from 'features/auth/_components/SignUp';
import WritePassword from 'features/auth/_components/WritePassword';

interface PageProps {
  params: { step: string };
}

const STEP = [
  'signIn',
  'email-signIn',
  'signUp',
  'mobile-authentication',
  'write-password',
  'find-password',
] as const;

const PAGE_BY_STEP: { [K in (typeof STEP)[number]]: () => JSX.Element } = {
  signIn: SignIn,
  'email-signIn': EmailSignIn,
  'mobile-authentication': MobileAuthentication,
  signUp: SignUp,
  'write-password': WritePassword,
  'find-password': FindPassword,
};

const Page = ({ params }: PageProps) => {
  const { step } = params;

  console.log(step);

  // if (!STEP.some((allowedPath) => allowedPath === step)) notFound();

  const Component = PAGE_BY_STEP[step as (typeof STEP)[number]];

  return <Component />;
};

export default Page;

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  return Object.keys(PAGE_BY_STEP).map((step) => ({
    step: step,
  }));
}

/**
 * /auth/signIn (로그인) (시작)
 * /auth/email-signIn (이메일 로그인) (이메일이 있는 경우 이동 1)
 * /auth/find-email (이메일 찾기)
 * /auth/find-password (비밀번호 찾기)
 * /auth/terms-agreement (약관동의)
 * /auth/mobile-authentication (인증번호) (이메일이 없는 경우 이동 1)
 * /auth/write-email (이메일 작성) (이메일이 없는 경우 이동 2)
 */
