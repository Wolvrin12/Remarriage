import Context from "../components/Context";
import Header from "../components/Header";
import QuestionBox from "../components/QuestionBox";
import Flying from "../images/Couple floating with balloons.gif";
import Couple from "../images/Couple.gif";
import "../styles/App.css";

const App = () => {
  return (
    <div className="App">
      <Header></Header>
      <div className="container">
        <Context
          text={
            "Honey 🥹🫂♥️, my lovely baby, Banoutati 🥹🫂😽  I can't describe how much I'm sooooo happy we finished a year together 🥹🥹🥹🥹🫂🫂🫂♥️😽🥹😽♥️ honey it's a yeeeaaar, 366 days together 💖 after all the things between we actually made it and it's our victory 🥹♥️ inchaalah we will continue winning year by year until we make it to our goal 🫂😽 this year was full of joy, excitement, love, affection, fights, tears, sadness, happiness, hugs, kisses, sex, and a lot of unforgettable moments we passed together you're not just a part of my life you are my life mounati 🥹♥️"
          }
          image={Flying}
        ></Context>
        <Context
          text={
            "I want to thank you for all the sweet moments and also apologize for every moment your felt sad and every tear that run down your fluffy cheeks muaaah 😽😽♥️🫂 I'm so excited to start a new year together 🥹♥️🫂😽 mounati kanbriik kanbriiik kanbriiik kan7abek 😽🫂♥️ hope inchaalah our story never ends, hope our fights never last, hope our hugs never ends 🫂🫂🫂🫂♥️ so honey as I always promised you new year new proposal 🥹🫂♥️😽"
          }
          image={Couple}
        ></Context>
      </div>
      <QuestionBox></QuestionBox>
    </div>
  );
};

export default App;
