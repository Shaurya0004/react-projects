import React from 'react'
import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accesories</span>
          <span>New Arivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo illum, hic deserunt sint, ullam autem aspernatur possimus, error blanditiis eius recusandae cupiditate a. Iure excepturi molestias et ducimus, nemo laboriosam minus vero. Saepe, debitis eveniet accusantium nulla itaque a provident.
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur dolor ratione, eum quasi adipisci unde. Possimus tempora similique eveniet temporibus voluptate. Suscipit assumenda adipisci maxime vitae eius maiores atque, laboriosam repellendus eum dolorem, rem, ad quos possimus aspernatur nobis quasi.</span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">DUHANSTORE</span>
          <span className="copyright">© Copyright 2023. All Rights Reserved</span>
        </div>
        <div className="right">
          <img src="/images/payment.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer