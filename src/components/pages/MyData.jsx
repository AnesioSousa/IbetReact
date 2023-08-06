import styles from "./MyData.module.css";

function Wallet() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.child}>
          <h1>1</h1>
        </div>
        <div className={styles.child}>
          <h1>2</h1>
        </div>
        <div>
          <h1>3</h1>
        </div>
      </div>
    </>
  );
}

export default Wallet;
