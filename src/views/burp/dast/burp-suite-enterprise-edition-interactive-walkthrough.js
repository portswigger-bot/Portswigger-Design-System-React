import React from 'react'

import { Helmet } from 'react-helmet'

import LiveTagProduction from '../../../components/live-tag-production'
import PardotFormHandlerScript from '../../../components/pardot-form-handler-script'
import CompanyLogos from '../../../components/company-logos'
import Footer from '../../../components/footer'
import './burp-suite-enterprise-edition-interactive-walkthrough.css'

const BurpSuiteEnterpriseEditionInteractiveWalkthrough = (props) => {
  return (
    <div className="burp-suite-enterprise-edition-interactive-walkthrough-container10">
      <Helmet>
        <title>Interactive Walkthrough - Burp Suite DAST</title>
        <meta
          name="description"
          content="PortSwigger offers tools for web application security, testing, &amp; scanning. Choose from a range of security tools, &amp; identify the very latest vulnerabilities."
        />
        <meta
          property="og:title"
          content="Interactive Walkthrough - Burp Suite DAST"
        />
        <meta
          property="og:description"
          content="PortSwigger offers tools for web application security, testing, &amp; scanning. Choose from a range of security tools, &amp; identify the very latest vulnerabilities."
        />
      </Helmet>
      <LiveTagProduction rootClassName="live-tag-productionroot-class-name26"></LiveTagProduction>
      <PardotFormHandlerScript rootClassName="pardot-form-handler-scriptroot-class-name17"></PardotFormHandlerScript>
      <div className="burp-suite-enterprise-edition-interactive-walkthrough-container11">
        <a
          href="http://portswigger.net"
          className="burp-suite-enterprise-edition-interactive-walkthrough-link"
        >
          <img
            alt="PortSwigger Logo"
            src="/Logos/Dark/dark-portswigger-200h.png"
            className="burp-suite-enterprise-edition-interactive-walkthrough-image1"
          />
        </a>
      </div>
      <div className="burp-suite-enterprise-edition-interactive-walkthrough-hero-form section-full">
        <div className="burp-suite-enterprise-edition-interactive-walkthrough-max-width section-max-width gap-4">
          <div className="flex-row gap-4 lg-flex-col burp-suite-enterprise-edition-interactive-walkthrough-container12">
            <div className="burp-suite-enterprise-edition-interactive-walkthrough-benefits flex-col flex-1 gap-2">
              <h2 className="burp-suite-enterprise-edition-interactive-walkthrough-text10">
                Burp Suite DAST Interactive Walkthrough
              </h2>
              <h1 className="burp-suite-enterprise-edition-interactive-walkthrough-text11">
                <span>
                  Explore scanning, scheduling, triage, and reporting - in
                  minutes.
                </span>
                <br></br>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </h1>
              <span className="burp-suite-enterprise-edition-interactive-walkthrough-text15">
                <span>
                  See how Burp Suite DAST supports real-world application
                  security workflows - from first scan to issue resolution - in
                  our interactive walkthrough. 
                </span>
                <br></br>
                <br></br>
                <span>
                  This is for AppSec teams looking to automate at scale. 
                </span>
                <br></br>
                <br></br>
                <span className="burp-suite-enterprise-edition-interactive-walkthrough-text22">
                  Fill in the form to get started 
                </span>
                <span>👉</span>
                <br></br>
                <br></br>
              </span>
            </div>
            <div
              id="Demo-form"
              className="burp-suite-enterprise-edition-interactive-walkthrough-illustration flex-col flex-row"
            >
              <form
                id="Interactive-Walkthrough"
                name="Interactive-Walkthrough"
                action="https://formsubmission.portswigger.net/submitformpa"
                method="POST"
                enctype="text/plain"
                className="burp-suite-enterprise-edition-interactive-walkthrough-form formsubmission"
              >
                <input
                  type="text"
                  name="FormName"
                  value="BSEE Interactive Walkthrough"
                  placeholder="placeholder"
                  className="burp-suite-enterprise-edition-interactive-walkthrough-demo-request-form1 input"
                />
                <input
                  type="text"
                  name="source"
                  value="BSEE Interactive Walkthrough"
                  placeholder="placeholder"
                  className="burp-suite-enterprise-edition-interactive-walkthrough-demo-request-form2 input"
                />
                <h1 className="burp-suite-enterprise-edition-interactive-walkthrough-text26">
                  <span>
                    Fill in the form to start your
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>interactive walkthrough</span>
                </h1>
                <div className="burp-suite-enterprise-edition-interactive-walkthrough-container13">
                  <div className="burp-suite-enterprise-edition-interactive-walkthrough-container14">
                    <div className="burp-suite-enterprise-edition-interactive-walkthrough-container15">
                      <span className="burp-suite-enterprise-edition-interactive-walkthrough-text30">
                        First name*
                      </span>
                      <input
                        type="text"
                        name="firstname"
                        required
                        placeholder="First name"
                        autoComplete="given-name"
                        className="burp-suite-enterprise-edition-interactive-walkthrough-textinput1 input"
                      />
                      <span
                        hidden
                        data-error="firstname"
                        className="burp-suite-enterprise-edition-interactive-walkthrough-text31 pardot-hidden-error-message"
                      >
                        Required
                      </span>
                    </div>
                    <div className="burp-suite-enterprise-edition-interactive-walkthrough-container16">
                      <span className="burp-suite-enterprise-edition-interactive-walkthrough-text32">
                        Last name*
                      </span>
                      <input
                        type="text"
                        name="lastname"
                        required
                        placeholder="Last name"
                        autoComplete="family-name"
                        className="burp-suite-enterprise-edition-interactive-walkthrough-textinput2 input"
                      />
                      <span
                        hidden
                        data-error="lastname"
                        className="burp-suite-enterprise-edition-interactive-walkthrough-text33 pardot-hidden-error-message"
                      >
                        Required
                      </span>
                    </div>
                  </div>
                  <div className="burp-suite-enterprise-edition-interactive-walkthrough-container17">
                    <div className="burp-suite-enterprise-edition-interactive-walkthrough-container18">
                      <span className="burp-suite-enterprise-edition-interactive-walkthrough-text34">
                        Business Email Address*
                      </span>
                      <input
                        type="text"
                        name="businessemailaddress"
                        required
                        placeholder="Email address"
                        autoComplete="email"
                        className="burp-suite-enterprise-edition-interactive-walkthrough-textinput3 input"
                      />
                      <span
                        hidden
                        data-error="businessemailaddress"
                        className="burp-suite-enterprise-edition-interactive-walkthrough-text35 pardot-hidden-error-message"
                      >
                        Required
                      </span>
                    </div>
                    <div className="burp-suite-enterprise-edition-interactive-walkthrough-container19">
                      <span className="burp-suite-enterprise-edition-interactive-walkthrough-text36">
                        Job Function*
                      </span>
                      <select
                        name="jobfunction"
                        required
                        autoComplete="off"
                        className="burp-suite-enterprise-edition-interactive-walkthrough-job-functionrole dropdown-boxes-form"
                      >
                        <option value="  " disabled selected="True">
                          Please select
                        </option>
                        <option value="Application Security">
                          Application Security
                        </option>
                        <option value="Information Security">
                          Information Security
                        </option>
                        <option value="DevOps/Engineering">
                          DevOps/Engineering
                        </option>
                        <option value="Compliance">Compliance</option>
                        <option value="IT">IT</option>
                        <option value="Reseller">Reseller</option>
                        <option value="Consultant">Consultant</option>
                        <option value="Student">Student</option>
                        <option value="Other">Other</option>
                      </select>
                      <span
                        hidden
                        data-error="jobfunction"
                        className="burp-suite-enterprise-edition-interactive-walkthrough-text37 pardot-hidden-error-message"
                      >
                        Required
                      </span>
                    </div>
                  </div>
                  <div className="burp-suite-enterprise-edition-interactive-walkthrough-container20">
                    <span className="burp-suite-enterprise-edition-interactive-walkthrough-text38">
                      <span>
                        How many web applications is your team responsible for?*
                      </span>
                      <br></br>
                      <br></br>
                    </span>
                    <select
                      name="webapps"
                      required
                      placeholder="Please select"
                      autoComplete="off"
                      className="burp-suite-enterprise-edition-interactive-walkthrough-select dropdown-boxes-form"
                    >
                      <option value="  ">Please select</option>
                      <option value="0-10">0-10</option>
                      <option value="10-50">10-50</option>
                      <option value="50-100">50-100</option>
                      <option value="100+">100+</option>
                    </select>
                    <span
                      hidden
                      data-error="webapps"
                      className="burp-suite-enterprise-edition-interactive-walkthrough-text42 pardot-hidden-error-message"
                    >
                      Required
                    </span>
                  </div>
                  <button
                    id="RequestADemo"
                    type="button"
                    data-redirect-url="https://app.getreprise.com/launch/ryNNWBy/"
                    className="burp-suite-enterprise-edition-interactive-walkthrough-button thq-button-filled button"
                  >
                    <span
                      buttontext="https://play.teleporthq.io/static/svg/default-img.svg"
                      className="burp-suite-enterprise-edition-interactive-walkthrough-text43"
                    >
                      START YOUR WALKTHROUGH
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="burp-suite-enterprise-edition-interactive-walkthrough-testimonial">
        <div className="burp-suite-enterprise-edition-interactive-walkthrough-container21">
          <div className="burp-suite-enterprise-edition-interactive-walkthrough-hero-card">
            <div className="burp-suite-enterprise-edition-interactive-walkthrough-container22">
              <div className="burp-suite-enterprise-edition-interactive-walkthrough-container23">
                <img
                  alt="image"
                  src="/external/sap_2011_logo.svg"
                  className="burp-suite-enterprise-edition-interactive-walkthrough-image2"
                />
              </div>
              <div className="burp-suite-enterprise-edition-interactive-walkthrough-container24">
                <div className="burp-suite-enterprise-edition-interactive-walkthrough-container25">
                  <p className="burp-suite-enterprise-edition-interactive-walkthrough-text44">
                    By adopting Burp Suite&apos;s DAST solution, we&apos;re able
                    to satisfy our security requirements at scale through
                    automation with the lowest false positives possible.
                  </p>
                  <p className="burp-suite-enterprise-edition-interactive-walkthrough-text45">
                    <span className="burp-suite-enterprise-edition-interactive-walkthrough-text46">
                      Alijohn Ghassemlouei, Senior Director of Engineering
                    </span>
                    <br></br>
                  </p>
                  <p className="burp-suite-enterprise-edition-interactive-walkthrough-text48">
                    <span className="burp-suite-enterprise-edition-interactive-walkthrough-text49">
                      Sovereign Cloud at SAP
                    </span>
                    <br></br>
                  </p>
                </div>
                <div className="burp-suite-enterprise-edition-interactive-walkthrough-left-quote">
                  <img
                    alt="image"
                    src="/external/ps-quote-right-orange%201.svg"
                    className="burp-suite-enterprise-edition-interactive-walkthrough-image3"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="burp-suite-enterprise-edition-interactive-walkthrough-container26"></div>
      <CompanyLogos rootClassName="company-logosroot-class-name9"></CompanyLogos>
      <Footer rootClassName="footerroot-class-name39"></Footer>
    </div>
  )
}

export default BurpSuiteEnterpriseEditionInteractiveWalkthrough
