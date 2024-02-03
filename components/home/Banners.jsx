import React, { useEffect, useRef } from 'react';
import './StyleBan.css';

const Banners = () => {
  useEffect(() => {
    const nextButton = document.getElementById('next');
    const prevButton = document.getElementById('prev');
    const backButton = document.getElementById('back');

    const showSlider = (type) => {
      const carousel = document.querySelector('.carousel');
      const listHTML = document.querySelector('.carousel .list');

      carousel.classList.remove('next', 'prev');
      let items = document.querySelectorAll('.carousel .list .item');

      if (type === 'next') {
        listHTML.appendChild(items[0]);
        carousel.classList.add('next');
      } else {
        listHTML.prepend(items[items.length - 1]);
        carousel.classList.add('prev');
      }

      clearTimeout(unAcceppClick);
      unAcceppClick = setTimeout(() => {
        nextButton.style.pointerEvents = 'auto';
        prevButton.style.pointerEvents = 'auto';
      }, 2000);
    };

    let unAcceppClick;

    if (nextButton && prevButton && backButton) {
      nextButton.onclick = function () {
        showSlider('next');
      };

      prevButton.onclick = function () {
        showSlider('prev');
      };

      backButton.onclick = function () {
        const carousel = document.querySelector('.carousel');
        carousel.classList.remove('showDetail');
      };
    }
    

    const intervalId = setInterval(() => {
      showSlider('next'); // Cambiado para que llame a showSlider con 'next'
    }, 10000);

    // Limpieza del intervalo al desmontar el componente para evitar fugas de memoria
    return () => clearInterval(intervalId);
  

  }, []);
  return (
    <>
      <div class="bannerBack">
      <header>
   
    
      </header>
    <div class="carousel">
        <div class="list">



        <div class="item">
                <img src="image/bannerTree.png"/>
                <div class="introduce">
                    <div class="hidden md:block title mb-4"> Enviamos tus certificados directamente a tu ciudad, brindándote comodidad y accesibilidad. </div>
                    <div class="md:hidden title mb-4"> Enviamos tus certificados directamente a tu ciudad! </div>

                    <div class="des">
                    
                    
                    </div>
                    <button class="seeMore">CONOCE MAS</button>
                </div>
            </div>







            <div class="item">
                <img src="image/bannerTwo.png"/>
                <div class="introduce">
                    <div class="title mb-4">Descubre Diplomados y Cursos virtuales de excelencia.</div>
                    
                    <div class="des">
                   
                    </div>
                    <button class="seeMore">CONOCE MAS</button>
                </div>
                
            </div>
           

            <div class="item">
                <img src="image/bannerOne.png"/>
                <div class="introduce">
                    <div class="title mb-4">Inicia un programa 100% online y certifícate.</div>
                
                    <div class="des">
                   
                    </div>
                    <button class="seeMore">Inscribete Ahora</button>
                </div>
                
            </div>

            
        </div>
        <div class="arrows">
            <button id="prev">{"<"}</button>
            <button id="next">{">"}</button>
           
        </div>
    </div>
      </div>
    </>
  );
};

export default Banners;
