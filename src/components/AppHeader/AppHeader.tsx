import { useState, useEffect, useContext } from "react";
import styles from "./styles.module.css";
import { IMG, ICON } from "@configs/index";
import { Button } from "@components/Button/Button";
import { Link, useLocation } from "react-router-dom";
import { Switch, useTheme } from "@mui/material";
import { ColorModeContext } from "@utils/context";

type NavbarProps = {
  transparent?: boolean;
};

type stateType = {
  isLogin?: boolean | undefined;
};

export const AppHeader: React.FC<NavbarProps> = ({ transparent }) => {
  const [navbar, setNavbar] = useState<boolean>(false);
  const { state = {} } = useLocation<stateType>();
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
  const { isLogin } = state;
  const navbarStyles = transparent
    ? styles.navbarTransparent
    : styles.navigationWrapper;

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
    <nav className={navbar ? styles.navigationWrapperActive : navbarStyles}>
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
    </nav>
  );
};
