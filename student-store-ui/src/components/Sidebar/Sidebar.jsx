import * as React from "react";
import "./Sidebar.css";
import Table from "../Table/Table";

export default function Sidebar({ active, isActive, tableArray }) {
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
              ></input>
            </div>
            <br />

            <div className="rowSidebar">
              <input type="checkbox" id="myCheckbox" required></input>&nbsp;
              <label htmlFor="myCheckbox">
                I agree to the terms and conditions
              </label>
            </div>
            <br />
            <div className="rowSidebar">
              <button className="checkoutButton">Checkout</button>
            </div>
          </form>
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
