'use client';

import { HTMLAttributes } from 'react';

export const ArrowRight = ({ className }: HTMLAttributes<SVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 19L16 12L9 5"
      stroke="#000000"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const SearchIcon = ({ className }: HTMLAttributes<SVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="10" cy="10" r="7" stroke="#000000" strokeWidth="1.5" />
    <path
      d="M14.8672 15.8672L19.9999 20.9999"
      stroke="#000000"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export const HomeIcon = ({ className }: HTMLAttributes<SVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.5 10.1053L12.0002 3L20.5 10.1053L20.4998 20.9998H14.0775V15.6001H9.92192V20.9998L3.5 21V10.1053Z"
      fill="#000000"
    />
    <path
      d="M12.0002 3L12.4812 2.42457C12.2027 2.19181 11.7976 2.19181 11.5191 2.42456L12.0002 3ZM3.5 10.1053L3.01899 9.52989C2.84852 9.67239 2.75 9.88314 2.75 10.1053H3.5ZM3.5 21H2.75V21.75L3.50002 21.75L3.5 21ZM9.92192 20.9998L9.92193 21.7498L10.6719 21.7498V20.9998H9.92192ZM9.92192 15.6001V14.8501C9.5077 14.8501 9.17192 15.1859 9.17192 15.6001H9.92192ZM14.0775 15.6001H14.8275C14.8275 15.1859 14.4917 14.8501 14.0775 14.8501V15.6001ZM14.0775 20.9998H13.3275V21.7498H14.0775V20.9998ZM20.4998 20.9998V21.7498H21.2498L21.2498 20.9999L20.4998 20.9998ZM20.5 10.1053L21.25 10.1053C21.25 9.88315 21.1515 9.6724 20.981 9.5299L20.5 10.1053ZM11.5191 2.42456L3.01899 9.52989L3.98101 10.6808L12.4812 3.57544L11.5191 2.42456ZM2.75 10.1053V21H4.25V10.1053H2.75ZM3.50002 21.75L9.92193 21.7498L9.9219 20.2498L3.49998 20.25L3.50002 21.75ZM10.6719 20.9998V15.6001H9.17192V20.9998H10.6719ZM9.92192 16.3501H14.0775V14.8501H9.92192V16.3501ZM13.3275 15.6001V20.9998H14.8275V15.6001H13.3275ZM14.0775 21.7498H20.4998V20.2498H14.0775V21.7498ZM21.2498 20.9999L21.25 10.1053L19.75 10.1053L19.7498 20.9998L21.2498 20.9999ZM20.981 9.5299L12.4812 2.42457L11.5191 3.57543L20.019 10.6808L20.981 9.5299Z"
      fill="#000000"
    />
  </svg>
);

export const UserIcon = ({ className }: HTMLAttributes<SVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12.2757" cy="7.17804" r="3.67804" fill="#000000" stroke="#000000" />
    <path
      d="M4 20.4696V17.8463C4 15.2548 6.10079 13.1553 8.69102 13.1553H15.309C17.9004 13.1553 20 15.2561 20 17.8463V20.4696"
      fill="#000000"
    />
    <path
      d="M4 20.4696H3.25C3.25 20.8838 3.58579 21.2196 4 21.2196V20.4696ZM20 20.4696V21.2196C20.4142 21.2196 20.75 20.8838 20.75 20.4696H20ZM4.75 20.4696V17.8463H3.25V20.4696H4.75ZM4.75 17.8463C4.75 15.6692 6.51487 13.9053 8.69102 13.9053V12.4053C5.6867 12.4053 3.25 14.8405 3.25 17.8463H4.75ZM8.69102 13.9053H15.309V12.4053H8.69102V13.9053ZM15.309 13.9053C17.4861 13.9053 19.25 15.6701 19.25 17.8463H20.75C20.75 14.842 18.3148 12.4053 15.309 12.4053V13.9053ZM19.25 17.8463V20.4696H20.75V17.8463H19.25ZM4 21.2196H20V19.7196H4V21.2196Z"
      fill="#000000"
    />
  </svg>
);

export const CategoryIcon = ({ className }: HTMLAttributes<SVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M4 5.7998H20" stroke="#000000" strokeWidth="2" strokeLinecap="square" />
    <path d="M4 12H20" stroke="#000000" strokeWidth="2" strokeLinecap="square" />
    <path d="M4 18.1997H20" stroke="#000000" strokeWidth="2" strokeLinecap="square" />
  </svg>
);

export const CloseIcon = ({ className }: HTMLAttributes<SVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 5L19 19"
      stroke="#000000"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19 5L5 19"
      stroke="#000000"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const FilterIcon = ({ className }: HTMLAttributes<SVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.75 17.75H12.5M19.25 17.75H17"
      stroke="#000000"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M17 17.75C17 18.9926 15.9926 20 14.75 20C13.5074 20 12.5 18.9926 12.5 17.75C12.5 16.5074 13.5074 15.5 14.75 15.5C15.9926 15.5 17 16.5074 17 17.75Z"
      stroke="#000000"
      strokeWidth="1.5"
    />
    <line
      x1="4.75"
      y1="12.25"
      x2="19.25"
      y2="12.25"
      stroke="#000000"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M4.75 6.75H7M19.25 6.75H11.5"
      stroke="#000000"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <circle cx="9.25" cy="6.5" r="2.25" stroke="#000000" strokeWidth="1.5" />
  </svg>
);

export const SortIcon = ({ className }: HTMLAttributes<SVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.00098 5.40088V18.6009L5.40098 15.0009"
      stroke="#000000"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.001 18.6011V5.40107L18.601 9.00107"
      stroke="#000000"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ResetIcon = ({ className }: HTMLAttributes<SVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.7459 6.96872C9.71808 6.45735 10.8252 6.16797 12 6.16797C15.866 6.16797 19 9.30198 19 13.168C19 17.034 15.866 20.168 12 20.168C8.13401 20.168 5 17.034 5 13.168C5 12.5952 5.0688 12.0384 5.19858 11.5056"
      stroke="#000000"
      strokeWidth="1.5"
      strokeLinecap="square"
      strokeLinejoin="round"
    />
    <path
      d="M9.72266 4L7.79308 7.39511L11.4805 8.68081"
      stroke="#000000"
      strokeWidth="1.5"
      strokeLinecap="square"
    />
  </svg>
);

export const CheckIcon = ({ className }: HTMLAttributes<SVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.5 11.75L9.85714 17.1071L19.5 8"
      stroke="#000000"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const CheckLineIcon = ({ className }: HTMLAttributes<SVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 7.8335L6.57143 11.4049L13 5.3335"
      stroke="#000000"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ShareIcon = ({ className }: HTMLAttributes<SVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M15 8L12 5L9 8" stroke="#000000" strokeWidth="1.5" strokeLinecap="square" />
    <path
      d="M12 15.0002L12 6.5"
      stroke="#000000"
      strokeWidth="1.5"
      strokeLinecap="square"
      strokeLinejoin="round"
    />
    <path
      d="M7 11.5C5.63317 11.5 4.5 11.5 4.5 11.5V20.5H19.5V11.5H17"
      stroke="#000000"
      strokeWidth="1.5"
      strokeLinecap="square"
    />
  </svg>
);

export const HeartLineIcon = ({ className }: HTMLAttributes<SVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20.3368 7.89339C20.0694 6.88432 19.4844 5.96224 18.5986 5.31852C16.6098 3.8832 13.8939 4.38774 12.4816 6.42328L11.997 7.17138L11.5123 6.42328C10.1084 4.38774 7.39249 3.8832 5.40363 5.31852C4.50948 5.96224 3.92452 6.88432 3.65711 7.89339C3.48163 8.5893 3.4482 9.32 3.5819 10.0333C3.5819 10.0333 3.73232 11.1294 5.12787 12.7735L11.997 20.5556L18.866 12.7735C20.2616 11.1207 20.412 10.0333 20.412 10.0333C20.5541 9.32 20.5206 8.5893 20.3368 7.89339Z"
      stroke="#000000"
      strokeWidth="1.5"
    />
  </svg>
);

export const HeartIcon = ({ className }: HTMLAttributes<SVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20.3368 7.89339C20.0694 6.88432 19.4844 5.96224 18.5986 5.31852C16.6098 3.8832 13.8939 4.38774 12.4816 6.42328L11.997 7.17138L11.5123 6.42328C10.1084 4.38774 7.39249 3.8832 5.40363 5.31852C4.50948 5.96224 3.92452 6.88432 3.65711 7.89339C3.48163 8.5893 3.4482 9.32 3.5819 10.0333C3.5819 10.0333 3.73232 11.1294 5.12787 12.7735L11.997 20.5556L18.866 12.7735C20.2616 11.1207 20.412 10.0333 20.412 10.0333C20.5541 9.32 20.5206 8.5893 20.3368 7.89339Z"
      fill="#000000"
      stroke="#000000"
      strokeWidth="1.5"
    />
  </svg>
);

export const CouponIcon = ({ className }: HTMLAttributes<SVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21 18.6191H4V14.5768C5.17078 14.5768 6.12797 13.675 6.12797 12.5596C6.12797 11.4442 5.17869 10.5423 4 10.5423V6.5H21V18.6191Z"
      stroke="#000000"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinejoin="round"
    />
    <path
      d="M10.5 6.5L10.5 9.5M10.5 18.5L10.5 15.5M10.5 11L10.5 14"
      stroke="#000000"
      strokeWidth="1.5"
    />
  </svg>
);

export const BellIcon = ({ className }: HTMLAttributes<SVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox={`0 0 28 28`}
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21.1965 10.927V16.0358L22.1666 20.2964H5.83325L6.81793 16.0075V10.927C6.81793 7.02028 10.0387 3.84961 14.0072 3.84961C17.9757 3.84961 21.1965 7.02028 21.1965 10.927Z"
      stroke="#000000"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinejoin="round"
    />
    <path
      d="M17.3774 20.2988C17.3774 22.1781 15.8396 23.7016 13.9426 23.7016C12.0456 23.7016 10.5078 22.1781 10.5078 20.2988"
      stroke="#000000"
      strokeWidth="1.5"
    />
  </svg>
);
