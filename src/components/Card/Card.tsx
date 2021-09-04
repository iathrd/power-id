import styles from "./styles.css";

export const Card: React.FC = () => {
  return (
    <div className={styles.cardWrapper}>
      {[...Array(3)].map((_, idx: number) => (
        <div className={styles.card} key={idx}>
          <div>
            <img src="https://source.unsplash.com/random" alt={idx + "image"} />
          </div>
          <div>
            <h3>Harry Styles</h3>
            <h5>Web Developer</h5>
          </div>
          <div>
            <h5>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              euismod ipsum et dui rhoncus auctor.
            </h5>
          </div>
        </div>
      ))}
    </div>
  );
};
