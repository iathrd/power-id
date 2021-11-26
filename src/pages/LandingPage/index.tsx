import styles from "./styles.module.css";
import Button from "@components/core/Button";
import ImageContent from "@components/shared/ImageContent";
import Typography from "@components/core/Typography";
import { ICON, IMG } from "@configs/index";
import Card from "@components/shared/Card";
import { Circle } from "./styled";

interface ContentProps {
  headerText: string;
  image: string;
  description?: string;
  contentPosition: "left" | "right";
  listData: string[];
}

const LandingPage: React.FC = () => {
  const renderHeadContent = (): JSX.Element => {
    return (
      <div className={styles.content}>
        <div>
          <div>
            <Typography newcolor="primary" variant="h1">
              Talenta terbaik negri untuk perubahan revolusi 4.0
            </Typography>
          </div>
          <div>
            <Typography newcolor="grey" variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              euismod ipsum et dui rhoncus auctor.
            </Typography>
          </div>
          <div>
            <Button color="primary" label="Mulai Dari Sekarang" size="large" />
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
            content={contentPosition}
            image={image}
            isChild={true}
          />
          <div className={styles[`text-content-${contentPosition}`]}>
            <div>
              <Typography newcolor="primary" variant="h2">
                {headerText}
              </Typography>
            </div>
            {description && (
              <div>
                <Typography newcolor="grey" variant="body1">
                  {description}
                </Typography>
              </div>
            )}

            {listData.map((item, idx) => (
              <div className={styles.checklistWrapper} key={idx}>
                <Circle fillColor="primary">
                  <img alt="checklist" src={ICON.CHECKLIST} />
                </Circle>
                <div>
                  <Typography newcolor="grey" variant="body2">
                    {item}
                  </Typography>
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
              <Typography newcolor="primary" variant="h2">
                {headerText}
              </Typography>
            </div>
            {description && (
              <div>
                <Typography newcolor="grey" variant="body1">
                  {description}
                </Typography>
              </div>
            )}

            {listData.map((item, idx) => (
              <div className={styles.checklistWrapper} key={idx}>
                <Circle fillColor="secondary">
                  <img alt="checklist" src={ICON.CHECKLIST} />
                </Circle>
                <div>
                  <Typography newcolor="grey" variant="body2">
                    {item}
                  </Typography>
                </div>
              </div>
            ))}
          </div>
          <ImageContent
            content={contentPosition}
            image={image}
            isChild={true}
          />
        </div>
      );
    }
  };

  const renderCourosel = (): JSX.Element => {
    return (
      <div>
        <div className={styles.headerText}>
          <Typography newcolor="primary" variant="h2">
            Their opinion about peworld
          </Typography>
        </div>
        <Card />
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
    </main>
  );
};

export default LandingPage;
