import React, { Component } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../Context";

export default class Products extends Component {
  static contextType = DataContext;
  render() {
    const { products } = this.context;
    return (
      <div id="product">
        Products
        {/* {products.map(product)} */}
      </div>
    );
  }
}
