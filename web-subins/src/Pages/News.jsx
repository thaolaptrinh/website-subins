import React from "react";


function News() {
  return (
    <div className="page-section">
      <div className="container">
        <div className="news-container">
          <h1 className="section-title">news</h1>

          <div className="panel">
            <div className="panel-heading text-center">
              <span className="panel-time">05.06.2020</span>
            </div>
            <div className="panel-body">
              👌 <b>New services:</b> <br />
              [3] 👤 Followers
            </div>
          </div>

          <div className="panel">
            <div className="panel-heading text-center">
              <span className="panel-time">05.06.2020</span>
            </div>
            <div className="panel-body">
              👌 <b>New services:</b> <br />
              [31] ❤️ Likes
            </div>
          </div>

          <div className="panel">
            <div className="panel-heading text-center">
              <span className="panel-time">05.06.2020</span>
            </div>
            <div className="panel-body">
              👌 <b>New services:</b> <br />
              [64] 🎥 Video views
            </div>
          </div>

          <div className="panel">
            <div className="panel-heading text-center">
              <span className="panel-time">05.06.2020</span>
            </div>
            <div className="panel-body">
              🚨 Subins.tech thông báo mở dịch vụ
            </div>
          </div>

          <nav>
            <a href="/" style={{'padding-right' : '10px'}}>
              ← previous page
            </a>
            <a href="/">next page →</a>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default News;
