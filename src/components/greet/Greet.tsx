import React from 'react'
import { IGreetProps } from './greet.types'


function Greet({name}:IGreetProps) {
  return (
    <div>
      Hello {name ? name : "Guest"}
    </div>
  )
}

export default Greet
