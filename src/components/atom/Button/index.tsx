import React, { FC } from 'react'

interface IProps {
  label: string
}
const Button: FC<IProps> = ({ label }) => {
  return (
    <div>
      <button>{label}</button>
    </div>
  )
}

export { Button }
