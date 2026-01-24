import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
 const navigate = useNavigate();
  return (
    <div>Contact
     <br></br>
     <button onClick={() => navigate('/')}>Home</button>
    </div>
  )
}

export default Contact