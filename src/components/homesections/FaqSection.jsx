import React, { useState } from 'react';
import '../../styles/home/FaqSection.css';


const faqData = [
  {
    question: "Diş beyazlatma işlemi zararlı mıdır?",
    answer: "Doğru uygulandığında diş beyazlatma işlemi diş minesine zarar vermez. Uzman diş hekimi gözetiminde yapılması önerilir."
  },
  {
    question: "İmplant tedavisi ne kadar sürer?",
    answer: "İmplant tedavisi genellikle 2-3 ay sürebilir. Bu süre, hastanın çene yapısına ve iyileşme hızına göre değişebilir."
  },
  {
    question: "Çocuklar için hangi diş tedavileri uygulanır?",
    answer: "Fluor uygulaması, fissür örtücü ve dolgu gibi temel tedaviler uygulanabilir. Ayrıca koruyucu hekimlik ön plandadır."
  }
];

function FaqSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      <h2 className="faq-title">Sıkça Sorulan Sorular</h2>
      <div className="faq-items">
        {faqData.map((item, index) => (
          <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`}>
            <div className="faq-question" onClick={() => toggleAnswer(index)}>
              {item.question}
              <span>{activeIndex === index ? '-' : '+'}</span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FaqSection;