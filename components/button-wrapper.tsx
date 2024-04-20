import React from 'react';

interface ButtonWrapperProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;  // Add other props as needed, such as onClick handlers
}

const ButtonWrapper: React.FC<ButtonWrapperProps> = ({ children, className, onClick }) => {
  return (
    <button className={`button-outline ${className}`} onClick={onClick} style={{ border: '1px solid #ccc', padding: '10px', margin: '0px', cursor: 'pointer' }}>
      {children}
    </button>
  );
};

export default ButtonWrapper;
