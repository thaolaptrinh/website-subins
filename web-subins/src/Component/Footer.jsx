import React from "react";
import logo from "../images/logo.png";

function Footer() {
  return (
    <footer className="footer page-section">
      <div className="container">
        <div className="footer-container">
          <div className="footer-column">
            <img
              src={logo}
              alt=""
              className="footer-logo fadeInUp duration-1-5s"
            />

            <p className="mt-20 footer-desc opacity-50">
              Subins.tech là hệ thống chuyên cung cấp các dịch vụ Instagram đảm
              bảo chất lượng tốt - an toàn.
            </p>
          </div>

          <div className="list">
            <div className="footer-column">
              <h4 className="footer-desc text-uppercase opacity-50 mb-20">
                VỀ SUBINS.TECH
              </h4>
              <ul className="footer-links">
                <li className="footer-item">
                  <a href="/" className="footer-link opacity-80">
                    Blog
                  </a>
                </li>
                <li className="footer-item">
                  <a href="/" className="footer-link opacity-80">
                    Dịch vụ
                  </a>
                </li>
                <li className="footer-item">
                  <a href="/" className="footer-link opacity-80">
                    Hướng dẫn
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-desc  text-uppercase opacity-50 mb-20">
                THANH TOÁN
              </h4>
              <ul className="footer-links">
                <li className="footer-item">
                  <a href="/" className="footer-link opacity-80">
                    Ví Momo
                  </a>
                </li>
                <li className="footer-item">
                  <a href="/" className="footer-link opacity-80">
                    Ngân Hàng
                  </a>
                </li>
                <li className="footer-item">
                  <a href="/" className="footer-link opacity-80">
                    Thẻ Cào
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-desc  text-uppercase opacity-50 mb-20">
                THEO DÕI CHÚNG TÔI
              </h4>
              <ul className="footer-links">
                <li className="footer-item">
                  <a href="/" className="footer-link opacity-80">
                    Facebook
                  </a>
                </li>
                <li className="footer-item">
                  <a href="/" className="footer-link opacity-80">
                    Instagram
                  </a>
                </li>
                <li className="footer-item">
                  <a href="/" className="footer-link opacity-80">
                    Linkedln
                  </a>
                </li>
                <li className="footer-item">
                  <a href="/" className="footer-link opacity-80">
                    Telegram
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-desc  text-uppercase opacity-50 mb-20">
                LIÊN HỆ & HỢP TÁC
              </h4>
              <ul className="footer-links">
                <li className="footer-item">
                  <span className="footer-desc opacity-50">Hotline: </span>
                  <a href="/" className="footer-link opacity-80">
                    0345005746
                  </a>
                </li>
                <li className="footer-item">
                  <span className="footer-desc opacity-50">Email: </span>
                  <a href="/" className="footer-link opacity-80">
                    subins.care@gmail.com
                  </a>
                </li>
                <li className="footer-item">
                  <span className="footer-desc opacity-50">Website: </span>
                  <a href="/" className="footer-link opacity-80">
                    thaolaptrinh.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr />

        <div className="copyright footer-desc opacity-80 mt-20">
          ©2022 - Subins.tech hệ thống được phát triển và vận hành bởi Nguyễn
          Văn Thảo
        </div>
      </div>
    </footer>
  );
}

export default Footer;
