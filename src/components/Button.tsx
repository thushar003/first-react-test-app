import React, { ReactNode } from 'react'
import Alert from './Alert';

interface Props {
    children: ReactNode;
    color?: "primary" | "secondary" | "danger";   //The color prop is optional, and can only be assigned these three values
    onClick: () => void;
}

const Button = ({ children, onClick, color ="primary" } : Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>{children}</button>
  )
}

export default Button