import { FC } from "react";

interface ButtonProps {
  label: string;
  primary?: boolean;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, primary, onClick }) => {
  const buttonStyle = primary
    ? { backgroundColor: "red", color: "white" }
    : { backgroundColor: "white", color: "red" };
  return (
    <button style={buttonStyle} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
