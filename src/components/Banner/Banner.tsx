import { IMG } from "../../configs";
import styles from "./styles.css";

export const Banner: React.FC = () => {
  return (
    <div>
      <div className={styles.banner}>
        <div>
          <img src={IMG.BANNER} alt="Banner" />
        </div>
        <div />
        <div>
          <img src={IMG.LOGO_WHITE} alt="logo" />
          <div>
            <h1>
              Temukan developer berbakat & terbaik di berbagai bidang keahlian
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};
