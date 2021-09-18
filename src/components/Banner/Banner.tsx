import { IMG } from "@configs/index";
import styles from "./styles.module.css";

export const Banner: React.FC = () => {
  return (
    <div className={styles.parent}>
      <div className={styles.banner}>
        <div>
          <img alt="Banner" src={IMG.BANNER} />
        </div>
        <div />
        <div>
          <img alt="logo" src={IMG.LOGO_WHITE} />
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
