import { useState } from "react";
import styles from "./styles.module.css";
import { IMG } from "../../configs";
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";

export const AppHeader: React.FC = () => {
  const [navbar, setNavbar] = useState<boolean>(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);
  return (
    <nav
      className={
        navbar ? styles.navigationWrapperActive : styles.navigationWrapper
      }
    >
      <div className={styles.image}>
        <img src={navbar ? IMG.LOGO_WHITE : IMG.LOGO} alt="logo" />
      </div>
      <div className={styles.buttonWrapper}>
        <div>
          <Link to="/login">
            <Button label="Masuk" variant="small" color="white" />
          </Link>
        </div>
        <div className={navbar ? styles.btnActive : ""}>
          <Button label="Daftar" variant="small" color="primary" />
        </div>
      </div>
    </nav>
  );
};
