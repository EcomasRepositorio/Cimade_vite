import React, { useEffect } from 'react';
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
                    <div class="title">ES</div>
                    <div class="topic">ES</div>
                    <div class="des">
                  
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, laborum cumque dignissimos quidem atque et eligendi aperiam voluptates beatae maxime.
                    </div>
                    <button class="seeMore">SEE MORE &#8599</button>
                </div>
            </div>







            <div class="item">
                <img src="image/bannerTwo.png"/>
                <div class="introduce">
                    <div class="title">CIMADE</div>
                    <div class="topic">AVICII </div>
                    <div class="des">
                  
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, laborum cumque dignissimos quidem atque et eligendi aperiam voluptates beatae maxime.
                    </div>
                    <button class="seeMore">SEE MOREss &#8599</button>
                </div>
                
            </div>
           

            <div class="item">
                <img src="image/bannerOne.png"/>
                <div class="introduce">
                    <div class="title">ES</div>
                    <div class="topic">ES</div>
                    <div class="des">
                  
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, laborum cumque dignissimos quidem atque et eligendi aperiam voluptates beatae maxime.
                    </div>
                    <button class="seeMore">SEE MORE &#8599</button>
                </div>
                
            </div>

            
        </div>
        <div class="arrows">
            <button id="prev">{"<"}</button>
            <button id="next">{">"}</button>
            <button id="back">See All  &#8599</button>
        </div>
    </div>
      </div>
    </>
  );
};

export default Banners;
