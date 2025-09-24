import React from 'react'

import PropTypes from 'prop-types'

import Icon from './icon'
import './footer.css'

const Footer = (props) => {
  return (
    <footer
      className={`footer-footer align-center padding-m column width-100 prevent-horizontal-overflow ${props.rootClassName} `}
    >
      <div className="footer-max-width gap-m width-max-content width-100 row">
        <div className="flex-1 column gap-xs">
          <span className="heading-6">Burp Suite</span>
          <a
            href="https://portswigger.net/burp/vulnerability-scanner"
            className="footer-link10 footer-link text-body-3"
          >
            Web vulnerability scanner
          </a>
          <a
            href="https://portswigger.net/burp"
            className="footer-link11 footer-link text-body-3"
          >
            Burp Suite Editions
          </a>
          <a
            href="https://portswigger.net/burp/releases"
            className="footer-link12 footer-link text-body-3"
          >
            Release Notes
          </a>
        </div>
        <div className="flex-1 column gap-xs">
          <span className="heading-6">Vulnerabilities</span>
          <a
            href="https://portswigger.net/web-security/cross-site-scripting"
            className="footer-link13 footer-link text-body-3"
          >
            Cross-site scripting (XSS)
          </a>
          <a
            href="https://portswigger.net/web-security/sql-injection"
            className="footer-link14 footer-link text-body-3"
          >
            SQL injection
          </a>
          <a
            href="https://portswigger.net/web-security/csrf"
            className="footer-link15 footer-link text-body-3"
          >
            Cross-site request forgery
          </a>
          <a
            href="https://portswigger.net/web-security/xxe"
            className="footer-link16 footer-link text-body-3"
          >
            XML external entity injection
          </a>
          <a
            href="https://portswigger.net/web-security/file-path-traversal"
            className="footer-link17 footer-link text-body-3"
          >
            Directory traversal
          </a>
          <a
            href="https://portswigger.net/web-security/ssrf"
            className="footer-link18 footer-link text-body-3"
          >
            Server-side request forgery
          </a>
        </div>
        <div className="flex-1 column gap-xs">
          <span className="heading-6">Customers</span>
          <a
            href="https://portswigger.net/organizations"
            className="footer-link19 footer-link text-body-3"
          >
            Organizations
          </a>
          <a
            href="https://portswigger.net/testers"
            className="footer-link20 footer-link text-body-3"
          >
            Testers
          </a>
          <a
            href="https://portswigger.net/developers"
            className="footer-link21 footer-link text-body-3"
          >
            Developers
          </a>
        </div>
        <div className="flex-1 column gap-xs">
          <span className="heading-6">Company</span>
          <a
            href="https://portswigger.net/about"
            className="footer-link22 footer-link text-body-3"
          >
            About
          </a>
          <a
            href="https://portswigger.net/careers"
            className="footer-link23 footer-link text-body-3"
          >
            Careers
          </a>
          <a
            href="https://portswigger.net/about/contact"
            className="footer-link24 footer-link text-body-3"
          >
            Contact
          </a>
          <a
            href="https://portswigger.net/legal"
            className="footer-link25 footer-link text-body-3"
          >
            Legal
          </a>
          <a
            href="https://portswigger.net/privacy"
            className="footer-link26 footer-link text-body-3"
          >
            Privacy Notice
          </a>
        </div>
        <div className="flex-1 column gap-xs">
          <span className="heading-6">Insights</span>
          <a
            href="https://portswigger.net/web-security"
            className="footer-link27 footer-link text-body-3"
          >
            Web Security Academy
          </a>
          <a
            href="https://portswigger.net/blog"
            className="footer-link28 footer-link text-body-3"
          >
            Blog
          </a>
          <a
            href="https://portswigger.net/research"
            className="footer-link29 footer-link text-body-3"
          >
            Research
          </a>
        </div>
        <div className="footer-column6 flex-1 column gap-xs">
          <a href="https://portswigger.net/">
            <img
              alt="image"
              src="/Logos/Light/portswigger-200h.png"
              className="footer-image"
            />
          </a>
          <span className="footer-text text-body-3">
            © 2025 PortSwigger Ltd.
          </span>
          <a
            href="https://twitter.com/Burp_Suite"
            className="footer-link31 padding-vertical-xs twitter-button padding-horizontal-s justify-center width-100 row text-body-3 gap-xs"
          >
            <Icon type="twitter" rootClassName="iconroot-class-name64"></Icon>
            <span>Follow Us</span>
          </a>
        </div>
      </div>
    </footer>
  )
}

Footer.defaultProps = {
  rootClassName: '',
}

Footer.propTypes = {
  rootClassName: PropTypes.string,
}

export default Footer
