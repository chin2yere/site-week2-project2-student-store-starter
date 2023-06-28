import * as React from "react";
import "./Total.css";
export default function Total({ tableArray }) {
  let total = 0;
  Object.entries(tableArray).map(([key, value]) => {
    const a = parseFloat(value[0]);
    const b = parseFloat(value[1]);
    const product = a * b;
    total += product;
  });
  const tax = total * 0.09;
  const grandTotal = total + tax;
  return (
    <div className="Total">
      <div className="rowTotal">
        <div className="col1Total">
          <p>Subtotal</p>
        </div>
        <div className="col2Total">
          <p>{total.toFixed(4)}</p>
        </div>
      </div>
      <div className="rowTotal">
        <div className="col1Total">
          <p>Taxes and Fees</p>
        </div>
        <div className="col2Total">
          <p>{tax.toFixed(4)}</p>
        </div>
      </div>
      <div className="rowTotal">
        <div className="col1Total">
          <p>Total</p>
        </div>
        <div className="col2Total">
          <p>{grandTotal.toFixed(4)}</p>
        </div>
      </div>
    </div>
  );
}
