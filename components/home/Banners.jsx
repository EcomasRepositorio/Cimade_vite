<<<<<<< HEAD
import React from 'react'
import './styleBann.css'

=======
import React, { useEffect } from 'react';
import './StyleBan.css';
>>>>>>> 777689514b493e14a3365ec4a428b7c104596f28


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
<<<<<<< HEAD
   

    <>
    <div class="backgroundMain">
    <header>
        <div className="logo">JhosyDev</div>
        <nav>
          <a href="">Home</a>
          <a href="">Info</a>
          <a href="">Contact</a>
        </nav>
      </header>

      <div className="carousel">
        <div className="list">
          {/* ... (resto de tu código) ... */}

          <div className="item">
                <img src="/image/traverso1.png"/>
                <div className="introduce">
                    <div className="title">The best Dj all time</div>
                    <div className="topic">AVICII</div>
                    <div className="des">
                     
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, laborum cumque dignissimos quidem atque et eligendi aperiam voluptates beatae maxime.
                    </div>
                    <button className="seeMore">SEE MORE &#8599</button>
                </div>
                <div className="detail">
                    <div className="title">Aerphone GHTK</div>
                    <div className="des">
                    
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, reiciendis suscipit nobis nulla animi, modi explicabo quod corrupti impedit illo, accusantium in eaque nam quia adipisci aut distinctio porro eligendi. Reprehenderit nostrum consequuntur ea! Accusamus architecto dolores modi ducimus facilis quas voluptatibus! Tempora ratione accusantium magnam nulla tenetur autem beatae.
                    </div>
                    <div className="specifications">
=======
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
>>>>>>> 777689514b493e14a3365ec4a428b7c104596f28
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
<<<<<<< HEAD
                    <div className="checkout">
=======
                    <div class="checkout">
>>>>>>> 777689514b493e14a3365ec4a428b7c104596f28
                        <button>ADD TO CART</button>
                        <button>CHECKOUT</button>
                    </div>
                </div>
            </div>
<<<<<<< HEAD
            
            <div className="item">
                <img src="/image/traverso1.png"/>
                <div className="introduce">
                    <div className="title">The best Dj all time</div>
                    <div className="topic">AVICII</div>
                    <div className="des">
                     
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, laborum cumque dignissimos quidem atque et eligendi aperiam voluptates beatae maxime.
                    </div>
                    <button className="seeMore">SEE MORE &#8599</button>
                </div>
                <div className="detail">
                    <div className="title">Aerphone GHTK</div>
                    <div className="des">
                    
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, reiciendis suscipit nobis nulla animi, modi explicabo quod corrupti impedit illo, accusantium in eaque nam quia adipisci aut distinctio porro eligendi. Reprehenderit nostrum consequuntur ea! Accusamus architecto dolores modi ducimus facilis quas voluptatibus! Tempora ratione accusantium magnam nulla tenetur autem beatae.
                    </div>
                    <div className="specifications">
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
                    <div className="checkout">
                        <button>ADD TO CART</button>
                        <button>CHECKOUT</button>
                    </div>
                </div>
            </div>

            <div className="item">
                <img src="/image/traverso1.png"/>
                <div className="introduce">
                    <div className="title">The best Dj all time</div>
                    <div className="topic">AVICII</div>
                    <div className="des">
                     
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, laborum cumque dignissimos quidem atque et eligendi aperiam voluptates beatae maxime.
                    </div>
                    <button className="seeMore">SEE MORE &#8599</button>
                </div>
                <div className="detail">
                    <div className="title">Aerphone GHTK</div>
                    <div className="des">
                    
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, reiciendis suscipit nobis nulla animi, modi explicabo quod corrupti impedit illo, accusantium in eaque nam quia adipisci aut distinctio porro eligendi. Reprehenderit nostrum consequuntur ea! Accusamus architecto dolores modi ducimus facilis quas voluptatibus! Tempora ratione accusantium magnam nulla tenetur autem beatae.
                    </div>
                    <div className="specifications">
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
                    <div className="checkout">
                        <button>ADD TO CART</button>
                        <button>CHECKOUT</button>
                    </div>
                </div>
            </div>

            <div className="item">
                <img src="/image/traverso1.png"/>
                <div className="introduce">
                    <div className="title">The best Dj all time</div>
                    <div className="topic">AVICII</div>
                    <div className="des">
                     
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, laborum cumque dignissimos quidem atque et eligendi aperiam voluptates beatae maxime.
                    </div>
                    <button className="seeMore">SEE MORE &#8599</button>
                </div>
                <div className="detail">
                    <div className="title">Aerphone GHTK</div>
                    <div className="des">
                    
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, reiciendis suscipit nobis nulla animi, modi explicabo quod corrupti impedit illo, accusantium in eaque nam quia adipisci aut distinctio porro eligendi. Reprehenderit nostrum consequuntur ea! Accusamus architecto dolores modi ducimus facilis quas voluptatibus! Tempora ratione accusantium magnam nulla tenetur autem beatae.
                    </div>
                    <div className="specifications">
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
                    <div className="checkout">
                        <button>ADD TO CART</button>
                        <button>CHECKOUT</button>
                    </div>
                </div>
            </div>
                            
        </div>
        <div className="arrows">
          <button className="prev">&lt;</button>
          <button className="next">&gt;</button>
          <button className="back">See All  &#8599;</button>
        </div>
      </div>

      <script src="./app.js"></script>

    </div>
      
    </>
  );
};

export default Banners;









=======

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
>>>>>>> 777689514b493e14a3365ec4a428b7c104596f28
