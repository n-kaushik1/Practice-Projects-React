import styles from "./Homepage.module.css";

const HomePage = ({ toggle }) => {
  return (
    <div className={styles.home}>
      <span className={styles.left}>
        <img src="/img/dices 1.png" alt="Dices" />
      </span>
      <span className={styles.right}>
        <h1 className={styles.head}>Dice Game</h1>
        <button className={styles.Playbt} onClick={toggle}>
          Play Now
        </button>
      </span>
    </div>
  );
};

export default HomePage;
