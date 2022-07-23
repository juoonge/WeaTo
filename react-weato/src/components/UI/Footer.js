import React from "react";

import Link from "./Link";

const footer = () => {
  return (
    <footer className="">
      <div className="container text-light pt-5">
        <div className="row">
          <div className="col-sm-6 col-md-6 col-lg-4 mb-5">
            <div className="footer-title">
              <h6>About Us</h6>
            </div>
            <div className="footer-content">
              <p>
                <small className="text-muted">
                  실시간 날씨 공유 서비스 WeaTo(웨투)는 모든 유저들이 나의
                  기상청이 됩니다.
                  <br />
                  현장에 있는 유저들이 실시간으로 공유하는 정보를 통해 현재
                  날씨를 정확히 파악하세요.
                </small>
              </p>
              <button className="btn btn-sm btn-primary rounded-0">
                Learn more
              </button>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-2 mb-5">
            <div className="footer-title">
              <h6>Quick Links</h6>
            </div>
            <div className="footer-content">
              <ul className="list-group quick-links">
                <li>
                  <Link target="home" offset={-120}>
                    처음으로
                  </Link>
                </li>
                <li>
                  <Link target="about">서비스소개</Link>
                </li>
                <li>
                  <Link target="services">오늘의날씨</Link>
                </li>
                <li>
                  <Link target="blog">명예의전당</Link>
                </li>
                <li>
                  <Link target="contact">마의페이지</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-3 mb-5">
            <div className="footer-title">
              <h6>Latest News</h6>
            </div>
            <div className="footer-content">
              <p>
                <small className="text-muted">살</small>
              </p>
              <p>
                <small className="text-muted">려</small>
              </p>
              <p>
                <small className="text-muted">줘</small>
              </p>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-3 mb-5">
            <div className="footer-title">
              <h6>Contact Us</h6>
            </div>
            <div className="footer-content">
              <p className="text-muted">
                <small>Address : 영남대 멋사멋사멋사</small>
              </p>
              <p className="text-muted">
                <small>Phone : 비밀입니다</small>
              </p>
              <p className="text-muted">
                <small>E-mail : 비밀입니다</small>
              </p>
              <div className="social-media mt-4">
                <a href="!#" className="text-light">
                  <i className="fab fa-facebook-f mr-4" />
                </a>
                <a href="!#" className="text-light">
                  <i className="fab fa-twitter mr-4" />
                </a>
                <a href="!#" className="text-light">
                  <i className="fab fa-instagram mr-4" />
                </a>
                <a href="!#" className="text-light">
                  <i className="fab fa-github" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-footer pt-3 pb-3 text-center">
        <small>© WeaTo of My weather diary</small>
      </div>
    </footer>
  );
};

export default footer;
