import React, { Fragment } from 'react'

import Button from './button'
import './webinar-form.css'

const WebinarForm = (props) => {
  return (
    <div className="webinar-form-container1">
      <form
        id="webinar-entry-form"
        name="webinar-entry-form"
        action="https://formsubmission.portswigger.net/submitformpa"
        method="POST"
        enctype="text/plain"
        className="formsubmission form-wrapper"
      >
        <input
          type="text"
          name="FormName"
          value="Webinar Entry Form"
          placeholder="placeholder"
          className="webinar-form-webinar-entry-form1 input"
        />
        <input
          type="text"
          name="source"
          value="Webinar Entry Form"
          placeholder="placeholder"
          className="webinar-form-webinar-entry-form2 input"
        />
        <h2 className="webinar-form-text1 heading-3">Watch the webinar</h2>
        <div className="webinar-form-container2">
          <div className="webinar-form-container3">
            <div className="webinar-form-container4">
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
                className="webinar-form-text3 display-none"
              >
                Required
              </span>
            </div>
            <div className="webinar-form-container5">
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
                className="webinar-form-text5 display-none"
              >
                Required
              </span>
            </div>
          </div>
          <div className="webinar-form-container6">
            <div className="webinar-form-container7">
              <span className="form-label text-body-3"> Email Address*</span>
              <input
                type="text"
                name="email"
                required
                placeholder="Email address"
                autoComplete="email"
                className="text-input input"
              />
              <span
                hidden
                data-error="businessemailaddress"
                className="webinar-form-text7 display-none"
              >
                Required
              </span>
            </div>
          </div>
          <Button
            btnLabel={
              <Fragment>
                <span className="webinar-form-text8">WATCH THE WEBINAR</span>
              </Fragment>
            }
            redirectUrl="/future-of-appsec-webinar-thank-you"
            iconPlacement="none"
            rootClassName="buttonroot-class-name26"
          ></Button>
        </div>
      </form>
    </div>
  )
}

export default WebinarForm
