import React, { useState, useEffect } from 'react'; 
import Clock from './Clock'; // Clock komponentini import qilish
import './Clock.css'; // Clock uchun CSS import qilish
import './App.css';

import Omega3 from "./components/img/omega.JPG";
import Drbeezee from "./components/img/drbeezee.jpg";
import Kistulhindi from "./components/img/Kistulhindi.webp";
import HLT from "./components/img/hilt.png";

function App() {
  const [currentSection, setCurrentSection] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [dayName, setDayName] = useState('');
  const [activeProduct, setActiveProduct] = useState(null);

  const products = [
    { name: 'Dr Beezee', info: `Dr Beezee haqida ma'lumot. Kasalliklar: XYZ, davo: ABC.`, image: Drbeezee, category: 'Kasallik: XYZ', cure: 'Og\'riqni davo beradi.' },
    { name: 'HLT', info: `HLT haqida ma'lumot. Kasalliklar: DEF, davo: GHI.`, image: HLT, category: 'Kasallik: DEF', cure: 'Og\'riqni davo beradi.' },
    { name: 'Tibbio Tibomed', info: `Tibbio Tibomed haqida ma'lumot. Kasalliklar: UVW, davo: JKL.`, image: Omega3, category: 'Kasallik: UVW', cure: 'Og\'riqni davo beradi.' },
    { name: 'Omega-3', info: `Omega-3 haqida ma'lumot. Kasalliklar: ABC, davo: MNO.`, image: Omega3, category: 'Kasallik: ABC', cure: 'Og\'riqni davo beradi.' },
    { name: 'Kist ul hindi', info: `Kist ul hindi haqida ma'lumot. Kasalliklar: PQR, davo: STU.`, image: Kistulhindi, category: 'Kasallik: PQR', cure: 'Og\'riqni davo beradi.' },
  ];

  const sections = [
    {
      id: 1,
      title: '1-QISM: MIJOZNI KUTIB OLISH',
      backgroundColor: '#f0f8ff',
      content: (
        <div>
          <Clock />
          <p>Assalomu alaykum, Davron aka! Yaxshimisiz?</p>
          <p><strong>Mijoz javobi:</strong> Vaaleykum assalom, rahmat, yaxshi, kim bu?</p>
          <p><strong>Sotuvchi:</strong> Men Alsafia xalqaro kompaniyasining tajribali eksperti FAMILIYA ISMIZ bo'laman. HLT shifobaxsh HERBAL PASTAmizga murojaat qilgan ekansiz. BEPUL konsultatsiya olish uchun yozilgansiz.</p>
        </div>
      ),
    },
    {
      id: 2,
      title: "2-QISM: MAHSULOT HAQIDA SO'RASH",
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
      id: 3,
      title: '3-QISM: MAHSULOT HAQIDA MA\'LUMOT',
      backgroundColor: '#ffe6e6',
      content: selectedProduct ? (
        <div className="product-info">
          <h3>{selectedProduct.name}</h3>
          <img src={selectedProduct.image} alt={selectedProduct.name} className="product-image" />
          <p>{selectedProduct.info}</p>
          <p><strong>Kasallik: </strong>{selectedProduct.category}</p>
          <p><strong>Davo: </strong>{selectedProduct.cure}</p>
        </div>
      ) : (
        <p>Mahsulot tanlanmagan.</p>
      ),
    },
    {
      id: 4,
      title: '4-QISM: SAVOLLAR VA JAVOBLAR',
      backgroundColor: '#fff2cc',
      content: (
        <div>
          <p>Mijozning savollariga javob berish uchun bu yerda ma'lumot kiritiladi.</p>
        </div>
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

  // Set the day name
  useEffect(() => {
    const date = new Date();
    const day = date.toLocaleString('uz-UZ', { weekday: 'long' });
    setDayName(day);
  }, []); 

  // Orqa fonni bodyga o'zgartirish uchun useEffect qo'shish
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
