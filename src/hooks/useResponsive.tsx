import { useMediaQuery } from "react-responsive";

const useResponsive = () => {
  const isMobile = useMediaQuery({ maxWidth: 640 });
  const isTablet = useMediaQuery({ maxWidth: 768 });
  const isLaptop = useMediaQuery({ maxWidth: 1024 });
  const isBigScreen = useMediaQuery({ maxWidth: 1280 });

  return { isMobile, isTablet, isLaptop, isBigScreen };
};

export default useResponsive;
