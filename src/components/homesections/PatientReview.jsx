import React from 'react';
import '../../styles/home/PatientReview.css';

const reviews = [
  {
    name: 'Ayşe K.',
    comment: 'İlk defa bu kadar rahat bir diş tedavisi geçirdim. Klinik harika!',
  },
  {
    name: 'Mehmet T.',
    comment: 'Doktorlar çok ilgiliydi, implant işlemim sorunsuz tamamlandı.',
  },
  {
    name: 'Zeynep A.',
    comment: 'Diş beyazlatma işlemi sonrasında harika sonuçlar aldım. Teşekkürler!',
  },
];

function PatientReviews() {
  return (
    <div className="patient-reviews">
      <h2 className="section-title">Hasta Yorumları</h2>
      <div className="reviews-container">
        {reviews.map((review, index) => (
          <div className="review-card" key={index}>
            <p className="comment">“{review.comment}”</p>
            <p className="name">- {review.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PatientReviews;