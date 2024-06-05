import React, { useState } from 'react';
import Slider from 'react-slick';
import Breadcrumbs from '../../../../components/Breadcrumbs';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import nyx from '../../../../imgs/nyx.png';
import vip from '../../../../imgs/vip.jpg';
import omer from '../../../../imgs/omeradam.jpg';
import amir from '../../../../imgs/amirdadon.jpg';
import shlomi from '../../../../imgs/shlomikoriat.jpg';
import kosher from '../../../../imgs/buymekosher.jpg';
import burger from '../../../../imgs/burger.jpg';
import food from '../../../../imgs/foodgift.jpg';
import vegangift from '../../../../imgs/vegangift.jpg';
import asiagift from '../../../../imgs/asiagift.jpg';
import pizzagift from '../../../../imgs/pizzagift.jpg';
import eyalgolan from '../../../../imgs/eyalgolan.jpg';
import spa from '../../../../imgs/spa.jpg';
import meditazia from '../../../../imgs/meditazia.jpg';
import yoga from '../../../../imgs/yoga.jpg';
import hotel from '../../../../imgs/hotel.jpg';
import lifestyle1 from '../../../../imgs/lifestyle1.jpg';
import lifestyle2 from '../../../../imgs/lifestyle2.png';
import lifestyle3 from '../../../../imgs/lifestyle3.png';
import lifestyle4 from '../../../../imgs/lifestyle4.png';



// נתוני תמונות לדוגמה לכל גלריה
const gallery1Images = [
  { id: 7, src: kosher, price: 100, link: '' },
  { id: 8, src: burger, price: 50, link: '' },
  { id: 9, src: food, price: 30, link: '' },
  { id: 10, src: vegangift, price: 130, link: '' },
  { id: 11, src: asiagift, price: 150, link: '' },
  { id: 12, src: pizzagift, price: 110, link: '' },


  
];


const gallery2Images = [
  { id: 2, src: vip, price: 200, link: 'https://buyme.co.il/supplier/22546?gad_source=1&gclid=CjwKCAjw9cCyBhBzEiwAJTUWNacKmPMLAUTjrqak9HNikzMNZafdtyKyz8Xd_Awqqb0OtjBwOVgOZxoCo40QAvD_BwE' },
  { id: 3, src: omer, price: 300, link: 'https://2207.kupat.co.il/show/omer-adam' },
  { id: 4, src: amir, price: 400, link: 'https://www.amirdadon.com/he/home#!live' },
  { id: 5, src: shlomi, price: 500, link: 'https://comy.co.il/event/shlomi-koriat/' },
  { id: 5, src: eyalgolan, price: 310, link: 'https://comy.co.il/event/shlomi-koriat/' },

];

const gallery3Images = [
  { id: 13, src: spa, price: 220, link: '' },
  { id: 14, src: yoga , price: 250, link: '' },
  { id: 14, src: meditazia , price: 230, link: '' },
  { id: 15, src: hotel , price: 400, link: '' },

  { id: 1, src: nyx, price: 100, link: 'https://shop.sharespa.co.il/collections/spa/products/%D7%97%D7%91%D7%99%D7%9C%D7%95%D7%AA-%D7%A1%D7%A4%D7%90-%D7%91%D7%9E%D7%9C%D7%95%D7%9F-%D7%A0%D7%99%D7%A7%D7%A1-%D7%94%D7%A8%D7%A6%D7%9C%D7%99%D7%94?tw_source=google&tw_adid=684146416258&tw_campaign=19819624730&gad_source=1&gclid=CjwKCAjw9cCyBhBzEiwAJTUWNWvZD56gF0k9-tr9-CYYkVX2QvroA6uuuzcGNFatZdkaBPQAQXgotxoCSAwQAvD_BwE' },
  { id: 2, src: vip, price: 200, link: 'https://buyme.co.il/supplier/22546?gad_source=1&gclid=CjwKCAjw9cCyBhBzEiwAJTUWNacKmPMLAUTjrqak9HNikzMNZafdtyKyz8Xd_Awqqb0OtjBwOVgOZxoCo40QAvD_BwE' },

];

const gallery4Images = [
  { id: 16, src: lifestyle1 , price: 140, link: '' },
  { id: 17, src: lifestyle2 , price: 210, link: '' },
  { id: 18, src: lifestyle3 , price: 500, link: '' },
  { id: 19, src: lifestyle4 , price: 370, link: '' },
  
];

