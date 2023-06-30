import * as React from "react";

import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";
import "./App.css";
import { useEffect, useState } from "react";
import Card from "../Card/Card";
import Search from "../Search/Search";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetails from "../ProductDetails/ProductDetails";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

export default function App() {
  const url = `https://codepath-store-api.herokuapp.com/store`;
  const [data, setData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [searchText, setSearchText] = useState("");
  const [parsedData, setParsedData] = useState([]);
  const [sidebarActive, setSidebarActive] = useState("false");
  const [tableArray, setTableArray] = useState({});

  let allCategories = true;

  async function fetchProducts() {
    const response = await fetch(url);
    let existingData = await response.json();
    existingData = existingData.products;
    setData(existingData);
    setParsedData(existingData);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  function addTable(key, value) {
    setTableArray({ ...tableArray, [key]: value });
  }
  function setParsedDataFunction(categoryClicked) {
    const currentProductItems = data.filter((data) => {
      if (data.category === categoryClicked) {
        return true;
      } else {
        return false;
      }
    });

    if (categoryClicked === "All Categories") {
      allCategories = true;

      setParsedData(data);
    } else {
      allCategories = false;

      setParsedData(currentProductItems);
    }
    setSelectedCategory(categoryClicked);
  }

  function runProductSearch() {
    if (searchText != "") {
      const newData = parsedData.filter((data) => {
        if (data.name.toLowerCase().includes(searchText)) {
          return true;
        } else {
          return false;
        }
      });
      console.log(parsedData);
      setParsedData(newData);
    }
  }

  console.log(tableArray);
  return (
    <div className="app">
      <BrowserRouter>
        <main>
          {/* YOUR CODE HERE! */}
          <div>
            <Sidebar
              active={setSidebarActive}
              isActive={sidebarActive}
              tableArray={tableArray}
              setTableArray={setTableArray}
            />
          </div>
          <Home />
          <div className="content">
            <Search
              text={searchText}
              updateText={setSearchText}
              runSearch={runProductSearch}
            />

            <Navbar category={selectedCategory} click={setParsedDataFunction} />
            <Routes>
              <Route
                path="/"
                element={
                  <div className="grid-container">
                    {parsedData.map((d) => {
                      return (
                        <Card
                          key={d.name}
                          name={d.name}
                          image={d.image}
                          price={d.price}
                          id={d.id}
                          addTable={addTable}
                          tableArray={tableArray}
                          setTableArray={setTableArray}
                        />
                      );
                    })}
                  </div>
                }
              />
              <Route path="/product/:id" element={<ProductDetails />} />
            </Routes>

            <Footer />
          </div>
        </main>
      </BrowserRouter>
    </div>
  );
}
