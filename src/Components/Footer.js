import React from "react";
import "../Styles/Footer.css";

function Footer() {
  return (
    <div className="footer__cont">
      <footer className="footer">
        <div className="part__one">
          <div className="about__web1">
            <h2 className="foot__title1">About Webicoun India</h2>
            <p>
              Webicoun is a health-tech organization focusing on Emotional,
              Mental and Physical wellness through Webinars and Counselling. We
              aim at solving any type of challenges/problems faced by an
              individual so that these problems do not accumulate and become a
              major problem in long run.
            </p>
            <div className="socials">
              <a href="https://www.facebook.com/Webicounindia/" target="_blank">
                <img
                  className="social__icon"
                  src="https://webicoun.com/assets/facebook.png"
                  alt="logo"
                />
              </a>
              <a
                href="https://instagram.com/webicoun_india?igshid=st7ddh5y4lpd"
                target="_blank"
              >
                <img
                  className="social__icon"
                  src="https://webicoun.com/assets/insta.png"
                  alt="logo"
                />
              </a>
              <a href="https://twitter.com/webicoun" target="_blank">
                <img
                  className="social__icon"
                  src="https://webicoun.com/assets/twitter.png"
                  alt="logo"
                />
              </a>
              <a
                href="https://www.youtube.com/channel/UClDf3yqwPdvDl2f1uN9hI2g"
                target="_blank"
              >
                <img
                  className="social__icon"
                  src="https://webicoun.com/assets/youtube.png"
                  alt="logo"
                />
              </a>
            </div>
          </div>
          <div className="about__web2__cont">
            <div className="about__web2">
              <p className="foot__title2">About</p>
              <a href="https://webicoun.com/contactus" target="_black">
                Contact us
              </a>
              <a href="#" target="_black">
                Blogs
              </a>
              <a href="https://webicoun.com/expert-sign-in" target="_black">
                Login As Expert
              </a>
            </div>
            <div className="about__web2">
              <p className="foot__title2">Account</p>
              <a href="https://webicoun.com/booksection" target="_black">
                FAQ
              </a>
            </div>
          </div>
        </div>
        <div className="part__two">
          <p>Webicoun India © 2020. All Rights Reserved</p>
          <a href="https://webicoun.com/booksection" target="_black">
            Terms & Conditions
          </a>
          <a href="https://webicoun.com/policy" target="_black">
            Privacy Policy
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
