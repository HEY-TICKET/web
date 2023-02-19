import { css } from 'styled-components';

export const ICON_FILTER = {
  gray100: css`
    filter: invert(99%) sepia(1%) saturate(0%) hue-rotate(295deg) brightness(105%) contrast(98%);
  `,
  gray200: css`
    filter: invert(100%) sepia(3%) saturate(856%) hue-rotate(204deg) brightness(113%) contrast(87%);
  `,
  gray300: css`
    filter: invert(88%) sepia(0%) saturate(0%) hue-rotate(168deg) brightness(107%) contrast(83%);
  `,
  gray350: css`
    filter: invert(78%) sepia(30%) saturate(0%) hue-rotate(233deg) brightness(101%) contrast(84%);
  `,
  gray400: css`
    filter: invert(83%) sepia(0%) saturate(9%) hue-rotate(138deg) brightness(91%) contrast(85%);
  `,
  gray500: css`
    filter: invert(58%) sepia(46%) saturate(0%) hue-rotate(261deg) brightness(92%) contrast(96%);
  `,
  gray600: css`
    filter: invert(51%) sepia(0%) saturate(3%) hue-rotate(161deg) brightness(90%) contrast(88%);
  `,
  gray700: css`
    filter: invert(31%) sepia(0%) saturate(288%) hue-rotate(159deg) brightness(98%) contrast(86%);
  `,
  gray800: css`
    filter: invert(14%) sepia(19%) saturate(0%) hue-rotate(189deg) brightness(101%) contrast(94%);
  `,
  gray900: css`
    filter: invert(0%) sepia(1%) saturate(3642%) hue-rotate(328deg) brightness(103%) contrast(87%);
  `,

  red: css`
    filter: invert(40%) sepia(76%) saturate(4729%) hue-rotate(334deg) brightness(106%)
      contrast(113%);
  `,

  orange: css`
    filter: invert(60%) sepia(91%) saturate(1188%) hue-rotate(339deg) brightness(104%) contrast(97%);
  `,

  green: css`
    filter: invert(51%) sepia(91%) saturate(1117%) hue-rotate(102deg) brightness(96%) contrast(95%);
  `,
};
