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
                    <div class="title">¡Expande tu conocimiento con nuestros diplomados y cursos de excelencia! </div>
                    <div class="topic">___________</div>
                    <div class="des">
                  
                    Enviamos tus certificados directamente a tu ciudad, brindándote comodidad y accesibilidad. ¡Inscríbete hoy y lleva tu carrera al siguiente nivel con nosotros!"
                    </div>
                    <button class="bottonBanner">CONOCE MAS</button>
                </div>
            </div>







            <div class="item">
                <img src="image/bannerTwo.png"/>
                <div class="introduce">
                    <div class="title">Descubre Diplomados y Cursos virtuales de excelencia.</div>
                    <div class="topic">______________ </div>
                    <div class="des">
                  
                    Conéctate desde cualquier lugar del planeta y sumérgete en experiencias de aprendizaje interactivas. Desarrolla habilidades de vanguardia con expertos de la industria. ¡Tu camino hacia el éxito comienza aquí! 
                    </div>
                    <button class="bottonBanner">CONOCE MAS</button>
                </div>
                
            </div>
           

            <div class="item">
                <img src="image/bannerOne.png"/>
                <div class="introduce">
                    <div class="title">Inicia un programa 100% online y certifícate.</div>
                    <div class="topic">____________</div>
                    <div class="des">
                    Descubre nuestras capacitaciones en línea líderes en la industria. Accede a contenido de vanguardia desde la comodidad de tu hogar. Participa en nuestras clases interactivas y obtén certificados digitales al instante.
                       
                    </div>
                    <button class="bottonBanner">Inscribete Ahora</button>
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
