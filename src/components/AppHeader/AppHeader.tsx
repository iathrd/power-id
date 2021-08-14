import styles from "./styles.module.css";
import { IMG } from "../../configs";
import { Button } from "../Button/Button";

export const AppHeader: React.FC = () => {
  return (
    <nav className={styles.navigationWrapper}>
      <div>
        <img src={IMG.LOGO} alt="logo" />
      </div>
      <div>
        <div>
          <Button label="Masuk" variant="small" color="white" />
        </div>
        <div>
          <Button label="Daftar" variant="small" color="primary" />
        </div>
      </div>
    </nav>
  );
};
