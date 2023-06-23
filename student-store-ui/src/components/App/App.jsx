import * as React from "react"
import { BrowserRouter } from 'react-router-dom'
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import "./App.css"
import { useEffect, useState } from "react"
import Card from "../Card/Card"
import Search from "../Search/Search"


export default function App() {
  const url = `https://codepath-store-api.herokuapp.com/store`;
  const [data, setData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  
  let allCategories = true;
  let parsedData;

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
  
  const currentProductItems = data.filter ((data)=>{
    if (data.category=== selectedCategory){
      return true;
     }else{
      return false;
     }
  })
  console.log(currentProductItems);

  if(selectedCategory === "All Categories"){
    allCategories = true;
    parsedData = data;
  }else{
    allCategories = false;
    parsedData = currentProductItems;
  }


  return (
    <div className="app">
      <BrowserRouter>
        <main>
          {/* YOUR CODE HERE! */}
          <div>
          <Sidebar>

          </Sidebar>

          </div>
          <div className="content">
          
          <Home></Home>
          <Navbar category={selectedCategory} click={setSelectedCategory}>

          </Navbar>
          <div className="grid-container">
            



          {parsedData.map((d)=>{
            
       
            return (<Card key={d.name}
              name={d.name} 
              image={d.image} 
              price={d.price}
              
              
              
         />)
         
})}
          </div>
          </div>
        </main>
      </BrowserRouter>
    </div>
  )
}
