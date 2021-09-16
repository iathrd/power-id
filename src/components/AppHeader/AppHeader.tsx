import { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { IMG, ICON } from "@configs/index";
import { Button } from "@components/Button/Button";
import { Link, useLocation } from "react-router-dom";

type NavbarProps = {
  transparent?: boolean;
};

type stateType = {
  isLogin?: boolean | undefined;
};

export const AppHeader: React.FC<NavbarProps> = ({ transparent }) => {
  const [navbar, setNavbar] = useState<boolean>(false);
  const { state = {} } = useLocation<stateType>();
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
        <img alt="logo" src={navbar ? IMG.LOGO_WHITE : IMG.LOGO} />
      </div>
      {!isLogin ? (
        <div className={styles.buttonWrapper}>
          <div>
            <Link to="/signin">
              <Button color="white" label="Masuk" variant="small" />
            </Link>
          </div>
          <div className={navbar ? styles.btnActive : ""}>
            <Link to="/signup">
              <Button color="primary" label="Daftar" variant="small" />
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
    </nav>
  );
};