const Project = () => {
  const [maxPrice, setMaxPrice] = useState(500);

  const filterImagesByPrice = (images) => images.filter(image => image.price <= maxPrice);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const handlePriceChange = (event) => {
    setMaxPrice(event.target.value);
  };

  const galleries = [
    { id: 1, title: 'Food', images: filterImagesByPrice(gallery1Images) },
    { id: 2, title: 'Performances', images: filterImagesByPrice(gallery2Images) },
    { id: 3, title: 'Relxing gifts', images: filterImagesByPrice(gallery3Images) },
    { id: 4, title: 'Fashion and grooming', images: filterImagesByPrice(gallery4Images) },
  ];

  return (
    <div>
      <div className="page-wrapper" style={{ marginTop: '50px' }}>
        <div className="content container-fluid">
          {/* כותרת העמוד */}
          {/* <Breadcrumbs
            // maintitle="מתנה"
            title="לוח בקרה"
            subtitle="מתנה"
            modal="#create_project"
            name="צור פרויקט"
            Linkname="/projects"
            Linkname1="/project-list"
          /> */}

          <h1 style={{  direction: 'ltr', textAlign: 'left'  }}>Nicole Miller birthday </h1>
          <ul style={{ fontSize: '17px', direction: 'ltr', textAlign: 'left' }}>
  <li>❖ She will turn 27 on her upcoming birthday</li>
  <br />
  <li>❖ She currently lives in Shoham</li>
  <br />
  <li>❖ Her main hobbies are yoga, watching movies and camping</li>
  <br />
  <li>❖ She is Allergic to gluten and eggs</li>
  <br />
  <li>❖ She is Allergic to gluten and eggs</li>
  <br />
  <li>❖ Likes to listen to the Beatles and Shlomo Artzi</li>
</ul>

          <hr />
          {/* /כותרת העמוד */}
          <div style={{ marginTop: '50px' }}>
            <h1 style={{ textAlign: 'center' }}>send gift for Nicol</h1>
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
              <label htmlFor="priceRange" style={{ display: 'block', marginBottom: '10px' }}> Select Amount ₪{maxPrice} </label>
              <input
                type="range"
                id="priceRange"
                name="priceRange"
                min="0"
                max="500"
                value={maxPrice}
                onChange={handlePriceChange}
                style={{ width: '50%' }}
              />
            </div>
            {galleries.map(gallery => (
              <div key={gallery.id} style={{ margin: '50px 0' }}>
                <h2 style={{ textAlign: 'center' }}>{gallery.title}</h2>
                <div style={{ margin: '0 auto', width: '80%' }}>
                  <Slider {...settings}>
                    {gallery.images.map(image => (
                      <div key={image.id} className="image-container">
                        <a href={image.link} target="_blank" rel="noopener noreferrer">
                          <img src={image.src} alt={`תמונה ${image.id}`} className="image" />
                        </a>
                        <p style={{ textAlign: 'center' }}>מחיר: ₪{image.price}</p>
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .page-wrapper {
          padding: 20px;
        }

        .content {
          text-align: center;
        }

        h1 {
          font-size: 2em;
          margin-bottom: 20px;
        }

        h2 {
          font-size: 1.5em;
          margin-bottom: 20px;
        }

        input[type="range"] {
          appearance: none;
          width: 50%;
          height: 8px;
          background: #ddd;
          outline: none;
          opacity: 0.7;
          transition: opacity .2s;
        }

        input[type="range"]:hover {
          opacity: 1;
        }

        input[type="range"]::-webkit-slider-thumb {
          appearance: none;
          width: 25px;
          height: 25px;
          background: #4CAF50;
          cursor: pointer;
          border-radius: 50%;
        }

        input[type="range"]::-moz-range-thumb {
          width: 25px;
          height: 25px;
          background: #4CAF50;
          cursor: pointer;
          border-radius: 50%;
        }

        .image-container {
          padding: 10px;
          width: 100%;
          box-sizing: border-box;
        }

        .image {
          width: 100%;
          height: 200px; /* Adjust the height as needed */
          object-fit: cover;
          border-radius: 8px;
          display: block;
          margin: 0 auto;
        }
      `}</style>
    </div>
  );
};

export default Project;
