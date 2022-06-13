import React from 'react'

function Status() {
  return (
    <section className="page bgray" id="status">
    <div className="container status">
        <div className="infos">
            <div className="infos-detail">
                <i className="fa-solid fa-user-plus icon-infos" style={{color: '#10A0DE'}} ></i>
                <div className="infos-text">
                    <h4 className="heading-large"style={{color: '#10A0DE'}} >3 558</h4>
                    <p className="text-16px">Người dùng</p>
                </div>
            </div>

            <div className="infos-detail">
                <i className="fa-solid fa-list icon-infos" style={{color: '#72BD35'}}></i>
                <div className="infos-text">
                    <h4 className="heading-large" style={{color: '#72BD35'}}>20 531</h4>
                    <p className="text-16px">Đơn đặt hàng</p>
                </div>
            </div>
            <div className="infos-detail">
                <i className="fa-solid fa-list-check icon-infos" style={{color: '#F74B4B'}}></i>
                <div className="infos-text">
                    <h4 className="heading-large" style={{color: '#F74B4B'}}>79 377</h4>
                    <p className="text-16px">Đơn thành công</p>
                </div>
            </div>

        </div>
    </div>

</section>
  )
}

export default Status