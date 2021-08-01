import React from 'react';
import { Link } from 'react-router-dom';



const Footer = () => {
    return (
       <footer>
  <div className="container">
    <div className="back-to-top">
      <a href="#hero"><i className="fas fa-chevron-up" /></a>
    </div>
    <div className="footer-content">
      <div className="footer-content-about animate-top">
        <h4>About Rosa</h4>
        <div className="asterisk"><i className="fas fa-asterisk" /></div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias autem officiis consequatur pariatur repellendus eos accusamus distinctio iste ducimus quisquam? Sit libero impedit itaque reiciendis aspernatur molestias cumque architecto dolores!
        </p>
      </div>
      <div className="footer-content-divider animate-bottom">
        <div className="social-media">
          <h4>Follow along</h4>
          <ul className="social-icons">
            <li>
              <Link to="#"><i className="fab fa-twitter" /></Link>
            </li>
            <li>
              <Link to="#"><i className="fab fa-facebook-square" /></Link>
            </li>
            <li>
              <Link to="#"><i className="fab fa-pinterest" /></Link>
            </li>
            <li>
              <Link to="#"><i className="fab fa-linkedin-in" /></Link>
            </li>
            <li>
              <Link to="#"><i className="fab fa-tripadvisor" /></Link>
            </li>
          </ul>
        </div>
        <div className="newsletter-container">
          <h4>News letter</h4>
          <form action className="newsletter-form">
            <input type="text" className="newsletter-input" placeholder="Your email address..." />
            <button className="newsletter-btn" type="submit"><i className="fas fa-envelope" /></button>
          </form>
        </div>
      </div>
    </div>
  </div>
</footer>

  );
}

export default Footer;
