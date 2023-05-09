/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Header.css';
import FBLogo from '../../assets/fb-icon.png';
import instaLogo from '../../assets/insta-icon.png';

function Header() {
  return (
    <>
      <div className="topnav">
        <a className="active" href="#">Home</a>
        <a href="#news">Puppies</a>
        <a href="..
        /components/about/About.jsx">About</a>
        <a href="#contact">Contact</a>
        <a href="https://www.facebook.com/profile.php?id=100088195847366" target="_blank" rel="noreferrer">
          <img
            src={FBLogo}
            alt="facebook"
          />
        </a>
        <a href="https://www.instagram.com/whitehorsebullyz/" target="_blank" rel="noreferrer">
          <img
            src={instaLogo}
            alt="instagram"
          />
        </a>
      </div>
      <div
        className="chrome centered"
        data-text="WHITEHORSE BULLYZ"
      >
        WHITEHORSE BULLYZ
      </div>
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" height="15px">
        <defs>
          <filter id="bevel">
            {/* <!-- filter stuff happening here --> */}
            <feMorphology operator="dilate" radius="3" in="SourceGraphic" result="bevel" />
          </filter>
          <filter id="noise" x="0vw" y="0vh" width="100vw" height="100vh">
            <feFlood floodColor="#808080" result="neutral-gray" />
            <feTurbulence in="neutral-gray" type="fractalNoise" baseFrequency="0.8" numOctaves="10" stitchTiles="stitch"
              result="noise" />
            <feColorMatrix in="noise" type="saturate" values="0" result="destaturatedNoise"></feColorMatrix>
            <feComponentTransfer in="desaturatedNoise" result="theNoise">
              <feFuncA type="table" tableValues="0 0 0.2 0"></feFuncA>
            </feComponentTransfer>
            <feBlend in="SourceGraphic" in2="theNoise" mode="soft-light" result="noisy-image" />
          </filter>
        </defs>
      </svg>

    </>
  );
}

export default Header;