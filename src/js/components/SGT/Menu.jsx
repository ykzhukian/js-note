import React from 'react';

export default class Menu extends React.Component {
  render() {
    return (
      <div className={`section section--dropdown py-0 ${this.props.open ? 'open' : ''}`}>
        <div className="dropdown">
          <div className="row">
            <div className="col col-md-2">
              <ul className="links">
                <li>关于我们</li>
                <li>缘起与概况</li>
                <li>艺术中心组织架构</li>
                <li>加入我们</li>
              </ul>
            </div>
            <div className="col col-md-2">
              <ul className="links">
                <li>新闻与媒体</li>
                <li>机构新闻</li>
                <li>近期活动</li>
                <li>媒体精选</li>
              </ul>
            </div>
            <div className="col col-md-2">
              <ul className="links">
                <li>作品鉴</li>
                <li>原创新作</li>
                <li>艺术家评论</li>
                <li>季刊下载</li>
                <li>历年作品</li>
              </ul>
            </div>
            <div className="col col-md-2">
              <ul className="links">
                <li>作品鉴</li>
                <li className="active">原创新作</li>
                <li>艺术家评论</li>
                <li>季刊下载</li>
                <li>历年作品</li>
              </ul>
            </div>
            <div className="col col-md-2">
              <ul className="links bold">
                <li>艺术基金</li>
                <li>合作伙伴与赞助商</li>
                <li>艺术教育</li>
                <li>下载中心</li>
              </ul>
            </div>
            <div className="col col-md-2">
              <div className="links posters">
                <img src="assets/images/sgt/tnt.svg" alt="poster" />
                <div className="poster-title">英国TNT剧院《麦克白》</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
