import { SVGProps } from "react";

type SVG = SVGProps<SVGSVGElement>;

const Checklist: React.FC<SVG> = (props) => {
  return (
    <svg
      width="13"
      height="11"
      viewBox="0 0 13 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4.91425 11C4.47844 11 4.04267 10.8145 3.79364 10.4436L0.307318 5.99258C-0.190741 5.37439 -0.0662044 4.50892 0.556347 4.01435C1.1789 3.51978 2.05048 3.64344 2.54854 4.26163L4.91425 7.29082L10.1438 0.55245C10.6418 -0.0657404 11.5134 -0.189405 12.136 0.305165C12.7585 0.799734 12.883 1.66521 12.385 2.2834L6.03486 10.4436C5.72358 10.7527 5.35006 11 4.91425 11Z"
        fill="white"
      />
    </svg>
  );
};

export default Checklist;
