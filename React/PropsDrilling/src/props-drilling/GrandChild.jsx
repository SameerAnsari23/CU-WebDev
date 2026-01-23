import React from 'react'

const GrandChild = (props) => {
 const propertyFromChild = props.property;
  return (
    <div>
     I am GrandChild, I have been given {propertyFromChild}
    </div>
  )
}

export default GrandChild