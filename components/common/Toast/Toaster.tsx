'use client';

import { Toaster } from 'react-hot-toast';
import styled from 'styled-components';

const Toast = () => {
  return (
    <ToastLayout>
      <Toaster />
    </ToastLayout>
  );
};

export default Toast;

const ToastLayout = styled.div`
  & > div {
    & > div {
      & > div {
        padding: 0 !important;
        & > div {
          margin: 0 !important;
        }
      }
    }
  }
`;
