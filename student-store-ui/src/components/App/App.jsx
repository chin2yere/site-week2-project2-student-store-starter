import * as React from "react"
import { BrowserRouter } from 'react-router-dom'
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import "./App.css"
import { useEffect, useState } from "react"
import Card from "../Card/Card"
// import { Dataset } from "../../data/dataset"

export default function App() {
  const url = `https://codepath-store-api.herokuapp.com/store`;
  const [data, setData] = useState([]);

  async function fetchProducts(){
    //console.log("Fetching products")
    const response = await fetch(url);
    let existingData = await response.json();
    existingData = existingData.products;
    setData(existingData);
    //images = data.results;
    console.log(existingData);
    
    
      
    
    
  }
  // const { data, name, category, price, image } = Dataset.createDataSet();

  useEffect(()=>{
    fetchProducts();
    // category.map((category)=>{
    //   <p>category</p>
    // })

  },[])
  
  


  return (
    <div className="app">
      <BrowserRouter>
        <main>
          {/* YOUR CODE HERE! */}
          <Navbar>

          </Navbar>
          <Sidebar></Sidebar>
          <Home></Home>
          <div className="grid-container">
          {data.map((d)=>{
            
       
       return (<Card key={d.name}
         name={d.name} 
         image={d.image} 
         price={d.price}
         
         />)
         
})}
          </div>
        </main>
      </BrowserRouter>
    </div>
  )
}
