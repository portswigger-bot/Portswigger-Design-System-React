import React from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import './pardot-form-handler-script1.css'

const PardotFormHandlerScript1 = (props) => {
  return (
    <div
      className={`pardot-form-handler-script1-container1 ${props.rootClassName} `}
    >
      <div className="pardot-form-handler-script1-container2">
        <div className="pardot-form-handler-script1-container3">
          <Script
            html={`<script>
var initFormSubmission = (function () {
    var setup = function () {
        const form = document.querySelector('.formsubmission');
        if (!form) {
            return;
        }

        let button = form.querySelector('button');
        if (!button) {
            return;
        }

        let utms = {};

        let xhr = new XMLHttpRequest();
        xhr.open('GET', '/session-info', true);

        xhr.onload = function () {
            if (xhr.status >= 200 && xhr.status < 300) {
                utms = JSON.parse(xhr.responseText);
            }
        }

        xhr.send();

        button.onclick = function (event) {
            let allRequiredFieldsPopulated = true;
            let inputs = form.querySelectorAll('input, textarea, select');
            inputs.forEach(function (input) {
                const errorMessageNode = form.querySelector(\`[data-error="\${input.getAttribute("name")}"]\`);
                if (input.hasAttribute('required') && !input.value.trim()) {
                    allRequiredFieldsPopulated = false;
                    if (errorMessageNode) {
                        errorMessageNode.hidden = false;
                        errorMessageNode.classList.remove("pardot-hidden-error-message")
                    }
                } else if (errorMessageNode) {
                    errorMessageNode.hidden = true;
                    errorMessageNode.classList.add("pardot-hidden-error-message")
                }
            });

            if (!allRequiredFieldsPopulated) {
                return;
            }

            let xhr = new XMLHttpRequest();
            xhr.open('POST', form.action, true);
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

            let formData = new FormData(form);
            let params = new URLSearchParams(formData);

            for (const [key, value] of Object.entries(utms)) {
                params.append(key, value);
            }

            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    window.location.href = button.getAttribute('data-redirect-url');
                }
            };

            xhr.send(params.toString());
        };
    }

    let init = () => setup();
    return {
        init: init
    };
});

document.addEventListener('DOMContentLoaded', function () {
    initFormSubmission().init();
});
</script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

PardotFormHandlerScript1.defaultProps = {
  rootClassName: '',
}

PardotFormHandlerScript1.propTypes = {
  rootClassName: PropTypes.string,
}

export default PardotFormHandlerScript1
