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
      <header>
    <div class="logo">JhosyDev</div>
    <nav>
        <a href="">Home</a>
        <a href="">Info</a>
        <a href="">Contact</a>
    </nav>
    
</header>
    <div class="carousel">
        <div class="list">
            <div class="item">
                <img src="images/img1.png"/>
                <div class="introduce">
                    <div class="title">The best Dj all time</div>
                    <div class="topic">AVICII</div>
                    <div class="des">
                      
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, laborum cumque dignissimos quidem atque et eligendi aperiam voluptates beatae maxime.
                    </div>
                    <button class="seeMore">SEE MORE &#8599</button>
                </div>
                <div class="detail">
                    <div class="title">Aerphone GHTK</div>
                    <div class="des">
              
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, reiciendis suscipit nobis nulla animi, modi explicabo quod corrupti impedit illo, accusantium in eaque nam quia adipisci aut distinctio porro eligendi. Reprehenderit nostrum consequuntur ea! Accusamus architecto dolores modi ducimus facilis quas voluptatibus! Tempora ratione accusantium magnam nulla tenetur autem beatae.
                    </div>
                    <div class="specifications">
                        <div>
                            <p>Used Time</p>
                            <p>6 hours</p>
                        </div>
                        <div>
                            <p>Charging port</p>
                            <p>Type-C</p>
                        </div>
                        <div>
                            <p>Compatible</p>
                            <p>Android</p>
                        </div>
                        <div>
                            <p>Bluetooth</p>
                            <p>5.3</p>
                        </div>
                        <div>
                            <p>Controlled</p>
                            <p>Touch</p>
                        </div>
                    </div>
                    <div class="checkout">
                        <button>ADD TO CART</button>
                        <button>CHECKOUT</button>
                    </div>
                </div>
            </div>

            <div class="item">
                <img src="images/img2.png"/>
                <div class="introduce">
                    <div class="title">ES</div>
                    <div class="topic">ES</div>
                    <div class="des">
                  
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, laborum cumque dignissimos quidem atque et eligendi aperiam voluptates beatae maxime.
                    </div>
                    <button class="seeMore">SEE MORE &#8599</button>
                </div>
                <div class="detail">
                    <div class="title">Aerphone GHTK</div>
                    <div class="des">
                  
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, reiciendis suscipit nobis nulla animi, modi explicabo quod corrupti impedit illo, accusantium in eaque nam quia adipisci aut distinctio porro eligendi. Reprehenderit nostrum consequuntur ea! Accusamus architecto dolores modi ducimus facilis quas voluptatibus! Tempora ratione accusantium magnam nulla tenetur autem beatae.
                    </div>
                    <div class="specifications">
                        <div>
                            <p>Used Time</p>
                            <p>6 hours</p>
                        </div>
                        <div>
                            <p>Charging port</p>
                            <p>Type-C</p>
                        </div>
                        <div>
                            <p>Compatible</p>
                            <p>Android</p>
                        </div>
                        <div>
                            <p>Bluetooth</p>
                            <p>5.3</p>
                        </div>
                        <div>
                            <p>Controlled</p>
                            <p>Touch</p>
                        </div>
                    </div>
                    <div class="checkout">
                        <button>ADD TO CART</button>
                        <button>CHECKOUT</button>
                    </div>
                </div>
            </div>

            <div class="item">
                <img src="images/img3.png"/>
                <div class="introduce">
                    <div class="title">EL</div>
                    <div class="topic">EL</div>
                    <div class="des">
                   
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, laborum cumque dignissimos quidem atque et eligendi aperiam voluptates beatae maxime.
                    </div>
                    <button class="seeMore">SEE MORE &#8599</button>
                </div>
                <div class="detail">
                    <div class="title">Aerphone GHTK</div>
                    <div class="des">
                     
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, reiciendis suscipit nobis nulla animi, modi explicabo quod corrupti impedit illo, accusantium in eaque nam quia adipisci aut distinctio porro eligendi. Reprehenderit nostrum consequuntur ea! Accusamus architecto dolores modi ducimus facilis quas voluptatibus! Tempora ratione accusantium magnam nulla tenetur autem beatae.
                    </div>
                    <div class="specifications">
                        <div>
                            <p>Used Time</p>
                            <p>6 hours</p>
                        </div>
                        <div>
                            <p>Charging port</p>
                            <p>Type-C</p>
                        </div>
                        <div>
                            <p>Compatible</p>
                            <p>Android</p>
                        </div>
                        <div>
                            <p>Bluetooth</p>
                            <p>5.3</p>
                        </div>
                        <div>
                            <p>Controlled</p>
                            <p>Touch</p>
                        </div>
                    </div>
                    <div class="checkout">
                        <button>ADD TO CART</button>
                        <button>CHECKOUT</button>
                    </div>
                </div>
            </div>

            <div class="item">
                <img src="images/img4.png"/>
                <div class="introduce">
                    <div class="title">MEJOR</div>
                    <div class="topic">MEJOR</div>
                    <div class="des">
                       
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, laborum cumque dignissimos quidem atque et eligendi aperiam voluptates beatae maxime.
                    </div>
                    <button class="seeMore">SEE MORE &#8599</button>
                </div>
                <div class="detail">
                    <div class="title">Aerphone GHTK</div>
                    <div class="des">
                
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, reiciendis suscipit nobis nulla animi, modi explicabo quod corrupti impedit illo, accusantium in eaque nam quia adipisci aut distinctio porro eligendi. Reprehenderit nostrum consequuntur ea! Accusamus architecto dolores modi ducimus facilis quas voluptatibus! Tempora ratione accusantium magnam nulla tenetur autem beatae.
                    </div>
                    <div class="specifications">
                        <div>
                            <p>Used Time</p>
                            <p>6 hours</p>
                        </div>
                        <div>
                            <p>Charging port</p>
                            <p>Type-C</p>
                        </div>
                        <div>
                            <p>Compatible</p>
                            <p>Android</p>
                        </div>
                        <div>
                            <p>Bluetooth</p>
                            <p>5.3</p>
                        </div>
                        <div>
                            <p>Controlled</p>
                            <p>Touch</p>
                        </div>
                    </div>
                    <div class="checkout">
                        <button>ADD TO CART</button>
                        <button>CHECKOUT</button>
                    </div>
                </div>
            </div>

            <div class="item">
                <img src="images/img5.png"/>
                <div class="introduce">
                    <div class="title">DE </div>
                    <div class="topic">DE</div>
                    <div class="des">
                     
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, laborum cumque dignissimos quidem atque et eligendi aperiam voluptates beatae maxime.
                    </div>
                    <button class="seeMore">SEE MORE &#8599</button>
                </div>
                <div class="detail">
                    <div class="title">Aerphone GHTK</div>
                    <div class="des">
                    
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, reiciendis suscipit nobis nulla animi, modi explicabo quod corrupti impedit illo, accusantium in eaque nam quia adipisci aut distinctio porro eligendi. Reprehenderit nostrum consequuntur ea! Accusamus architecto dolores modi ducimus facilis quas voluptatibus! Tempora ratione accusantium magnam nulla tenetur autem beatae.
                    </div>
                    <div class="specifications">
                        <div>
                            <p>Used Time</p>
                            <p>6 hours</p>
                        </div>
                        <div>
                            <p>Charging port</p>
                            <p>Type-C</p>
                        </div>
                        <div>
                            <p>Compatible</p>
                            <p>Android</p>
                        </div>
                        <div>
                            <p>Bluetooth</p>
                            <p>5.3</p>
                        </div>
                        <div>
                            <p>Controlled</p>
                            <p>Touch</p>
                        </div>
                    </div>
                    <div class="checkout">
                        <button>ADD TO CART</button>
                        <button>CHECKOUT</button>
                    </div>
                </div>
            </div>

            <div class="item">
                <img src="images/img6.png"/>
                <div class="introduce">
                    <div class="title">TODOS!</div>
                    <div class="topic">TODOS!</div>
                    <div class="des">
               
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, laborum cumque dignissimos quidem atque et eligendi aperiam voluptates beatae maxime.
                    </div>
                    <button class="seeMore">SEE MORE &#8599</button>
                </div>
                <div class="detail">
                    <div class="title">Aerphone GHTK</div>
                    <div class="des">
                     
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, reiciendis suscipit nobis nulla animi, modi explicabo quod corrupti impedit illo, accusantium in eaque nam quia adipisci aut distinctio porro eligendi. Reprehenderit nostrum consequuntur ea! Accusamus architecto dolores modi ducimus facilis quas voluptatibus! Tempora ratione accusantium magnam nulla tenetur autem beatae.
                    </div>
                    <div class="specifications">
                        <div>
                            <p>Used Time</p>
                            <p>6 hours</p>
                        </div>
                        <div>
                            <p>Charging port</p>
                            <p>Type-C</p>
                        </div>
                        <div>
                            <p>Compatible</p>
                            <p>Android</p>
                        </div>
                        <div>
                            <p>Bluetooth</p>
                            <p>5.3</p>
                        </div>
                        <div>
                            <p>Controlled</p>
                            <p>Touch</p>
                        </div>
                    </div>
                    <div class="checkout">
                        <button>ADD TO CART</button>
                        <button>CHECKOUT</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="arrows">
            <button id="prev">{"<"}</button>
            <button id="next">{">"}</button>
            <button id="back">See All  &#8599</button>
        </div>
    </div>
    </>
  );
};

export default Banners;
