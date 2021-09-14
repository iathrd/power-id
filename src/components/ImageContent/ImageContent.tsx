import styles from "./styles.module.css";

type ImageContentProps = {
  isChild?: boolean;
  position?: "left" | "right";
  image: string;
};

export const ImageContent: React.FC<ImageContentProps> = ({
  isChild,
  position,
  image,
}) => {
  if (!isChild) {
    return (
      <div className={styles.imageContent}>
        <div />
        <div>
          <img src={image} alt="Banner1" />
          <div className={styles.blue} />
          <div className={styles.yellow} />
        </div>

        <div />
      </div>
    );
  } else {
    return (
      <div className={styles[`image-child-${position}`]}>
        <div />
        <div>
          <img src={image} alt="Banner" />
          <div className={styles.blue} />
        </div>

        <div />
      </div>
    );
  }
};
