import * as React from "react"
//import { BrowserRouter } from 'react-router-dom'
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import "./App.css"
import { useEffect, useState } from "react"
import Card from "../Card/Card"
import Search from "../Search/Search"
import {BrowserRouter, Routes, Route } from "react-router-dom"
import ProductDetails from "../ProductDetails/ProductDetails"
import { Link } from "react-router-dom"
import Footer from "../Footer/Footer"


export default function App() {
  const url = `https://codepath-store-api.herokuapp.com/store`;
  const [data, setData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [searchText, setSearchText] = useState("");
  const [parsedData, setParsedData] = useState([]);
  //const [parsedData, setParsedData] = useState(null);
  let allCategories = true;
  //let parsedData;

  async function fetchProducts() {
    //console.log("Fetching products")
    const response = await fetch(url);
    let existingData = await response.json();
    existingData = existingData.products;
    setData(existingData);
    setParsedData(existingData);
    //images = data.results;
    //console.log(existingData);
  }
  // const { data, name, category, price, image } = Dataset.createDataSet();

  useEffect(() => {
    fetchProducts();
    // category.map((category)=>{
    //   <p>category</p>
    // })

  }, [])
  function setParsedDataFunction(categoryClicked){
    const currentProductItems = data.filter((data) => {
      if (data.category === categoryClicked) {
        return true;
      } else {
        return false;
      }
    })
    // //console.log(currentProductItems);
  
    if (categoryClicked === "All Categories") {
      allCategories = true;
      //parsedData= data;
      setParsedData(data);
    } else {
      allCategories = false;
      //parsedData = currentProductItems;
      setParsedData(currentProductItems);
    }
    setSelectedCategory(categoryClicked);
  

  }

  
  // function click(categoryClicked) {
  //   setParsedDataFunction(categoryClicked);
  //   //setSelectedCategory(x);
    

  // }

  function runProductSearch() {
    //console.log("run product search");
    if (searchText != ("")) {
      //console.log("search text is not empty");
      const newData = parsedData.filter((data) => {
        //console.log({data,"condition: ":data.name.includes(searchText)});
        if (data.name.toLowerCase().includes(searchText)) {
          return true;
        } else {
          return false;
        }


        //return item.name.toLowerCase().includes({searchText});
      })
      console.log(parsedData);
      setParsedData(newData);

    }
    //console.log("end of run product search",searchText);




  }
  //console.log("outside function",searchText);
  console.log(parsedData);

  


  return (
    <div className="app">
      <BrowserRouter>
        <main>
          {/* YOUR CODE HERE! */}
          <div>
            <Sidebar />

          </div>
          <Home />
          <div className="content">

            
            <Search text={searchText} updateText={setSearchText} runSearch={runProductSearch}/>

            <Navbar category={selectedCategory} click={setParsedDataFunction} />
            <Routes>
              <Route path="/" element={
                <div className="grid-container">
                  {parsedData.map((d) => {
                    
                      return (
                      <Card key={d.name}
                    name={d.name}
                    image={d.image}
                    price={d.price}
                    id={d.id}
  
                  />
                  )

                    
                  
  
                })}
              </div>
                } />
              <Route path="/product/:id" element={<ProductDetails/>} /> 
            </Routes>

            <Footer/>
          </div>
        </main>
      </BrowserRouter>
    </div>
  )
}
