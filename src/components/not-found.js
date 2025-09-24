import React from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import './not-found.css'

const NotFound = (props) => {
  return (
    <div className="not-found-container1 width-100">
      <div className="not-found-top-image padding-horizontal-m width-100 row">
        <div className="width-max-content padding-vertical-m column height-100 width-100">
          <h1 className="not-found-text1 heading-1 blink">Not Found</h1>
          <div>
            <div className="not-found-container4">
              <Script
                html={`<style>
    @keyframes blink {
        100% {
            opacity: 0;
        }
    }
</style>`}
              ></Script>
            </div>
          </div>
        </div>
      </div>
      <div className="not-found-container5 padding-horizontal-m column width-100">
        <div className="not-found-container6 width-max-content padding-vertical-m column width-100">
          <span className="text-body-1">{props.label}</span>
        </div>
      </div>
      <div className="not-found-bottom-image width-100"></div>
    </div>
  )
}

NotFound.defaultProps = {
  label:
    'The requested item was not found. We apologize for the inconvenience.',
}

NotFound.propTypes = {
  label: PropTypes.string,
}

export default NotFound
