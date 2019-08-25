import React, { Component } from 'react';
import Swiper from 'react-id-swiper';
import styled from 'styled-components';
import '../../styles/swiper.min.css';
import './Swiper.scss';


// 引入本地图片资源  react限制不能引入src外部资源
import s1 from '../../assets/images/s1.jpg'
import s2 from '../../assets/images/s2.jpg'


// 使用styled-components框架
const SwiperItem = styled.div `
  width:100%;
  height:200px;
`;

const SwiperImg = styled.img `
  width:100%;
`;


const ReactSwiper = ()=> {
  const params = {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  }
  return (
    <div>
      <Swiper {...params}>
        <SwiperItem>
          <SwiperImg src={s1}></SwiperImg>
        </SwiperItem>
        <SwiperItem>
          <SwiperImg src={s2}></SwiperImg>
        </SwiperItem>
      </Swiper>
    </div>
  )
}

export default ReactSwiper;