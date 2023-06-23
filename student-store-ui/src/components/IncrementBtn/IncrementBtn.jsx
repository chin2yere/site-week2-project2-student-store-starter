import * as React from "react"
import "./IncrementBtn.css"
import { useState } from "react"
export default function IncrementBtn() {
  
const [selectedIncrement, setSelectedIncrement] = useState(0);

function selectedIncrementValue(){
  if(selectedIncrement<=0){
  return "";
}else{
  return selectedIncrement;
}
}

  return (
    <div className="incrementBtn">
      <div className="row">
                <button onClick={() => setSelectedIncrement(selectedIncrement+1)}className="button-card">
                    <i className="material-icons">add</i>

                </button>
                <button onClick={() => setSelectedIncrement(selectedIncrement-1)}className="button-card">
                    <i className="material-icons">remove</i>

                </button>


            </div>
          <p>{selectedIncrementValue()}</p>
    </div>
  )
}