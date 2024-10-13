import { useState } from "react";
import "../styles/QuestionBox.css";
import Button from "./Button";

const QuestionBox = () => {
  const [open, setopen] = useState(false);

  return (
    <div className="box">
      <h1 className="question">Would You Remarry Me, please Mounati ?</h1>
      <div className="buttons">
        <Button text={"YEESSS"}></Button>
        <Button text={"YES"}></Button>
      </div>
    </div>
  );
};

export default QuestionBox;
