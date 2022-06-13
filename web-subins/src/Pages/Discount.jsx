import React from "react";

function Discount() {
  return (
    <div className="page-section-best">
      <div class="page-section">
        <div class="discount-container">
          {/* <h3 class="section-title">Ưu đãi khách hàng</h3> */}
          <div className="about-discount">
            <div className="container">
              <div className="list-request">
                <div className="columns-item">
                  <h3 className="page-title__text">
                    Nó hoạt động như thế nào?
                  </h3>
                </div>

                <div className="columns-item">
                  <div class="steps__item" data-step="1">
                    <div class="steps__title">Nạp tiền</div>
                    <div class="steps__subtitle">
                      Nạp tiền bằng các hình thức thanh toán khác nhau để có thể
                      sử dụng dịch vụ.
                    </div>
                  </div>

                  <div class="steps__item" data-step="2">
                    <div class="steps__title">
                      Lựa chọn và sử dụng các dịch vụ.
                    </div>
                    <div class="steps__subtitle">
                      Sử dụng các dịch vụ để được tích tổng số tiền vào hồ sơ.
                    </div>
                  </div>

                  <div class="steps__item" data-step="3">
                    <div class="steps__title">Nâng cấp bậc tài khoản.</div>
                    <div class="steps__subtitle">
                      Khi đã vượt mức nạp với các cấp bậc, bạn được giảm giá cho
                      các dịch vụ
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="list-level">
            <div className="container">
              <h3 className="page-title__subtext">Cấp bậc ưu đãi khách hàng</h3>
              <h2 className="page-title__text">Tại sao nó có lời cho bạn?</h2>

              <div className="single-level">
                <div className="single-box">
                  <h3 className="single-box--title">Thành viên</h3>
                  <p className="price">0đ</p>
                  <p className="desc">Không có ưu đãi.</p>
                  <button className="btn  btn-pay">
                  <a href="/login">Nạp ngay</a>
                  </button>
                </div>
                <div className="single-box">
                  <h3 className="single-box--title">Cộng tác viên</h3>
                  <p className="price">500,000đ</p>
                  <p className="desc">Giảm 5% cho tất cả các dịch vụ.</p>
                  <button className="btn  btn-pay">
                    <a href="/login">Nạp ngay</a>
                  </button>
                </div>
                <div className="single-box">
                  <h3 className="single-box--title">Đại lý</h3>
                  <p className="price">10,000,000đ</p>
                  <p className="desc">Giảm 10% cho tất cả các dịch vụ.</p>
                  <button className="btn  btn-pay">
                    <a href="/login">Nạp ngay</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Discount;
