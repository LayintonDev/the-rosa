/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Link } from 'react-router-dom';

import ourstory from "../../assets/our-story-1.jpg"
import menu1 from "../../assets/menu-group-1.jpg"
import menu2 from "../../assets/menu-group-2.jpg"
import menu3 from "../../assets/menu-group-3.jpg"
import menu4 from "../../assets/menu-group-4.jpg"
import delight1 from "../../assets/delight-group-1.jpg"
import delight2 from "../../assets/delight-group-2.jpg"
const Main = () => {
    return (
      <>
  
  <section className="hero" id="hero">
    <div className="container">
      <h2 className="sub-headline">
        <span className="first-letter">W</span>elcome
      </h2>
      <h1 className="headline">The Rosa</h1>
      <div className="headline-description">
        <div className="separator">
          <div className="line line-left" />
          <div className="asterisk"><i className="fas fa-asterisk" /></div>
          <div className="line line-right" />
        </div>
        <div className="single-animation">
          <h5>Ready to be opened</h5>
          <Link to="#" className="btn cta-btn">Explore</Link>
        </div>
      </div>
    </div>
  </section>
   {/* Hero ends */}
  <section className="discover-our-story">
    <div className="container">
      <div className="restaurant-info">
        <div className="restaurant-description padding-right animate-left">
          <div className="global-headline">
            <h2 className="sub-headline">
              <span className="first-letter">D</span>iscover
            </h2>
            <h1 className="headline headline-dark">Our Story</h1>
            <div className="asterisk"><i className="fas fa-asterisk" /></div>
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet autem maxime nisi dolorem iusto recusandae, dignissimos nesciunt nihil qui deleniti illo voluptate quod impedit culpa animi assumenda, sunt dolores. Molestias!
          </p>
          <Link to="#" className="btn body-btn">About us</Link>
        </div>
        <div className="restaurant-info-img animate-right">
          <img src={ourstory} alt />
        </div>
      </div>
    </div>
  </section>
  {/* discover-our-story ends */} 
  <section className="tasteful-recipes between">
    <div className="container">
      <div className="global-headline">
        <div className="animate-top">
          <h2 className="sub-headline">
            <span className="first-letter">T</span>asteful 
          </h2>
        </div>
        <div className="animate-bottom">
          <h1 className="headline ">Recipes</h1>
        </div>
      </div>
    </div>
  </section>
   {/* Tasteful recipe ends */} 
  <section className="discover-our-menu">
    <div className="container">
      <div className="restaurant-info">
        <div className="image-group padding-right animate-left">
          <img src={menu1} alt />
          <img src={menu2} alt />
          <img src={menu3} alt />
          <img src={menu4} alt />
        </div>
        <div className="restaurant-description animate-right">
          <div className="global-headline">
            <h2 className="sub-headline">
              <span className="first-letter">D</span>iscover
            </h2>
            <h1 className="headline headline-dark">Menu</h1>
            <div className="asterisk"><i className="fas fa-asterisk" /></div>
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi labore iste optio magni molestias, ipsam veritatis distinctio libero itaque fuga, quia aperiam accusantium aliquid similique perferendis dolore illo eius exercitationem?
          </p>
          <Link to="#" className="btn body-btn">View the full menu</Link>
        </div>
      </div>
    </div>
  </section>
   {/* discover-our-menu ends */}
  <section className="perfect-blend between">
    <div className="container">
      <div className="global-headline">
        <div className="animate-top">
          <h2 className="sub-headline">
            <span className="first-letter">T</span>he perfect 
          </h2>
        </div>
        <div className="animate-bottom">
          <h1 className="headline ">Blend</h1>
        </div>
      </div>
    </div>
  </section>
  {/* perfect-blend ends */} 
  <section className="curlinary-delight">
    <div className="container">
      <div className="restaurant-info">
        <div className="restaurant-description padding-right animate-left">
          <div className="global-headline">
            <h2 className="sub-headline">
              <span className="first-letter">C</span>urlinary
            </h2>
            <h1 className="headline headline-dark">Delight</h1>
            <div className="asterisk"><i className="fas fa-asterisk" /></div>
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet autem maxime nisi dolorem iusto recusandae, dignissimos nesciunt nihil qui deleniti illo voluptate quod impedit culpa animi assumenda, sunt dolores. Molestias!
          </p>
          <Link to="#" className="btn body-btn">Make Link reservation</Link>
        </div>
        <div className="image-group">
          <img className="animate-top" src={delight1} alt />
          <img className="animate-bottom" src={delight2} alt />
        </div>
      </div>
    </div>
  </section>
  {/* curlinary-delight ends */} 
  </>
    );
}

export default Main;
