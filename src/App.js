// Feature 1
import React from "react";
import data from "./data.json";
import Products from "./components/Products.js";
import Filter from "./components/Filter.js";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      size: "",
      sort: ""
    };
  }

  sortProducts = event => {
    // Implement sort
    const sort = event.target.value;
    this.setState(state => ({
      sort: sort,
      products: this.state.products
        .slice()
        .sort((a, b) =>
          sort === "lowest"
            ? a.price > b.price
              ? 1
              : -1
            : sort === "highest"
            ? a.price < b.price
              ? 1
              : -1
            : a._id > b.pri_idce
            ? 1
            : -1
        )
    }));
  };

  filterProducts = event => {
    console.log(event.target.value);
    if (event.target.value === "") {
      this.setState({ size: event.target.value, products: data.products });
    } else {
      this.setState({
        size: event.target.value,
        products: data.products.filter(
          product => product.availableSizes.indexOf(event.target.value) >= 0
        )
      });
    }
  };

  render() {
    return (
      <div className="grid-container">
        <header>
          <a href="home"> React Shopping Cart</a>
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Filter
                count={this.state.products.length}
                size={this.state.size}
                sort={this.state.sort}
                filterProducts={this.filterProducts}
                sortProducts={this.sortProducts}
              />
              <Products products={this.state.products} />
            </div>
            <div className="sidebar">Cart Items</div>
          </div>
        </main>
        <footer>All rights is reserved. </footer>
      </div>
    );
  }
}

export default App;
