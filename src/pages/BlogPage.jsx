import React from 'react';
import Navbar from '../components/layouts/Navbar';
import Footer from '../components/layouts/Footer';
import '../styles/blog/BlogPage.css';

import whiteImage from '../assets/images/white.png';
import toothImage from '../assets/images/tooth.png';
import clinicImage from '../assets/images/clinic.png';

const blogPosts = [
  {
    id: 1,
    title: "Diş Beyazlatma Hakkında Bilmeniz Gerekenler",
    date: "20 Nisan 2025",
    image: whiteImage,
    excerpt: "Diş beyazlatma işlemleri hakkında merak edilenler ve dikkat edilmesi gerekenler bu yazıda...",
    category: "Kozmetik Diş Hekimliği",
    readTime: "4 dakika"
  },
  {
    id: 2,
    title: "Çocuklarda Diş Sağlığı İçin Öneriler",
    date: "15 Nisan 2025",
    image: toothImage,
    excerpt: "Çocuk yaşta doğru diş bakımı alışkanlıkları kazandırmak için ipuçları ve ebeveyn rehberi...",
    category: "Pedodonti",
    readTime: "6 dakika"
  },
  {
    id: 3,
    title: "İmplant Tedavisi Nedir?",
    date: "10 Nisan 2025",
    image: clinicImage,
    excerpt: "İmplant tedavisi, eksik dişlerin yerine kalıcı çözüm sunar. İşlem adımları ve avantajları...",
    category: "Cerrahî İşlemler",
    readTime: "8 dakika"
  }
];

const BlogPage = () => {
  return (
    <>
      <Navbar />
      <div className="blog-page">
        <div className="container">
          <div className="blog-header">
            <h2 className="section-title">Son Blog Yazılarımız</h2>
            <div className="category-filter">
              <button className="active">Tümü</button>
              <button>Kozmetik Diş Hekimliği</button>
              <button>Pedodonti</button>
              <button>Cerrahî İşlemler</button>
            </div>
          </div>

          <div className="blog-grid">
            {blogPosts.map(post => (
              <article key={post.id} className="blog-card">
                <div className="card-image">
                  <img src={post.image} alt={post.title} loading="lazy" />
                  <span className="category-badge">{post.category}</span>
                </div>
                <div className="card-content">
                  <div className="meta-info">
                    <span className="date">{post.date}</span>
                    <span className="read-time">{post.readTime}</span>
                  </div>
                  <h3>{post.title}</h3>
                  <p className="excerpt">{post.excerpt}</p>
                  <button className="read-more-btn">
                    Devamını Oku
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                    </svg>
                  </button>
                </div>
              </article>
            ))}
          </div>

          <div className="pagination">
            <button className="active">1</button>
            <button>2</button>
            <button>3</button>
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogPage;