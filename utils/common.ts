import { css } from 'styled-components';

/**
 * @summary text overflow 시에 ellipsis('...')를 처리합니다.
 * @param args maxWidth를 인자로 전달할 경우 singleline, lineCount와 lineHeight를 인자로 전달할 시 multiline으로 처리합니다.
 */
export const textOverflowEllipsis = (
  args: { lineCount: number; lineHeight?: number } | { maxWidth: number },
) => css`
  overflow: hidden;

  ${'maxWidth' in args
    ? css`
        max-width: ${args.maxWidth}px;
        white-space: nowrap;
        text-overflow: ellipsis;
      `
    : css`
        display: -webkit-box;
        -webkit-line-clamp: ${args.lineCount};
        -webkit-box-orient: vertical;
        line-height: ${args?.lineHeight ? `${args.lineHeight}px` : 'unset'};
        word-break: break-all;
        white-space: pre-wrap;
      `}
`;
