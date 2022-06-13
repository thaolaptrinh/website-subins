import React from "react";
import imgIphone from "../images/iph.png";
import usersglav from "../images/usersglav.png";
import likeglav from "../images/likeglav.png";

function Marketing() {
  return (
    <section className="page-section bgray" id="marketing">
      <div className="container">
        <div className="row">
          <div className="mar-container">
            <div className="col">
              <img
                src={imgIphone}
                alt=""
                className="img-phone fadeInLeft duration-1-5s"
              />
            </div>

            <div className="col">
              <div className="media fadeInRight duration-1-5s">
                <div className="media-body">
                  <img src={usersglav} alt="" className="media-ico" />

                  <div className="media-text  ">
                    <h3 className="text-20px">Người theo dõi trên Instagram</h3>
                    <p>
                      Người theo dõi có tác động lớn đến xếp hạng và chất lượng
                      của tài khoản. Thứ hạng của hồ sơ trong tìm kiếm người
                      dùng khác phụ thuộc vào số lượng người theo dõi và khơi
                      dậy lòng tin của người đã đến trang của bạn. Tỷ lệ người
                      theo dõi càng cao, thì càng có nhiều cơ hội để một vị
                      khách ngẫu nhiên thể hiện sự quan tâm và đăng ký!
                    </p>
                  </div>
                </div>

                <div className="media-body mt-20">
                  <img src={likeglav} alt="" className="media-ico" />
                  <div className="media-text">
                    <h3 className="text-20px">Lượt thích trên Instagram</h3>
                    <p>
                      Để đưa một bài đăng lên top theo # hashtag hoặc các truy
                      vấn đơn giản, nó cần một số lượt thích nhất định. Việc
                      nhận được lượt thích sẽ cho phép các bài đăng đứng đầu tìm
                      kiếm trong một thời gian dài và đảm bảo rằng chúng sẽ được
                      đưa vào các đề xuất của người dùng instagram. Một số lượng
                      lớn lượt thích giúp phân biệt bài đăng của bạn với những
                      người khác và thu hút rất nhiều sự chú ý, và khi sử dụng
                      nội dung chất lượng cao, khả năng có thêm đăng ký từ những
                      người quan tâm sẽ tăng lên.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Marketing;
