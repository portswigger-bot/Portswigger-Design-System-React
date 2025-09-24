import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import FooterColumnTitle2 from './footer-column-title2'
import TwitterButton2 from './twitter-button2'
import './footer-final2.css'

const FooterFinal2 = (props) => {
  return (
    <div className={`footer-final2-footer1 ${props.rootClassName} `}>
      <div className="footer-final2-container10">
        <div className="footer-final2-container11">
          <div className="footer-final2-footer2">
            <div className="footer-final2-container12">
              <div className="footer-final2-container13">
                <div className="footer-final2-section1">
                  <div className="footer-final2-container14">
                    <FooterColumnTitle2
                      text="Burp Suite"
                      rootClassName="footer-column-title2root-class-name261"
                    ></FooterColumnTitle2>
                    <a href={props.textUrl} className="footer-final2-link10">
                      <span
                        href="https://play.teleporthq.io/static/svg/default-img.svg"
                        className="footer-final2-text10 Footer"
                      >
                        {props.text ?? (
                          <Fragment>
                            <span className="footer-final2-text39">
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
                      className="footer-final2-link11"
                    >
                      <span
                        href="https://play.teleporthq.io/static/svg/default-img.svg"
                        className="footer-final2-text11 Footer"
                      >
                        {props.text1 ?? (
                          <Fragment>
                            <span className="footer-final2-text37">
                              Burp Suite Editions
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </a>
                    <a href={props.textUrl2} className="footer-final2-link12">
                      <span
                        href="https://play.teleporthq.io/static/svg/default-img.svg"
                        className="footer-final2-text12 Footer"
                      >
                        {props.text2 ?? (
                          <Fragment>
                            <span className="footer-final2-text41">
                              Release Notes
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </a>
                  </div>
                  <div className="footer-final2-container15">
                    <FooterColumnTitle2
                      text="Vulnerabilities"
                      rootClassName="footer-column-title2root-class-name262"
                    ></FooterColumnTitle2>
                    <a href={props.textUrl3} className="footer-final2-link13">
                      <span
                        href="https://play.teleporthq.io/static/svg/default-img.svg"
                        className="footer-final2-text13 Footer"
                      >
                        {props.text3 ?? (
                          <Fragment>
                            <span className="footer-final2-text45">
                              Cross-site scripting (XSS)
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </a>
                    <a href={props.textUrl4} className="footer-final2-link14">
                      <span
                        href="https://play.teleporthq.io/static/svg/default-img.svg"
                        className="footer-final2-text14 Footer"
                      >
                        {props.text4 ?? (
                          <Fragment>
                            <span className="footer-final2-text42">
                              SQL injection
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </a>
                    <a href={props.textUrl5} className="footer-final2-link15">
                      <span
                        href="https://play.teleporthq.io/static/svg/default-img.svg"
                        className="footer-final2-text15 Footer"
                      >
                        {props.text5 ?? (
                          <Fragment>
                            <span className="footer-final2-text48">
                              Cross-site request forgery
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </a>
                    <a href={props.textUrl6} className="footer-final2-link16">
                      <span
                        href="https://play.teleporthq.io/static/svg/default-img.svg"
                        className="footer-final2-text16 Footer"
                      >
                        {props.text6 ?? (
                          <Fragment>
                            <span className="footer-final2-text35">
                              XML external entity injection
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </a>
                    <a href={props.textUrl7} className="footer-final2-link17">
                      <span
                        href="https://play.teleporthq.io/static/svg/default-img.svg"
                        className="footer-final2-text17 Footer"
                      >
                        {props.text7 ?? (
                          <Fragment>
                            <span className="footer-final2-text40">
                              Directory traversal
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </a>
                    <a href={props.textUrl8} className="footer-final2-link18">
                      <span
                        href="https://play.teleporthq.io/static/svg/default-img.svg"
                        className="footer-final2-text18 Footer"
                      >
                        {props.text8 ?? (
                          <Fragment>
                            <span className="footer-final2-text33">
                              Server-side request forgery
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </a>
                  </div>
                </div>
                <div className="footer-final2-section2">
                  <div className="footer-final2-container16">
                    <FooterColumnTitle2
                      text="Customers"
                      rootClassName="footer-column-title2root-class-name263"
                    ></FooterColumnTitle2>
                    <a href={props.textUrl9} className="footer-final2-link19">
                      <span
                        href="https://play.teleporthq.io/static/svg/default-img.svg"
                        className="footer-final2-text19 Footer"
                      >
                        {props.text9 ?? (
                          <Fragment>
                            <span className="footer-final2-text32">
                              Organizations
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </a>
                    <a href={props.textUrl10} className="footer-final2-link20">
                      <span
                        href="https://play.teleporthq.io/static/svg/default-img.svg"
                        className="footer-final2-text20 Footer"
                      >
                        {props.text10 ?? (
                          <Fragment>
                            <span className="footer-final2-text36">
                              Testers
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </a>
                    <a href={props.textUrl11} className="footer-final2-link21">
                      <span
                        href="https://play.teleporthq.io/static/svg/default-img.svg"
                        className="footer-final2-text21 Footer"
                      >
                        {props.text11 ?? (
                          <Fragment>
                            <span className="footer-final2-text44">
                              Developers
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </a>
                  </div>
                  <div className="footer-final2-container17">
                    <FooterColumnTitle2
                      text="Company"
                      rootClassName="footer-column-title2root-class-name264"
                    ></FooterColumnTitle2>
                    <a href={props.textUrl12} className="footer-final2-link22">
                      <span
                        href="https://play.teleporthq.io/static/svg/default-img.svg"
                        className="footer-final2-text22 Footer"
                      >
                        {props.text12 ?? (
                          <Fragment>
                            <span className="footer-final2-text51">About</span>
                          </Fragment>
                        )}
                      </span>
                    </a>
                    <a href={props.textUrl13} className="footer-final2-link23">
                      <span
                        href="https://play.teleporthq.io/static/svg/default-img.svg"
                        className="footer-final2-text23 Footer"
                      >
                        {props.text13 ?? (
                          <Fragment>
                            <span className="footer-final2-text50">
                              Careers
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </a>
                    <a href={props.textUrl14} className="footer-final2-link24">
                      <span
                        href="https://play.teleporthq.io/static/svg/default-img.svg"
                        className="footer-final2-text24 Footer"
                      >
                        {props.text14 ?? (
                          <Fragment>
                            <span className="footer-final2-text38">
                              Contact
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </a>
                    <a href={props.textUrl15} className="footer-final2-link25">
                      <span
                        href="https://play.teleporthq.io/static/svg/default-img.svg"
                        className="footer-final2-text25 Footer"
                      >
                        {props.text15 ?? (
                          <Fragment>
                            <span className="footer-final2-text47">Legal</span>
                          </Fragment>
                        )}
                      </span>
                    </a>
                    <a href={props.textUrl16} className="footer-final2-link26">
                      <span
                        href="https://play.teleporthq.io/static/svg/default-img.svg"
                        className="footer-final2-text26 Footer"
                      >
                        {props.text16 ?? (
                          <Fragment>
                            <span className="footer-final2-text49">
                              Privacy Notice
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </a>
                  </div>
                </div>
                <div className="footer-final2-section3">
                  <div className="footer-final2-container18">
                    <FooterColumnTitle2
                      text="Insights"
                      rootClassName="footer-column-title2root-class-name265"
                    ></FooterColumnTitle2>
                    <a href={props.textUrl17} className="footer-final2-link27">
                      <span
                        href="https://play.teleporthq.io/static/svg/default-img.svg"
                        className="footer-final2-text27 Footer"
                      >
                        {props.text17 ?? (
                          <Fragment>
                            <span className="footer-final2-text46">
                              Web Security Academy
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </a>
                    <a href={props.textUrl18} className="footer-final2-link28">
                      <span
                        href="https://play.teleporthq.io/static/svg/default-img.svg"
                        className="footer-final2-text28 Footer"
                      >
                        {props.text18 ?? (
                          <Fragment>
                            <span className="footer-final2-text31">Blog</span>
                          </Fragment>
                        )}
                      </span>
                    </a>
                    <a href={props.textUrl19} className="footer-final2-link29">
                      <span
                        href="https://play.teleporthq.io/static/svg/default-img.svg"
                        className="footer-final2-text29 Footer"
                      >
                        {props.text19 ?? (
                          <Fragment>
                            <span className="footer-final2-text43">
                              Research
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </a>
                  </div>
                  <div className="footer-final2-container19">
                    <a
                      href="https://portswigger.net"
                      className="footer-final2-link30"
                    >
                      <img
                        alt={props.imageAlt}
                        src="/external/portswigger-logo.svg"
                        className="footer-final2-image"
                      />
                    </a>
                    <a
                      href="https://x.com/PortSwigger"
                      className="footer-final2-link31"
                    >
                      <TwitterButton2
                        rootClassName="twitter-button2root-class-name50"
                        className="footer-final2-component6"
                      ></TwitterButton2>
                    </a>
                    <p className="footer-final2-text30 Footer">
                      {props.text20 ?? (
                        <Fragment>
                          <span className="footer-final2-text34">
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

FooterFinal2.defaultProps = {
  textUrl18: 'https://portswigger.net/blog',
  text18: undefined,
  textUrl12: 'https://portswigger.net/about',
  text9: undefined,
  imageAlt: 'image',
  text8: undefined,
  textUrl17: 'https://portswigger.net/web-security',
  textUrl2: 'https://portswigger.net/burp/releases',
  text20: undefined,
  textUrl8: 'https://portswigger.net/web-security/ssrf',
  text6: undefined,
  textUrl13: 'https://portswigger.net/careers',
  textUrl1: 'https://portswigger.net/burp',
  text10: undefined,
  text1: undefined,
  textUrl5: 'https://portswigger.net/web-security/csrf',
  textUrl11: 'https://portswigger.net/developers',
  textUrl3: 'https://portswigger.net/web-security/cross-site-scripting',
  rootClassName: '',
  textUrl16: 'https://portswigger.net/privacy',
  textUrl4: 'https://portswigger.net/web-security/sql-injection',
  textUrl14: 'https://portswigger.net/about/contact',
  text14: undefined,
  text: undefined,
  textUrl: 'https://portswigger.net/burp/vulnerability-scanner',
  text7: undefined,
  text2: undefined,
  text4: undefined,
  textUrl6: 'https://portswigger.net/web-security/xxe',
  text19: undefined,
  textUrl10: 'https://portswigger.net/testers',
  text11: undefined,
  text3: undefined,
  text17: undefined,
  textUrl9: 'https://portswigger.net/organizations',
  textUrl15: 'https://portswigger.net/legal',
  text15: undefined,
  text5: undefined,
  text16: undefined,
  textUrl19: 'https://portswigger.net/research',
  textUrl7: 'https://portswigger.net/web-security/file-path-traversal',
  text13: undefined,
  text12: undefined,
}

FooterFinal2.propTypes = {
  textUrl18: PropTypes.string,
  text18: PropTypes.element,
  textUrl12: PropTypes.string,
  text9: PropTypes.element,
  imageAlt: PropTypes.string,
  text8: PropTypes.element,
  textUrl17: PropTypes.string,
  textUrl2: PropTypes.string,
  text20: PropTypes.element,
  textUrl8: PropTypes.string,
  text6: PropTypes.element,
  textUrl13: PropTypes.string,
  textUrl1: PropTypes.string,
  text10: PropTypes.element,
  text1: PropTypes.element,
  textUrl5: PropTypes.string,
  textUrl11: PropTypes.string,
  textUrl3: PropTypes.string,
  rootClassName: PropTypes.string,
  textUrl16: PropTypes.string,
  textUrl4: PropTypes.string,
  textUrl14: PropTypes.string,
  text14: PropTypes.element,
  text: PropTypes.element,
  textUrl: PropTypes.string,
  text7: PropTypes.element,
  text2: PropTypes.element,
  text4: PropTypes.element,
  textUrl6: PropTypes.string,
  text19: PropTypes.element,
  textUrl10: PropTypes.string,
  text11: PropTypes.element,
  text3: PropTypes.element,
  text17: PropTypes.element,
  textUrl9: PropTypes.string,
  textUrl15: PropTypes.string,
  text15: PropTypes.element,
  text5: PropTypes.element,
  text16: PropTypes.element,
  textUrl19: PropTypes.string,
  textUrl7: PropTypes.string,
  text13: PropTypes.element,
  text12: PropTypes.element,
}

export default FooterFinal2
