import React from 'react';

// Define props for the button component
interface ButtonProps {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, disabled = false }) => {
  return (
    <button className = "button" disabled={disabled}>
      {label}
    </button>
  );
};

export default Button;
