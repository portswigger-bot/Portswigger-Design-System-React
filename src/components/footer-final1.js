import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import FooterColumnTitle1 from './footer-column-title1'
import TwitterButton1 from './twitter-button1'
import './footer-final1.css'

const FooterFinal1 = (props) => {
  return (
    <div className={`footer-final1-footer1 ${props.rootClassName} `}>
      <div className="footer-final1-container10">
        <div className="footer-final1-container11">
          <div className="footer-final1-footer2">
            <div className="footer-final1-container12">
              <div className="footer-final1-container13">
                <div className="footer-final1-section1">
                  <div className="footer-final1-container14">
                    <FooterColumnTitle1
                      text="Burp Suite"
                      rootClassName="footer-column-title1root-class-name261"
                    ></FooterColumnTitle1>
                    <a href={props.textUrl} className="footer-final1-link10">
                      <span
                        href="https://play.teleporthq.io/static/svg/default-img.svg"
                        className="footer-final1-text10 Footer"
                      >
                        {props.text ?? (
                          <Fragment>
                            <span className="footer-final1-text47">
                              Web vulnerability scanner
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </a>
                    <a
                      href={props.textUrl1}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="footer-final1-link11"
                    >
                      <span
                        href="https://play.teleporthq.io/static/svg/default-img.svg"
                        className="footer-final1-text11 Footer"
                      >
                        {props.text1 ?? (
                          <Fragment>
                            <span className="footer-final1-text50">
                              Burp Suite Editions
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </a>
                    <a href={props.textUrl2} className="footer-final1-link12">
                      <span
                        href="https://play.teleporthq.io/static/svg/default-img.svg"
                        className="footer-final1-text12 Footer"
                      >
                        {props.text2 ?? (
                          <Fragment>
                            <span className="footer-final1-text38">
                              Release Notes
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </a>
                  </div>
                  <div className="footer-final1-container15">
                    <FooterColumnTitle1
                      text="Vulnerabilities"
                      rootClassName="footer-column-title1root-class-name262"
                    ></FooterColumnTitle1>
                    <a href={props.textUrl3} className="footer-final1-link13">
                      <span
                        href="https://play.teleporthq.io/static/svg/default-img.svg"
                        className="footer-final1-text13 Footer"
                      >
                        {props.text3 ?? (
                          <Fragment>
                            <span className="footer-final1-text46">
                              Cross-site scripting (XSS)
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </a>
                    <a href={props.textUrl4} className="footer-final1-link14">
                      <span
                        href="https://play.teleporthq.io/static/svg/default-img.svg"
                        className="footer-final1-text14 Footer"
                      >
                        {props.text4 ?? (
                          <Fragment>
                            <span className="footer-final1-text43">
                              SQL injection
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </a>
                    <a href={props.textUrl5} className="footer-final1-link15">
                      <span
                        href="https://play.teleporthq.io/static/svg/default-img.svg"
                        className="footer-final1-text15 Footer"
                      >
                        {props.text5 ?? (
                          <Fragment>
                            <span className="footer-final1-text31">
                              Cross-site request forgery
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </a>
                    <a href={props.textUrl6} className="footer-final1-link16">
                      <span
                        href="https://play.teleporthq.io/static/svg/default-img.svg"
                        className="footer-final1-text16 Footer"
                      >
                        {props.text6 ?? (
                          <Fragment>
                            <span className="footer-final1-text51">
                              XML external entity injection
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </a>
                    <a href={props.textUrl7} className="footer-final1-link17">
                      <span
                        href="https://play.teleporthq.io/static/svg/default-img.svg"
                        className="footer-final1-text17 Footer"
                      >
                        {props.text7 ?? (
                          <Fragment>
                            <span className="footer-final1-text36">
                              Directory traversal
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </a>
                    <a href={props.textUrl8} className="footer-final1-link18">
                      <span
                        href="https://play.teleporthq.io/static/svg/default-img.svg"
                        className="footer-final1-text18 Footer"
                      >
                        {props.text8 ?? (
                          <Fragment>
                            <span className="footer-final1-text34">
                              Server-side request forgery
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </a>
                  </div>
                </div>
                <div className="footer-final1-section2">
                  <div className="footer-final1-container16">
                    <FooterColumnTitle1
                      text="Customers"
                      rootClassName="footer-column-title1root-class-name263"
                    ></FooterColumnTitle1>
                    <a href={props.textUrl9} className="footer-final1-link19">
                      <span
                        href="https://play.teleporthq.io/static/svg/default-img.svg"
                        className="footer-final1-text19 Footer"
                      >
                        {props.text9 ?? (
                          <Fragment>
                            <span className="footer-final1-text39">
                              Organizations
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </a>
                    <a href={props.textUrl10} className="footer-final1-link20">
                      <span
                        href="https://play.teleporthq.io/static/svg/default-img.svg"
                        className="footer-final1-text20 Footer"
                      >
                        {props.text10 ?? (
                          <Fragment>
                            <span className="footer-final1-text32">
                              Testers
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </a>
                    <a href={props.textUrl11} className="footer-final1-link21">
                      <span
                        href="https://play.teleporthq.io/static/svg/default-img.svg"
                        className="footer-final1-text21 Footer"
                      >
                        {props.text11 ?? (
                          <Fragment>
                            <span className="footer-final1-text41">
                              Developers
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </a>
                  </div>
                  <div className="footer-final1-container17">
                    <FooterColumnTitle1
                      text="Company"
                      rootClassName="footer-column-title1root-class-name264"
                    ></FooterColumnTitle1>
                    <a href={props.textUrl12} className="footer-final1-link22">
                      <span
                        href="https://play.teleporthq.io/static/svg/default-img.svg"
                        className="footer-final1-text22 Footer"
                      >
                        {props.text12 ?? (
                          <Fragment>
                            <span className="footer-final1-text33">About</span>
                          </Fragment>
                        )}
                      </span>
                    </a>
                    <a href={props.textUrl13} className="footer-final1-link23">
                      <span
                        href="https://play.teleporthq.io/static/svg/default-img.svg"
                        className="footer-final1-text23 Footer"
                      >
                        {props.text13 ?? (
                          <Fragment>
                            <span className="footer-final1-text40">
                              Careers
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </a>
                    <a href={props.textUrl14} className="footer-final1-link24">
                      <span
                        href="https://play.teleporthq.io/static/svg/default-img.svg"
                        className="footer-final1-text24 Footer"
                      >
                        {props.text14 ?? (
                          <Fragment>
                            <span className="footer-final1-text45">
                              Contact
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </a>
                    <a href={props.textUrl15} className="footer-final1-link25">
                      <span
                        href="https://play.teleporthq.io/static/svg/default-img.svg"
                        className="footer-final1-text25 Footer"
                      >
                        {props.text15 ?? (
                          <Fragment>
                            <span className="footer-final1-text49">Legal</span>
                          </Fragment>
                        )}
                      </span>
                    </a>
                    <a href={props.textUrl16} className="footer-final1-link26">
                      <span
                        href="https://play.teleporthq.io/static/svg/default-img.svg"
                        className="footer-final1-text26 Footer"
                      >
                        {props.text16 ?? (
                          <Fragment>
                            <span className="footer-final1-text35">
                              Privacy Notice
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </a>
                  </div>
                </div>
                <div className="footer-final1-section3">
                  <div className="footer-final1-container18">
                    <FooterColumnTitle1
                      text="Insights"
                      rootClassName="footer-column-title1root-class-name265"
                    ></FooterColumnTitle1>
                    <a href={props.textUrl17} className="footer-final1-link27">
                      <span
                        href="https://play.teleporthq.io/static/svg/default-img.svg"
                        className="footer-final1-text27 Footer"
                      >
                        {props.text17 ?? (
                          <Fragment>
                            <span className="footer-final1-text44">
                              Web Security Academy
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </a>
                    <a href={props.textUrl18} className="footer-final1-link28">
                      <span
                        href="https://play.teleporthq.io/static/svg/default-img.svg"
                        className="footer-final1-text28 Footer"
                      >
                        {props.text18 ?? (
                          <Fragment>
                            <span className="footer-final1-text48">Blog</span>
                          </Fragment>
                        )}
                      </span>
                    </a>
                    <a href={props.textUrl19} className="footer-final1-link29">
                      <span
                        href="https://play.teleporthq.io/static/svg/default-img.svg"
                        className="footer-final1-text29 Footer"
                      >
                        {props.text19 ?? (
                          <Fragment>
                            <span className="footer-final1-text42">
                              Research
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </a>
                  </div>
                  <div className="footer-final1-container19">
                    <a
                      href="https://portswigger.net"
                      className="footer-final1-link30"
                    >
                      <img
                        alt={props.imageAlt}
                        src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/08f747ed-00a5-4c49-bf33-6ab4b22224ae/ece10d63-7545-4cb1-ab81-7da56811c916?org_if_sml=13256&amp;force_format=original"
                        className="footer-final1-image"
                      />
                    </a>
                    <a
                      href="https://x.com/PortSwigger"
                      className="footer-final1-link31"
                    >
                      <TwitterButton1
                        rootClassName="twitter-button1root-class-name50"
                        className="footer-final1-component6"
                      ></TwitterButton1>
                    </a>
                    <p className="footer-final1-text30 Footer">
                      {props.text20 ?? (
                        <Fragment>
                          <span className="footer-final1-text37">
                            © 2025 PortSwigger Ltd.
                          </span>
                        </Fragment>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

FooterFinal1.defaultProps = {
  textUrl8: 'https://portswigger.net/web-security/ssrf',
  textUrl6: 'https://portswigger.net/web-security/xxe',
  text5: undefined,
  text10: undefined,
  text12: undefined,
  text8: undefined,
  textUrl12: 'https://portswigger.net/about',
  textUrl3: 'https://portswigger.net/web-security/cross-site-scripting',
  textUrl15: 'https://portswigger.net/legal',
  text16: undefined,
  textUrl16: 'https://portswigger.net/privacy',
  text7: undefined,
  textUrl9: 'https://portswigger.net/organizations',
  text20: undefined,
  textUrl14: 'https://portswigger.net/about/contact',
  text2: undefined,
  text9: undefined,
  text13: undefined,
  textUrl13: 'https://portswigger.net/careers',
  text11: undefined,
  text19: undefined,
  text4: undefined,
  textUrl18: 'https://portswigger.net/blog',
  text17: undefined,
  text14: undefined,
  text3: undefined,
  textUrl17: 'https://portswigger.net/web-security',
  textUrl4: 'https://portswigger.net/web-security/sql-injection',
  text: undefined,
  textUrl: 'https://portswigger.net/burp/vulnerability-scanner',
  textUrl1: 'https://portswigger.net/burp',
  text18: undefined,
  text15: undefined,
  text1: undefined,
  textUrl19: 'https://portswigger.net/research',
  textUrl5: 'https://portswigger.net/web-security/csrf',
  rootClassName: '',
  textUrl11: 'https://portswigger.net/developers',
  textUrl7: 'https://portswigger.net/web-security/file-path-traversal',
  textUrl10: 'https://portswigger.net/testers',
  text6: undefined,
  imageAlt: 'image',
  textUrl2: 'https://portswigger.net/burp/releases',
}

FooterFinal1.propTypes = {
  textUrl8: PropTypes.string,
  textUrl6: PropTypes.string,
  text5: PropTypes.element,
  text10: PropTypes.element,
  text12: PropTypes.element,
  text8: PropTypes.element,
  textUrl12: PropTypes.string,
  textUrl3: PropTypes.string,
  textUrl15: PropTypes.string,
  text16: PropTypes.element,
  textUrl16: PropTypes.string,
  text7: PropTypes.element,
  textUrl9: PropTypes.string,
  text20: PropTypes.element,
  textUrl14: PropTypes.string,
  text2: PropTypes.element,
  text9: PropTypes.element,
  text13: PropTypes.element,
  textUrl13: PropTypes.string,
  text11: PropTypes.element,
  text19: PropTypes.element,
  text4: PropTypes.element,
  textUrl18: PropTypes.string,
  text17: PropTypes.element,
  text14: PropTypes.element,
  text3: PropTypes.element,
  textUrl17: PropTypes.string,
  textUrl4: PropTypes.string,
  text: PropTypes.element,
  textUrl: PropTypes.string,
  textUrl1: PropTypes.string,
  text18: PropTypes.element,
  text15: PropTypes.element,
  text1: PropTypes.element,
  textUrl19: PropTypes.string,
  textUrl5: PropTypes.string,
  rootClassName: PropTypes.string,
  textUrl11: PropTypes.string,
  textUrl7: PropTypes.string,
  textUrl10: PropTypes.string,
  text6: PropTypes.element,
  imageAlt: PropTypes.string,
  textUrl2: PropTypes.string,
}

export default FooterFinal1
