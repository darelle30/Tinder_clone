import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Box.css';
import { Pagination, Navigation } from 'swiper/modules';

// Data for SwiperSlides
const slidesData = [
  {
    title: "Shannon & Julian",
    content: [
      "I was feeling lonely back in my hometown because most of my friends had started romantic relationships while I was abroad. We both decided to download Tinder and see what happened.",
      "Without the app we may have never met and embarked on this wild, wonderful journey. Thank you for bringing us and so many other couples together around the world. I will forever be grateful."
    ]
  },
  {
    title: "Gabriel & Fiance",
    content: [
      "I met my fiancé on Tinder during the quarantine for COVID. She is from Lafayette, Indiana and I am from Cleveland, Ohio. We are both Christians who fell madly in love."
    ]
  },
{
  title: "Courtney & Miranda",
  content: [
    "Thanks to Tinder I have found the love of my life and we are to be married.",
    "After going on a few dates and having a few fun nights I came across Miranda. After reading her profile I couldn’t resist swiping right after reading her final sentence... ‘Looking for my super babe for life.’ After talking for about a week we went out on our first date and I knew there was something special about her!"
  ]
},
{
  title: "Kenneth & Elliot",
  content: [
    "I honestly had been on many Tinder dates and was absolutely sure I was meeting a fling to get a free meal and have some fun…3 years and sooo many dates and memories later, I am married to my Tinder guy, Kenny!",
  ]
},
{
  title: "Victoria and Bayleigh ❤️",
  content: [
    "THANK YOU for making it possible for me to meet my soulmate. Five minutes into our first conversation, my now-wife mentioned how we would have an amazing wedding.",
  ]
},
{
  title: "Ryan and Lindsey",
  content: [
    "...just gotten out of a bad breakup and created a Tinder account to keep my mind off the breakup. After about a week of talking, we decided to meet up at a local bar for drinks...we decided to tie the knot in an 18 person ceremony in New Jersey on June 27th 2020.",
  ]
},
{
  title: "Shannon",
  content: [
    "We were at a crossroads and so after a few months of casually dating, we decided to end things. I was in love, but thought this love story wasn't meant to last. Fast forward 9 months, and we had become inseparable."
  ]
},
  
{
  title: "Cuneta",
  content: [
    "We were at a crossroads and so after a few months of casually dating, we decided to end things. I was in love, but thought this love story wasn't meant to last. Fast forward 9 months, and we had become inseparable."
  ]
},

{
  title: "Dingdong",
  content: [
    "We were at a crossroads and so after a few months of casually dating, we decided to end things. I was in love, but thought this love story wasn't meant to last. Fast forward 9 months, and we had become inseparable."
  ]
},
  // Add more data as needed
];

function Box() {
  return (
    <div className="swiper-container">
      <Swiper
        slidesPerView={3}  // Default for large screens
        slidesPerGroup={3} // Default group behavior
        spaceBetween={0}  // Default space between slides
        loop={true}
        modules={[Pagination, Navigation]}
        breakpoints={{
          896: {  // For screens >= 896px (desktop)
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 5,
          },
          0: {  // For screens <= 895px (mobile)
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 10,
          }
        }}
        className="mySwiper"
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index}>
            <figure className="card">
              <span className="quote-mark" aria-hidden="true">“</span>
              <figcaption className="card-title">{slide.title}</figcaption>
              <hr aria-hidden="false" className="card-divider" />
              <blockquote className="card-quote">
                {slide.content.map((text, i) => (
                  <p key={i}>{text}</p>
                ))}
              </blockquote>
            </figure>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Box;
