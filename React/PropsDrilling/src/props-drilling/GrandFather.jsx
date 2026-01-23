import React from 'react'
import Father from './Father'

const GrandFather = () => {
 let property = "1000 acres of land"
  return (
    <div>
     I am GrandFather
     <Father property={property}/>
    </div>
  )
}

export default GrandFather