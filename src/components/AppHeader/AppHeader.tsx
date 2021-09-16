import { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { IMG } from "@configs/index";
import { Button } from "@components/Button/Button";
import { Link } from "react-router-dom";

type NavbarProps = {
  transparent?: boolean;
};

export const AppHeader: React.FC<NavbarProps> = ({ transparent }) => {
  const [navbar, setNavbar] = useState<boolean>(false);
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
    </nav>
  );
};
