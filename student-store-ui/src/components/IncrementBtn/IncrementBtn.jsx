import * as React from "react";
import "./IncrementBtn.css";
import { useState } from "react";
export default function IncrementBtn({
  removeTable,
  increaseTable,
  name,
  price,
  tableArray,
  setTableArray,
}) {
  const [selectedIncrement, setSelectedIncrement] = useState(0);
  function updateTable() {
    const cost = selectedIncrement * price;
    return [{ name }, { selectedIncrement }, { price }, { cost }];
  }
  function plusBtn() {
    const tempNumber = selectedIncrement + 1;
    setSelectedIncrement(selectedIncrement + 1);
    const keyExists = name in tableArray;
    if (keyExists === true) {
      const TableArray = tableArray;
      TableArray[name][0] += 1;
      setTableArray(TableArray);
    } else {
      increaseTable(name, [tempNumber, price]);
    }
  }
  function minusBtn() {
    const tempNumber = selectedIncrement - 1;
    setSelectedIncrement(selectedIncrement - 1);
    const keyExists = name in tableArray;
    if (keyExists === true) {
      const TableArray = tableArray;
      TableArray[name][0] -= 1;
      setTableArray(TableArray);
      //console.log(tableArray);
    }
  }

  function selectedIncrementValue() {
    if (selectedIncrement <= 0) {
      return "";
    } else {
      return selectedIncrement;
    }
  }

  return (
    <div className="incrementBtn">
      <div className="row">
        <button onClick={() => plusBtn()} className="button-card">
          <i className="material-icons">add</i>
        </button>
        <button
          onClick={() => {
            if (selectedIncrement != 0) {
              minusBtn();
            }
          }}
          className="button-card"
        >
          <i className="material-icons">remove</i>
        </button>
      </div>
      <p>{selectedIncrementValue()}</p>
    </div>
  );
}
