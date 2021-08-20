import { AppHeader } from "../../components/AppHeader/AppHeader";
import { AppFotter } from "../../components/AppFotter/AppFotter";
import styles from "./styles.module.css";
import { IMG } from "../../configs";
import { Button } from "../../components/Button/Button";

export const Home: React.FC = () => {
  const renderImageContent = (): JSX.Element => {
    return (
      <div className={styles.imageContent}>
        <div />
        <div>
          <img src={IMG.BANNER} alt="Banner1" />
          <div className={styles.blue} />
          <div className={styles.yellow} />
        </div>

        <div />
      </div>
    );
  };

  const renderImageChild = (): JSX.Element => {
    return (
      <div className={styles.imageContentChild}>
        <div />
        <div>
          <img src={IMG.BANNER2} alt="Banner2" />
          <div className={styles.blue} />
        </div>

        <div />
      </div>
    );
  };

  const renderHeadContent = (): JSX.Element => {
    return (
      <div className={styles.content}>
        <div>
          <div>
            <h1>Talenta terbaik negri untuk perubahan revolusi 4.0</h1>
          </div>
          <div>
            <h5>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              euismod ipsum et dui rhoncus auctor.
            </h5>
          </div>
          <div>
            <Button
              variant="medium"
              color="primary"
              label="Mulai Dari Sekarang"
            />
          </div>
        </div>
        {renderImageContent()}
      </div>
    );
  };

  const renderChildContent = (): JSX.Element => {
    return (
      <div className={styles["content-child"]}>
        {renderImageChild()}
        <div className={styles["text-content"]}>
          <div>
            <h2>Kenapa harus mencari tallent di peworld</h2>
          </div>
          <div>
            <h5>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              euismod ipsum et dui rhoncus auctor.
            </h5>
          </div>
          <div>
            <div></div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <AppHeader />
      <main className={styles.main}>
        {renderHeadContent()}
        {renderChildContent()}
      </main>
      <AppFotter />
    </>
  );
};
