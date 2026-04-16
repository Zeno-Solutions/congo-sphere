import React, { ReactNode } from 'react'

type ContenaireProps = {
  children: ReactNode;
  className?: string;
}
export default function Contenaire({ children, className }: ContenaireProps) {
  return (
    <div className={`mx-auto w-full max-w-400  ${className || ''}`}>
      {children}
    </div>
  )
}
