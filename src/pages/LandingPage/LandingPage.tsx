import styles from "./styles.module.css";
import { ICON, IMG } from "@configs/index";
import { Button } from "@components/Button/Button";
import { Card } from "@components/Card/Card";
import { ImageContent } from "@components/ImageContent/ImageContent";

interface ContentProps {
  headerText: string;
  image: string;
  description?: string;
  contentPosition: "left" | "right";
  listData: string[];
}

export const LandingPage: React.FC = () => {
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
              color="primary"
              label="Mulai Dari Sekarang"
              variant="medium"
            />
          </div>
        </div>
        <ImageContent image={IMG.BANNER} />
      </div>
    );
  };

  const renderChildContent = (params: ContentProps): JSX.Element => {
    const { contentPosition, image, headerText, description, listData } =
      params;
    if (contentPosition === "right") {
      return (
        <div className={styles["content-child"]}>
          <ImageContent
            image={image}
            isChild={true}
            position={contentPosition}
          />
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
                  <img alt="checklist" src={ICON.CHECKLIST} />
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
                  <img alt="checklist" src={ICON.CHECKLIST} />
                </div>
                <div>
                  <h6>{item}</h6>
                </div>
              </div>
            ))}
          </div>
          <ImageContent
            image={image}
            isChild={true}
            position={contentPosition}
          />
        </div>
      );
    }
  };

  const renderCourosel = (): JSX.Element => {
    return (
      <div>
        <div className={styles.headerText}>
          <h2>Their opinion about peworld</h2>
        </div>
        <Card />
      </div>
    );
  };

  const renderBanner = (): JSX.Element => {
    return (
      <div className={styles.banner}>
        <img alt="Curve" src={IMG.CURVE} />
        <div className={styles.bannerContent}>
          <div>
            <h2>Lorem ipsum dolor sit amet</h2>
          </div>
          <div>
            <Button
              color="white"
              label="Mulai Dari Sekarang"
              variant="medium"
            />
          </div>
        </div>
      </div>
    );
  };

  return (
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
        description: `Lorem ipsum dolor sit amet, consectetur 
        adipiscing elit. Ineuismod ipsum et dui rhoncus auctor.`,
        image: IMG.BANNER3,
        listData: ["Java.", "Golang", "Kotlin", "10+ Bahasa lainnya"],
      })}
      {renderCourosel()}
      {renderBanner()}
    </main>
  );
};
