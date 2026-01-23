import React from 'react'
import GrandChild from './GrandChild'

const Child = (props) => {
 const propertyFromFather = props.property;
  return (
    <div>
     I am child, I have been given {propertyFromFather}
     <GrandChild property={propertyFromFather}/>
    </div>
  )
}

export default Child