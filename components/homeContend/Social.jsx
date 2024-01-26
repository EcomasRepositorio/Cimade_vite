import React from 'react';
import './Styles.css'; // Importa tu archivo de estilos CSS

const SocialLinks = () => {
  return (
    <div className="card" >
 
 <a className="social-link3  mr-2" m>
    <img src="/icons/icono_facebook.svg" alt="Facebook" style={{ color: 'white' }} />
  </a>
  <a className="social-link1 mr-2">
    <img src="/icons/icono_insta.svg" alt="Instagram" style={{ color: 'white' }} />
  </a>
  <a className="social-link2 mr-2">
    <img src="/icons/icono_tiktok.svg" alt="Tiktok" style={{ color: 'white' }} />
  </a>
  <a className="social-link4 mr-2">
    <img src="/icons/Icono_Whatsapp.svg" alt="WhatsApp" style={{ color: 'white' }} />
  </a>
</div>

  );
};

export default SocialLinks;
