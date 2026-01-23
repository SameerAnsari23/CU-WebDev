import React, { useContext } from 'react'
import { propertyContext } from '../App' 
import { factoryContext } from '../App'

const GrandChild = () => {
  let property = useContext(propertyContext);
  let factory = useContext(factoryContext);
  return (

    <div>
      I am GrandChild
      <p> I have been given {property} from propertyContext and {factory} from factoryContext </p>
    </div>

    // <div>
    //  I am GrandChild
    //  <propertyContext.Consumer>
    //   {
    //     (data) =>{
    //       return <factoryContext.Consumer>
    //         {(factoryData) => {
    //           return <p> I have been given {data} from propertyContext and {factoryData} from factoryContext </p>
    //         }}
    //       </factoryContext.Consumer>
    //     }
    //   }
    //  </propertyContext.Consumer>
    // </div>
  )
}

export default GrandChild