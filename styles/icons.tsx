'use client';

type IconProps = {
  size?: number;
};

export const ArrowRight = ({ size = 20 }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
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

export const SearchIcon = ({ size = 20 }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
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

export const HomeIcon = ({ size = 20 }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
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

export const MyIcon = ({ size = 20 }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
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

export const CategoryIcon = ({ size = 20 }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M4 5.7998H20" stroke="#000000" strokeWidth="2" strokeLinecap="square" />
    <path d="M4 12H20" stroke="#000000" strokeWidth="2" strokeLinecap="square" />
    <path d="M4 18.1997H20" stroke="#000000" strokeWidth="2" strokeLinecap="square" />
  </svg>
);

export const CloseIcon = ({ size = 20 }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
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

export const FilterIcon = ({ size = 20 }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
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

export const SortIcon = ({ size = 20 }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
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

export const ResetIcon = ({ size = 20 }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
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

export const CheckIcon = ({ size = 20 }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox={`0 0 ${size} ${size}`}
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

export const CheckLineIcon = ({ size = 16 }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
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
