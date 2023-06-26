import * as React from "react";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <section className="sidebar">
      <div className="borderless-button">
        <button className="icon">
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
