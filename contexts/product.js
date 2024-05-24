import React, { createContext, useState, useContext } from "react";

const ProductContext = createContext();

export const useProduct = () => {
  return useContext(ProductContext);
};

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([
    { id: 1, name: "Ürün 1", brand: "Şeker Portakalı", price: 120, image: { url: "/product1.png" } },
    { id: 2, name: "Ürün 2", brand: "YKS Hazırlık", price: 110, image: { url: "/product2.png" } },
    { id: 3, name: "Ürün 3", brand: "İngilizce Konuşma Kılavuzu", price: 100, image: { url: "/product3.png" } },
    { id: 4, name: "Ürün 4", brand: "LGS Hazırlık", price: 99, image: { url: "/product4.png" } },
    { id: 5, name: "Ürün 5", brand: "Harry Potter", price: 190, image: { url: "/product6.png" } },
    { id: 6, name: "Ürün 6", brand: "İngilizce Sözlük", price: 90, image: { url: "/product7.png" } },
    { id: 7, name: "Ürün 7", brand: "Enkaz", price: 100, image: { url: "/product8.png" } },
    { id: 8, name: "Ürün 8", brand: "Atatürk Anatürk", price: 80, image: { url: "/product9.png" } },
    { id: 9, name: "Ürün 9", brand: "Yeraltından Notlar", price: 88, image: { url: "/product10.png" } },
    { id: 10, name: "Ürün 10", brand: "Galaksi Rehberi", price: 177, image: { url: "/product5.png" } },
    { id: 11, name: "Ürün 11", brand: "Sadakat", price: 130, image: { url: "/product11.png" } },
  ]);

  const addProduct = (product) => {
    console.log("Adding product:", product); // Debugging log
    setProducts((prevProducts) => [...prevProducts, { ...product, id: prevProducts.length + 1 }]);
    console.log("Products after adding:", products); // Debugging log
  };

  return (
    <ProductContext.Provider value={{ products, addProduct }}>
      {children}
    </ProductContext.Provider>
  );
};
