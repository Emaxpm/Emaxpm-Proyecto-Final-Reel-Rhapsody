import React, { useState, useEffect, useContext } from "react";
import ReactDOM from "react-dom"
import { Link } from "react-router-dom";
import "../../styles/index.css"


const aboutus = () => {
  return (


    <div className="full">
      <div className="carusel">
        <section>
          <img src="https://wallpapercave.com/wp/wp4441548.png" />
          <img src="https://www.xtrafondos.com/en/descargar.php?id=670&vertical=1" />
          <img src="https://4kwallpapers.com/images/wallpapers/jason-momoa-aquaman-1080x2160-13951.jpg" />
          <img src="https://e1.pxfuel.com/desktop-wallpaper/808/619/desktop-wallpaper-anime-solo-leveling-anime-solo-leveling-thumbnail.jpg" />
          <img src="https://wallpapershome.com/images/pages/pic_v/17478.jpg" />
          <img src="https://w0.peakpx.com/wallpaper/889/344/HD-wallpaper-joker-dance-joaquin-phoenix-joker-2019-joker-stairs.jpg" />
          <img src="https://www.whatspaper.com/wp-content/uploads/2023/10/hd-satoru-gojo-wallpaper-whatspaper.jpg" />
          <img src="https://i.pinimg.com/originals/6c/e8/15/6ce8153fd750ad6b6959dc6ef910c8d7.jpg" />
          <img src="https://wallpapercave.com/wp/wp4342594.jpg" />
          <img src="https://w0.peakpx.com/wallpaper/403/278/HD-wallpaper-vin-diesel-in-fast-and-furious-9-thumbnail.jpg" />
        </section>
      </div>

      <div className="lista col-10">
        <div>
          <h3 className="Thema">Abouts US</h3>
        </div>

        <div className="accordion accordion-flush myAccordion" data-bs-theme="dark" id="accordionFlushExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                <strong>Welcome to Reel Rhapsody!</strong>
              </button>
            </h2>
            <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body fondo">At Reel Rhapsody, our passion is to take you on an unforgettable cinematic journey. We are a passionate team of film lovers who believe that the best stories deserve to be shared. Are you looking for your next favorite movie? You are in the right place!.</div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                <strong>Our mission:</strong>
              </button>
            </h2>
            <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body fondo">Facilitate free access to exceptional films. We want to make discovering new stories as easy as pressing play. At Reel Rhapsody, we believe in the magic of cinema to inspire, entertain and connect people.</div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                <strong>How does it work?:</strong>
              </button>
            </h2>
            <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body fondo">Our team of experts carefully curates a selection of featured films. Whether you're looking for action, drama, comedy or any particular genre, we have something for every taste. The best part? It's completely free.</div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsefour" aria-expanded="false" aria-controls="flush-collapseThree">
                <strong>Make It Possible - Donate:</strong>
              </button>
            </h2>
            <div id="flush-collapsefour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body fondo">Reel Rhapsody is supported by the generosity of our community. If you love what we do and would like to support the continuation of this project, please consider making a donation. Every contribution helps us continue to provide quality content and improve your movie experience.

                Thank you for being part of the Reel Rhapsody community! Together, we make every movie count.</div>
            </div>
          </div>

        </div>
        <div className="suporte d-grid gap-2 col-6 mx-auto">
          <Link to="/TechnicalSupport" className="btn  info-buton tec-buton" type="button">Technical Support</Link>
          <Link to="/" className="btn  info-buton tec-buton" type="button">Get Started</Link>
        </div>
      </div>
    </div>

  );
};

export default aboutus;