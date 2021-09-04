import styles from "./styles.css";
import { IMG } from "../../configs";

export const AppFotter: React.FC = () => {
  return (
    <footer className={styles.fotterWrapper}>
      <div>
        <img src={IMG.LOGO_WHITE} alt="Logo" />
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod
          ipsum et dui rhoncus auctor.
        </p>
      </div>
      <hr />
      <div>
        <h5>2021 Pewworld. All right reserved</h5>
        <div>
          <h5>Telepon : +6281923920</h5>
          <h5>Email : power.id@gmail.com</h5>
        </div>
      </div>
    </footer>
  );
};
