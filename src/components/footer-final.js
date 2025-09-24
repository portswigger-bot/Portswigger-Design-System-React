import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import FooterColumnTitle from './footer-column-title'
import TwitterButton from './twitter-button'
import './footer-final.css'

const FooterFinal = (props) => {
  return (
    <div className={`footer-final-footer1 ${props.rootClassName} `}>
      <div className="footer-final-container10">
        <div className="footer-final-container11">
          <div className="footer-final-footer2">
            <div className="footer-final-container12">
              <div className="footer-final-container13">
                <div className="footer-final-section1">
                  <div className="footer-final-container14">
                    <FooterColumnTitle
                      text="Burp Suite"
                      rootClassName="footer-column-titleroot-class-name261"
                    ></FooterColumnTitle>
                    <a href={props.textUrl} className="footer-final-link10">
                      <span
                        href="https://play.teleporthq.io/static/svg/default-img.svg"
                        className="footer-final-text10 Footer"
                      >
                        {props.text ?? (
                          <Fragment>
                            <span className="footer-final-text49">
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
                      className="footer-final-link11"
                    >
                      <span
                        href="https://play.teleporthq.io/static/svg/default-img.svg"
                        className="footer-final-text11 Footer"
                      >
                        {props.text1 ?? (
                          <Fragment>
                            <span className="footer-final-text32">
                              Burp Suite Editions
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </a>
                    <a href={props.textUrl2} className="footer-final-link12">
                      <span
                        href="https://play.teleporthq.io/static/svg/default-img.svg"
                        className="footer-final-text12 Footer"
                      >
                        {props.text2 ?? (
                          <Fragment>
                            <span className="footer-final-text34">
                              Release Notes
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </a>
                  </div>
                  <div className="footer-final-container15">
                    <FooterColumnTitle
                      text="Vulnerabilities"
                      rootClassName="footer-column-titleroot-class-name262"
                    ></FooterColumnTitle>
                    <a href={props.textUrl3} className="footer-final-link13">
                      <span
                        href="https://play.teleporthq.io/static/svg/default-img.svg"
                        className="footer-final-text13 Footer"
                      >
                        {props.text3 ?? (
                          <Fragment>
                            <span className="footer-final-text43">
                              Cross-site scripting (XSS)
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </a>
                    <a href={props.textUrl4} className="footer-final-link14">
                      <span
                        href="https://play.teleporthq.io/static/svg/default-img.svg"
                        className="footer-final-text14 Footer"
                      >
                        {props.text4 ?? (
                          <Fragment>
                            <span className="footer-final-text40">
                              SQL injection
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </a>
                    <a href={props.textUrl5} className="footer-final-link15">
                      <span
                        href="https://play.teleporthq.io/static/svg/default-img.svg"
                        className="footer-final-text15 Footer"
                      >
                        {props.text5 ?? (
                          <Fragment>
                            <span className="footer-final-text50">
                              Cross-site request forgery
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </a>
                    <a href={props.textUrl6} className="footer-final-link16">
                      <span
                        href="https://play.teleporthq.io/static/svg/default-img.svg"
                        className="footer-final-text16 Footer"
                      >
                        {props.text6 ?? (
                          <Fragment>
                            <span className="footer-final-text36">
                              XML external entity injection
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </a>
                    <a href={props.textUrl7} className="footer-final-link17">
                      <span
                        href="https://play.teleporthq.io/static/svg/default-img.svg"
                        className="footer-final-text17 Footer"
                      >
                        {props.text7 ?? (
                          <Fragment>
                            <span className="footer-final-text33">
                              Directory traversal
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </a>
                    <a href={props.textUrl8} className="footer-final-link18">
                      <span
                        href="https://play.teleporthq.io/static/svg/default-img.svg"
                        className="footer-final-text18 Footer"
                      >
                        {props.text8 ?? (
                          <Fragment>
                            <span className="footer-final-text47">
                              Server-side request forgery
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </a>
                  </div>
                </div>
                <div className="footer-final-section2">
                  <div className="footer-final-container16">
                    <FooterColumnTitle
                      text="Customers"
                      rootClassName="footer-column-titleroot-class-name263"
                    ></FooterColumnTitle>
                    <a href={props.textUrl9} className="footer-final-link19">
                      <span
                        href="https://play.teleporthq.io/static/svg/default-img.svg"
                        className="footer-final-text19 Footer"
                      >
                        {props.text9 ?? (
                          <Fragment>
                            <span className="footer-final-text31">
                              Organizations
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </a>
                    <a href={props.textUrl10} className="footer-final-link20">
                      <span
                        href="https://play.teleporthq.io/static/svg/default-img.svg"
                        className="footer-final-text20 Footer"
                      >
                        {props.text10 ?? (
                          <Fragment>
                            <span className="footer-final-text38">Testers</span>
                          </Fragment>
                        )}
                      </span>
                    </a>
                    <a href={props.textUrl11} className="footer-final-link21">
                      <span
                        href="https://play.teleporthq.io/static/svg/default-img.svg"
                        className="footer-final-text21 Footer"
                      >
                        {props.text11 ?? (
                          <Fragment>
                            <span className="footer-final-text37">
                              Developers
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </a>
                  </div>
                  <div className="footer-final-container17">
                    <FooterColumnTitle
                      text="Company"
                      rootClassName="footer-column-titleroot-class-name264"
                    ></FooterColumnTitle>
                    <a href={props.textUrl12} className="footer-final-link22">
                      <span
                        href="https://play.teleporthq.io/static/svg/default-img.svg"
                        className="footer-final-text22 Footer"
                      >
                        {props.text12 ?? (
                          <Fragment>
                            <span className="footer-final-text45">About</span>
                          </Fragment>
                        )}
                      </span>
                    </a>
                    <a href={props.textUrl13} className="footer-final-link23">
                      <span
                        href="https://play.teleporthq.io/static/svg/default-img.svg"
                        className="footer-final-text23 Footer"
                      >
                        {props.text13 ?? (
                          <Fragment>
                            <span className="footer-final-text51">Careers</span>
                          </Fragment>
                        )}
                      </span>
                    </a>
                    <a href={props.textUrl14} className="footer-final-link24">
                      <span
                        href="https://play.teleporthq.io/static/svg/default-img.svg"
                        className="footer-final-text24 Footer"
                      >
                        {props.text14 ?? (
                          <Fragment>
                            <span className="footer-final-text44">Contact</span>
                          </Fragment>
                        )}
                      </span>
                    </a>
                    <a href={props.textUrl15} className="footer-final-link25">
                      <span
                        href="https://play.teleporthq.io/static/svg/default-img.svg"
                        className="footer-final-text25 Footer"
                      >
                        {props.text15 ?? (
                          <Fragment>
                            <span className="footer-final-text39">Legal</span>
                          </Fragment>
                        )}
                      </span>
                    </a>
                    <a href={props.textUrl16} className="footer-final-link26">
                      <span
                        href="https://play.teleporthq.io/static/svg/default-img.svg"
                        className="footer-final-text26 Footer"
                      >
                        {props.text16 ?? (
                          <Fragment>
                            <span className="footer-final-text41">
                              Privacy Notice
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </a>
                  </div>
                </div>
                <div className="footer-final-section3">
                  <div className="footer-final-container18">
                    <FooterColumnTitle
                      text="Insights"
                      rootClassName="footer-column-titleroot-class-name265"
                    ></FooterColumnTitle>
                    <a href={props.textUrl17} className="footer-final-link27">
                      <span
                        href="https://play.teleporthq.io/static/svg/default-img.svg"
                        className="footer-final-text27 Footer"
                      >
                        {props.text17 ?? (
                          <Fragment>
                            <span className="footer-final-text48">
                              Web Security Academy
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </a>
                    <a href={props.textUrl18} className="footer-final-link28">
                      <span
                        href="https://play.teleporthq.io/static/svg/default-img.svg"
                        className="footer-final-text28 Footer"
                      >
                        {props.text18 ?? (
                          <Fragment>
                            <span className="footer-final-text42">Blog</span>
                          </Fragment>
                        )}
                      </span>
                    </a>
                    <a href={props.textUrl19} className="footer-final-link29">
                      <span
                        href="https://play.teleporthq.io/static/svg/default-img.svg"
                        className="footer-final-text29 Footer"
                      >
                        {props.text19 ?? (
                          <Fragment>
                            <span className="footer-final-text46">
                              Research
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </a>
                  </div>
                  <div className="footer-final-container19">
                    <a
                      href="https://portswigger.net"
                      className="footer-final-link30"
                    >
                      <img
                        alt={props.imageAlt}
                        src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/08f747ed-00a5-4c49-bf33-6ab4b22224ae/52a7f623-c5dd-4b16-b473-f1c284134e38?org_if_sml=13256&amp;force_format=original"
                        className="footer-final-image"
                      />
                    </a>
                    <a
                      href="https://x.com/PortSwigger"
                      className="footer-final-link31"
                    >
                      <TwitterButton
                        rootClassName="twitter-buttonroot-class-name50"
                        className="footer-final-component6"
                      ></TwitterButton>
                    </a>
                    <p className="footer-final-text30 Footer">
                      {props.text20 ?? (
                        <Fragment>
                          <span className="footer-final-text35">
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

FooterFinal.defaultProps = {
  text9: undefined,
  text1: undefined,
  textUrl6: 'https://portswigger.net/web-security/xxe',
  textUrl14: 'https://portswigger.net/about/contact',
  textUrl4: 'https://portswigger.net/web-security/sql-injection',
  text7: undefined,
  textUrl15: 'https://portswigger.net/legal',
  textUrl17: 'https://portswigger.net/web-security',
  text2: undefined,
  textUrl: 'https://portswigger.net/burp/vulnerability-scanner',
  textUrl16: 'https://portswigger.net/privacy',
  text20: undefined,
  text6: undefined,
  text11: undefined,
  text10: undefined,
  textUrl12: 'https://portswigger.net/about',
  textUrl3: 'https://portswigger.net/web-security/cross-site-scripting',
  text15: undefined,
  text4: undefined,
  text16: undefined,
  textUrl11: 'https://portswigger.net/developers',
  textUrl18: 'https://portswigger.net/blog',
  text18: undefined,
  textUrl13: 'https://portswigger.net/careers',
  textUrl8: 'https://portswigger.net/web-security/ssrf',
  text3: undefined,
  textUrl1: 'https://portswigger.net/burp',
  textUrl9: 'https://portswigger.net/organizations',
  text14: undefined,
  textUrl10: 'https://portswigger.net/testers',
  text12: undefined,
  text19: undefined,
  imageAlt: 'image',
  text8: undefined,
  textUrl2: 'https://portswigger.net/burp/releases',
  text17: undefined,
  textUrl19: 'https://portswigger.net/research',
  text: undefined,
  textUrl5: 'https://portswigger.net/web-security/csrf',
  text5: undefined,
  rootClassName: '',
  textUrl7: 'https://portswigger.net/web-security/file-path-traversal',
  text13: undefined,
}

FooterFinal.propTypes = {
  text9: PropTypes.element,
  text1: PropTypes.element,
  textUrl6: PropTypes.string,
  textUrl14: PropTypes.string,
  textUrl4: PropTypes.string,
  text7: PropTypes.element,
  textUrl15: PropTypes.string,
  textUrl17: PropTypes.string,
  text2: PropTypes.element,
  textUrl: PropTypes.string,
  textUrl16: PropTypes.string,
  text20: PropTypes.element,
  text6: PropTypes.element,
  text11: PropTypes.element,
  text10: PropTypes.element,
  textUrl12: PropTypes.string,
  textUrl3: PropTypes.string,
  text15: PropTypes.element,
  text4: PropTypes.element,
  text16: PropTypes.element,
  textUrl11: PropTypes.string,
  textUrl18: PropTypes.string,
  text18: PropTypes.element,
  textUrl13: PropTypes.string,
  textUrl8: PropTypes.string,
  text3: PropTypes.element,
  textUrl1: PropTypes.string,
  textUrl9: PropTypes.string,
  text14: PropTypes.element,
  textUrl10: PropTypes.string,
  text12: PropTypes.element,
  text19: PropTypes.element,
  imageAlt: PropTypes.string,
  text8: PropTypes.element,
  textUrl2: PropTypes.string,
  text17: PropTypes.element,
  textUrl19: PropTypes.string,
  text: PropTypes.element,
  textUrl5: PropTypes.string,
  text5: PropTypes.element,
  rootClassName: PropTypes.string,
  textUrl7: PropTypes.string,
  text13: PropTypes.element,
}

export default FooterFinal
