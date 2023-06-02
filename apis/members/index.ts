import axios from 'axios';

import {
  ReIssuanceTokenParams,
  SetPasswordParams,
  SignInParams,
  SignUpParams,
  VerificationSendParams,
  VerifyParams,
  WithdrawalParams,
} from 'apis/members/type';

const memberAxios = axios.create({
  baseURL: `/api/members`,
});

const reIssuanceToken = async (params: ReIssuanceTokenParams) => {
  try {
    const response = await memberAxios.put(`/token`, { ...params });
    console.log('response', response);
    return response.data.data;
  } catch (err) {
    console.log(err);
    throw new Error('reIssuanceToken Api 에러발생');
  }
};

const setPassword = async (params: SetPasswordParams) => {
  try {
    const response = await memberAxios.put(`/password`, { ...params });
    console.log('response', response);
    return response.data.data;
  } catch (err) {
    console.log(err);
    throw new Error('setPassword Api 에러발생');
  }
};

const verify = async (params: VerifyParams) => {
  try {
    const response = await memberAxios.post(`/verification/verify`, { ...params });
    console.log('response', response);
    return response.data.data;
  } catch (err) {
    console.log(err);
    throw new Error('verification verify Api 에러발생');
  }
};

const sendVerification = async (params: VerificationSendParams) => {
  try {
    const response = await memberAxios.post(`/verification/send`, { ...params });
    console.log('response', response);
    return response.data.data;
  } catch (err) {
    console.log(err);
    throw new Error('verification send Api 에러발생');
  }
};

const signUp = async (params: SignUpParams) => {
  try {
    const response = await memberAxios.post(`/signup`, { ...params });
    console.log('response', response);
    return response.data.data;
  } catch (err) {
    console.log(err);
    throw new Error('signup Api 에러발생');
  }
};

const signIn = async (params: SignInParams) => {
  try {
    const response = await memberAxios.post(`/login`, { ...params });
    console.log('response', response);
    return response.data.data;
  } catch (err) {
    console.log(err);
    throw new Error('signIn Api 에러발생');
  }
};

const withdrawal = async (params: WithdrawalParams) => {
  try {
    const response = await memberAxios.delete(`/`, { params: params });
    console.log('response', response);
    return response.data.data;
  } catch (err) {
    console.log(err);
    throw new Error('withdrawal Api 에러발생');
  }
};

const expireVerification = async (params: WithdrawalParams) => {
  try {
    const response = await memberAxios.delete(`/verification/expire`, { params: params });
    console.log('response', response);
    return response.data.data;
  } catch (err) {
    console.log(err);
    throw new Error('expire verification Api 에러발생');
  }
};

const memberService = {
  reIssuanceToken,
  setPassword,
  verify,
  sendVerification,
  signUp,
  signIn,
  withdrawal,
  expireVerification,
};

export default memberService;