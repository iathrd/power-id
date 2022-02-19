import { SVGProps } from "react";

type SVG = SVGProps<SVGSVGElement>;

const Pencil: React.FC<SVG> = (props) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0 12.6663V16.0001H3.33379L13.1707 6.16314L9.8369 2.82935L0 12.6663Z"
        fill="#9B9B9B"
      />
      <path
        d="M15.74 2.33586L13.6642 0.260036C13.3174 -0.0866786 12.7529 -0.0866786 12.4062 0.260036L10.7793 1.88693L14.1131 5.22072L15.74 3.59383C16.0867 3.24711 16.0867 2.68258 15.74 2.33586Z"
        fill="#9B9B9B"
      />
    </svg>
  );
};

export default Pencil;