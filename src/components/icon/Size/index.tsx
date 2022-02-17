import { SVGProps } from "react";

type SVG = SVGProps<SVGSVGElement>;

const Size: React.FC<SVG> = (props) => {
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
        d="M29.913 0H2.08696C0.936325 0 0 0.936325 0 2.08696V29.913C0 31.0637 0.936325 32 2.08696 32H29.913C31.0637 32 32 31.0637 32 29.913V2.08696C32 0.936325 31.0636 0 29.913 0ZM30.6087 29.913C30.6087 30.2957 30.2956 30.6087 29.913 30.6087H2.08696C1.70432 30.6087 1.39128 30.2957 1.39128 29.913V2.08696C1.39128 1.70432 1.70432 1.39128 2.08696 1.39128H29.913C30.2957 1.39128 30.6087 1.70432 30.6087 2.08696V29.913H30.6087Z"
        fill="#9EA0A5"
      />
    </svg>
  );
};

export default Size;
