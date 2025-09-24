import React, { Fragment } from 'react'

import { Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import Dropdown from './dropdown'
import Icon from './icon'
import './extra-navigation-enterprise.css'

const ExtraNavigationEnterprise = (props) => {
  return (
    <div
      className={`extra-navigation-enterprise-extra-navigation align-center padding-horizontal-m column width-100 ${props.rootClassName} `}
    >
      <div className="navigation-extra-container gap-m align-center width-max-content width-100 row">
        <a
          href="/burp/enterprise"
          data-type="link"
          target="_blank"
          rel="noreferrer noopener"
          className={`text-body-2 padding-vertical-xxs navigation-extra-simple-link ${
            props?.highlightedLink === 1 ? 'link-is-highlighted' : ''
          } `}
        >
          {props.link1 ?? (
            <Fragment>
              <span className="extra-navigation-enterprise-text21">
                Product Overview
              </span>
            </Fragment>
          )}
        </a>
        <a
          href="/burp/enterprise/trial"
          data-type="link"
          target="_blank"
          rel="noreferrer noopener"
          className={`text-body-2 padding-vertical-xxs navigation-extra-simple-link ${
            props?.highlightedLink === 2 ? 'link-is-highlighted' : ''
          } `}
        >
          {props.link2 ?? (
            <Fragment>
              <span className="extra-navigation-enterprise-text16">
                Request a demo
              </span>
            </Fragment>
          )}
        </a>
        <a
          href="/burp/enterprise/pricing"
          data-type="link"
          target="_blank"
          rel="noreferrer noopener"
          className={`text-body-2 padding-vertical-xxs navigation-extra-simple-link ${
            props?.highlightedLink === 3 ? 'link-is-highlighted' : ''
          } `}
        >
          {props.link3 ?? (
            <Fragment>
              <span className="extra-navigation-enterprise-text18">
                Pricing
              </span>
            </Fragment>
          )}
        </a>
        <Dropdown
          triggerLabel={props.dropdown1TriggerLabel}
          dropdownItems={props.dropdown1Links}
          rootClassName="dropdownroot-class-name4"
        ></Dropdown>
        <Dropdown
          triggerLabel={props.dropdown2TriggerLabel}
          dropdownItems={props.dropdown2Links}
          rootClassName="dropdownroot-class-name5"
        ></Dropdown>
        <a
          href="/burp/documentation/enterprise"
          data-type="link"
          className="text-body-2 padding-vertical-xxs navigation-extra-simple-link"
        >
          {props.link4 ?? (
            <Fragment>
              <span className="extra-navigation-enterprise-text17">
                Prepare to set up
              </span>
            </Fragment>
          )}
        </a>
      </div>
      <div className="extra-navigation-enterprise-mobile gap-m align-center width-max-content width-100 row">
        <div data-thq="accordion" className="mobile-menu-list-item width-100">
          <details
            data-thq="accordion-trigger"
            className="extra-navigation-enterprise-trigger1 padding-vertical-s"
          >
            <summary
              data-thq="accordion-summary"
              className="extra-navigation-enterprise-summary1 align-center justify-in-between width-100"
            >
              <span className="extra-navigation-enterprise-text10">
                {props.link1 ?? (
                  <Fragment>
                    <span className="extra-navigation-enterprise-text21">
                      Product Overview
                    </span>
                  </Fragment>
                )}
              </span>
              <div
                data-thq="accordion-icon"
                className="extra-navigation-enterprise-icon-container1"
              >
                <Icon
                  type="chevron-down"
                  rootClassName="iconroot-class-name96"
                ></Icon>
              </div>
            </summary>
          </details>
          <div
            data-thq="accordion-content"
            className="extra-navigation-enterprise-content1 position-absolute width-100"
          >
            <ul className="extra-navigation-enterprise-ul list width-100">
              <a href="https://portswigger.net/careers/culture">
                <li className="extra-navigation-enterprise-li1 padding-s mobile-menu-list-item">
                  <span>
                    {props.link2 ?? (
                      <Fragment>
                        <span className="extra-navigation-enterprise-text16">
                          Request a demo
                        </span>
                      </Fragment>
                    )}
                  </span>
                </li>
              </a>
              <a href="https://portswigger.net/careers/culture">
                <li className="extra-navigation-enterprise-li2 padding-s mobile-menu-list-item">
                  <span>
                    {props.link3 ?? (
                      <Fragment>
                        <span className="extra-navigation-enterprise-text18">
                          Pricing
                        </span>
                      </Fragment>
                    )}
                  </span>
                </li>
              </a>
              <a href="https://portswigger.net/careers/culture">
                <li className="extra-navigation-enterprise-li3 padding-s mobile-menu-list-item">
                  <span>
                    {props.link4 ?? (
                      <Fragment>
                        <span className="extra-navigation-enterprise-text17">
                          Prepare to set up
                        </span>
                      </Fragment>
                    )}
                  </span>
                </li>
              </a>
              <li className="mobile-menu-list-item">
                <div
                  data-thq="accordion"
                  className="extra-navigation-enterprise-accordion2"
                >
                  <details
                    name="extra-mobile-menu"
                    open
                    data-thq="accordion-trigger"
                    className="padding-s"
                  >
                    <summary
                      data-thq="accordion-summary"
                      className="extra-navigation-enterprise-summary2 align-center justify-in-between"
                    >
                      <span>
                        {props.dropdown1TriggerLabel ?? (
                          <Fragment>
                            <span className="extra-navigation-enterprise-text19">
                              Explore Burp Suite DAST
                            </span>
                          </Fragment>
                        )}
                      </span>
                      <div
                        data-thq="accordion-icon"
                        className="extra-navigation-enterprise-icon-container2"
                      >
                        <Icon
                          type="chevron-down"
                          rootClassName="iconroot-class-name97"
                        ></Icon>
                      </div>
                    </summary>
                  </details>
                  <div data-thq="accordion-content">
                    <div className="padding-horizontal-xs mobile-menu-dropdown-content column width-100">
                      <Repeater
                        items={
                          props['dropdown1Links'] || [
                            {
                              url: 'https://portswigger.net/burp/enterprise/features',
                              label: 'Features',
                              target: '_blank',
                            },
                            {
                              url: '/burp/vulnerability-scanner',
                              label: 'Burp Scanner',
                              target: '_blank',
                            },
                            {
                              url: '/burp/enterprise/hosting-options',
                              label: 'Hosting options',
                              target: '_blank',
                            },
                          ]
                        }
                        renderItem={(carrerLink) => (
                          <Fragment>
                            <a href={carrerLink?.url}>
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
              </li>
              <li className="mobile-menu-list-item">
                <div
                  data-thq="accordion"
                  className="extra-navigation-enterprise-accordion3"
                >
                  <details
                    name="extra-mobile-menu"
                    data-thq="accordion-trigger"
                    className="padding-s"
                  >
                    <summary
                      data-thq="accordion-summary"
                      className="extra-navigation-enterprise-summary3 align-center justify-in-between"
                    >
                      <span>
                        {props.dropdown2TriggerLabel ?? (
                          <Fragment>
                            <span className="extra-navigation-enterprise-text20">
                              Resources
                            </span>
                          </Fragment>
                        )}
                      </span>
                      <div
                        data-thq="accordion-icon"
                        className="extra-navigation-enterprise-icon-container3"
                      >
                        <Icon
                          type="chevron-down"
                          rootClassName="iconroot-class-name99"
                        ></Icon>
                      </div>
                    </summary>
                  </details>
                  <div data-thq="accordion-content">
                    <div className="padding-horizontal-xs mobile-menu-dropdown-content column width-100">
                      <Repeater
                        items={
                          props['dropdown2Links'] || [
                            {
                              url: '/burp/enterprise/resources',
                              label: 'Getting started',
                              target: '_self',
                            },
                            {
                              url: '/burp/enterprise/resources/enterprise-edition-vs-professional',
                              label: 'Product information',
                              target: '_blank',
                            },
                            {
                              url: '/burp/enterprise/resources/use-cases',
                              label: 'Use cases',
                              target: '_blank',
                            },
                            {
                              url: '/burp/enterprise/resources/customer-support',
                              label: 'Customer support',
                              target: '_blank',
                            },
                            {
                              url: '/burp/enterprise/resources/video-tutorials',
                              label: 'Video tutorials',
                              target: '_blank',
                            },
                            {
                              url: '/burp/enterprise/resources/faqs',
                              label: 'FAQs',
                              target: '_blank',
                            },
                            {
                              url: '/burp/enterprise/resources/introduce-enterprise-edition',
                              label: 'Stakeholder intro template',
                              target: '_blank',
                            },
                            {
                              url: '/burp/enterprise/resources/how-to-evaluate-a-web-vulnerability-scanner',
                              label: 'How to evaluate a scanner',
                              target: '_blank',
                            },
                          ]
                        }
                        renderItem={(carrerLink) => (
                          <Fragment>
                            <a href={carrerLink?.url}>
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
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

ExtraNavigationEnterprise.defaultProps = {
  link2: undefined,
  link4: undefined,
  link3: undefined,
  dropdown1TriggerLabel: undefined,
  dropdown2TriggerLabel: undefined,
  dropdown1Links: [
    {
      url: 'https://portswigger.net/burp/enterprise/features',
      label: 'Features',
      target: '_blank',
    },
    {
      url: '/burp/vulnerability-scanner',
      label: 'Burp Scanner',
      target: '_blank',
    },
    {
      url: '/burp/enterprise/hosting-options',
      label: 'Hosting options',
      target: '_blank',
    },
  ],
  dropdown2Links: [
    {
      url: '/burp/enterprise/resources',
      label: 'Getting started',
      target: '_self',
    },
    {
      url: '/burp/enterprise/resources/enterprise-edition-vs-professional',
      label: 'Product information',
      target: '_blank',
    },
    {
      url: '/burp/enterprise/resources/use-cases',
      label: 'Use cases',
      target: '_blank',
    },
    {
      url: '/burp/enterprise/resources/customer-support',
      label: 'Customer support',
      target: '_blank',
    },
    {
      url: '/burp/enterprise/resources/video-tutorials',
      label: 'Video tutorials',
      target: '_blank',
    },
    {
      url: '/burp/enterprise/resources/faqs',
      label: 'FAQs',
      target: '_blank',
    },
    {
      url: '/burp/enterprise/resources/introduce-enterprise-edition',
      label: 'Stakeholder intro template',
      target: '_blank',
    },
    {
      url: '/burp/enterprise/resources/how-to-evaluate-a-web-vulnerability-scanner',
      label: 'How to evaluate a scanner',
      target: '_blank',
    },
  ],
  link1: undefined,
  rootClassName: '',
  highlightedLink: '0',
}

ExtraNavigationEnterprise.propTypes = {
  link2: PropTypes.element,
  link4: PropTypes.element,
  link3: PropTypes.element,
  dropdown1TriggerLabel: PropTypes.element,
  dropdown2TriggerLabel: PropTypes.element,
  dropdown1Links: PropTypes.array,
  dropdown2Links: PropTypes.array,
  link1: PropTypes.element,
  rootClassName: PropTypes.string,
  highlightedLink: PropTypes.number,
}

export default ExtraNavigationEnterprise
