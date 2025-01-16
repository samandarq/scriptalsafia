import React, { useState } from 'react';

function Oncesection({ products, setSelectedProduct, setActiveProduct, activeProduct }) {
  const sections = [
    {
      id: 1,
      title: "1-QISM: MAHSULOTLAR RO'YXATI",
      backgroundColor: '#e6ffe6',
      content: (
        <div>
          <p>Bizning mahsulotimizdan qaysi biri sizni qiziqtirmoqda?</p>
          <ul className="product-list">
            {products.map((product, index) => (
              <li
                key={index}
                className={`product-item ${activeProduct === product.name ? 'active' : ''}`}
                onClick={() => {
                  setSelectedProduct(product);
                  setActiveProduct(product.name);
                }}
              >
                {product.name}
              </li>
            ))}
          </ul>
        </div>
      ),
    },
  ];

  return (
    <div style={{ backgroundColor: sections[0].backgroundColor }}>
      <h2>{sections[0].title}</h2>
      {sections[0].content}
    </div>
  );
}

export default Oncesection;
