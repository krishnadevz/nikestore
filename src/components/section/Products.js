import React, { Component } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../Context";
import Shoe from "../images/nike.jpg"
export class Products extends Component {
  static contextType = DataContext;
/*   constructor(props,context){
    super(props,context)
  } */
render() {      
    console.log(this.context);

     const {products,addCart} = this.context;
     console.log(products);

    return (
      <div id="product">
      {
          products.map(product =>(
              <div className="card" key={product._id}>
                  <Link to={`/product/${product._id}`}>
                      <img src={Shoe} alt=""/>
                  </Link>
                  <div className="content">
                      <h3>
                          <Link to={`/product/${product._id}`}>{product.title}</Link>
                      </h3>
                      <span>${product.price}</span>
                      <p>{product.description}</p>
                      <button onClick={()=> addCart(product._id)}>Add to cart</button>
                  </div>
              </div>
          ))
      }
   </div>
    );
  }
}
export default Products;