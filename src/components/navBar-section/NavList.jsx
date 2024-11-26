import React from 'react';
import '../../css/navList.css';


function NavList() {
  return (
    <nav id="navbar" className="navbar order-last order-lg-0">
      <ul>
        <li>
          <a className="nav-link scrollto active" href="#hero">خانه</a>
        </li>
        <li>
          <a className="nav-link scrollto" href="#about">درباره‌ی ما</a>
        </li>
        <li>
          <a className="nav-link scrollto" href="#services">خدمات</a>
        </li>
        <li>
          <a className="nav-link scrollto" href="#portfolio">نمونه کارها</a>
        </li>
        <li>
          <a className="nav-link scrollto" href="#team">تیم</a>
        </li>
        <li className="dropdown">
          <a href="#!">
            <span>لیست کشویی</span> <i className="bi bi-chevron-down"></i>
          </a>
          <ul>
            <li><a href="#!">لیست کشویی 1</a></li>
            <li className="dropdown">
              <a href="#!">
                <span>لیست کشویی عمیق</span> <i className="bi bi-chevron-left"></i>
              </a>
              <ul>
                <li><a href="#!">لیست کشویی عمیق 1</a></li>
                <li><a href="#!">لیست کشویی عمیق 2</a></li>
                <li><a href="#!">لیست کشویی عمیق 3</a></li>
                <li><a href="#!">لیست کشویی عمیق 4</a></li>
                <li><a href="#!">لیست کشویی عمیق 5</a></li>
              </ul>
            </li>
            <li><a href="#!">لیست کشویی 2</a></li>
            <li><a href="#!">لیست کشویی 3</a></li>
            <li><a href="#!">لیست کشویی 4</a></li>
          </ul>
        </li>
        <li>
          <a className="nav-link scrollto" href="#contact">تماس با ما</a>
        </li>
      </ul>
      <i className="bi bi-list mobile-nav-toggle"></i>
    </nav>
  );
}

export default NavList;
