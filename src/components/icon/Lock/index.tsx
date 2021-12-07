import { SVGProps } from "react";

type SVG = SVGProps<SVGSVGElement>;

const Lock: React.FC<SVG> = (props) => {
  return (
    <svg
      width="205"
      height="205"
      viewBox="0 0 205 205"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M102.5 205C159.109 205 205 159.109 205 102.5C205 45.8908 159.109 0 102.5 0C45.8908 0 0 45.8908 0 102.5C0 159.109 45.8908 205 102.5 205Z"
        fill="#46505C"
      />
      <path
        d="M204.901 106.869L130.956 32.8729C123.717 25.4861 113.634 20.896 102.499 20.896C80.5198 20.896 62.6384 38.7774 62.6384 60.7569V88.4147C54.3479 90.2909 48.1074 97.7358 48.1074 106.572V156.277C48.1074 161.204 50.0473 165.7 53.2004 169.038L88.2402 204.008C92.9011 204.657 97.6602 205 102.5 205C157.644 205 202.611 161.451 204.901 106.869Z"
        fill="#1F2A36"
      />
      <path
        d="M77.2113 60.804C77.2113 46.86 88.5556 35.5158 102.5 35.5158C116.444 35.5158 127.788 46.86 127.788 60.804V88.5863H142.36V60.7564C142.36 38.777 124.479 20.8955 102.5 20.8955C80.5201 20.8955 62.6387 38.777 62.6387 60.7564V88.5863H77.2113V60.804Z"
        fill="white"
      />
      <path
        d="M142.359 60.7554V88.5865H127.789V60.8034C127.789 46.8618 116.446 35.5147 102.5 35.5147V20.8965C124.477 20.8965 142.359 38.7779 142.359 60.7554Z"
        fill="#E0E0E2"
      />
      <path
        d="M138.273 174.895H66.7256C56.4856 174.895 48.1074 166.517 48.1074 156.277V106.572C48.1074 96.332 56.4856 87.9539 66.7256 87.9539H138.273C148.513 87.9539 156.891 96.332 156.891 106.572V156.277C156.891 166.517 148.513 174.895 138.273 174.895Z"
        fill="#5E50A1"
      />
      <path
        d="M156.893 106.572V156.277C156.893 166.519 148.513 174.895 138.275 174.895H102.5V87.9539H138.275C139.676 87.9539 141.046 88.11 142.359 88.4103C150.651 90.2801 156.893 97.7314 156.893 106.572Z"
        fill="#51448D"
      />
      <path
        d="M117.701 121.634C117.701 113.239 110.895 106.433 102.5 106.433C94.1043 106.433 87.2988 113.239 87.2988 121.634C87.2988 127.444 90.5596 132.491 95.3503 135.049V149.266C95.3503 153.198 98.5674 156.415 102.5 156.415C106.432 156.415 109.649 153.198 109.649 149.266V135.049C114.44 132.491 117.701 127.444 117.701 121.634Z"
        fill="white"
      />
      <path
        d="M117.699 121.635C117.699 127.444 114.44 132.489 109.651 135.048V149.266C109.651 153.197 106.432 156.417 102.5 156.417V106.432C110.896 106.432 117.699 113.239 117.699 121.635Z"
        fill="#ACACAC"
      />
    </svg>
  );
};

export default Lock;
