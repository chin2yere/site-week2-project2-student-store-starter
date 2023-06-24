import * as React from "react"
import "./Footer.css"


export default function Home() {
  return (
    <div>
    <h1>About</h1>
    <div className="rowfooter">
        <div className="col-leftFooter">
            <p>The codepath student store offers great products at great prices <br></br>from a great team and for a great cause.<br></br>
                We've searched far and wide for items that perk the interests <br></br>of even the most eccentric students and decided to offer them all<br></br> here in one place.<br></br>
                All proceeds go towards bringing high quality CS education to college students around the country.</p>

        </div>
        <div className="col-rightFooter">
            <img className="imageFooter"src="https://codepath-student-store-demo.surge.sh/assets/giant_codepath.6952ef57.svg" alt="" />

        </div>
    </div>
    <h1>Contact Us</h1>
    <div className="rowfooter">
        <div className="col-leftFooter">
            <p>Email : code@path.org<br></br>
                Phone : 1-800-CODEPATH<br></br>
                Address : 123 Fake Street, San Francisco, CA.</p>

        </div>
        <div className="col-rightFooter">
            <img className="happyPersonImage"src="https://codepath-student-store-demo.surge.sh/assets/happy_person.517b658d.svg" alt="" />

        </div>

    </div>
    <br /><br /><br /><br /><br /><br />
    <div className="footerSection">
        <div className="footerColumns">
            <ul>
                <li>Categories</li>
                <br />
                <li>All Categories</li>
                <br />
                <li>Food</li>
                <br />
                <li>Clothing</li>
                <br />
                <li>Accessories</li>
                <br />
                <li>Tech</li>
                <br />
            </ul>

        </div>
        <div className="footerColumns">
            <ul>
                <li>About Us</li>
                <br />
                <li>Find a store</li>
                <br />
                <li>Terms</li>
                <br />
                <li>Sitemap</li>
                <br />
                <li>Careers</li>
            </ul>

        </div>
        <div className="footerColumns">
            <ul>
                <li>Contact Us</li>
                <br />
                <li>Money Refund</li>
                <br />
                <li>Order Status</li>
                <br />
                <li>Shipping Info</li>
                <br />
                <li>Money dispute</li>
            </ul>

        </div>
        <div className="footerColumns">
            <ul>
                <li>Account</li>
                <br />
                <li>Login</li>
                <br />
                <li>Register</li>
                <br />
                <li>Account setting</li>
                <br />
                <li>My orders</li>
            </ul>

        </div>

    </div>

    </div>
    
  )
}
