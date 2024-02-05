import React from 'react';
import './Styles.css'; // Importa tu archivo de estilos CSS

const SocialLinks = () => {
  return (
  <div className="card" >

 <a href='https://www.facebook.com/CimadeEC' className="social-link3  mr-2" target='_blank'>
    <img src="/footer/icono_facebook.svg" alt="Facebook" style={{ color: 'white' }} />
  </a>
  <a href='https://www.instagram.com/cimade_ec/' className="social-link1 mr-2" target='_blank'>
    <img src="/footer/icono_insta.svg" alt="Instagram" style={{ color: 'white' }} />
  </a>
  <a href='https://www.tiktok.com/@consorciocimade?lang=es' className="social-link2 mr-2" target='_blank'>
    <img src="/footer/icono_tiktok.svg" alt="Tiktok" style={{ color: 'white' }} />
  </a>
  <a href='https://api.whatsapp.com/send?phone=51900102090' className="social-link4 mr-2" target='_blank'>
    <img src="/footer/Icono_Whatsapp.svg" alt="WhatsApp" style={{ color: 'white' }} />
  </a>
</div>
  );
};

export default SocialLinks;