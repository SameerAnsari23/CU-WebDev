import React, { createContext } from 'react'
import GrandFather from './components/GrandFather'

const propertyContext = createContext();
const factoryContext = createContext();
const App = () => {
  let property = "1000 acres of land";
  let factory = "A factory that produces 100 cars a day";
  return (
    <div>
      {/* <GrandFather/>   this is for props drilling */}
      <propertyContext.Provider value={property}>
        <factoryContext.Provider value={factory}>
          <GrandFather/>
        </factoryContext.Provider>         
      </propertyContext.Provider>
      
    </div>
  )
}

export default App;
export {propertyContext, factoryContext};