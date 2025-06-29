import styles from "./skel.module.css";

export const Skeleton = ({
  width,
  height,
  count = 1,
  borderRadius = 8,
}: {
  width: number | string;
  height: number | string;
  count?: number;
  borderRadius?: number;
}) => {
  return (
    <>
      {[...new Array(count)].map((e, index) => {
        return (
          <div
            key={index}
            className={styles.skeleton}
            style={{
              width,
              height,
              borderRadius,
            }}
          ></div>
        );
      })}
    </>
  );
};
