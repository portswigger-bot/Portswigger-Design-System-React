import React from 'react'

import { Helmet } from 'react-helmet'

import LiveTagProduction from '../../../components/live-tag-production'
import PardotFormHandlerScript1 from '../../../components/pardot-form-handler-script1'
import Footer from '../../../components/footer'
import './burp-suite-dast-sales-enquiry-form.css'

const BurpSuiteDASTSalesEnquiryForm = (props) => {
  return (
    <div className="burp-suite-dast-sales-enquiry-form-container10">
      <Helmet>
        <title>Burp Suite DAST | Enquire now</title>
        <meta
          name="description"
          content="PortSwigger offers tools for web application security, testing, &amp; scanning. Choose from a range of security tools, &amp; identify the very latest vulnerabilities."
        />
        <meta property="og:title" content="Burp Suite DAST | Enquire now" />
        <meta
          property="og:description"
          content="PortSwigger offers tools for web application security, testing, &amp; scanning. Choose from a range of security tools, &amp; identify the very latest vulnerabilities."
        />
      </Helmet>
      <LiveTagProduction rootClassName="live-tag-productionroot-class-name57"></LiveTagProduction>
      <div className="burp-suite-dast-sales-enquiry-form-container11">
        <a
          href="https://portswigger.net/"
          target="_blank"
          rel="noreferrer noopener"
          className="burp-suite-dast-sales-enquiry-form-link"
        >
          <img
            alt="PortSwigger Logo"
            src="/Logos/Dark/dark-portswigger-200h.png"
            className="burp-suite-dast-sales-enquiry-form-image"
          />
        </a>
      </div>
      <PardotFormHandlerScript1 rootClassName="pardot-form-handler-script1root-class-name1"></PardotFormHandlerScript1>
      <div className="burp-suite-dast-sales-enquiry-form-hero-form section-full">
        <div className="burp-suite-dast-sales-enquiry-form-max-width section-max-width gap-4">
          <div className="flex-row gap-4 lg-flex-col burp-suite-dast-sales-enquiry-form-container12">
            <div
              id="Demo-form"
              className="burp-suite-dast-sales-enquiry-form-illustration flex-col flex-row"
            >
              <form
                id="Sales-Enquiry-2025"
                name="Sales-Enquiry-2025"
                action="https://formsubmission.portswigger.net/submitformpa"
                method="POST"
                enctype="text/plain"
                className="burp-suite-dast-sales-enquiry-form-form formsubmission"
              >
                <input
                  type="text"
                  name="FormName"
                  value="Sales Enquiry Form"
                  placeholder="placeholder"
                  className="burp-suite-dast-sales-enquiry-form-demo-request-form1 input"
                />
                <input
                  type="text"
                  name="source"
                  value="Sales Enquiry Form"
                  placeholder="placeholder"
                  className="burp-suite-dast-sales-enquiry-form-demo-request-form2 input"
                />
                <h1 className="burp-suite-dast-sales-enquiry-form-text10">
                  Sales enquiry form
                </h1>
                <div className="burp-suite-dast-sales-enquiry-form-container13">
                  <div className="burp-suite-dast-sales-enquiry-form-container14">
                    <div className="burp-suite-dast-sales-enquiry-form-container15">
                      <span className="burp-suite-dast-sales-enquiry-form-text11">
                        First name*
                      </span>
                      <input
                        type="text"
                        name="firstname"
                        required
                        placeholder="First name"
                        autoComplete="given-name"
                        className="burp-suite-dast-sales-enquiry-form-textinput1 input"
                      />
                      <span
                        hidden
                        data-error="firstname"
                        className="burp-suite-dast-sales-enquiry-form-text12 pardot-hidden-error-message"
                      >
                        Required
                      </span>
                    </div>
                    <div className="burp-suite-dast-sales-enquiry-form-container16">
                      <span className="burp-suite-dast-sales-enquiry-form-text13">
                        Last name*
                      </span>
                      <input
                        type="text"
                        name="lastname"
                        required
                        placeholder="Last name"
                        autoComplete="family-name"
                        className="burp-suite-dast-sales-enquiry-form-textinput2 input"
                      />
                      <span
                        hidden
                        data-error="lastname"
                        className="burp-suite-dast-sales-enquiry-form-text14 pardot-hidden-error-message"
                      >
                        Required
                      </span>
                    </div>
                  </div>
                  <div className="burp-suite-dast-sales-enquiry-form-container17">
                    <div className="burp-suite-dast-sales-enquiry-form-container18">
                      <span className="burp-suite-dast-sales-enquiry-form-text15">
                        Business email address*
                      </span>
                      <input
                        type="text"
                        name="email"
                        required
                        placeholder="Business email address"
                        autoComplete="given-name"
                        className="burp-suite-dast-sales-enquiry-form-textinput3 input"
                      />
                      <span
                        hidden
                        data-error="email"
                        className="burp-suite-dast-sales-enquiry-form-text16 pardot-hidden-error-message"
                      >
                        Required
                      </span>
                    </div>
                  </div>
                  <div className="burp-suite-dast-sales-enquiry-form-container19">
                    <span className="burp-suite-dast-sales-enquiry-form-text17">
                      Who are you purchasing Burp Suite DAST for?*
                    </span>
                    <select
                      name="usertype"
                      required
                      placeholder="Please select"
                      autoComplete="off"
                      className="burp-suite-dast-sales-enquiry-form-select1 dropdown-boxes-form"
                    >
                      <option value="  ">Please select</option>
                      <option value="My Organization">My Organization</option>
                      <option value="A Customer (I am a reseller)">
                        A Customer (I am a reseller)
                      </option>
                      <option value="A Customer (I am a consultant)">
                        A Customer (I am a consultant)
                      </option>
                      <option value="Multiple customers (I am a MSSP)">
                        Multiple customers (I am a MSSP)
                      </option>
                    </select>
                    <span
                      hidden
                      data-error="usertype"
                      className="burp-suite-dast-sales-enquiry-form-text18 pardot-hidden-error-message"
                    >
                      Required
                    </span>
                  </div>
                  <div className="burp-suite-dast-sales-enquiry-form-container20">
                    <div className="burp-suite-dast-sales-enquiry-form-container21">
                      <span className="burp-suite-dast-sales-enquiry-form-text19">
                        What&apos;s your expected timeline for purchasing a DAST
                        tool?*
                      </span>
                      <select
                        name="projectstatus"
                        required
                        placeholder="Please select"
                        autoComplete="off"
                        className="burp-suite-dast-sales-enquiry-form-select2 dropdown-boxes-form"
                      >
                        <option value=" ">Please select</option>
                        <option value="As soon as possible">
                          As soon as possible
                        </option>
                        <option value="In the next 6 months">
                          In the next 6 months
                        </option>
                        <option value="In the next 12 months">
                          In the next 12 months
                        </option>
                        <option value="Unsure; just exploring options">
                          Unsure; just exploring options
                        </option>
                        <span></span>
                      </select>
                      <span
                        hidden
                        data-error="projectstatus"
                        className="burp-suite-dast-sales-enquiry-form-text21 pardot-hidden-error-message"
                      >
                        Required
                      </span>
                    </div>
                  </div>
                  <div className="burp-suite-dast-sales-enquiry-form-container22">
                    <div className="burp-suite-dast-sales-enquiry-form-container23">
                      <span className="burp-suite-dast-sales-enquiry-form-text22">
                        <span>
                          How many web applications is your team responsible
                          for?*
                        </span>
                        <br></br>
                      </span>
                      <select
                        name="webapps"
                        required
                        placeholder="Please select"
                        autoComplete="off"
                        className="burp-suite-dast-sales-enquiry-form-select3 dropdown-boxes-form"
                      >
                        <option value="  ">Please select</option>
                        <option value="0-10">0-10</option>
                        <option value="10-50">10-50</option>
                        <option value="50-100">50-100</option>
                        <option value="100+">100+</option>
                        <span></span>
                      </select>
                      <span
                        hidden
                        data-error="dastexperience"
                        className="burp-suite-dast-sales-enquiry-form-text26 pardot-hidden-error-message"
                      >
                        Required
                      </span>
                    </div>
                  </div>
                  <div className="burp-suite-dast-sales-enquiry-form-container24">
                    <div className="burp-suite-dast-sales-enquiry-form-container25">
                      <span className="burp-suite-dast-sales-enquiry-form-text27">
                        Please share details about your enquiry, including any
                        specific requirements or questions*
                      </span>
                      <textarea
                        name="enquirydetails"
                        required="True"
                        placeholder="Type here"
                        className="burp-suite-dast-sales-enquiry-form-textarea textarea"
                      ></textarea>
                      <span
                        hidden
                        data-error="enquirydetails"
                        className="burp-suite-dast-sales-enquiry-form-text28 pardot-hidden-error-message"
                      >
                        Required
                      </span>
                    </div>
                  </div>
                  <button
                    id="RequestADemo"
                    type="button"
                    data-redirect-url="/burp/enterprise/enquiry-thank-you"
                    className="burp-suite-dast-sales-enquiry-form-button thq-button-filled button"
                  >
                    <span
                      buttontext="https://play.teleporthq.io/static/svg/default-img.svg"
                      className="burp-suite-dast-sales-enquiry-form-text29"
                    >
                      SUBMIT
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer rootClassName="footerroot-class-name38"></Footer>
    </div>
  )
}

export default BurpSuiteDASTSalesEnquiryForm
