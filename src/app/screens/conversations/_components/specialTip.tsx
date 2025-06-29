import styles from "./specialTip.module.css";

export const SpecialTip = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.stripe}></div>
      <div className={styles.content}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};
