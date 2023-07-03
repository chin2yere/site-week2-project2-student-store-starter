import * as React from "react";
import "./IncrementBtn.css";
import { useState } from "react";
export default function IncrementBtn({
  increaseTable,
  name,
  price,
  tableArray,
  setTableArray,
}) {
  function plusBtn() {
    const keyExists = name in tableArray;
    if (keyExists === true) {
      const TableArray = { ...tableArray };
      TableArray[name][0] += 1;
      setTableArray(TableArray);
    } else {
      increaseTable(name, [1, price]);
    }
  }
  function minusBtn() {
    const keyExists = name in tableArray;
    if (keyExists === true) {
      const TableArray = { ...tableArray };
      TableArray[name][0] -= 1;
      setTableArray(TableArray);
    }
  }

  function selectedIncrementValue() {
    if (!tableArray || !tableArray[name] || tableArray[name][0] <= 0) {
      return "";
    } else {
      return tableArray[name][0];
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
            if (tableArray[name] && tableArray[name][0] != 0) {
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
