import React, { ReactNode } from 'react'

interface Props {
    children: ReactNode;
}

const Button = ({ children } : Props) => {
  return (
    <div className="btn btn-primary">{children}</div>
  )
}

export default Button