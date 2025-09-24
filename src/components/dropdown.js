import React, { Fragment } from 'react'

import { Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import Icon from './icon'
import './dropdown.css'

const Dropdown = (props) => {
  return (
    <div className="navigation-hover-dropdown-trigger dropdown-dropdown">
      <div
        data-trigger
        className="align-center dropdown-hover-trigger padding-vertical-xxs row gap-xs"
      >
        <span data-type="link">
          {props.triggerLabel ?? (
            <Fragment>
              <span className="dropdown-text">Carrers</span>
            </Fragment>
          )}
        </span>
        <Icon type="chevron-down" rootClassName="iconroot-class-name22"></Icon>
      </div>
      <ul className="navigation-extra-desktop-dropdown-list list width-100 dropdown-ul">
        <Repeater
          items={
            props['dropdownItems'] || [
              {
                url: 'https://portswigger.net/careers',
                label: 'Current vacancies',
                target: '_self',
              },
              {
                url: 'https://portswigger.net/careers/reward',
                label: 'Rewards',
                target: '_self',
              },
              {
                url: 'https://portswigger.net/careers/engineering/graduates',
                label: 'Graduates',
                target: '_self',
              },
              {
                url: 'https://portswigger.net/careers',
                label: 'Women in tech',
                target: '_self',
              },
            ]
          }
          renderItem={(dropdownItem) => (
            <Fragment>
              <li className="burger-menu-desktop-link-item">
                <a
                  href={dropdownItem?.url}
                  target={dropdownItem?.target}
                  className="list-item"
                >
                  {dropdownItem?.label}
                  {[0]?.label}
                </a>
              </li>
            </Fragment>
          )}
        />
      </ul>
    </div>
  )
}

Dropdown.defaultProps = {
  triggerLabel: undefined,
  rootClassName: '',
  dropdownItems: [
    {
      url: 'https://portswigger.net/careers',
      label: 'Current vacancies',
      target: '_self',
    },
    {
      url: 'https://portswigger.net/careers/reward',
      label: 'Rewards',
      target: '_self',
    },
    {
      url: 'https://portswigger.net/careers/engineering/graduates',
      label: 'Graduates',
      target: '_self',
    },
    {
      url: 'https://portswigger.net/careers',
      label: 'Women in tech',
      target: '_self',
    },
  ],
}

Dropdown.propTypes = {
  triggerLabel: PropTypes.element,
  rootClassName: PropTypes.string,
  dropdownItems: PropTypes.array,
}

export default Dropdown
