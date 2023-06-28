import * as React from "react";
import "./Table.css";
import Total from "../Total/Total";
export default function Table({ tableArray }) {
  const allZero = Object.values(tableArray).every((value) => value[0] === 0);
  if (allZero === true) {
    return <p>No items added to cart yet. Start shopping now!</p>;
  } else {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <td>Name</td>
              <td>Quantity</td>
              <td>Unit price</td>
              <td>Cost</td>
            </tr>
          </thead>
          <tbody>
            {Object.entries(tableArray).map(
              ([key, value]) =>
                value[0] !== 0 && (
                  <tr key={key}>
                    <td>{key}</td>
                    <td>{value[0]}</td>
                    <td>{value[1]}</td>
                    <td>{(value[0] * value[1]).toFixed(3)}</td>
                  </tr>
                )
            )}
          </tbody>
        </table>
        <Total tableArray={tableArray}></Total>
      </div>
    );
  }
}
