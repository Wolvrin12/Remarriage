import "../styles/Context.css";

const Context = ({ text, image }) => {
  return (
    <div className="context">
      <p>{text}</p>
      <img src={image} alt="photo" />
    </div>
  );
};

export default Context;
