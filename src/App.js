import './App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {useRef, useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./App.css";
import { Navigation,Pagination } from "swiper";






function App() {
  const [menuClose, setMenuClose] = useState(false)
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  }
  return (
    <div className="Wrap">
      <div className="Detail">
        <nav className={menuClose ? 'active' : ''}>
          <a>Home</a>
          <a>About</a>
          <a>Skils</a>
          <a>Project</a>
        </nav>
        <button onClick={() => {setMenuClose(menuClose => !menuClose)}}>{menuClose ? 'Open':'Close'}</button>
       
       <div className='wrap1'>
          <Swiper navigation={true} modules={[Pagination, Navigation]} pagination={[pagination]} className="mySwiper">
            <SwiperSlide>
              <div className='Center'>
                <h3>W E L C O M E</h3>
                <p>안녕하세요. 프론트엔드 개발자를 목표로 한 포트폴리오입니다.</p>   
            </div>
            </SwiperSlide>
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 1</SwiperSlide>
         </Swiper>
       </div >
      </div>
      
      <div className="intro">  {/* 소개  오른쪽*/}
        <div className="Photo">
          <img src={process.env.PUBLIC_URL + '/img/profile.jpg'} alt="profile" width="300px"/>
        </div>
        <h1 className="Name">최 경신</h1>
        <h2 className="Portfolio">FrontEnd PortFolio.</h2>
        <div className="Sns">
        <img src={process.env.PUBLIC_URL + '/img/github.png'} width="23px"/>
        <img src={process.env.PUBLIC_URL + '/img/kakao.png'} width="23px"/>
        <img src={process.env.PUBLIC_URL + '/img/insta.png'} width="23px"/>
        </div>
        <div className="Mail">
          
            <FontAwesomeIcon icon={faEnvelope} width="20px" className='Mail1'/>
          Contact Me
        </div>
        
      </div>

    </div>
  );
  
}




export default App;
