import React from 'react'

function Signup() {
  return (
    <div className="page-section">

    <div className="container">
        <div className="login-container fadeInLeft duration-1-5s">

            <div className="section-login">
                <div className="login-body">
                    <a href="/">
                        Subins.tech
                    </a>

                    <p>Là hệ thống dịch vụ mạng xã hội instagram với tương tác một cách an toàn.
                        Hệ thống hoạt động một cách có tổ chức, giúp tăng tương tác, tăng hiệu quả bán hàng, truyền thông.
                    </p>
                    <p>/subins , /tangsub,  /tuongtacins, /tangtheodoimienphi, /tanglikemienphi, /tanglike, /tangtheodoi, /tangcmt, /instagram</p>
                </div>

                <div className="form-login">

                    <h3 className="heading-form">Đăng ký tài khoản</h3>
                    <p className="text">Nếu bạn đã có tài khoản? &nbsp;
                        <a href="/login" className="btn btn-login">Đăng nhập ngay!</a>
                    </p>

                    <form action="/" method="POST">


                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input className="form-control" type="email" name="email" id="email" placeholder="email" required />
                        </div>


                        <div className="form-group">
                            <label htmlFor="username">Tài khoản</label>
                            <input className="form-control" type="text" name="username" id="username" placeholder="username" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Mật khẩu</label>
                            <input className="form-control" type="password" name="password" id="password" placeholder="********" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="repassword">Nhập lại mật khẩu</label>
                            <input className="form-control" type="password" name="repassword" id="repassword" placeholder="********" required />
                        </div>

                        <div className="form-group">
                            <input type="text" value="1A5VA" className="captcha" disabled />
                            <span>
                                <input type="text" className="input-captcha" required />
                            </span>
                        </div>



                        <button type="submit" name="signup" className="btn">Đăng ký</button>

                    </form>
                </div>
            </div>

        </div>
    </div>

</div>
  )
}

export default Signup