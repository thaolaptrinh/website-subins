import React from 'react'

function Freelike() {
  return (
    <section className="page-section" id="freelikes">
    <div className="container">
        <div className="row">
            <div className="free-container fadeInUp duration-1-5s" align="center">
                <h2 className="section-title">FREE INSTAGRAM LIKES</h2>

                <form method="post">

                    <input className="form-control mb-20" type="text" id="post-link" placeholder="Post link" required />
                 <br />

                    <span>
                        <input type="checkbox" name="follow" value="" disabled />
                        Free 10 followers (only for
                        <a href="/">login users</a>
                        )
                    </span>
                   <br />

                    <input className="btn btn-border btn-round btn-medium bgr-dark" id="free-order" type="submit" value="NHẬN MIỄN PHÍ" />


                </form>
            </div>

        </div>

    </div>

</section>
  )
}

export default Freelike;



            