import React, { useState, useEffect, useContext } from "react";
import ReactDOM from "react-dom"
import { Link } from "react-router-dom";
import "../../styles/index.css"

const Preguntas = () => {
  return (
    <>


      <div className="lista col-10">
        <div>
          <h2 className="Thema title">Frequent Questions</h2>
        </div>

        <div className="accordion accordion-flush myAccordion" data-bs-theme="dark" id="accordionFlushExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                <strong>What is Reel Rhapsody?</strong>
              </button>
            </h2>
            <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body fondo">Reel Rhapsody is a streaming service that offers a wide variety of award-winning movies, series and documentaries on almost any internet-connected screen.
                Everything you want to see, Free and secure. There's always something new to discover, and more movies and series are added every week!.</div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
              <strong>How much does Reel Rhapsody cost?</strong>
              </button>
            </h2>
            <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body fondo">Enjoy Reel Rhapsody on your smartphone, tablet, smart TV, laptop or streaming device, totally free, but we accept totally voluntary donations.</div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
              <strong>Where can I watch Reel Rhapsody?</strong>
              </button>
            </h2>
            <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body fondo"> Enjoy wherever you want, whenever you want. Log in to your Reel Rhapsody account to watch content instantly through Reelrhapsody.com from your personal computer or on any internet-connected device that has the Reel Rhapsody app, such as smart TVs, smartphones, tablets, media players .</div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsefour" aria-expanded="false" aria-controls="flush-collapseThree">
              <strong>How do I cancel Reel Rhapsody?</strong>
              </button>
            </h2>
            <div id="flush-collapsefour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body fondo">Reel Rhapsody is flexible. No annoying contracts or commitments. You will not need to cancel anything because Reel Rhapsody is free and when you create your accounts you have no commitment to subscriptions or memberships.</div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsefive" aria-expanded="false" aria-controls="flush-collapseThree">
              <strong>What can I see in Reel Rhapsody?</strong>
              </button>
            </h2>
            <div id="flush-collapsefive" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body fondo">Reel Rhapsody has a wide catalog of movies, series, documentaries, anime, the newest and best recommended. Everything you want to see, whenever you want.</div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsesix" aria-expanded="false" aria-controls="flush-collapseThree">
              <strong>Is Reel Rhapsody good for kids?</strong>
              </button>
            </h2>
            <div id="flush-collapsesix" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body fondo">Reel Rhapsody is for all ages since we have movies and cartoons for the youngest members of the house, for those reasons Reel Rhapsody is the most recommended for your home.</div>
            </div>
          </div>
        </div>

        <div className="suporte d-grid gap-2 col-6 mx-auto">
          <Link to="/TechnicalSupport" className="btn info-buton tec-buton" type="button">Technical Support</Link>
          <Link to="/" className="btn info-buton tec-buton" type="button">Get Started</Link>
        </div>

      </div>
    </>
  );
};

export default Preguntas;