import React, { Fragment } from 'react'

import { Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import Dropdown from './dropdown'
import Icon from './icon'
import './extra-navigation-culture-pages.css'

const ExtraNavigationCulturePages = (props) => {
  return (
    <div
      className={`extra-navigation-culture-pages-extra-navigation align-center padding-horizontal-m column width-100 ${props.rootClassName} `}
    >
      <div className="navigation-extra-container gap-m align-center width-max-content width-100 row">
        <Dropdown
          triggerLabel={
            <Fragment>
              <span className="extra-navigation-culture-pages-text1">
                Careers
              </span>
            </Fragment>
          }
          dropdownItems={props.carrersLinks}
          rootClassName="dropdownroot-class-name"
        ></Dropdown>
        <a
          href="https://portswigger.net/careers/culture"
          className="text-body-2 padding-vertical-xxs navigation-extra-simple-link"
        >
          Culture
        </a>
        <Dropdown
          triggerLabel={
            <Fragment>
              <span className="extra-navigation-culture-pages-text2">
                Life at PortSwigger
              </span>
            </Fragment>
          }
          dropdownItems={props.lifeAtPortSLinks}
          rootClassName="dropdownroot-class-name1"
        ></Dropdown>
        <Dropdown
          triggerLabel={
            <Fragment>
              <span className="extra-navigation-culture-pages-text3">
                Software engineering
              </span>
            </Fragment>
          }
          dropdownItems={props.softwareEngiLinks}
          rootClassName="dropdownroot-class-name2"
        ></Dropdown>
        <a
          href="https://portswigger.net/careers/recruiters"
          className="text-body-2 padding-vertical-xxs navigation-extra-simple-link"
        >
          Recruiters
        </a>
      </div>
      <div className="extra-navigation-culture-pages-mobile gap-m align-center width-max-content width-100 row">
        <div data-thq="accordion" className="mobile-menu-list-item width-100">
          <details
            data-thq="accordion-trigger"
            className="extra-navigation-culture-pages-trigger1 padding-vertical-s"
          >
            <summary
              data-thq="accordion-summary"
              className="extra-navigation-culture-pages-summary1 align-center justify-in-between width-100"
            >
              <span className="extra-navigation-culture-pages-text4">
                Careers
              </span>
              <div
                data-thq="accordion-icon"
                className="extra-navigation-culture-pages-icon-container1"
              >
                <Icon
                  type="chevron-down"
                  rootClassName="iconroot-class-name46"
                ></Icon>
              </div>
            </summary>
          </details>
          <div
            data-thq="accordion-content"
            className="extra-navigation-culture-pages-content1 position-absolute width-100"
          >
            <div className="padding-horizontal-xs mobile-menu-dropdown-content column width-100">
              <Repeater
                items={
                  props['carrersLinks'] || [
                    {
                      url: 'https://portswigger.net/careers',
                      label: 'Career opportunities',
                      target: '_self',
                    },
                    {
                      url: 'https://apply.workable.com/portswigger',
                      label: 'Current vacancies',
                      target: '_blank',
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
                      url: 'https://portswigger.net/careers/women-in-tech-scholarship-scheme',
                      label: 'Women in tech',
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
            <ul className="extra-navigation-culture-pages-ul list width-100">
              <a href="https://portswigger.net/careers/culture">
                <li className="extra-navigation-culture-pages-li1 padding-s mobile-menu-list-item">
                  <span>Culture</span>
                </li>
              </a>
              <li className="mobile-menu-list-item">
                <div
                  data-thq="accordion"
                  className="extra-navigation-culture-pages-accordion2"
                >
                  <details
                    name="extra-mobile-menu"
                    open
                    data-thq="accordion-trigger"
                    className="padding-s"
                  >
                    <summary
                      data-thq="accordion-summary"
                      className="extra-navigation-culture-pages-summary2 align-center justify-in-between"
                    >
                      <span>Life at Portswigger</span>
                      <div
                        data-thq="accordion-icon"
                        className="extra-navigation-culture-pages-icon-container2"
                      >
                        <Icon
                          type="chevron-down"
                          rootClassName="iconroot-class-name47"
                        ></Icon>
                      </div>
                    </summary>
                  </details>
                  <div data-thq="accordion-content">
                    <div className="padding-horizontal-xs mobile-menu-dropdown-content column width-100">
                      <Repeater
                        items={
                          props['carrersLinks'] || [
                            {
                              url: 'https://portswigger.net/careers',
                              label: 'Career opportunities',
                              target: '_self',
                            },
                            {
                              url: 'https://apply.workable.com/portswigger',
                              label: 'Current vacancies',
                              target: '_blank',
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
                              url: 'https://portswigger.net/careers/women-in-tech-scholarship-scheme',
                              label: 'Women in tech',
                              target: '_self',
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
                  className="extra-navigation-culture-pages-accordion3"
                >
                  <details
                    name="extra-mobile-menu"
                    data-thq="accordion-trigger"
                    className="padding-s"
                  >
                    <summary
                      data-thq="accordion-summary"
                      className="extra-navigation-culture-pages-summary3 align-center justify-in-between"
                    >
                      <span>Software Engineering</span>
                      <div
                        data-thq="accordion-icon"
                        className="extra-navigation-culture-pages-icon-container3"
                      >
                        <Icon
                          type="chevron-down"
                          rootClassName="iconroot-class-name48"
                        ></Icon>
                      </div>
                    </summary>
                  </details>
                  <div data-thq="accordion-content">
                    <div className="padding-horizontal-xs mobile-menu-dropdown-content column width-100">
                      <Repeater
                        items={
                          props['softwareEngiLinks'] || [
                            {
                              url: 'https://portswigger.net/careers/engineering',
                              label: 'Software engineering at PortSwigger',
                              target: '_self',
                            },
                            {
                              url: 'https://portswigger.net/careers/engineering/enterprise',
                              label: 'Burp Suite Enterprise Edition team',
                              target: '_self',
                            },
                            {
                              url: 'https://portswigger.net/careers/engineering/pro',
                              label: 'Burp Suite Professional team',
                              target: '_self',
                            },
                            {
                              url: 'https://portswigger.net/careers/engineering/scanner',
                              label: 'Burp Scanner team',
                              target: '_self',
                            },
                            {
                              url: 'https://portswigger.net/careers/engineering/business-services',
                              label: 'Business services team',
                              target: '_self',
                            },
                            {
                              url: 'https://portswigger.net/careers/engineering/website',
                              label: 'Website team',
                              target: '_self',
                            },
                            {
                              url: 'https://portswigger.net/careers/engineering/web-security-academy',
                              label: 'Web Security Academy',
                              target: '_self',
                            },
                          ]
                        }
                        renderItem={(softwareEngiLink) => (
                          <Fragment>
                            <a
                              href={softwareEngiLink?.url}
                              target="_blank"
                              rel="noreferrer noopener"
                            >
                              <div
                                target={softwareEngiLink?.target}
                                className="gap-xxs padding-horizontal-xs padding-vertical-s column mobile-menu-link width-100"
                              >
                                <span>{softwareEngiLink?.label}</span>
                              </div>
                            </a>
                          </Fragment>
                        )}
                      />
                    </div>
                  </div>
                </div>
              </li>
              <a href="https://portswigger.net/careers/recruiters">
                <li className="extra-navigation-culture-pages-li4 padding-s mobile-menu-list-item">
                  <span>Recruiters</span>
                </li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

ExtraNavigationCulturePages.defaultProps = {
  softwareEngiLinks: [
    {
      url: 'https://portswigger.net/careers/engineering',
      label: 'Software engineering at PortSwigger',
      target: '_self',
    },
    {
      url: 'https://portswigger.net/careers/engineering/enterprise',
      label: 'Burp Suite Enterprise Edition team',
      target: '_self',
    },
    {
      url: 'https://portswigger.net/careers/engineering/pro',
      label: 'Burp Suite Professional team',
      target: '_self',
    },
    {
      url: 'https://portswigger.net/careers/engineering/scanner',
      label: 'Burp Scanner team',
      target: '_self',
    },
    {
      url: 'https://portswigger.net/careers/engineering/business-services',
      label: 'Business services team',
      target: '_self',
    },
    {
      url: 'https://portswigger.net/careers/engineering/website',
      label: 'Website team',
      target: '_self',
    },
    {
      url: 'https://portswigger.net/careers/engineering/web-security-academy',
      label: 'Web Security Academy',
      target: '_self',
    },
  ],
  lifeAtPortSLinks: [
    {
      url: 'https://portswigger.net/careers/people',
      label: 'People',
      target: '_self',
    },
    {
      url: 'https://portswigger.net/careers/culture/staff-handbook',
      label: 'Staff handbook',
      target: '_self',
    },
    {
      url: 'https://portswigger.net/careers/culture/workplace',
      label: 'PortSwigger workplace',
      target: '_self',
    },
    {
      url: 'https://portswigger.net/careers/better-together',
      label: 'Better together',
      target: '_self',
    },
    {
      url: 'https://portswigger.net/careers/culture/life-as-a-swigger',
      label: 'Life as a Swigger',
      target: '_self',
    },
  ],
  carrersLinks: [
    {
      url: 'https://portswigger.net/careers',
      label: 'Career opportunities',
      target: '_self',
    },
    {
      url: 'https://apply.workable.com/portswigger',
      label: 'Current vacancies',
      target: '_blank',
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
      url: 'https://portswigger.net/careers/women-in-tech-scholarship-scheme',
      label: 'Women in tech',
      target: '_self',
    },
  ],
  rootClassName: '',
}

ExtraNavigationCulturePages.propTypes = {
  softwareEngiLinks: PropTypes.array,
  lifeAtPortSLinks: PropTypes.array,
  carrersLinks: PropTypes.array,
  rootClassName: PropTypes.string,
}

export default ExtraNavigationCulturePages
