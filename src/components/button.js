import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import Icon from './icon'
import './button.css'

const Button = (props) => {
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
              <span className="button-text">BUTTON</span>
            </Fragment>
          )}
        </span>
        {props.iconPlacement !== 'none' && <Icon type={props.iconType}></Icon>}
      </button>
    </div>
  )
}

Button.defaultProps = {
  btnType: 'primary',
  iconType: 'plus-circle',
  rootClassName: '',
  size: 'large',
  iconPlacement: 'right',
  redirectUrl: '',
  btnLabel: undefined,
}

Button.propTypes = {
  btnType: PropTypes.string,
  iconType: PropTypes.string,
  rootClassName: PropTypes.string,
  size: PropTypes.string,
  iconPlacement: PropTypes.string,
  redirectUrl: PropTypes.string,
  btnLabel: PropTypes.element,
}

export default Button
