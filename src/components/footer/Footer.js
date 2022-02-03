import React from "react";
import "../footer/footer.css";
import download from "../data/gdsc.svg";
import { RiFacebookFill } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { ImLinkedin2 } from "react-icons/im";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="media_links">
        <div className="m_media">
          <text>Get connected with us on social networks:</text>
        </div>
        <div className="symbols">
          <div className="instagram">
            <BsInstagram color="white" size="20" />
          </div>
          <div className="facebook">
            <RiFacebookFill color="white" size="20" />
          </div>
          <div className="whatsapp">
            <BsWhatsapp color="white" size="20" />
          </div>
          <div className="linkedin">
            <ImLinkedin2 color="white" size="20" />
          </div>
        </div>
      </div>
      <div className="bottom_footer">
        <div className="about_dsc">
          <div className="about_gdsc">
            <div>
              <img
                className="logo"
                src={download}
                alt="gdsc_logo"
                width="40"
                height="40"
              />
            </div>
            <div className="gdsc_fsform">
              <text>Google Developer Student Clubs</text>
            </div>
          </div>
          <div className="gdsc_text">
            <div>
              <text>
                GDSC Gcet is a community of student developers who are keen to
                learn more and build things for the betterment of the society!
              </text>
            </div>
          </div>
        </div>
        <div className="gdsc_ulink">
          <div className="useful_links">
            <text>USEFUL LINKS</text>
          </div>
          <div className="gdsc_blink">
            <div className="td_link">
              <Link to="/" className="t_link">
                <span>Team</span>
              </Link>
            </div>
            <div className="td_link">
              <Link to="/" className="t_link">
                <span>Events</span>
              </Link>
            </div>
            <div className="td_link">
              <Link to="/" className="t_link">
                <span>Code of Conduct</span>
              </Link>
            </div>
            <div className="td_link">
              <Link to="/" className="t_link">
                <span>Register</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="contact">
          <div className="c_title">
            <text>CONTACT</text>
          </div>
          <div>
            <div className="ca_gdsc">
              <text>
                G H Patel College of Engineering,Bakrol,Anand,Gujarat.
              </text>
            </div>
            <div className="cg_gdsc">
              <text>gdsc.gcet@gmail.com</text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
