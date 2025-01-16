import React, { useState, useEffect } from 'react'; 
import Clock from './Clock'; // Clock komponentini import qilish
import './Clock.css'; // Clock uchun CSS import qilish
import './App.css';

import Omega3 from "./components/assets/omega.JPG";
import Drbeezee from "./components/assets/drbeezee.jpg";
import Kistulhindi from "./components/assets/Kistulhindi.webp";
import HLT from "./components/assets/hilt.png";

function App() {
  const [currentSection, setCurrentSection] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeProduct, setActiveProduct] = useState(null);
  const [selectedIllness, setSelectedIllness] = useState(null);

  const products = [
    { name: 'Dr Beezee', info: `Dr Beezee haqida ma'lumot.`, image: Drbeezee, illnesses: [
      { name: 'Kasallik: oshqozon yazvasi', cure: 'Davosi: omega-3.' }, 
      { name: 'Kasallik B', cure: 'Davosi: DEF.' }
    ] },
    { name: 'HLT', info: `HLT haqida ma'lumot.`, image: HLT, illnesses: [
      { name: 'Kasallik C', cure: 'Davosi: GHI.' },
      { name: 'Kasallik D', cure: 'Davosi: JKL.' }
    ] },
    { name: 'Omega-3', info: `Omega-3 haqida ma'lumot.`, image: Omega3, illnesses: [
      { name: 'Kasallik E', cure: 'Davosi: MNO.' },
      { name: 'Kasallik F', cure: 'Davosi: PQR.' }
    ] },
    { name: 'Kist ul hindi', info: `Kist ul hindi haqida ma'lumot.`, image: Kistulhindi, illnesses: [
      { name: 'Kasallik G', cure: 'Davosi: STU.' },
      { name: 'Kasallik H', cure: 'Davosi: VWX.' }
    ] },
  ];

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
    {
      id: 2,
      title: '2-QISM: MIJOZNI KUTIB OLISH',
      backgroundColor: '#f0f8ff',
      content: (
        <div>
          <Clock />
          <p>Assalomu alaykum, Davron aka! Yaxshimisiz?</p>
          <p><strong>Mijoz javobi:</strong> Vaaleykum assalom, rahmat, yaxshi, kim bu?</p>
          <p><strong>Sotuvchi:</strong> Men Alsafia xalqaro kompaniyasining tajribali eksperti bo'laman. BEPUL konsultatsiya olish uchun yozilgansiz.</p>
        </div>
      ),
    },
    {
      id: 3,
      title: '3-QISM: KASALLIKLAR VA DAVO',
      backgroundColor: '#fff2cc',
      content: selectedProduct ? (
        <div>
          <p>{selectedProduct.name} mahsuloti tegishli bo'lgan kasalliklar:</p>
          <ul className="product-list">
            {selectedProduct.illnesses.map((illness, index) => (
              <li
                key={index}
                className={`product-item ${selectedIllness === illness.name ? 'active' : ''}`}
                onClick={() => {
                  // Agar tanlangan kasallik hozirgi bo'lsa, o'chiradi, aks holda yangilaydi
                  setSelectedIllness(prevIllness =>
                    prevIllness === illness ? null : illness
                  );
                }}
              >
                {illness.name}
              </li>
            ))}
          </ul>
          {selectedIllness && (
            <div className="illness-info">
              <h4>{selectedIllness.name}</h4>
              <p>{selectedIllness.cure}</p>
            </div>
          )}
        </div>
      ) : (
        <p>Mahsulot tanlanmagan. Iltimos, 1-qismda mahsulotni tanlang.</p>
      ),
    },
    
    
    {
      id: 4,
      title: '4-QISM: MAHSULOT HAQIDA MA\'LUMOT',
      backgroundColor: '#ffe6e6',
      content: selectedProduct ? (
        <div className="product-info">
          <h3>{selectedProduct.name}</h3>
          <img src={selectedProduct.image} alt={selectedProduct.name} className="product-image" />
          <p>{selectedProduct.info}</p>
        </div>
      ) : (
        <p>Mahsulot tanlanmagan.</p>
      ),
    },
    {
      id: 5,
      title: '5-QISM: XULOSA VA YAKUN',
      backgroundColor: '#d9edf7',
      content: (
        <div>
          <p>Mijozga xizmatlar uchun minnatdorchilik bildiring va bog'lanish uchun ma'lumot qoldiring.</p>
        </div>        
      ),
    },
  ];

  const nextSection = () => {
    if (currentSection < sections.length) {
      setCurrentSection(currentSection + 1);
    }
  };

  const prevSection = () => {
    if (currentSection > 1) {
      setCurrentSection(currentSection - 1);
    }
  };

  useEffect(() => {
    document.body.style.backgroundColor = sections[currentSection - 1].backgroundColor;
  }, [currentSection]);

  return (
    <div className="App">
      <Clock />
      <div className="section-container">
        <h2 className='card-title'>{sections[currentSection - 1].title}</h2>
        <div className="section-content">
          {sections[currentSection - 1].content}
        </div>
        <div className="navigation-buttons">
          {currentSection > 1 && (
            <button onClick={prevSection} className="btn prev-btn">Orqaga</button>
          )}
          {currentSection < sections.length && (
            <button 
              onClick={nextSection} 
              className={`btn next-btn ${activeProduct ? 'active' : ''}`}
            >
              Keyingi
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
