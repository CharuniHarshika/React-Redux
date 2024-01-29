import React from 'react'
import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";


export default function FilterTask() {
  const Navigate = useNavigate();
    
  return (
    
   
      <div>
          <h1>Contact Page</h1>
          <Button onClick={() => Navigate(-1)}>Back</Button>
      </div>

  )
}


