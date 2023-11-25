import React from 'react';
import Slider from 'react-slick';

export default function SimpleSlider() {
  const settings = {
    dots: false,
    arrow: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <ul>
      <Slider {...settings}>
        <li className="item">
          <img src="assets/img/partners/express.png" alt="partners brand" />
        </li>
        <li className="item">
          <img src="assets/img/partners/javascript.png" alt="partners brand" />
        </li>
        <li className="item">
          <img src="assets/img/partners/mongodb.png" alt="partners brand" />
        </li>
        <li className="item">
          <img src="assets/img/partners/mysql.png" alt="partners brand" />
        </li>
        <li className="item">
          <img src="assets/img/partners/nodejs.png" alt="partners brand" />
        </li>
        <li className="item">
          <img src="assets/img/partners/react.png" alt="partners brand" />
        </li>
        <li className="item">
          <img src="assets/img/partners/typescript.png" alt="partners brand" />
        </li>
      </Slider>
    </ul>
  );
}
