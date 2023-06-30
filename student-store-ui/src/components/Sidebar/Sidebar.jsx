import * as React from "react";
import "./Sidebar.css";
import Table from "../Table/Table";
import { useState } from "react";

export default function Sidebar({ active, isActive, tableArray }) {
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [receipt, setReceipt] = useState([]);
  const [defaultReceipt, setDefaultReceipt] = useState(
    "A confirmation email will be sent to you so that you can confirm this \n order. Once you have confirmed the order, it will be delivered to your \n dorm room."
  );
  const [errorMessage, setErrorMessage] = useState("");

  console.log("receipt", receipt);

  function checkoutOnclick(event) {
    event.preventDefault();
    setDefaultReceipt("");

    if (
      Object.keys(tableArray).length === 0 ||
      Object.values(tableArray).every((value) => value[0] === 0) ||
      customerName === "" ||
      customerEmail === ""
    ) {
      setErrorMessage("Cart empty or form not filled");
      const receipt1 = [
        "A confirmation email will be sent to you so that you can confirm this \n order. Once you have confirmed the order, it will be delivered to your \n dorm room.",
      ];
      setReceipt(receipt1);
    } else {
      setErrorMessage("");

      let newReceipt = [...receipt];

      let tempReceipt = `showing receipts for ${customerName} available at ${customerEmail}`;
      console.log("tempReceipt", tempReceipt);

      newReceipt.push(tempReceipt);
      let total = 0;
      //let name, price, number;
      Object.entries(tableArray).map(([key, value]) => {
        if (value[0] !== 0) {
          tempReceipt = `${value[0]} total ${key} purchased at a cost of ${
            value[1]
          } for a total cost of ${(
            parseFloat(value[0]) * parseFloat(value[1])
          ).toFixed(2)}\n`;
          total += (parseFloat(value[0]) * parseFloat(value[1])).toFixed(2);

          console.log("tempReceipt", tempReceipt);
          newReceipt.push(tempReceipt);
        }
      });
      setReceipt(newReceipt);
    }
    console.log(receipt);
  }
  function printreceipt() {
    receipt.map((d) => {
      return <p>{d}</p>;
    });
  }

  if (isActive === "true") {
    return (
      <section className="sidebar active">
        <div className="borderless-button">
          <button className="icon" onClick={() => active("false")}>
            <i className="material-icons md-48">arrow_forward</i>
          </button>
          <br></br>
        </div>
        <div className="checkoutInformation">
          <h3>Shopping Cart</h3>
          <i className="material-icons md-48">add_shopping_cart</i>

          <Table tableArray={tableArray}></Table>
          <h3>Payment Info</h3>
          <i className="material-icons md-48">monetization_on</i>
          <form action="submit">
            <div className="rowSidebar">
              <label htmlFor="input-field">Name:</label>&nbsp;&nbsp;
              <input
                type="text"
                id="input-field"
                name="name"
                placeholder="Student name"
                required
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
              ></input>
            </div>
            <br />

            <div className="rowSidebar">
              <label htmlFor="input-field">Email:</label>&nbsp;&nbsp;
              <input
                type="text"
                id="input-field"
                name="name"
                placeholder="student@meta.com"
                required
                value={customerEmail}
                onChange={(e) => setCustomerEmail(e.target.value)}
              ></input>
            </div>
            <br />

            <div className="rowSidebar">
              <input type="checkbox" id="myCheckbox" required></input>&nbsp;
              <label htmlFor="myCheckbox">
                I agree to the terms and conditions
              </label>
              <br />
            </div>
            <p style={{ color: "red" }}>{errorMessage}</p>
            <br />
            <div className="rowSidebar">
              <button
                onClick={(event) => checkoutOnclick(event)}
                className="checkoutButton"
              >
                Checkout
              </button>
            </div>
          </form>
          <h3>Checkout Info</h3>
          <p>{defaultReceipt}</p>
          <p>{receipt && "Receipt"}</p>

          <div>
            {receipt &&
              receipt.map((d) => {
                return <p key={d}>{d}</p>;
              })}
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <section className="sidebar">
        <div className="borderless-button">
          <button className="icon" onClick={() => active("true")}>
            <i className="material-icons md-48">arrow_forward</i>
          </button>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </div>

        <div className="borderless-button">
          <button className="icon">
            <i className="material-icons md-48">add_shopping_cart</i>
          </button>
          <br></br>
          <br></br>
          <button className="icon">
            <i className="material-icons md-48">monetization_on</i>
          </button>
          <br></br>
          <br></br>
          <button className="icon">
            <i className="material-icons md-48">fact_check</i>
          </button>
        </div>
      </section>
    );
  }
}
