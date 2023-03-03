export const DEVICE_TYPE = {
  pc: 3,
  tablet: 2,
  mobile: 1,
  none: 0,
} as const;

export const DEVICE_SIZE = {
  pcMin: 1280,
  pcMax: 1440,
  tabletMin: 768,
  tabletMax: 1279,
  mobileMin: 360,
  mobileMax: 767,
} as const;
