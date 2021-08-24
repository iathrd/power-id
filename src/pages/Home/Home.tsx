import { AppHeader } from "../../components/AppHeader/AppHeader";
import { AppFotter } from "../../components/AppFotter/AppFotter";
import styles from "./styles.module.css";
import { ICON, IMG } from "../../configs";
import { Button } from "../../components/Button/Button";

interface ContentProps {
  headerText: string;
  image: string;
  description?: string;
  contentPosition: "left" | "right";
  listData: string[];
}

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

  const renderImageChild = (
    contentPosition: string,
    image: string
  ): JSX.Element => {
    return (
      <div className={styles[`image-child-${contentPosition}`]}>
        <div />
        <div>
          <img src={image} alt="Banner" />
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

  const renderChildContent = (params: ContentProps): JSX.Element => {
    const { contentPosition, image, headerText, description, listData } =
      params;
    if (contentPosition === "right") {
      return (
        <div className={styles["content-child"]}>
          {renderImageChild(contentPosition, image)}
          <div className={styles[`text-content-${contentPosition}`]}>
            <div>
              <h2>{headerText}</h2>
            </div>
            {description && (
              <div>
                <h5>{description}</h5>
              </div>
            )}

            {listData.map((item, idx) => (
              <div className={styles.checklistWrapper} key={idx}>
                <div className={styles[`checklist-${contentPosition}`]}>
                  <img src={ICON.CHECKLIST} alt="checklist" />
                </div>
                <div>
                  <h6>{item}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    } else {
      return (
        <div className={styles["content-child"]}>
          <div className={styles[`text-content-${contentPosition}`]}>
            <div>
              <h2>{headerText}</h2>
            </div>
            {description && (
              <div>
                <h5>{description}</h5>
              </div>
            )}

            {listData.map((item, idx) => (
              <div className={styles.checklistWrapper} key={idx}>
                <div className={styles[`checklist-${contentPosition}`]}>
                  <img src={ICON.CHECKLIST} alt="checklist" />
                </div>
                <div>
                  <h6>{item}</h6>
                </div>
              </div>
            ))}
          </div>
          {renderImageChild(contentPosition, image)}
        </div>
      );
    }
  };

  return (
    <>
      <AppHeader />
      <main className={styles.main}>
        {renderHeadContent()}
        {renderChildContent({
          headerText: "Kenapa harus mencari tallent di peworld",
          contentPosition: "right",
          image: IMG.BANNER2,
          listData: [
            "Lorem ipsum dolor sit amet.",
            "Lorem ipsum dolor sit amet.",
            "Lorem ipsum dolor sit amet.",
            "Lorem ipsum dolor sit amet.",
          ],
        })}
        {renderChildContent({
          headerText: "Skill Tallent",
          contentPosition: "left",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ineuismod ipsum et dui rhoncus auctor.",
          image: IMG.BANNER3,
          listData: ["Java.", "Golang", "Kotlin", "10+ Bahasa lainnya"],
        })}
      </main>
      <AppFotter />
    </>
  );
};
