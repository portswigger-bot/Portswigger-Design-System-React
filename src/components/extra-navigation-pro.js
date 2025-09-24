import React, { Fragment } from 'react'

import { Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import Dropdown from './dropdown'
import Icon from './icon'
import './extra-navigation-pro.css'

const ExtraNavigationPro = (props) => {
  return (
    <div
      className={`extra-navigation-pro-extra-navigation align-center padding-horizontal-m column width-100 ${props.rootClassName} `}
    >
      <div
        className={`navigation-extra-container gap-m align-center width-max-content width-100 row ${
          props?.highlightedLink === 'First' ? 'highlight-first-link' : ''
        } ${props?.highlightedLink === 'Third' ? 'highlight-third-link' : ''} ${
          props?.highlightedLink === 'Second' ? 'highlight-second-link' : ''
        } `}
      >
        <Repeater
          items={
            props['navigationLinks'] || [
              {
                url: 'https://portswigger.net/burp/pro/',
                label: 'Product Overview',
                target: '_blank',
              },
              {
                url: 'https://portswigger.net/burp/pro/features',
                label: 'Features',
                target: '_self',
              },
              {
                url: 'https://portswigger.net/burp/pro/workflow',
                label: 'Workflow',
                target: '_blank',
              },
              {
                url: 'https://portswigger.net/burp/vulnerability-scanner',
                label: 'Burp Scanner',
                target: '_self',
              },
              {
                url: 'https://portswigger.net/customer-stories',
                label: 'Customer Stories',
                target: '_blank',
              },
              {
                url: 'https://portswigger.net/burp/pro/trial',
                label: 'Request a Trial',
                target: '_self',
              },
              {
                url: 'https://portswigger.net/buy/pro',
                label: 'Buy',
                target: '_blank',
              },
              {
                url: 'https://portswigger.net/burp/releases/professional/latest',
                label: 'Download',
                target: '_self',
              },
            ]
          }
          renderItem={(navigationItem) => (
            <Fragment>
              <a
                href={navigationItem?.url}
                className="text-body-2 padding-vertical-xxs navigation-extra-simple-link"
              >
                {navigationItem?.label}
              </a>
            </Fragment>
          )}
        />
        {props.showDropdown === true && (
          <Dropdown
            triggerLabel={props.dropdownLabel}
            dropdownItems={props.dropdownLinks}
            rootClassName="dropdownroot-class-name3"
          ></Dropdown>
        )}
      </div>
      <div className="extra-navigation-pro-mobile gap-m align-center width-max-content width-100 row">
        <div data-thq="accordion" className="mobile-menu-list-item width-100">
          <details
            data-thq="accordion-trigger"
            className="extra-navigation-pro-trigger1 padding-vertical-s"
          >
            <summary
              data-thq="accordion-summary"
              className="extra-navigation-pro-summary1 align-center justify-in-between width-100"
            >
              <div
                data-thq="accordion-icon"
                className="extra-navigation-pro-icon-container1"
              >
                <Icon
                  type="chevron-down"
                  rootClassName="iconroot-class-name89"
                ></Icon>
              </div>
            </summary>
          </details>
          <div
            data-thq="accordion-content"
            className="extra-navigation-pro-content1 position-absolute width-100"
          >
            <div className="padding-horizontal-xs mobile-menu-dropdown-content column width-100">
              <Repeater
                items={
                  props['navigationLinks'] || [
                    {
                      url: 'https://portswigger.net/burp/pro/',
                      label: 'Product Overview',
                      target: '_blank',
                    },
                    {
                      url: 'https://portswigger.net/burp/pro/features',
                      label: 'Features',
                      target: '_self',
                    },
                    {
                      url: 'https://portswigger.net/burp/pro/workflow',
                      label: 'Workflow',
                      target: '_blank',
                    },
                    {
                      url: 'https://portswigger.net/burp/vulnerability-scanner',
                      label: 'Burp Scanner',
                      target: '_self',
                    },
                    {
                      url: 'https://portswigger.net/customer-stories',
                      label: 'Customer Stories',
                      target: '_blank',
                    },
                    {
                      url: 'https://portswigger.net/burp/pro/trial',
                      label: 'Request a Trial',
                      target: '_self',
                    },
                    {
                      url: 'https://portswigger.net/buy/pro',
                      label: 'Buy',
                      target: '_blank',
                    },
                    {
                      url: 'https://portswigger.net/burp/releases/professional/latest',
                      label: 'Download',
                      target: '_self',
                    },
                  ]
                }
                renderItem={(carrerLink) => (
                  <Fragment>
                    <a
                      href={carrerLink?.url}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <div
                        target={carrerLink?.target}
                        className="gap-xxs padding-horizontal-xs padding-vertical-s column mobile-menu-link width-100"
                      >
                        <span>{carrerLink?.label}</span>
                      </div>
                    </a>
                  </Fragment>
                )}
              />
            </div>
            <div
              data-thq="accordion"
              className="mobile-menu-list-item padding-horizontal-s width-100"
            >
              <details
                data-thq="accordion-trigger"
                className="extra-navigation-pro-trigger2 padding-vertical-s"
              >
                <summary
                  data-thq="accordion-summary"
                  className="extra-navigation-pro-summary2 align-center justify-in-between width-100"
                >
                  <span>
                    {props.dropdownLabel ?? (
                      <Fragment>
                        <span className="extra-navigation-pro-text2">
                          Get certified
                        </span>
                      </Fragment>
                    )}
                  </span>
                  <div
                    data-thq="accordion-icon"
                    className="extra-navigation-pro-icon-container2"
                  >
                    <Icon
                      type="chevron-down"
                      rootClassName="iconroot-class-name95"
                    ></Icon>
                  </div>
                </summary>
              </details>
              <div
                data-thq="accordion-content"
                className="extra-navigation-pro-content2 width-100"
              >
                <div className="padding-horizontal-xs mobile-menu-dropdown-content column width-100">
                  <Repeater
                    items={
                      props['dropdownLinks'] || [
                        {
                          url: 'https://portswigger.net/web-security/certification',
                          label: 'Get certified',
                          target: '_blank',
                        },
                        {
                          url: 'https://portswigger.net/web-security/certification/how-to-prepare',
                          label: 'Current vacancies',
                          target: '_blank',
                        },
                        {
                          url: 'https://portswigger.net/web-security/certification/how-it-works',
                          label: 'How it works',
                          target: '_self',
                        },
                        {
                          url: 'https://portswigger.net/web-security/certification/practice-examhttps://portswigger.net/careers/engineering/graduates',
                          label: 'Graduates',
                          target: '_blank',
                        },
                        {
                          url: 'https://portswigger.net/careers/women-in-tech-scholarship-scheme',
                          label: 'What the exam involves',
                          target: '_blank',
                        },
                        {
                          url: 'https://portswigger.net/web-security/certification/frequently-asked-questionshttps://portswigger.net/web-security/certification',
                          label: 'Get certified',
                          target: '_blank',
                        },
                      ]
                    }
                    renderItem={(carrerLink) => (
                      <Fragment>
                        <a
                          href={carrerLink?.url}
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          <div
                            target={carrerLink?.target}
                            className="gap-xxs padding-horizontal-xs padding-vertical-s column mobile-menu-link width-100"
                          >
                            <span>{carrerLink?.label}</span>
                          </div>
                        </a>
                      </Fragment>
                    )}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

ExtraNavigationPro.defaultProps = {
  highlightedLink: 'none',
  navigationLinks: [
    {
      url: 'https://portswigger.net/burp/pro/',
      label: 'Product Overview',
      target: '_blank',
    },
    {
      url: 'https://portswigger.net/burp/pro/features',
      label: 'Features',
      target: '_self',
    },
    {
      url: 'https://portswigger.net/burp/pro/workflow',
      label: 'Workflow',
      target: '_blank',
    },
    {
      url: 'https://portswigger.net/burp/vulnerability-scanner',
      label: 'Burp Scanner',
      target: '_self',
    },
    {
      url: 'https://portswigger.net/customer-stories',
      label: 'Customer Stories',
      target: '_blank',
    },
    {
      url: 'https://portswigger.net/burp/pro/trial',
      label: 'Request a Trial',
      target: '_self',
    },
    {
      url: 'https://portswigger.net/buy/pro',
      label: 'Buy',
      target: '_blank',
    },
    {
      url: 'https://portswigger.net/burp/releases/professional/latest',
      label: 'Download',
      target: '_self',
    },
  ],
  rootClassName: '',
  dropdownLinks: [
    {
      url: 'https://portswigger.net/web-security/certification',
      label: 'Get certified',
      target: '_blank',
    },
    {
      url: 'https://portswigger.net/web-security/certification/how-to-prepare',
      label: 'Current vacancies',
      target: '_blank',
    },
    {
      url: 'https://portswigger.net/web-security/certification/how-it-works',
      label: 'How it works',
      target: '_self',
    },
    {
      url: 'https://portswigger.net/web-security/certification/practice-examhttps://portswigger.net/careers/engineering/graduates',
      label: 'Graduates',
      target: '_blank',
    },
    {
      url: 'https://portswigger.net/careers/women-in-tech-scholarship-scheme',
      label: 'What the exam involves',
      target: '_blank',
    },
    {
      url: 'https://portswigger.net/web-security/certification/frequently-asked-questionshttps://portswigger.net/web-security/certification',
      label: 'Get certified',
      target: '_blank',
    },
  ],
  showDropdown: false,
  dropdownLabel: undefined,
}

ExtraNavigationPro.propTypes = {
  highlightedLink: PropTypes.string,
  navigationLinks: PropTypes.array,
  rootClassName: PropTypes.string,
  dropdownLinks: PropTypes.array,
  showDropdown: PropTypes.boolean,
  dropdownLabel: PropTypes.element,
}

export default ExtraNavigationPro
