import { useState } from "react";
import GamePage from "./components/GamePage";
import HomePage from "./components/Homepage";
import Rules from "./components/rules";

function App() {
  const [isGameStarted, setGameStart] = useState(false);
  const [showRules, setShowRules] = useState(false);

  const changeShowrules = () => {
    setShowRules((value) => !value);
  };

  const toggleGamePlay = () => {
    setGameStart((value) => !value);
  };

  return (
    <>
      {!isGameStarted ? (
        <HomePage toggle={toggleGamePlay} />
      ) : (
        <GamePage show={changeShowrules} />
      )}
      {showRules && <Rules show={changeShowrules} />}
    </>
  );
}

export default App;
