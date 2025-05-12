import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <footer>
        <div className="MainFooter">
          <div className="cul1">
            <span>Social media</span>
            <ul>
              <li>
                <a href="">
                  <img src="img/twitter 1.png" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src="img/facebook 1.png" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src="img/youtube 1.png" />
                </a>
              </li>
            </ul>
            <div className="ContactUs">
              <span className="ContactUsTitle">Contact us</span>
              <span className="whatsappLogo">
                <a href="#">
                  <img src="img/social1.png" alt="Whatsapp" />
                </a>
              </span>
              <div className="phoneNumber">
                <span>+961352689</span>
                <span>+961352689</span>
              </div>
            </div>
            <div className="location">
              <span>Location</span>
              <p>Antelias, Demco Towers, Beirut, Lebanon</p>
            </div>
          </div>
          <div className="cul2"></div>
          <div className="cul3"></div>
        </div>
        <div className="FooterBottom">all rights reserved @ 2025 Aui</div>
      </footer>
    </FooterContainer>
  );
};
const FooterContainer = styled.div`
  width: 100%;
  height: 400px;
  background-color: #2d2d2d;
  color: #fff;
  footer {
    height: 100%;
  }
  .MainFooter {
    width: 1200px;
    height: calc(100% - 80px);
    margin: 0 auto;
    padding-top: 40px;
  }
  .cul1,
  .cul2,
  .cul3 {
    width: 33%;
  }
  .ContactUs {
    width: 100%;
    float: left;
    margin-bottom: 5px;
  }
  .ContactUsTitle {
    width: 100%;
    display: block;
    margin-bottom: 5px;
  }
  .whatsappLogo {
    width: 20px !important;
    height: 40px !important;
    display: flex;
    align-items: center;
    float: left;
    margin-right: 5px;
  }
  .ContactUs span {
    width: 100%;
  }
  .phoneNumber {
    float: left;
    width: 90px;
    height: 40px;
  }
  .phoneNumber span {
    display: block;
  }
  ul {
    width: max-content;
    height: max-content;
    margin: 0;
    margin-top: 10px;
    padding: 0;
  }
  .cul1 ul li {
    list-style-type: none;
    float: left;
  }
  .cul1 ul li a {
    text-decoration: none;
    padding: 5px;
    cursor: pointer;
  }
  .location span {
    width: 100%;
    display: block;
    float: left;
    margin-bottom: 5px;
  }
  .FooterBottom {
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #1a1a1a;
  }
`;
export default Footer;
