import "./Button.css";

export const Button = ({ text, onClick}) => {
  return <button className="button" onClick={onClick}>{text}</button>;
};
