import React from "react";

function Slider() {
  return (
    <section className="page" id="slider">
      <div className="container">
        <div className="slider-container">
          <div className="slide-wrapper">
            <div className="slide-wrapper-item  fadeInUp duration-1-5s">
              <div className="slide-item">
                <div className="features-item">
                  <div className="features-icon">
                    <i className="fa fa-heart" aria-hidden="true"></i>
                  </div>
                  <div className="features-title">Lượt thích</div>
                  <div className="features-desc">
                    <span style={{'border-bottom': '1px dashed'}}>
                      10.000đ / 1000 likes
                    </span>
                  </div>
                  <br />

                  <a href="/login" className="btn btn-order">
                    Tạo đơn
                  </a>
                </div>
              </div>

              <div className="slide-item">
                <div className="features-item">
                  <div className="features-icon">
                    <i className="fa fa-users" aria-hidden="true"></i>
                  </div>
                  <div className="features-title">Theo dõi</div>
                  <div className="features-desc">
                    <span style={{'border-bottom': '1px dashed'}}>
                      10.000đ / 1000 follows
                    </span>
                  </div>
                  <br />

                  <a href="/login" className="btn btn-order">
                    Tạo đơn
                  </a>
                </div>
              </div>

              <div className="slide-item">
                <div className="features-item">
                  <div className="features-icon">
                    <i className="fa fa-comments" aria-hidden="true"></i>
                  </div>
                  <div className="features-title">Nhận xét</div>
                  <div className="features-desc">
                    <span style={{'border-bottom': '1px dashed'}}>
                      10.000đ / 1000 comments
                    </span>
                  </div>
                  <br />

                  <a href="/login" className="btn btn-order">
                    Tạo đơn
                  </a>
                </div>
              </div>

              {/* <div className="slide-item">
                <div className="features-item">
                  <div className="features-icon">
                    <i className="fa fa-eye" aria-hidden="true"></i>
                  </div>
                  <div className="features-title">Lượt xem</div>
                  <div className="features-desc">
                    <span style={{'border-bottom': '1px dashed'}}>
                      10.000đ / 1000 views
                    </span>
                  </div>
                  <br />

                  <a href="/" className="btn btn-order">
                    Tạo đơn
                  </a>
                </div>
              </div> */}

              {/* <div className="slide-item">
                <div className="features-item">
                  <div className="features-icon">
                    <i className="fa fa-video-camera" aria-hidden="true"></i>
                  </div>
                  <div className="features-title">Mắt xem</div>
                  <div className="features-desc">
                    <span style={{'border-bottom': '1px dashed'}}>
                      10.000đ / 1000 mắt
                    </span>
                  </div>
                  <br />
                  <a href="/" className="btn btn-order">
                    Tạo đơn
                  </a>
                </div>
              </div> */}

              {/* <div className="slide-item">
                <div className="features-item">
                  <div className="features-icon">
                    <i className="fa fa-save" aria-hidden="true"></i>
                  </div>
                  <div className="features-title">Auto tương tác</div>
                  <div className="features-desc">
                    <span style={{'border-bottom': '1px dashed'}}>
                      150.000đ / 1 tháng
                    </span>
                  </div>
                  <br />

                  <a href="/" className="btn btn-order">
                    Tạo đơn
                  </a>
                </div>
              </div> */}
            </div>
          </div>

          <div className="slide-control">
            <div className="slide-pagination">
              <div className="slide-page">
                <span></span>
              </div>
              <div className="slide-page active">
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Slider;
