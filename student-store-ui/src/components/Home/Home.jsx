import * as React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <div className="homeBar">
        <div className="row">
          <div className="col-left1">
            <img src="https://codepath-student-store-demo.surge.sh/assets/codepath.f1b3e41a.svg" />
          </div>

          <div className="col-right">
            <div className="links">
              <ul>
                <li>
                  <button className="button">Home</button>
                </li>
                <li>
                  <button className="button">About Us</button>
                </li>
                <li>
                  <button className="button">Contact Us</button>
                </li>
                <li>
                  <button className="button">Buy Now</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="hero">
        <div className="row">
          <div className="col-right">
            <h1>
              Welcome!<br></br>Find your Merch!
            </h1>
            <p>
              We have all kinds of goodies. Click on any of the items to start
              filling up your shopping cart. Checkout whenever you're ready.
            </p>
          </div>
          <div className="col-left">
            <img
              className="heroImage"
              src="https://codepath-student-store-demo.surge.sh/assets/student_store_icon.18e5d61a.svg"
            />
          </div>
        </div>
        <p>ii</p>
      </div>
    </div>
  );
}
