import React from 'react'

function Login() {
  return (
   <div className="page-section bgrauth">

    <div className="container">
        <div className="login-container fadeInRight duration-1-5s">

            <div className="section-login">
                <div className="login-body">
                    <a href="/">
                        Subins.tech
                    </a>

                    <p>Là hệ thống dịch vụ mạng xã hội instagram với tương tác một cách an toàn.
                        Hệ thống hoạt động một cách có tổ chức, giúp tăng tương tác, tăng hiệu quả bán hàng, truyền thông.
                    </p>
                    <p>/subins , /tangsub, /tuongtacins, /tangtheodoimienphi, /tanglikemienphi, /tanglike, /tangtheodoi, /tangcmt, /instagram</p>
                </div>


                <div className="form-login">

                    <h3 className="heading-form">Đăng nhập hệ thống</h3>
                    <p className="text">Nếu bạn chưa có tài khoản? &nbsp;
                        <a href="/signup" className="btn btn-signup">Đăng ký ngay!</a>
                    </p>

                    <form action="/" method="POST">
                        <div className="form-group">
                            <label htmlFor="username">Tài khoản</label>
                            <input className="form-control" type="text" name="username" id="username" placeholder="username" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Mật khẩu</label>
                            <input className="form-control" type="password" name="password" id="password" placeholder="********" required /> 
                        </div>

                        <div className="form-group">
                            <input type="checkbox" name="checkbox" id="checkbox" /> Remember me
                        </div>



                        <button type="submit" name="login" className="btn">Đăng nhập</button>

                    </form>
                </div>
            </div>

        </div>
    </div>

</div>
  )
}

export default Login