import React from "react";
import signup from "../images/faq-signup.png";

function Faq() {
  return (
    <div className="page-section">
      <div className="container">
        <div className="faq-container">
          <h1 className="section-title">
            <span style={{ color: "#d92d53" }}>hướng dẫn</span>
            sử dụng dịch vụ
            <span style={{ color: "#5048eb" }}>subins.tech</span>
          </h1>

          <div className="faq-main">
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link active"
                  id="pills-0-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-0"
                  type="button"
                  role="tab"
                  aria-controls="pills-home"
                  aria-selected="true"
                >
                  Bước 1 (Tạo tài khoản)
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link"
                  id="pills-1-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-1"
                  type="button"
                  role="tab"
                  aria-controls="pills-profile"
                  aria-selected="false"
                >
                  Bước 2 (Nạp tiền)
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link"
                  id="pills-2-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-2"
                  type="button"
                  role="tab"
                  aria-controls="pills-contact"
                  aria-selected="false"
                >
                  Bước 3 (Tạo đơn hàng)
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link"
                  id="pills-3-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-3"
                  type="button"
                  role="tab"
                  aria-controls="pills-contact"
                  aria-selected="false"
                >
                  Bước 4 (Lịch sử đặt hàng)
                </a>
              </li>
            </ul>

            <hr style={{ margin: "20px 0px" }} />

            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="pills-0"
                role="tabpanel"
                aria-labelledby="pills-0-tab"
              >
                <div className="col-6">
                  <h1 className="tab-title">
                    <span style={{ color: "#d92d53" }}>Tạo</span> tài khoản
                  </h1>

                  <p className="tab-text">
                    Trước hết, bạn cần tạo một tài khoản để sử dụng dịch vụ.
                    Chúng tôi đã thực hiện đăng ký đơn giản nhất có thể và bạn
                    sẽ không mất nhiều thời gian.
                  </p>

                  <a href="/signup">
                    {" "}
                    <button className="btn">Đăng ký ngay</button>
                  </a>
                </div>

                <div className="col-6">
                  <img src={signup} alt="/" style={{ width: "85%" }} />
                </div>
              </div>

              <div
                className="tab-pane fade"
                id="pills-1"
                role="tabpanel"
                aria-labelledby="pills-1-tab"
              >
                <div className="col-6">
                  <h1 className="tab-title">
                    <span sstyle={{ color: "/d92d53" }}>Nạp tiền</span> vào tài
                    khoản
                  </h1>

                  <p className="tab-text">
                    Sau khi đăng ký tài khoản xong, để sử dụng được dịch vụ bạn
                    cần bổ sung số dư ( nạp tiền) với nhiều phương thức thanh
                    toán như: Momo, Ngân hàng, Card. Tất cả các thanh toán của
                    bạn đều được bảo mật và tự động.
                  </p>
                </div>

                <div className="col-6">
                  <img src={signup} alt="/" style={{ width: "80%" }} />
                </div>
              </div>

              <div
                className="tab-pane fade"
                id="pills-2"
                role="tabpanel"
                aria-labelledby="pills-2-tab"
              >
                <div className="col-6">
                  <h1 className="tab-title">
                    <span style={{ color: "#d92d53" }}>Tạo</span> đơn hàng
                  </h1>

                  <p className="tab-text">
                    Sau khi tài khoản cá nhân của bạn trên trang được bổ sung.
                    Bạn có thể đặt hàng. Bạn có thể tìm thấy danh sách các dịch
                    vụ và giá cả trên trang.
                  </p>

                  <div className="sub-tabs">
                    <div>
                      <h3 className="sub-tabs-title">01 Chọn danh mục</h3>
                      <p className="sub-tabs-text">
                        Chọn danh mục muốn sử dụng
                      </p>
                    </div>

                    <div>
                      <h3 className="sub-tabs-title">02 Chọn dịch vụ</h3>
                      <p className="sub-tabs-text">
                        Sau khi chọn một danh mục, bạn sẽ được hiển thị một danh
                        sách các dịch vụ có sẵn cho danh mục đó
                      </p>
                    </div>

                    <div>
                      <h3 className="sub-tabs-title">03 Nhập link</h3>
                      <p className="sub-tabs-text">
                        Link được điền phải cụ thể từng loại dịch vụ (Mua like
                        thì điền link post, follow thì điền link profile)
                      </p>
                    </div>

                    <div>
                      <h3 className="sub-tabs-title">04 Nhập số lượng</h3>
                      <p className="sub-tabs-text">
                        Nhập số lượng bạn muốn nhận khi hoàn thành đơn đặt hàng
                      </p>
                    </div>

                    <div>
                      <h3 className="sub-tabs-title">
                        05 Bấm vào nút đặt hàng
                      </h3>
                      <p className="sub-tabs-text">
                        Sau khi điền tất cả các trường, bấm vào nút ĐẶT HÀNG.
                        Khoản thanh toán cho dịch vụ sẽ được trừ vào số dư của
                        bạn và chúng tôi sẽ tiến hành thực hiện đơn hàng.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="tab-pane fade"
                id="pills-3"
                role="tabpanel"
                aria-labelledby="pills-3-tab"
              >
                <div className="col-12">
                  <img src={signup} alt="/" style={{ width: "80%" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
