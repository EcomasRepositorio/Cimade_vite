import React, { useEffect, useRef, useCallback } from 'react';
import './StyleBan.css';

const Banners = () => {
  const nextButtonRef = useRef(null);
  const prevButtonRef = useRef(null);
  const unAcceptClick = useRef(null);

  const showSlider = useCallback((type) => {
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

    clearTimeout(unAcceptClick.current);
    unAcceptClick.current = setTimeout(() => {
      nextButtonRef.current && (nextButtonRef.current.style.pointerEvents = 'auto');
      prevButtonRef.current && (prevButtonRef.current.style.pointerEvents = 'auto');
    }, 2000);
  }, []);

  useEffect(() => {
    const handleNextClick = () => showSlider('next');
    const handlePrevClick = () => showSlider('prev');
  
    const nextButton = nextButtonRef.current;
    const prevButton = prevButtonRef.current;
  
    if (nextButton) {
      nextButton.addEventListener('click', handleNextClick);
    }
  
    if (prevButton) {
      prevButton.addEventListener('click', handlePrevClick);
    }
  
    const intervalId = setInterval(() => {
      showSlider('next');
    }, 10000);
  
    return () => {
      clearInterval(intervalId);
      clearTimeout(unAcceptClick.current);
  
      if (nextButton) {
        nextButton.removeEventListener('click', handleNextClick);
      }
  
      if (prevButton) {
        prevButton.removeEventListener('click', handlePrevClick);
      }
    };
  }, [showSlider]);

  return (
    <>
      <div className="bannerBack" >
        <header></header>
        <div className="carousel "> 
          <div className="list">
            {/* ... */}
            <div className="item">
                <img src="image/bannerTree.png"/>
                <div className="introduce">
                    <div className="hidden md:block title mb-4"> Enviamos tus certificados directamente a tu ciudad, brindándote comodidad y accesibilidad. </div>
                    <div className="md:hidden title mb-4"> Enviamos tus certificados directamente a tu ciudad! </div>

                    <div className="des">
                    
                    
                    </div>
                    <button className="seeMore">CONOCE MAS</button>
                </div>
            </div>







            <div className="item">
                <img src="image/supra2.png"/>
                <div className="introduce">
                    <div className="title mb-4">Descubre Diplomados y Cursos virtuales de excelencia.</div>
                    
                    <div className="des">
                   
                    </div>
                    <button className="seeMore">CONOCE MAS</button>
                </div>
                
            </div>
           

            <div className="item">
                <img src="image/bannerOne.png"/>
                <div className="introduce">
                    <div className="title mb-4">Inicia un programa 100% online y certifícate.</div>
                
                    <div className="des">
                   
                    </div>
                    <button className="seeMore">Inscribete Ahora</button>
                </div>
                
            </div>
          </div>
          <div className="arrows">
            <button id='prev' ref={prevButtonRef}>{"<"}</button>
            <button id='next' ref={nextButtonRef}>{">"}</button>
      
          </div>
          

        </div>
      </div>
    </>
  );
};

export default Banners;
