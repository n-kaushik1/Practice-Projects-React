import { useState } from "react";
import styles from "./form.module.css";
const Formcont = () => {
  const [name, setName] = useState("Nk");
  const [email, setEmail] = useState("123@gmail.com");
  const [text, setText] = useState("Hello how are you.");

  const SupportChat = (event) => {
    event.preventDefault();
    console.log("Support chat clicked");
  };
  const ViaCall = (event) => {
    event.preventDefault();
    console.log("Via call chat clicked");
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    setName(event.target[3].value);
    setEmail(event.target[4].value);
    setText(event.target[5].value);
  };

  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <button className={styles.bt} onClick={SupportChat}>
        VIA SUPPORT CHAT
      </button>
      <button className={styles.bt} onClick={ViaCall}>
        VIA CALL
      </button>
      <br />
      <button className={styles.bt1}>VIA EMAIL FORM</button>
      <br />
      <div className="inputs-cont">
        <label htmlFor="name">NAME:</label>
        <input type="text" id="name" className={styles.input} />
        <br />
        <label htmlFor="email">EMAIL:</label>

        <input type="text" id="email" className={styles.input} />
        <br />
        <label htmlFor="text"> TEXT:</label>
        <textarea id="text" className={styles.input} />
        <br />
        <button className={styles.bt}>SUBMIT</button>
      </div>
      <div>
        Name: {name}
        <br />
        Email : {email}
        <br />
        Text: {text}
        <br />
      </div>
    </form>
  );
};

export default Formcont;
