import React, { Component } from "react";

export const DataContext = React.createContext();
export class DataProvider extends Component {
  state = {
    products: [
      {
        _id: "1",
        title: "Nike Shoes 01",
        src: "https://github.com/krishnadevz/nikestore/blob/main/nike.jpg",
        description: "nike running shoes  2 colors  ",
        content:
          " shoes",
        price: 23,
        colors: ["red", "black", "crimson", "teal"],
        count: 1,
      },
      {
        _id: "2",
        title: "Nike Shoes 02",
        src: "https://www.upsieutoc.com/images/2020/06/27/img2.jpg",
        description: "nike running shoes 2 colors",
        content:
          "shoes.",
        price: 19,
        colors: ["red", "crimson", "teal"],
        count: 1,
      },
      {
        _id: "3",
        title: "Nike Shoes 03",
        src: "https://www.upsieutoc.com/images/2020/06/27/img3.jpg",
        description: "nike running shoes 2 colors",
        content:
          "shoes",
        price: 50,
        colors: ["lightblue", "white", "crimson", "teal"],
        count: 1,
      },
      {
        _id: "4",
        title: "Nike Shoes 04",
        src: "https://www.upsieutoc.com/images/2020/06/27/img4.jpg",
        description: "nike running shoes 2 colors ",
        content:
          "shoes",
        price: 15,
        colors: ["orange", "black", "crimson", "teal"],
        count: 1,
      },
      {
        _id: "5",
        title: "Nike Shoes 05",
        src: "https://www.upsieutoc.com/images/2020/06/27/img5.jpg",
        description: "nike running shoes                          2 colors",
        content:
          "shoes",
        price: 10,
        colors: ["orange", "black", "crimson", "teal"],
        count: 1,
      },
      {
        _id: "6",
        title: "Nike Shoes 06",
        src: "https://www.upsieutoc.com/images/2020/06/27/img6.jpg",
        description: "nike running shoes 2 colors",
        content:
          "shoes.",
        price: 17,
        colors: ["orange", "black", "crimson", "teal"],
        count: 1,
      },
    ],
  };
  render() {
    const { products } = this.state;

    return (
      <DataContext.Provider value={{ products }}>
        {this.props.children}
      </DataContext.Provider>
    );
  }
}
