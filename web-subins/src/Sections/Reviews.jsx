import React from "react";
import imgUser from "../images/anna.jpg";

function Reviews() {
  return (
    <section className="page-section bgray" id="reviews">
      <h2 className="section-title">REVIEWS</h2>

      <div className="container">
        <div className="row">
          <div className="col">
            <div className="review-container">
              <img
                src={imgUser}
                alt=""
                className="img-circle"
                style={{ width: "150px", "padding-bottom": "10px" }}
              />

              <blockquote className="testimonial">
                <p>
                  Cảm ơn subins.tech vì sản phẩm của bạn! Chất lượng công việc
                  rất cao và hỗ trợ tư vấn nhiệt tình! Sau khi sử dụng, lượt
                  theo dõi tăng lên nhanh chóng, điều mà tôi không thể ngờ tới!
                  Bình luận liên tục, chỉ có thời gian để trả lời và điều quan
                  trọng, đơn đặt hàng thực, số lượng không ngừng tăng lên! Cảm
                  ơn một lần nữa! Chúng tôi hy vọng khách hàng của bạn trong một
                  thời gian rất dài! Tôi sẽ giới thiệu bạn cho tất cả và chúc
                  bạn phát triển!
                </p>

                <footer className="testimonial-author">-- BÁNH BÈO --</footer>
              </blockquote>
            </div>
          </div>
        </div>

        <div className="text-center all-reviews">
          <a href="/">ALL REVIEW</a>
        </div>
      </div>
    </section>
  );
}

export default Reviews;
