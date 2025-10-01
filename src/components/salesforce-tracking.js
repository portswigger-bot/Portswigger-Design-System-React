import React from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import './salesforce-tracking.css'

const SalesforceTracking = (props) => {
  return (
    <div className={`salesforce-tracking-container1 ${props.rootClassName} `}>
      <div className="salesforce-tracking-container2">
        <div className="salesforce-tracking-container3">
          <Script
            html={`<script type="text/javascript">
    piAId = '1067743';
    piCId = '';
    piHostname = 'go.portswigger.net';

    (function () {
        function async_load() {
            var s = document.createElement('script');
            s.type = 'text/javascript';
            s.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + piHostname + '/pd.js';
            var c = document.getElementsByTagName('script')[0];
            c.parentNode.insertBefore(s, c);
        }

        if (window.attachEvent) {
            window.attachEvent('onload', async_load);
        } else {
            window.addEventListener('load', async_load, false);
        }
    })();
</script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

SalesforceTracking.defaultProps = {
  rootClassName: '',
}

SalesforceTracking.propTypes = {
  rootClassName: PropTypes.string,
}

export default SalesforceTracking
