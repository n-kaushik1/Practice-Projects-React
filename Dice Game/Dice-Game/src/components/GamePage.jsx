import { useState } from "react";
import styles from "./GamePage.module.css";

const GamePage = ({ show }) => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState(0);
  const [diceValue, setDiceValue] = useState(0);
  const [Message, setMessage] = useState("");

  const generateRandom = (selectedNumber) => {
    let Value;
    if (selectedNumber === 0) {
      Value = "Please select a number first";
    } else {
      Value = Math.floor(Math.random() * 6) + 1;
    }
    setDiceValue(Value);
    SettingScore(selectedNumber, Value);
  };

  const SettingScore = (selectedNumber, diceValue) => {
    if (diceValue === selectedNumber) {
      setScore((prevscore) => prevscore + selectedNumber);
      setMessage("You Win");
    } else if (diceValue === "Please select a number first") {
      setScore(score);
      setMessage("");
    } else {
      setScore((prevscore) => prevscore - 2);
      setMessage("You Lose");
    }
  };
  const SetNO = (number) => {
    setSelectedNumber(number);
  };

  const ResettingScore = () => {
    setScore(0);
    setDiceValue(0);
    setSelectedNumber(0);
  };

  return (
    <>
      <header className={styles.head}>
        <div className={styles.Score}>
          <div className={styles.Ongoingscore}>{score}</div>
          Total Score
        </div>
        <div className={styles.Buttons}>
          <div>
            <button className={styles.bt} onClick={() => SetNO(1)}>
              1
            </button>
            <button className={styles.bt} onClick={() => SetNO(2)}>
              2
            </button>
            <button className={styles.bt} onClick={() => SetNO(3)}>
              3
            </button>
            <button className={styles.bt} onClick={() => SetNO(4)}>
              4
            </button>
            <button className={styles.bt} onClick={() => SetNO(5)}>
              5
            </button>
            <button className={styles.bt} onClick={() => SetNO(6)}>
              6
            </button>
          </div>
          {selectedNumber == 0 && (
            <div className={styles.Select}>Select a Number</div>
          )}
          {selectedNumber != 0 && (
            <div className={styles.Select}>
              Selected Number is: {selectedNumber}
            </div>
          )}
        </div>
      </header>
      <div className={styles.body}>
        <span>
          <img
            src={`/img/dice_${
              diceValue === 0 || diceValue === "Please select a number first"
                ? 1
                : diceValue
            }.png`}
            alt="Dice"
            className={styles.img}
            onClick={() => generateRandom(selectedNumber)}
          />

          <div className={styles.role}>Click on Dice to Role</div>
          {diceValue === "Please select a number first" && (
            <div className={styles.role1}>{diceValue}</div>
          )}
          {diceValue !== "Please select a number first" && (
            <div className={styles.role}>
              Current value on dice: {diceValue}
            </div>
          )}

          {diceValue !== "Please select a number first" && Message !== "" && (
            <div className={styles.role}>{Message}</div>
          )}
          <button className={styles.resetbt} onClick={ResettingScore}>
            Reset Score
          </button>
          <button className={styles.rulesbt} onClick={show}>
            Show Rules
          </button>
        </span>
      </div>
    </>
  );
};

export default GamePage;
