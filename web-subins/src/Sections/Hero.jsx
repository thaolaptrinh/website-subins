import React from "react";


function Hero() {
  return (
    <section className="page-section" id="home">
      <div className="hero">
        <div className="hero-text">NHANH CHÓNG | TIN CẬY | AN TOÀN</div>

        <h1 className="hero-heading">TLT PANEL №1</h1>

        <div className="hero-btn">
          <a href="/login" className="btn btn-medium btn-round btn-border">
            <i className="fa-solid fa-right-from-bracket"></i>&nbsp;
            ĐĂNG NHẬP / ĐĂNG KÝ
          </a>

          <a href="#freelike" class="btn btn-medium btn-round btn-border">
            <i className="fa-solid fa-heart"></i>&nbsp;
            LIKES MIỄN PHÍ
          </a>

          <a href="/services" className="btn btn-medium btn-round btn-border">
            <i className="fa-solid fa-gem"></i>&nbsp;
            DANH SÁCH DỊCH VỤ
          </a>
        </div>

        <div class="mouse_scroll">
          <div class="mouse">
            <div class="wheel"></div>
          </div>
          <div>
            <span class="m_scroll_arrows unu"></span>
            <span class="m_scroll_arrows doi"></span>
            <span class="m_scroll_arrows trei"></span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
