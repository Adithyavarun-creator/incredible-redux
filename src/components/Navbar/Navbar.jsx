import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import {
  NavigationContainer,
  NavListItems,
  MobileIcon,
  ModalBox,
  LogoImage,
  NavLinks,
} from "../../styles/NavbarStyle";
import AOS from "aos";
import "aos/dist/aos.css";
import { BsShareFill } from "react-icons/bs";
import Logo from "../../assets/netflix.png";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  const url = "https://incredible-indol.vercel.app";

  const shareFunction = async () => {
    try {
      await navigator.share({
        text: "Follow this webpage for watcing free movies",
        url: url,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <NavigationContainer>
        <NavListItems>
          <NavLinks to="/">
            <LogoImage src={Logo} alt="" />
          </NavLinks>
          <NavLinks to="/about">About </NavLinks>
          <NavLinks to="/plans&subscriptions">Subscriptions</NavLinks>

          <NavLinks onClick={shareFunction}>
            <span style={{ color: "#1da1f2" }}>Share</span>
            <span>
              <BsShareFill className="shareIcon" />
            </span>
          </NavLinks>
        </NavListItems>
      </NavigationContainer>

      <MobileIcon onClick={() => setToggle(!toggle)}>
        {toggle ? (
          <AiOutlineClose className="icons" />
        ) : (
          <GiHamburgerMenu className="icons" />
        )}
      </MobileIcon>

      {toggle && (
        <ModalBox data-aos="fade-down">
          <NavLinks to="/">
            <LogoImage src={Logo} alt="" onClick={() => setToggle(false)} />
          </NavLinks>
          <NavLinks to="/about" onClick={() => setToggle(false)}>
            About
          </NavLinks>
          <NavLinks to="/plans&subscriptions" onClick={() => setToggle(false)}>
            Subscriptions
          </NavLinks>
          <NavLinks onClick={shareFunction}>
            <span style={{ color: "#1da1f2" }}>Share</span>
            <span>
              <BsShareFill className="shareIcon" />
            </span>
          </NavLinks>
        </ModalBox>
      )}
    </>
  );
};

export default Navbar;
