import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./styles.module.css";
import { IMG, ICON } from "@configs/index";
import { Button } from "@components/Button/Button";
import { Switch, useTheme, Box, styled } from "@mui/material";
import Flex from "@components/Wrapper/Flex";
import { ColorModeContext } from "@utils/context";

type NavbarProps = {
  transparent?: boolean;
};

type stateType = {
  isLogin?: boolean | undefined;
};

const Nav = styled(Box)(
  ({ theme }) => `
  height: 6.25rem;
  background-color: ${theme.palette.background.paper};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-inline: 9.375rem;
  position: sticky;
  top: 0;
  z-index: 999;
  ${theme.breakpoints.down("md")} {
    padding-inline: 2.25rem;
  }
`
);

const Avatar = styled("img")`
  width: 32px;
  height: 32px;
  object-fit: cover;
  border-radius: 50%;
  margin-left: 50px;
`;

export const AppHeader: React.FC<NavbarProps> = () => {
  // const [_navbar, setNavbar] = useState<boolean>(false);
  const { state = {} } = useLocation<stateType>();
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
  const { isLogin } = state;
  // const navbarStyles = transparent
  //   ? styles.navbarTransparent
  //   : styles.navigationWrapper;

  // const changeBackground = () => {
  //   if (window.scrollY >= 80) {
  //     setNavbar(true);
  //   } else {
  //     setNavbar(false);
  //   }
  // };

  // useEffect(() => {
  //   document.addEventListener("scroll", changeBackground);

  //   return () => {
  //     document.removeEventListener("scroll", changeBackground);
  //   };
  // }, []);

  return (
    <Nav component="nav">
      <div className={styles.image}>
        <img
          alt="logo"
          src={theme.palette.mode === "light" ? IMG.LOGO : IMG.LOGO_DARK}
        />
      </div>
      <Flex>
        <Switch
          checked={theme.palette.mode === "dark"}
          onClick={colorMode.toggleColorMode}
        />
        {!isLogin ? (
          <Flex>
            <Box sx={{ marginRight: "1rem" }}>
              <Link className="text-link" to="/signin">
                <Button
                  color="primary"
                  label="Masuk"
                  size="small"
                  variant="outlined"
                />
              </Link>
            </Box>
            <Box>
              <Link className="text-link" to="/signup">
                <Button color="primary" label="Daftar" size="small" />
              </Link>
            </Box>
          </Flex>
        ) : (
          <Flex alignItems="center">
            <Box>
              <img alt="bell icon" src={ICON.BELL} />
            </Box>
            <Box sx={{ marginLeft: "40px" }}>
              <img alt="mail icon" src={ICON.MAIL} />
            </Box>
            <Box>
              <Avatar alt="avatar" src="https://source.unsplash.com/random" />
            </Box>
          </Flex>
        )}
      </Flex>
    </Nav>
  );
};
