import styles from "./GamePage.module.css";
const Rules = ({ show }) => {
  return (
    <div className={styles.rules}>
      <h2>How to play dice game</h2>
      <div className={styles.rulespoints}>
        <li>Select any number</li>
        <li>Click on dice image</li>
        <li>
          After clicking on dice if selected number is equal to dice number you
          will get same point as dice
        </li>
        <li>If you get wrong guess , then 2 points will be deducted </li>
      </div>
      <button className={styles.hide} onClick={show}>
        Hide rules
      </button>
    </div>
  );
};
export default Rules;
