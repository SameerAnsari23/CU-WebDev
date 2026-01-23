import React from 'react'
import Child from './Child'

const Father = (props) => {
 const propertyFromGrandFather = props.property;
  return (
    <div>
     I am Father, I have been given {propertyFromGrandFather}
     <Child property={propertyFromGrandFather}/>
    </div>
  )
}

export default Father