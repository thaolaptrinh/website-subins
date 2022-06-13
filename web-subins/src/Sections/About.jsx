import React from "react";

function About() {
  return (
    <section className="page-section bgray">
      <div className="relative container">
        <div className="row">
          <div className="services-container fadeInUp duration-1-5s">
            <div className="col">
              <div className="services">
                <div className="circle">
                  <i
                    className="fa-solid fa-star-half-stroke icon-s"
                    aria-hidden="true"
                  ></i>
                </div>
                <p className="heading">CHẤT LƯỢNG CAO</p>
                <p className="mb-24">
                  Chúng tôi sử dụng cơ sở của riêng mình, cung cấp các dịch vụ
                  chất lượng cao nhất
                </p>
              </div>
            </div>

            <div className="col">
              <div className="services">
                <div className="circle">
                  <i
                    className="fa-solid fa-truck-fast icon-s"
                    aria-hidden="true"
                  ></i>
                </div>

                <p className="heading">TỐC ĐỘ NHANH</p>
                <p className="mb-24">
                  Chúng tôi đảm bảo tốc độ thực hiện cao cho tất cả các đơn đặt
                  hàng của bạn
                </p>
              </div>
            </div>

            <div className="col">
              <div className="services">
                <div className="circle">
                  <i className="fa fa-thumbs-up icon-s" aria-hidden="true"></i>
                </div>

                <p className="heading">DỊCH VỤ ĐA DẠNG</p>
                <p className="mb-24">
                  Có thể đặt bất kỳ chỉ số tài khoản Instagram nào trên trang
                  web. Từ lượt thích đến lượt truy cập!
                </p>
              </div>
            </div>

            <div className="col">
              <div className="services">
                <div className="circle">
                  <i className="fa fa-lock icon-s" aria-hidden="true"></i>
                </div>

                <p className="heading">SỰ AN TOÀN</p>
                <p className="mb-24">
                  Chúng tôi cam kết sẽ bảo mật thông tin người dùng một cách an
                  toàn nhất
                </p>
              </div>
            </div>

            <div className="col">
              <div className="services">
                <div className="circle">
                  <i className="fa-solid fa-headset icon-s" aria-hidden="true"></i>
                </div>

                <p className="heading">HỖ TRỢ</p>
                <p className="mb-24">
                  Đội ngũ chuyên gia hỗ trợ kỹ thuật sẵn lòng trả lời câu hỏi
                  của bạn 24/7
                </p>
              </div>
            </div>

            <div className="col">
              <div className="services">
                <div className="circle">
                  <i className="fa fa-code icon-s" aria-hidden="true"></i>
                </div>

                <p className="heading">API</p>
                <p className="mb-24">
                  Hệ thống tích hợp API thuận tiện cho các đối tác và đại lý
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
