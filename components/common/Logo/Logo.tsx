'use client';

import Link from 'next/link';
import styled from 'styled-components';

import STYLES from 'styles/index';

const Logo = () => {
  return <LogoStyle href={'/'}>HEY TICKET</LogoStyle>;
};

export default Logo;

const LogoStyle = styled(Link)`
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  line-height: 130%;
  color: ${STYLES.color.gray800};
`;
