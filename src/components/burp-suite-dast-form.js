import React, { Fragment } from 'react'

import MinimalHeader from './minimal-header'
import Button from './button'
import './burp-suite-dast-form.css'

const BurpSuiteDastForm = (props) => {
  return (
    <div className="burp-suite-dast-form-burp-suite-dastform column width-100">
      <MinimalHeader rootClassName="minimal-headerroot-class-name5"></MinimalHeader>
      <div className="burp-suite-dast-form-container10 flex-1 width-max-content padding-horizontal-m column width-100">
        <div className="width-max-content"></div>
        <form
          id="Vendor Saloon"
          name="Vendor-Saloon"
          action="https://formsubmission.portswigger.net/submitformpa"
          method="POST"
          enctype="text/plain"
          className="burp-suite-dast-form-form form-wrapper"
        >
          <h1 className="heading-2">Find out more about Burp Suite DAST</h1>
          <span className="burp-suite-dast-form-text11">
            Fill in the form below to receive some more information about Burp
            Suite DAST - our best of breed DAST scanner for AppSec teams looking
            to scan at scale. 
          </span>
          <div className="column width-100 burp-suite-dast-form-container12">
            <div className="burp-suite-dast-form-container13">
              <div className="burp-suite-dast-form-container14">
                <span className="form-label text-body-3">First name*</span>
                <input
                  type="text"
                  name="firstname"
                  required
                  placeholder="First name"
                  autoComplete="given-name"
                  className="text-input input"
                />
                <span
                  hidden
                  data-error="firstname"
                  className="burp-suite-dast-form-text13 display-none"
                >
                  Required
                </span>
              </div>
              <div className="burp-suite-dast-form-container15">
                <span className="form-label text-body-3">Last name*</span>
                <input
                  type="text"
                  name="lastname"
                  required
                  placeholder="Last name"
                  autoComplete="family-name"
                  className="text-input input"
                />
                <span
                  hidden
                  data-error="lastname"
                  className="burp-suite-dast-form-text15 display-none"
                >
                  Required
                </span>
              </div>
            </div>
            <div className="column">
              <div className="burp-suite-dast-form-container17">
                <span className="form-label text-body-3">
                  Business email address*
                </span>
                <input
                  type="text"
                  name="email"
                  required
                  placeholder="Business email address"
                  autoComplete="email"
                  className="text-input input"
                />
                <span
                  hidden
                  data-error="businessemailaddress"
                  className="burp-suite-dast-form-text17 display-none"
                >
                  Required
                </span>
              </div>
              <div className="burp-suite-dast-form-container18">
                <span className="form-label text-body-3">Company name *</span>
                <input
                  type="text"
                  name="companyname"
                  required
                  placeholder="Company name"
                  autoComplete="email"
                  className="text-input input"
                />
                <span
                  hidden
                  data-error="businessemailaddress"
                  className="burp-suite-dast-form-text19 display-none"
                >
                  Required
                </span>
              </div>
            </div>
            <div className="burp-suite-dast-form-container19">
              <Button
                btnLabel={
                  <Fragment>
                    <span className="burp-suite-dast-form-text20">
                      FIND OUT MORE
                    </span>
                  </Fragment>
                }
                redirectUrl="/future-of-appsec-webinar-thank-you"
                iconPlacement="none"
                rootClassName="buttonroot-class-name48"
              ></Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default BurpSuiteDastForm
