import { useState, useEffect, useContext } from "react";
import styles from "./styles.module.css";
import { IMG, ICON } from "@configs/index";
import { Button } from "@components/Button/Button";
import { Link, useLocation } from "react-router-dom";
import { Switch, useTheme, Box, styled } from "@mui/material";
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
`
);

export const AppHeader: React.FC<NavbarProps> = () => {
  const [navbar, setNavbar] = useState<boolean>(false);
  const { state = {} } = useLocation<stateType>();
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
  const { isLogin } = state;
  // const navbarStyles = transparent
  //   ? styles.navbarTransparent
  //   : styles.navigationWrapper;

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", changeBackground);

    return () => {
      document.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <Nav component="nav">
      <div className={styles.image}>
        <img alt="logo" src={IMG.LOGO} />
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Switch
          checked={theme.palette.mode === "dark"}
          onClick={colorMode.toggleColorMode}
        />
        {!isLogin ? (
          <div className={styles.buttonWrapper}>
            <div>
              <Link className="text-link" to="/signin">
                <Button color="primary" label="Masuk" variant="outlined" />
              </Link>
            </div>
            <div className={navbar ? styles.btnActive : ""}>
              <Link className="text-link" to="/signup">
                <Button color="primary" label="Daftar" />
              </Link>
            </div>
          </div>
        ) : (
          <div className={styles.menu}>
            <div>
              <img alt="bell icon" src={ICON.BELL} />
            </div>
            <div>
              <img alt="mail icon" src={ICON.MAIL} />
            </div>
            <div>
              <img
                alt="user"
                className={styles.userImg}
                src="https://source.unsplash.com/random"
              />
            </div>
          </div>
        )}
      </div>
    </Nav>
  );
};
