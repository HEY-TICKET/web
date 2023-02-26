'use client';

import styled from 'styled-components';

interface EllipsisProps {
  children: string;
  line?: number;
}

const Ellipsis = ({ children, line = 2 }: EllipsisProps) => {
  return <EllipsisWrapper $line={line}>{children}</EllipsisWrapper>;
};

export default Ellipsis;

const EllipsisWrapper = styled.div<{ $line: number }>`
  overflow: hidden;
  white-space: normal;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: ${({ $line }) => $line};
  -webkit-box-orient: vertical;
  //word-break: keep-all;
`;
