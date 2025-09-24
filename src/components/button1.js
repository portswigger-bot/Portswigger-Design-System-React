import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import Icon1 from './icon1'
import './button1.css'

const Button1 = (props) => {
  return (
    <div className={` ${props.rootClassName} `}>
      <button
        type="button"
        data-redirect-url={props.redirectUrl}
        className={`justify-center text-body-3 gap-xs ${
          props?.size === 'small' ? 'button-small' : ''
        } ${props?.btnType === 'primary' ? 'button-primary' : ''} ${
          props?.btnType === 'primary-white' ? 'button-primary-white' : ''
        } ${props?.size === 'large' ? 'button-large' : ''} ${
          props?.btnType === 'quarternary' ? 'button-quarternary' : ''
        } ${
          props?.btnType === 'primary-purple' ? 'button-primary-purple' : ''
        } ${
          props?.btnType === 'outline-orange' ? 'button-outline-orange' : ''
        } ${props?.iconPlacement === 'right' ? 'row' : ''} ${
          props?.btnType === 'outline-white' ? 'button-outline-white' : ''
        } ${props?.iconPlacement === 'left' ? 'row-reverse' : ''} `}
      >
        <span>
          {props.btnLabel ?? (
            <Fragment>
              <span className="button1-text">BUTTON</span>
            </Fragment>
          )}
        </span>
        {props.iconPlacement !== 'none' && (
          <Icon1 type={props.iconType}></Icon1>
        )}
      </button>
    </div>
  )
}

Button1.defaultProps = {
  rootClassName: '',
  size: 'large',
  redirectUrl: '',
  iconType: 'phone-outgoing',
  iconPlacement: 'right',
  btnType: 'primary',
  btnLabel: undefined,
}

Button1.propTypes = {
  rootClassName: PropTypes.string,
  size: PropTypes.string,
  redirectUrl: PropTypes.string,
  iconType: PropTypes.string,
  iconPlacement: PropTypes.string,
  btnType: PropTypes.string,
  btnLabel: PropTypes.element,
}

export default Button1
