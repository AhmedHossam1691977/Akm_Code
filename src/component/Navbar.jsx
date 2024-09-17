import React from 'react';
import logo from "../assites/logo.png";

export default function Navbar() {

  // دالة التمرير السلس إلى قسم معين
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }

    // إغلاق القائمة بعد اختيار العنصر
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarToggler && navbarCollapse.classList.contains('show')) {
      navbarToggler.click(); // لمحاكاة النقر على الزر لإغلاق القائمة
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container navs">
          <a className="navbar-brand d-flex align-items-center justify-content-center" href="#">
            <img src={logo} alt="" className="logo" />
            <h1 className="fw-bold text-black">Akm</h1>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 px-5">
              <li className="nav-item">
                <a className="nav-link active px-3 line fw-bold px-3" href="#" onClick={() => scrollToSection('home')}>
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link line px-3 fw-bold" href="" onClick={() => scrollToSection('about')}>
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link line px-3 fw-bold" href="#" onClick={() => scrollToSection('services')}>
                Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link line  text-bold px-3 fw-bold" href="#" onClick={() => scrollToSection('contact')}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
