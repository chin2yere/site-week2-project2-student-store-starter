import * as React from "react";
import "./Navbar.css";

export default function Navbar({ category, click }) {
  let allBtn = "buttonR";
  let clothBtn = "buttonR";
  let foodBtn = "buttonR";
  let accessoriesBtn = "buttonR";
  let techBtn = "buttonR";
  if (category === "All Categories") {
    allBtn = "buttonR active";
  } else if (category === "clothing") {
    clothBtn = "buttonR active";
  } else if (category === "food") {
    foodBtn = "buttonR active";
  } else if (category === "accessories") {
    accessoriesBtn = "buttonR active";
  } else {
    techBtn = "buttonR active";
  }
  return (
    <nav className="navbar">
      <div className="row">
        <div className="hamburger">
          <ul>
            <li>
              <button>
                <i className="material-icons">menu</i>
              </button>
            </li>
          </ul>
        </div>

        <div className="categoryBar">
          <ul>
            <li>
              <button
                onClick={() => click("All Categories")}
                className={allBtn}
              >
                All Categories
              </button>
            </li>
            <li>
              <button onClick={() => click("clothing")} className={clothBtn}>
                Clothing
              </button>
            </li>
            <li>
              <button onClick={() => click("food")} className={foodBtn}>
                Food
              </button>
            </li>
            <li>
              <button
                onClick={() => click("accessories")}
                className={accessoriesBtn}
              >
                Accessories
              </button>
            </li>
            <li>
              <button onClick={() => click("tech")} className={techBtn}>
                Tech
              </button>
            </li>
          </ul>
        </div>
      </div>
      <br></br>
      <br></br>
    </nav>
  );
}
