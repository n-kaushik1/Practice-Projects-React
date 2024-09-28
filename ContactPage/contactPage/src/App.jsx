import "./App.css";
import Header from "./components/Header";
import Formcont from "./components/Form";
function App() {
  return (
    <>
      <Header />
      <div className="body">
        <div className="head">
          <h2>Contact Us</h2>
        </div>
        <p>
          LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU!
          WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN
          REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE,
          EMAIL, OR SOCIAL MEDIA.{" "}
        </p>
        <div className="form-div">
          <span className="form">
            <Formcont />
          </span>
          <span className="img">
            <img src="images/Service 24_7-pana 1.svg " alt="24/7 service" />
          </span>
        </div>
      </div>
    </>
  );
}

export default App;
