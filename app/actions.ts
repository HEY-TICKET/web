'use server';

import { cookies } from 'next/headers';

export async function setCookieRefreshToken(refreshToken: string) {
  cookies().set({
    name: 'refreshToken',
    value: refreshToken,
    httpOnly: true,
  });
}
