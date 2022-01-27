import { useTheme, useMediaQuery } from "@mui/material";

const useResponsive = () => {
  const theme = useTheme();

  const isMobileDevice = useMediaQuery(theme.breakpoints.down("sm"));

  const isTabletDevice = useMediaQuery(theme.breakpoints.down("md"));

  const isLaptop = useMediaQuery(theme.breakpoints.down("xl"));

  const isDesktop = useMediaQuery(theme.breakpoints.down("xl"));

  const isBigScreen = useMediaQuery(theme.breakpoints.only("xl"));

  return { isMobileDevice, isTabletDevice, isLaptop, isBigScreen, isDesktop };
};

export default useResponsive;
