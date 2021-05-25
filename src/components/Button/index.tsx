import React, {FC} from 'react'

interface IProps {

}
const Button: FC<IProps> = () => {
  console.log("hello")
  return (
    <div>
      <button>button</button>
    </div>
  )
}

export { Button}
