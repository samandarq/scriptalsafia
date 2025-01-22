import React, { useState, useEffect } from 'react'; 
import Clock from './Clock'; // Clock komponentini import qilish
import './Clock.css'; // Clock uchun CSS import qilish
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { IoMdRefresh } from 'react-icons/io';
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
  const [conversationStep, setConversationStep] = useState(0);

  const products = [
    {
      name: 'Dr Beezee', 
      info: `Dr Beezee haqida batafsil ma'lumot. Bu mahsulot prostata va jinsiy zaiflik kabi kasalliklarni davolashga yordam beradi. Shuningdek, bu mahsulot asab tizimini tinchlantiradi, stressni kamaytiradi va umumiy salomatlikni yaxshilaydi.`,
      image: Drbeezee,
      illnesses: [
        {
          name: 'Kasallik: Prostata shamollashi', 
          cure: 'Davosi: Dr Beezee. Mahsulotni kuniga ikki marta, nonushta va kechki ovqatdan oldin bir dona ichish tavsiya etiladi. Shuningdek, jismoniy mashqlarni amalga oshirish va suvni ko\'p ichish foydalidir. Shifokor bilan maslahatlashish zarur. Prostata uchun foydali ovqatlar va salomatlikni yaxshilash uchun tabiiy o\'simliklar bilan davolash tavsiya etiladi.' 
        },
        {
          name: 'Kasallik: Jinsiy zaiflik', 
          cure: 'Davosi: Dr Beezee. Kuniga bir marta, ertalab och qoringa bir dona ichiladi. Jinsiy faollikni oshirish uchun muntazam jismoniy mashqlar va muvozanatli ovqatlanish zarur. Agar jinsiy zaiflik uzoq davom etsa, shifokor bilan maslahatlashish kerak.' 
        },
        {
          name: 'Kasallik: Qon aylanishi muammolari', 
          cure: 'Davosi: Dr Beezee. Bir dona ertalab va bir dona kechqurun ichiladi. Mahsulot qon aylanishini yaxshilaydi va yurak salomatligini qo\'llab-quvvatlaydi. Kuniga kamida 30 daqiqa jismoniy mashqlarni bajarish foydalidir.' 
        },
        {
          name: 'Kasallik: Yallig\'lanish va og\'riqlar', 
          cure: 'Davosi: Dr Beezee. Mahsulot yallig\'lanishlarni kamaytirishga yordam beradi. Yallig\'lanishning oldini olish uchun har kuni ovqat bilan birga bir dona ichish kerak. Yallig\'lanishni kamaytirish uchun muntazam ravishda yoga yoki meditatsiya qilish tavsiya etiladi.' 
        },
        {
          name: 'Kasallik: Asab tizimi muammolari', 
          cure: 'Davosi: Dr Beezee. Asab tizimini tinchlantirish uchun kuniga bir dona ichiladi. Stressni kamaytirish uchun yoga, nafas olish mashqlari va tabiiy dam olish usullari tavsiya etiladi.' 
        }
      ]
    },
    {
      name: 'HLT', 
      info: `HLT haqida batafsil ma'lumot. Bu mahsulot aloqa sifati pasayishi, qon aylanishi yomonligi, asab tizimi va ruhiy holatni yaxshilashga yordam beradi. Mahsulot stressni kamaytiradi, energiya beradi va umumiy salomatlikni qo'llab-quvvatlaydi.`,
      image: HLT, 
      illnesses: [
        {
          name: 'Kasallik: Aloqa sifati pasligi', 
          cure: 'Davosi: HLT. Har kuni ikki marta 30 daqiqa oldin bir kapsula ichiladi. Bu mahsulot asab tizimini qo\'llab-quvvatlaydi va energiya beradi. Stressni kamaytiradi va xotirani yaxshilaydi.' 
        },
        {
          name: 'Kasallik: Qon aylanishi yomonligi', 
          cure: 'Davosi: HLT. 30 kun davomida kuniga ikki marta, nonushta va kechki ovqatdan oldin bir dona ichish kerak. Bu qon aylanishini yaxshilashga yordam beradi va yurak salomatligini mustahkamlashga yordam beradi.' 
        },
        { 
          name: 'Kasallik: Stress va tashvish', 
          cure: 'Davosi: HLT. Har kuni bir dona, ertalab ovqatdan oldin ichiladi. Stressni kamaytirish va ruhiy holatni yaxshilashga yordam beradi. Yoga, meditatsiya va stressni boshqarish usullari ham tavsiya etiladi.' 
        },
        { 
          name: 'Kasallik: Yomon xotira', 
          cure: 'Davosi: HLT. Har kuni bir kapsula, kun davomida xotirani yaxshilash va ongni tozalash uchun ichiladi. Yaxshi uyqu va konsentratsiya uchun intellektual mashqlar qilish tavsiya etiladi.' 
        },
        { 
          name: 'Kasallik: Uzoq muddatli charchoq', 
          cure: 'Davosi: HLT. Kuniga ikki marta, ertalab va kechqurun bir dona ichiladi. Bu mahsulot energiya beradi va charchoqni kamaytiradi. Muntazam ravishda jismoniy faoliyat va to\'g\'ri ovqatlanish zarur.' 
        },
        { 
          name: 'Kasallik: Asab tizimi zaiflashishi', 
          cure: 'Davosi: HLT. Har kuni bir dona, ovqat bilan birga ichiladi. Asab tizimini kuchaytirish uchun jismoniy mashqlar va muntazam dam olish zarur.' 
        }
      ] 
    },
    { 
      name: 'Omega-3', 
      info: `Omega-3 haqida batafsil ma'lumot. Bu mahsulot yurak-qon tomir kasalliklarini davolash, yallig'lanishni kamaytirish va umumiy sog'liqni yaxshilashga yordam beradi. Shuningdek, xotira va miyada yaxshi funksiyalarni qo'llab-quvvatlaydi.`,
      image: Omega3, 
      illnesses: [
        { 
          name: 'Kasallik: Yallig\'lanish', 
          cure: 'Davosi: Omega-3. Kuniga uch marta, har ovqatdan oldin bir dona kapsula ichiladi. Bu mahsulot yallig\'lanishni kamaytiradi va umumiy sog\'liqni yaxshilaydi. Yallig\'lanishni kamaytirish uchun to\'g\'ri ovqatlanish va jismoniy mashqlar zarur.' 
        },
        { 
          name: 'Kasallik: Yurak-qon tomir kasalliklari', 
          cure: 'Davosi: Omega-3. Har kuni ikki marta, ovqat bilan birga kapsulani ichish kerak. Muntazam foydalanish yurak salomatligini mustahkamlashga yordam beradi. Yurakni qo\'llab-quvvatlash uchun toza ovqatlanish va muntazam jismoniy mashqlar zarur.' 
        },
        { 
          name: 'Kasallik: Yuqori qon bosimi', 
          cure: 'Davosi: Omega-3. Kuniga ikki marta, ovqatdan oldin bir dona kapsula ichish kerak. Qon bosimini normallashtiradi va yurak faoliyatini qo\'llab-quvvatlaydi. Yaxshi uyqu va stressni boshqarish ham muhim.' 
        },
        { 
          name: 'Kasallik: Jigar yog\'lanishi', 
          cure: 'Davosi: Omega-3. Mahsulotni kuniga uch marta, ovqat bilan ichish tavsiya etiladi. Bu mahsulot jigarni tozalaydi va uning sog\'ligini yaxshilaydi. Shuningdek, jismoniy mashqlar va muvozanatli ovqatlanish zarur.' 
        },
        { 
          name: 'Kasallik: Xotira va konsentratsiya muammolari', 
          cure: 'Davosi: Omega-3. Har kuni bir dona kapsula, ertalab ovqat bilan birga ichiladi. Bu mahsulot xotirani yaxshilashga yordam beradi va miyada yaxshi funksiyalarni qo\'llab-quvvatlaydi.' 
        },
        { 
          name: 'Kasallik: Depressiya va ruhiy holatning pasayishi', 
          cure: 'Davosi: Omega-3. Har kuni bir dona kapsula, nonushta bilan birga ichiladi. Bu mahsulot depressiyani kamaytiradi va ruhiy holatni yaxshilaydi. Stressni kamaytirish uchun yoga va meditatsiya qilish foydalidir.' 
        }
      ] 
    },
    { 
      name: 'Kist ul hindi', 
      info: `Kist ul hindi haqida batafsil ma'lumot. Bu mahsulot ko'z salomatligini yaxshilash, qon bosimini tartibga solish va teri kasalliklarini davolashda yordam beradi.`,
      image: Kistulhindi, 
      illnesses: [
        { 
          name: 'Kasallik: Ko\'zda yorug\'likni pasayishi', 
          cure: 'Davosi: Kist ul hindi. Har kuni ikki marta, och qoringa bir dona kapsula ichiladi. Bu ko\'z salomatligini tiklashga yordam beradi va yorug\'likni yaxshilaydi. Shuningdek, ko\'zni toza saqlash uchun ko\'z mashqlarini qilish tavsiya etiladi.' 
        },
        { 
          name: 'Kasallik: Qon bosimi yuqoriligi', 
          cure: 'Davosi: Kist ul hindi. Kuniga bir marta, kechqurun ovqatdan oldin kapsula ichish kerak. Muntazam foydalanish qon bosimini normallashtirishga yordam beradi.' 
        },
        { 
          name: 'Kasallik: Teridagi toshmalar', 
          cure: 'Davosi: Kist ul hindi. Har kuni bir marta, nonushtadan oldin kapsula ichiladi. Terini tozalashga yordam beradi va kasalliklarni davolashga yordam beradi.' 
        },
        { 
          name: 'Kasallik: Teri qizarishi va yallig\'lanishi', 
          cure: 'Davosi: Kist ul hindi. Kapsulani kuniga ikki marta, ovqat bilan birga ichish kerak. Terini yallig\'lanishga qarshi himoya qiladi va tozalashga yordam beradi.' 
        },
        { 
          name: 'Kasallik: Ko\'zdagi qizarish va noqulaylik', 
          cure: 'Davosi: Kist ul hindi. Ko\'zdagi qizarish va noqulaylikni kamaytirish uchun kuniga ikki marta kapsula ichish kerak. Bu mahsulot ko\'zning sog\'ligini yaxshilaydi va ko\'rish qobiliyatini qo\'llab-quvvatlaydi.' 
        }
      ] 
    }
  ];


  const conversation = [
    { question: 
      'Mutaxassiz unda boshladik - Kim uchun xarid qilmoqchisiz ? (urtogiz yoki tanishiz uchunmi bulamasa ularni nomerini bera olaszmi chunki uzlari bn  suhbat qilganimiz yaxshida sogliqlari buyicha )', 
      answer: 'Ozim uchun xarid qilmoqchiman !'
    },
    { question: 'Yoshiz nechida xurmatli mijoz ?', 
      answer: 'Yoshini aytadi klent.' 
    },
    { question: 'Buyiz bn vaznizni ayta olaszmi chunki bu soglizga muhim bulgani uchun surayapman ?', 
      answer: 'buyini vazni aytib ketadi .' 
    },
    { question: 'Xurmatli mijoz sir bulmasa kun davomida qaysi ish faoliyati bn shugunlanasiz sababi kasb kasaligi kelib chiqishi mumkin yani utirib ish faoliyat olib boraszmi yoki sovuqdami bunaqa holatlat sogliqa tasir kursatadi ?', 
      answer: 'gapirib beradi ish faoliyatini ……………………………….' },
    { question: 'organizimizdagi bu noqulay holat qanchadan beri bezota qilib keliyapti ? va bu holatiz buyicha nima qilib kurgansz lecheniya olganmisz qanaqa dorilardan istemol qilgansz va unidan rezultati szni qoniqtirdimi manga aniqroq aytib bersez shuniga qarab suhbatimizni olib boraman ', 
      answer: 'gapirib beradi.' 
    },
    { question: 'Yana bir savolim bor kuni davomida holiszlik va charchash sizda kuzatiladimi va asab tizmiz qanday tez asabiylashib ketaszmi yo ogir bosiqroqmisiz sababi asab tizimi tufayli kuplab kassalik yuza keladi  Davleniya nechi yuradi rabochiy va qandili deyabetiz bormi ?', 
      answer: '………………………………………………………….' 
    },
    { question: 'Hazm tizimiz qanday jigildon qaynashlar bormi yoki ovqatlangandan keyin noqulayliklar bormi? ichki tomlama dam bulishlar yoki qabziyatlar bormi? bu holatlar szda qanchadan beri kuzatiliyapti va undan keyin ogiz hidlanishlariz bormi ', 
      answer: '……………………………………………………' 
    },
    { question: 'Urolog tomonlama kelsak tez tez hojatga chiqish bormi ? peshobdan keyin esa qovugda noqulayliklar bormi yani ogriqlar achishlar tomchilashlar - jinsiy tomonlama avvalkidan nisbatan pasayishlar bormi - tez – tez bushanish - Hohish kamayib ketish holatlar ', 
      answer: '……………………………………………………' 
    },
    { question: 'Bu holat qanchadan beri bezota qiliyapti? Va bu holat buyicha nimalara  qilib kurgansiz qanaqa dori vositalar istemol qilgansiz lechiniya olganmisz likin szga tasiri szni qoniqtirmaganmi ? ', 
      answer: '……………………………………………………' 
    },
    { question: 'Va oxirgi savolim oyoq qullariz muzlaydimi va tomir tortishib qoladimi ? ', 
      answer: '……………………………………………………' 
    },
    { question: 'Xuramatli mijoz sizni holatizni tuliq urganib buldim va holatiz buyicha qilib tushunitirib utaman savollariz bulsa oxirida berib utasz kelishdikmi ? ', 
      answer: '……………………………………………………' 
    },
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
      content: selectedProduct ? (
        <div>
          <p>Assalomu alaykum! Mijoz ismi ……………..</p>
          <p>Men (Operator ismi) ...... Alsafiya kompaniyasi mutaxassisi. Siz bizning <strong>{selectedProduct.name} </strong>mahsulotimizga qiziqish qoldirgan ekansiz, to‘g‘rimi?</p>
          <p className='second-text-op'>
            <b>Mutaxassiz: </b>
            Hop Tushunarli Yaxshi. Keling bulmasa bitta narsaga kelishaylik?
            man sizga 3 ta 4 ta savollar beraman holatizni urganish uchun . 
            Rozimisiz
          </p>
        </div>
      ) : (
        <p>Iltimos, 1-qismda mahsulotni tanlang.</p>
      ),
    },
    {
      id: 3,
      title: '3-QISM: SAVOL-JAVOB',
      backgroundColor: '#e8f5e9',
      content: (
        <div id='third-section'>
          <h4>Operator va mijoz o'rtasida savol-javob</h4>
          {conversationStep < conversation.length ? (
            <div>
              <p><strong>Operator:</strong> {conversation[conversationStep].question}</p>
              <p><strong>Mijoz:</strong> {conversation[conversationStep].answer}</p>
              <button
                className="btn next-btn"
                onClick={() => setConversationStep(conversationStep + 1)}
              >
                Keyingi savol
              </button>
            </div>
          ) : (
            <p>Barcha savol-javoblar yakunlandi.</p>
          )}
        </div>
      ),
    },
    {
      id: 4,
      title: '4-QISM: KASALLIKLAR VA DAVO',
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
      id: 5,
      title: '5-QISM: MAHSULOT HAQIDA MA\'LUMOT',
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
      id: 6,
      title: '6-QISM: XULOSA VA YAKUN',
      backgroundColor: '#d9edf7',
      content: (
        <div>
          <p>Mijozga xizmatlar uchun minnatdorchilik bildiring va bog'lanish uchun ma'lumot qoldiring.</p>
          <p>Agar szga tugri kelgan bulsa maqul bulsa maxsulotni rasmiylashtiramiza managa manzilni tuliq ayta olaszmi 
          mahsulotimiz 24 soatdan 48 soatgacha boradi qullizga olishiz bn tulovni amalga oshirasz keyin esa managa tel qilasz  istemol tartibni urgataman</p>
    
          <button className="reset-button" onClick={() => window.location.reload()}>
      <IoMdRefresh className="refresh-icon" />
      Qayta boshlash
    </button>

        </div>        
      ),
    }
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
            <button onClick={prevSection} className="btn prev-btn">
              <FaArrowLeft /> Orqaga
            </button>
          )}
          {currentSection < sections.length && (
            <button 
              onClick={nextSection} 
              className={`btn next-btn ${activeProduct ? 'active' : ''}`}
            >
              Keyingi <FaArrowRight />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
  