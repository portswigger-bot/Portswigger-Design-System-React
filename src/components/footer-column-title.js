import React from 'react'

import PropTypes from 'prop-types'

import './footer-column-title.css'

const FooterColumnTitle = (props) => {
  return (
    <div className={`footer-column-title-container ${props.rootClassName} `}>
      <p className="footer-column-title-text">{props.text}</p>
    </div>
  )
}

FooterColumnTitle.defaultProps = {
  text: 'Header1',
  rootClassName: '',
}

FooterColumnTitle.propTypes = {
  text: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default FooterColumnTitle
