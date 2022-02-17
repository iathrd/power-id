import { SVGProps } from "react";

type SVG = SVGProps<SVGSVGElement>;

const EmptyImage: React.FC<SVG> = (props) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M29 0H3C1.34312 0 0 1.34312 0 3V29C0 30.6569 1.34312 32 3 32H29C30.6569 32 32 30.6569 32 29V3C32 1.34312 30.6569 0 29 0ZM30 29C30 29.5523 29.5523 30 29 30H3C2.44769 30 2 29.5523 2 29V3C2 2.44769 2.44769 2 3 2H29C29.5523 2 30 2.44769 30 3V29Z"
        fill="#9EA0A5"
      />
    </svg>
  );
};

export default EmptyImage;
