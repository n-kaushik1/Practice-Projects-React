import React, { useState } from "react";
import styles from "./seats.module.css";

const Seats = () => {
  const totalseatsVIP = 25;
  const totalseatsGeneral = 36;
  const totalseatsEconomy = 64;

  const [selectedVIP, setselectedVIP] = useState([]);
  const [selectedGeneral, setselectedGeneral] = useState([]);
  const [selectedEconomy, setselectedEconomy] = useState([]);

  // Handle seat selection with toggle functionality
  const handleVIPSelection = (i) => {
    setselectedVIP((prev) =>
      prev.includes(i) ? prev.filter((seat) => seat !== i) : [...prev, i]
    );
  };

  const handleGeneralSelection = (i) => {
    setselectedGeneral((prev) =>
      prev.includes(i) ? prev.filter((seat) => seat !== i) : [...prev, i]
    );
  };

  const handleEconomySelection = (i) => {
    setselectedEconomy((prev) =>
      prev.includes(i) ? prev.filter((seat) => seat !== i) : [...prev, i]
    );
  };

  const result = () => {
    alert(
      `Your selected seats are:
      VIP - ${selectedVIP.join(", ")}  
      General - ${selectedGeneral.join(", ")} 
      Economy - ${selectedEconomy.join(", ")}`
    );
  };

  return (
    <>
      <div>
        {/* VIP Section */}
        <div className={styles.sectionvip}>
          <div className={styles.sectionhead}>VIP Section</div>
          <div className={styles.seatsvip}>
            {Array.from({ length: totalseatsVIP }, (_, i) => (
              <button
                key={`VIP-${i}`}
                className={`${styles.box} ${
                  selectedVIP.includes(i + 1) ? styles.selected : ""
                }`}
                onClick={() => handleVIPSelection(i + 1)}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>

        {/* General Section */}
        <div className={styles.sectiongeneral}>
          <div className={styles.sectionhead}>General Section</div>
          <div className={styles.seatsgeneral}>
            {Array.from({ length: totalseatsGeneral }, (_, i) => (
              <button
                key={`General-${i}`}
                className={`${styles.box} ${
                  selectedGeneral.includes(i + 1) ? styles.selected : ""
                }`}
                onClick={() => handleGeneralSelection(i + 1)}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Economy Section */}
        <div className={styles.sectioneconomy}>
          <div className={styles.sectionhead}>Economy Section</div>
          <div className={styles.seatseconomy}>
            {Array.from({ length: totalseatsEconomy }, (_, i) => (
              <button
                key={`Economy-${i}`}
                className={`${styles.box} ${
                  selectedEconomy.includes(i + 1) ? styles.selected : ""
                }`}
                onClick={() => handleEconomySelection(i + 1)}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.confirm}>
        <button className={styles.confirmbt} onClick={result}>
          Confirm selection
        </button>
      </div>
    </>
  );
};

export default Seats;
