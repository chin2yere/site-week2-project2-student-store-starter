import * as React from "react"
import "./Navbar.css"

export default function Navbar({category}) {
  let allBtn;
  let clothBtn = "buttonR";
  let foodBtn = "buttonR";
  let accessoriesBtn = "buttonR";
  let techBtn = "buttonR";
  if(category==="All Categories"){
    allBtn="buttonR active";
    
  }else if(category==="Clothing"){
    clothBtn="buttonR active"

  }else if(category==="Food"){
    foodBtn="buttonR active"

  }else if(category==="Accessories"){
    accessoriesBtn="buttonR active"

  }else {
    techBtn="buttonR active"

  }
  return (
    <nav className="navbar">
      <div className="row">
      
        <div className="hamburger">
        <ul>
        <li><button><i class="material-icons">menu</i></button></li>
        </ul>
        </div>

        <div className="categoryBar">
        <ul>
          
        <li><button onClick="#home" className={allBtn}>All Categories</button></li>
        <li><button onClick="#news" className={clothBtn}>Clothing</button></li>
        <li><button onClick="#contact" className={foodBtn}>Food</button></li>
        <li><button onClick="#about" className={accessoriesBtn}>Accessories</button></li>
        <li><button onClick="#about" className={techBtn}>Tech</button></li>
        </ul>

        </div>
        
      
    </div>
    <br></br>
    <br></br>
  </nav>
  )
}
