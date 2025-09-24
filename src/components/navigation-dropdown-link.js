import React, { Fragment } from 'react'

import { Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import Icon from './icon'
import './navigation-dropdown-link.css'

const NavigationDropdownLink = (props) => {
  return (
    <div className="align-center row">
      <div className="align-center navigation-dropdown-trigger border-right-orange row gap-xs">
        <label
          htmlFor={props.navLinkId}
          className="padding-vertical-xxs navigation-dropdown-label"
        >
          {props.label ?? (
            <Fragment>
              <span className="navigation-dropdown-link-text3">Products</span>
            </Fragment>
          )}
        </label>
        <Icon type="chevron-down" rootClassName="iconroot-class-name18"></Icon>
        <input
          type="radio"
          id={props.navLinkId}
          name="mega-nav-input"
          className="display-none"
        />
      </div>
      <section className="translate-left-150px hidden-element navigation-dropdown-content justify-center width-100 row">
        <div className="width-max-content justify-center width-100 row">
          <div className="navigation-dropdown-link-left flex-1 column padding-right-s width-100 padding-top-m">
            {props.listType === 'simple' && (
              <div className="gap-s grid-auto-fit-275px grid width-100">
                <Repeater
                  items={
                    props['simpleListItems'] || [
                      {
                        href: 'https://portswigger.net/solutions/attack-surface-visibility',
                        title: 'Attack surface visibility',
                        description:
                          'Improve security posture, prioritize manual testing, free up time.',
                      },
                      {
                        href: 'https://portswigger.net/solutions/ci-driven-scanning',
                        title: 'CI-driven scanning',
                        description:
                          'More proactive security - find and fix vulnerabilities earlier.',
                      },
                      {
                        href: 'https://portswigger.net/solutions',
                        title: 'Application security testing',
                        description:
                          'See how our software enables the world to secure the web.',
                      },
                      {
                        href: 'https://portswigger.net/solutions/devsecops',
                        title: 'DevSecOps',
                        description:
                          'Catch critical bugs; ship more secure software, more quickly.',
                      },
                      {
                        href: 'https://portswigger.net/solutions/penetration-testing',
                        title: 'Penetration testing',
                        description:
                          'Accelerate penetration testing - find more bugs, more quickly.',
                      },
                      {
                        href: 'https://portswigger.net/solutions/automated-security-testing',
                        title: 'Automated scanning',
                        description:
                          'Scale dynamic scanning. Reduce risk. Save time/money.',
                      },
                      {
                        href: 'https://portswigger.net/solutions/bug-bounty-hunting',
                        title: 'Bug bounty hunting',
                        description:
                          'Level up your hacking and earn more bug bounties.',
                      },
                      {
                        href: 'https://portswigger.net/solutions/compliance',
                        title: 'Compliance',
                        description:
                          'Enhance security monitoring to comply with confidence.',
                      },
                    ]
                  }
                  renderItem={(SimpleListItem) => (
                    <Fragment>
                      <a
                        href={SimpleListItem?.href}
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <div className="navigation-dropdown-link-container2 padding-s column gap-xs">
                          <strong>{SimpleListItem?.title}</strong>
                          <span>{SimpleListItem?.description}</span>
                        </div>
                      </a>
                    </Fragment>
                  )}
                />
              </div>
            )}
            {props.listType === 'withImages' && (
              <div className="gap-s column width-100">
                <Repeater
                  items={
                    props['imageListItems'] || [
                      {
                        href: 'https://portswigger.net/burp/enterprise',
                        title: 'Burp Suite DAST',
                        iconType: 'logo-enterprise',
                        description:
                          'The enterprise-enabled dynamic web vulnerability scanner.',
                      },
                      {
                        href: 'https://portswigger.net/burp/pro',
                        title: 'Burp Suite Professional',
                        iconType: 'logo-pro',
                        description:
                          "The world's #1 web penetration testing toolkit.",
                      },
                      {
                        href: 'https://portswigger.net/burp/communitydownload',
                        title: 'Burp Suite Community Edition',
                        iconType: 'logo-community',
                        description:
                          'The best manual tools to start web security testing.',
                      },
                    ]
                  }
                  renderItem={(imageListItem) => (
                    <Fragment>
                      <a href={imageListItem?.href}>
                        <div className="navigation-dropdown-link-container3 padding-s gap-s align-center row">
                          <Icon
                            type={imageListItem?.iconType}
                            rootClassName="iconroot-class-name21"
                          ></Icon>
                          <div className="navigation-dropdown-link-container4 column gap-xs">
                            <strong>{imageListItem?.title}</strong>
                            <span>{imageListItem?.description}</span>
                          </div>
                        </div>
                      </a>
                    </Fragment>
                  )}
                />
              </div>
            )}
            <a href={props.bottomLinkUrl}>
              <div className="navigation-dropdown-link-bottom-link1 padding-horizontal-xs align-center padding-vertical-m navigation-dropdown-bottom-link width-100 row gap-xs">
                <strong>
                  {props.bottomLinkLabel ?? (
                    <Fragment>
                      <span className="navigation-dropdown-link-text4">
                        View all product editions
                      </span>
                    </Fragment>
                  )}
                </strong>
                <Icon
                  type="arrow-right"
                  rootClassName="iconroot-class-name20"
                ></Icon>
              </div>
            </a>
          </div>
          <div className="navigation-dropdown-link-right padding-vertical-m padding-horizontal-s row">
            <a href={props.featuredItemCardUrl}>
              <div className="navigation-dropdown-link-featured-item-card padding-m featured-item-card column gap-xs">
                <strong>
                  {props.rightTitle ?? (
                    <Fragment>
                      <span className="navigation-dropdown-link-text5">
                        Burp Scanner
                      </span>
                    </Fragment>
                  )}
                </strong>
                <span>
                  {props.rightDescription ?? (
                    <Fragment>
                      <span className="navigation-dropdown-link-text2">
                        Burp Suite&apos;s web vulnerability scanner
                      </span>
                    </Fragment>
                  )}
                </span>
                <img
                  alt={props.rightImageAlt}
                  src={props.rightImageSrc}
                  className="navigation-dropdown-link-right-image width-100"
                />
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

NavigationDropdownLink.defaultProps = {
  rightDescription: undefined,
  featuredItemCardUrl: 'https://www.teleporthq.io',
  listType: 'simple',
  label: undefined,
  bottomLinkUrl: 'https://www.teleporthq.io',
  simpleListItems: [
    {
      href: 'https://portswigger.net/solutions/attack-surface-visibility',
      title: 'Attack surface visibility',
      description:
        'Improve security posture, prioritize manual testing, free up time.',
    },
    {
      href: 'https://portswigger.net/solutions/ci-driven-scanning',
      title: 'CI-driven scanning',
      description:
        'More proactive security - find and fix vulnerabilities earlier.',
    },
    {
      href: 'https://portswigger.net/solutions',
      title: 'Application security testing',
      description: 'See how our software enables the world to secure the web.',
    },
    {
      href: 'https://portswigger.net/solutions/devsecops',
      title: 'DevSecOps',
      description:
        'Catch critical bugs; ship more secure software, more quickly.',
    },
    {
      href: 'https://portswigger.net/solutions/penetration-testing',
      title: 'Penetration testing',
      description:
        'Accelerate penetration testing - find more bugs, more quickly.',
    },
    {
      href: 'https://portswigger.net/solutions/automated-security-testing',
      title: 'Automated scanning',
      description: 'Scale dynamic scanning. Reduce risk. Save time/money.',
    },
    {
      href: 'https://portswigger.net/solutions/bug-bounty-hunting',
      title: 'Bug bounty hunting',
      description: 'Level up your hacking and earn more bug bounties.',
    },
    {
      href: 'https://portswigger.net/solutions/compliance',
      title: 'Compliance',
      description: 'Enhance security monitoring to comply with confidence.',
    },
  ],
  bottomLinkLabel: undefined,
  rightImageAlt: 'Featured Article',
  rightImageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  imageListItems: [
    {
      href: 'https://portswigger.net/burp/enterprise',
      title: 'Burp Suite DAST',
      iconType: 'logo-enterprise',
      description: 'The enterprise-enabled dynamic web vulnerability scanner.',
    },
    {
      href: 'https://portswigger.net/burp/pro',
      title: 'Burp Suite Professional',
      iconType: 'logo-pro',
      description: "The world's #1 web penetration testing toolkit.",
    },
    {
      href: 'https://portswigger.net/burp/communitydownload',
      title: 'Burp Suite Community Edition',
      iconType: 'logo-community',
      description: 'The best manual tools to start web security testing.',
    },
  ],
  rightTitle: undefined,
  navLinkId: '1',
}

NavigationDropdownLink.propTypes = {
  rightDescription: PropTypes.element,
  featuredItemCardUrl: PropTypes.string,
  listType: PropTypes.string,
  label: PropTypes.element,
  bottomLinkUrl: PropTypes.string,
  simpleListItems: PropTypes.array,
  bottomLinkLabel: PropTypes.element,
  rightImageAlt: PropTypes.string,
  rightImageSrc: PropTypes.string,
  imageListItems: PropTypes.array,
  rightTitle: PropTypes.element,
  navLinkId: PropTypes.string,
}

export default NavigationDropdownLink
