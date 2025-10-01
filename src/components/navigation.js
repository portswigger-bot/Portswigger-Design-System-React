import React, { Fragment } from 'react'

import { Repeater } from '@teleporthq/react-components'
import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import NotificationTopHeader from './notification-top-header'
import Icon from './icon'
import Button from './button'
import NavigationDropdownLink from './navigation-dropdown-link'
import './navigation.css'

const Navigation = (props) => {
  return (
    <header
      className={`align-center navigation-root column width-100 ${props.rootClassName} `}
    >
      <NotificationTopHeader
        text={
          <Fragment>
            <span className="navigation-text10">Read More</span>
          </Fragment>
        }
        rootClassName="notification-top-headerroot-class-name2"
      ></NotificationTopHeader>
      <div className="align-center border-navigation position-relative padding-horizontal-m padding-bottom-xxs navigation-container padding-top-s justify-center width-100 row">
        <div className="width-max-content justify-in-between width-100 row">
          <a href="https://portswigger.net">
            <div className="align-center row">
              <img
                alt="Portswigger Logo"
                src="/Logos/Light/portswigger-200h.png"
                loading="lazy"
                className="navigation-logo-desktop"
              />
              <Icon
                type="logo-portswigger"
                rootClassName="iconroot-class-name16"
              ></Icon>
            </div>
          </a>
          <div className="align-end gap-m flex-1 align-center column justify-center navigation-desktop-links-container">
            <a href="https://portswigger.net/users">
              <Button
                size="small"
                btnLabel={
                  <Fragment>
                    <span className="navigation-text11">MY ACCOUNT</span>
                  </Fragment>
                }
                iconPlacement="none"
                rootClassName="buttonroot-class-name4"
                className="navigation-login1"
              ></Button>
            </a>
            <div className="flex-1 align-center justify-end width-100 row">
              <div className="navigation-links flex-1 align-center padding-horizontal-s row">
                <NavigationDropdownLink
                  label={
                    <Fragment>
                      <span className="navigation-text12">Products</span>
                    </Fragment>
                  }
                  listType="withImages"
                  navLinkId="products"
                  rightTitle={
                    <Fragment>
                      <span className="navigation-text13">Burp Scanner</span>
                    </Fragment>
                  }
                  bottomLinkUrl="https://portswigger.net/burp"
                  rightImageSrc="/Navigation/navigation-products-300w.jpg"
                  bottomLinkLabel={
                    <Fragment>
                      <span className="navigation-text14">
                        View all product editions
                      </span>
                    </Fragment>
                  }
                  rightDescription={
                    <Fragment>
                      <span className="navigation-text15">
                        Burp Suite&apos;s web vulnerability scanner
                      </span>
                    </Fragment>
                  }
                  featuredItemCardUrl="https://portswigger.net/burp/vulnerability-scanner"
                ></NavigationDropdownLink>
                <NavigationDropdownLink
                  label={
                    <Fragment>
                      <span className="navigation-text16">Solutions</span>
                    </Fragment>
                  }
                  navLinkId="solutions"
                  rightTitle={
                    <Fragment>
                      <span className="navigation-text17">Burp Scanner</span>
                    </Fragment>
                  }
                  bottomLinkUrl="https://portswigger.net/solutions"
                  rightImageSrc="/Navigation/navigation-solutions-300w.jpg"
                  bottomLinkLabel={
                    <Fragment>
                      <span className="navigation-text18">
                        View all solutions
                      </span>
                    </Fragment>
                  }
                  rightDescription={
                    <Fragment>
                      <span className="navigation-text19">
                        Burp Suite&apos;s web vulnerability scanner
                      </span>
                    </Fragment>
                  }
                  featuredItemCardUrl="https://portswigger.net/burp/enterprise/resources/enterprise-edition-vs-professional"
                ></NavigationDropdownLink>
                <a
                  href="https://portswigger.net/research"
                  className="navigation-link12 navigation-dropdown-label"
                >
                  Research
                </a>
                <a
                  href="https://portswigger.net/web-security"
                  className="navigation-link13 navigation-dropdown-label"
                >
                  Academy
                </a>
                <NavigationDropdownLink
                  label={
                    <Fragment>
                      <span className="navigation-text20">Support</span>
                    </Fragment>
                  }
                  navLinkId="suuport"
                  rightTitle={
                    <Fragment>
                      <span className="navigation-text21">Downloads</span>
                    </Fragment>
                  }
                  bottomLinkUrl="https://portswigger.net/support"
                  rightImageSrc="/Navigation/navigation-support-300w.jpg"
                  bottomLinkLabel={
                    <Fragment>
                      <span className="navigation-text22">
                        Visit the Support Center
                      </span>
                    </Fragment>
                  }
                  simpleListItems={[
                    {
                      href: 'https://portswigger.net/support',
                      title: 'Support Center',
                      description:
                        'Get help and advice from our experts on all things Burp.',
                    },
                    {
                      href: 'https://portswigger.net/burp/documentation',
                      title: 'Documentation',
                      description: 'Tutorials and guides for Burp Suite.',
                    },
                    {
                      href: 'https://portswigger.net/burp/documentation/desktop/getting-started',
                      title: 'Get Started - Professional',
                      description: 'Get started with Burp Suite Professional.',
                    },
                    {
                      href: 'https://portswigger.net/burp/documentation/enterprise/setup',
                      title: 'Get Started - Enterprise',
                      description:
                        'Get started with Burp Suite Enterprise Edition.',
                    },
                    {
                      href: 'https://forum.portswigger.net',
                      title: 'User Forum',
                      description:
                        'Get your questions answered in the User Forum.',
                    },
                    {
                      href: 'https://portswigger.net/burp/releases',
                      title: 'Downloads',
                      description: 'Download the latest version of Burp Suite.',
                    },
                  ]}
                  rightDescription={
                    <Fragment>
                      <span className="navigation-text23">
                        Download the latest version of Burp Suite
                      </span>
                    </Fragment>
                  }
                  featuredItemCardUrl="https://portswigger.net/burp/releases"
                ></NavigationDropdownLink>
              </div>
              <div className="position-relative navigation-hover-dropdown-no-border-trigger">
                <Icon type="menu" rootClassName="iconroot-class-name17"></Icon>
                <aside className="burger-menu-desktop-dropdown-list">
                  <div className="navigation-spacer"></div>
                  <ul className="navigation-ul1 list width-100">
                    <Repeater
                      items={
                        props['companyDropdownItems'] || [
                          {
                            href: 'https://portswigger.net/customers',
                            label: 'Customers',
                          },
                          {
                            href: 'https://portswigger.net/about',
                            label: 'About',
                          },
                          {
                            href: 'https://portswigger.net/blog',
                            label: 'Blog',
                          },
                          {
                            href: 'https://portswigger.net/careers',
                            label: 'Careers',
                          },
                          {
                            href: 'https://portswigger.net/legal',
                            label: 'Legal',
                          },
                          {
                            href: 'https://portswigger.net/about/contact',
                            label: 'Contact',
                          },
                          {
                            href: 'https://portswigger.net/support/reseller-faqs',
                            label: 'Resellers',
                          },
                        ]
                      }
                      renderItem={(burgerMenuList) => (
                        <Fragment>
                          <li className="burger-menu-desktop-link-item">
                            <a
                              href={burgerMenuList?.href}
                              target="_blank"
                              rel="noreferrer noopener"
                              className="list-item"
                            >
                              {burgerMenuList?.label}
                            </a>
                          </li>
                        </Fragment>
                      )}
                    />
                  </ul>
                </aside>
              </div>
            </div>
          </div>
          <div className="navigation-mobile-menu mobile-menu-container gap-s align-center justify-center row">
            <a
              href="https://portswigger.net/users"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Button
                size="small"
                btnLabel={
                  <Fragment>
                    <span className="navigation-text24">MY ACCOUNT</span>
                  </Fragment>
                }
                iconPlacement="none"
                rootClassName="buttonroot-class-name1"
                className="navigation-login2"
              ></Button>
            </a>
            <div data-thq="accordion">
              <details
                name="root"
                data-thq="accordion-trigger"
                className="navigation-trigger1"
              >
                <summary
                  data-thq="accordion-summary"
                  className="navigation-summary1"
                >
                  <div
                    data-thq="accordion-icon"
                    className="navigation-icon-container1"
                  ></div>
                  <Icon
                    type="menu"
                    rootClassName="iconroot-class-name45"
                  ></Icon>
                  <Icon
                    type="cancel"
                    rootClassName="iconroot-class-name44"
                  ></Icon>
                </summary>
              </details>
              <div
                data-thq="accordion-content"
                className="navigation-content1 position-absolute width-100"
              >
                <ul className="navigation-ul2 list width-100">
                  <li className="mobile-menu-list-item">
                    <div data-thq="accordion" className="navigation-accordion2">
                      <details
                        name="mobile-menu"
                        data-thq="accordion-trigger"
                        className="padding-s"
                      >
                        <summary
                          data-thq="accordion-summary"
                          className="navigation-summary2 align-center justify-in-between"
                        >
                          <span>Products</span>
                          <div
                            data-thq="accordion-icon"
                            className="navigation-icon-container2"
                          >
                            <svg width="24" height="24" viewBox="0 0 24 24">
                              <path
                                d="m12 14l-4-4h8z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </div>
                        </summary>
                      </details>
                      <div data-thq="accordion-content">
                        <div className="padding-horizontal-xs mobile-menu-dropdown-content column padding-vertical-xxs width-100">
                          <Repeater
                            items={
                              props['productDropdownItems'] || [
                                {
                                  href: 'https://portswigger.net/burp/dast',
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
                            renderItem={(productItem) => (
                              <Fragment>
                                <a
                                  href={productItem?.href}
                                  target="_blank"
                                  rel="noreferrer noopener"
                                >
                                  <div className="gap-xxs padding-xs column mobile-menu-link width-100">
                                    <strong>{productItem?.title}</strong>
                                    <span>{productItem?.description}</span>
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
                    <div data-thq="accordion" className="navigation-accordion3">
                      <details
                        name="mobile-menu"
                        data-thq="accordion-trigger"
                        className="padding-s"
                      >
                        <summary
                          data-thq="accordion-summary"
                          className="navigation-summary3 align-center justify-in-between"
                        >
                          <span>Solutions</span>
                          <div
                            data-thq="accordion-icon"
                            className="navigation-icon-container3"
                          >
                            <svg width="24" height="24" viewBox="0 0 24 24">
                              <path
                                d="m12 14l-4-4h8z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </div>
                        </summary>
                      </details>
                      <div
                        data-thq="accordion-content"
                        className="align-center column width-100"
                      >
                        <div className="padding-horizontal-xs mobile-menu-dropdown-content column width-100">
                          <Repeater
                            items={
                              props['solutionDropdownItems'] || [
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
                            renderItem={(solutionItem) => (
                              <Fragment>
                                <a
                                  href={solutionItem?.href}
                                  target="_blank"
                                  rel="noreferrer noopener"
                                >
                                  <div className="gap-xxs padding-xs column mobile-menu-link width-100">
                                    <strong>{solutionItem?.title}</strong>
                                    <span>{solutionItem?.description}</span>
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
                    <a href="https://portswigger.net/research">
                      <div className="navigation-container16 padding-s">
                        <span>Research</span>
                      </div>
                    </a>
                  </li>
                  <li className="mobile-menu-list-item">
                    <a href="https://portswigger.net/web-security">
                      <div className="navigation-container17 padding-s">
                        <span>Academy</span>
                      </div>
                    </a>
                  </li>
                  <li className="mobile-menu-list-item">
                    <div data-thq="accordion" className="navigation-accordion4">
                      <details
                        name="mobile-menu"
                        data-thq="accordion-trigger"
                        className="padding-s"
                      >
                        <summary
                          data-thq="accordion-summary"
                          className="navigation-summary4 align-center justify-in-between"
                        >
                          <span>Support</span>
                          <div
                            data-thq="accordion-icon"
                            className="navigation-icon-container4"
                          >
                            <svg width="24" height="24" viewBox="0 0 24 24">
                              <path
                                d="m12 14l-4-4h8z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </div>
                        </summary>
                      </details>
                      <div data-thq="accordion-content">
                        <div className="padding-horizontal-xs mobile-menu-dropdown-content column width-100">
                          <Repeater
                            items={
                              props['supportDropdownItems'] || [
                                {
                                  href: 'https://portswigger.net/support',
                                  title: 'Support Center',
                                  description:
                                    'Get help and advice from our experts on all things Burp.',
                                },
                                {
                                  href: 'https://portswigger.net/burp/documentation',
                                  title: 'Documentation',
                                  description:
                                    'Tutorials and guides for Burp Suite.',
                                },
                                {
                                  href: 'https://portswigger.net/burp/documentation/desktop/getting-started',
                                  title: 'Get Started - Professional',
                                  description:
                                    'Get started with Burp Suite Professional.',
                                },
                                {
                                  href: 'https://portswigger.net/burp/documentation/enterprise/setup',
                                  title: 'Get Started - Enterprise',
                                  description:
                                    'Get started with Burp Suite Enterprise Edition.',
                                },
                                {
                                  href: 'https://forum.portswigger.net',
                                  title: 'User Forum',
                                  description:
                                    'Get your questions answered in the User Forum.',
                                },
                                {
                                  href: 'https://portswigger.net/burp/releases',
                                  title: 'Downloads',
                                  description:
                                    'Download the latest version of Burp Suite.',
                                },
                              ]
                            }
                            renderItem={(subMenuItem) => (
                              <Fragment>
                                <a
                                  href={subMenuItem?.href}
                                  target="_blank"
                                  rel="noreferrer noopener"
                                >
                                  <div className="gap-xxs padding-xs column mobile-menu-link width-100">
                                    <strong>{subMenuItem?.title}</strong>
                                    <span>{subMenuItem?.description}</span>
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
                    <div data-thq="accordion" className="navigation-accordion5">
                      <details
                        name="mobile-menu"
                        data-thq="accordion-trigger"
                        className="padding-s"
                      >
                        <summary
                          data-thq="accordion-summary"
                          className="navigation-summary5 align-center justify-in-between"
                        >
                          <span>Company</span>
                          <div
                            data-thq="accordion-icon"
                            className="navigation-icon-container5"
                          >
                            <svg width="24" height="24" viewBox="0 0 24 24">
                              <path
                                d="m12 14l-4-4h8z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </div>
                        </summary>
                      </details>
                      <div data-thq="accordion-content">
                        <div className="padding-horizontal-xs mobile-menu-dropdown-content column width-100">
                          <Repeater
                            items={
                              props['companyDropdownItems'] || [
                                {
                                  href: 'https://portswigger.net/customers',
                                  label: 'Customers',
                                },
                                {
                                  href: 'https://portswigger.net/about',
                                  label: 'About',
                                },
                                {
                                  href: 'https://portswigger.net/blog',
                                  label: 'Blog',
                                },
                                {
                                  href: 'https://portswigger.net/careers',
                                  label: 'Careers',
                                },
                                {
                                  href: 'https://portswigger.net/legal',
                                  label: 'Legal',
                                },
                                {
                                  href: 'https://portswigger.net/about/contact',
                                  label: 'Contact',
                                },
                                {
                                  href: 'https://portswigger.net/support/reseller-faqs',
                                  label: 'Resellers',
                                },
                              ]
                            }
                            renderItem={(CompanyLinkItem) => (
                              <Fragment>
                                <a
                                  href={CompanyLinkItem?.href}
                                  target="_blank"
                                  rel="noreferrer noopener"
                                >
                                  <div className="padding-xs mobile-menu-link row">
                                    <strong>{CompanyLinkItem?.label}</strong>
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
      </div>
      <input
        type="radio"
        id="mega-nav-close"
        name="mega-nav-input"
        checked
        className="navigation-dropdown-menu-close"
      />
      <label
        id="navLabel"
        htmlFor="mega-nav-close"
        className="navigation-text32"
      >
         
      </label>
      <div className="navigation-container22">
        <div className="navigation-container23">
          <Script
            html={`<script>
  (function(){
      const label = document.getElementById('navLabel')
      if(label){
          label.classList.add("height-100vh");
      }
  })()
</script>
`}
          ></Script>
        </div>
      </div>
    </header>
  )
}

Navigation.defaultProps = {
  supportDropdownItems: [
    {
      href: 'https://portswigger.net/support',
      title: 'Support Center',
      description: 'Get help and advice from our experts on all things Burp.',
    },
    {
      href: 'https://portswigger.net/burp/documentation',
      title: 'Documentation',
      description: 'Tutorials and guides for Burp Suite.',
    },
    {
      href: 'https://portswigger.net/burp/documentation/desktop/getting-started',
      title: 'Get Started - Professional',
      description: 'Get started with Burp Suite Professional.',
    },
    {
      href: 'https://portswigger.net/burp/documentation/enterprise/setup',
      title: 'Get Started - Enterprise',
      description: 'Get started with Burp Suite Enterprise Edition.',
    },
    {
      href: 'https://forum.portswigger.net',
      title: 'User Forum',
      description: 'Get your questions answered in the User Forum.',
    },
    {
      href: 'https://portswigger.net/burp/releases',
      title: 'Downloads',
      description: 'Download the latest version of Burp Suite.',
    },
  ],
  solutionDropdownItems: [
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
  companyDropdownItems: [
    {
      href: 'https://portswigger.net/customers',
      label: 'Customers',
    },
    {
      href: 'https://portswigger.net/about',
      label: 'About',
    },
    {
      href: 'https://portswigger.net/blog',
      label: 'Blog',
    },
    {
      href: 'https://portswigger.net/careers',
      label: 'Careers',
    },
    {
      href: 'https://portswigger.net/legal',
      label: 'Legal',
    },
    {
      href: 'https://portswigger.net/about/contact',
      label: 'Contact',
    },
    {
      href: 'https://portswigger.net/support/reseller-faqs',
      label: 'Resellers',
    },
  ],
  rootClassName: '',
  productDropdownItems: [
    {
      href: 'https://portswigger.net/burp/dast',
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
}

Navigation.propTypes = {
  supportDropdownItems: PropTypes.array,
  solutionDropdownItems: PropTypes.array,
  companyDropdownItems: PropTypes.array,
  rootClassName: PropTypes.string,
  productDropdownItems: PropTypes.array,
}

export default Navigation
