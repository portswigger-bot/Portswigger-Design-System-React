import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import LiveTagProduction from '../../../components/live-tag-production'
import Navigation from '../../../components/navigation'
import ExtraNavigationEnterprise from '../../../components/extra-navigation-enterprise'
import HeadingAndParagraph from '../../../components/heading-and-paragraph'
import ImageBannerWithSlotRowLayout from '../../../components/image-banner-with-slot-row-layout'
import CheckList from '../../../components/check-list'
import Footer from '../../../components/footer'
import './burp-suite-enterprise-edition-pricing.css'

const BurpSuiteEnterpriseEditionPricing = (props) => {
  return (
    <div className="burp-suite-enterprise-edition-pricing-container">
      <Helmet>
        <title>Pricing - Burp Suite DAST</title>
        <meta
          name="description"
          content="Burp Suite DAST has a simple and straightforward pricing model, with unlimited users and free technical support. Find out more."
        />
        <meta property="og:title" content="Pricing - Burp Suite DAST" />
        <meta
          property="og:description"
          content="Burp Suite DAST has a simple and straightforward pricing model, with unlimited users and free technical support. Find out more."
        />
      </Helmet>
      <LiveTagProduction></LiveTagProduction>
      <Navigation rootClassName="navigationroot-class-name21"></Navigation>
      <ExtraNavigationEnterprise
        link1={
          <Fragment>
            <span className="burp-suite-enterprise-edition-pricing-text10">
              Product Overview
            </span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="burp-suite-enterprise-edition-pricing-text11">
              Request a demo
            </span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="burp-suite-enterprise-edition-pricing-text12">
              Pricing
            </span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="burp-suite-enterprise-edition-pricing-text13">
              Prepare to set up
            </span>
          </Fragment>
        }
        rootClassName="extra-navigation-enterpriseroot-class-name1"
        highlightedLink={3}
        dropdown1TriggerLabel={
          <Fragment>
            <span className="burp-suite-enterprise-edition-pricing-text14">
              Explore Burp Suite DAST
            </span>
          </Fragment>
        }
        dropdown2TriggerLabel={
          <Fragment>
            <span className="burp-suite-enterprise-edition-pricing-text15">
              Resources
            </span>
          </Fragment>
        }
      ></ExtraNavigationEnterprise>
      <main className="align-center column width-100">
        <HeadingAndParagraph
          heading={
            <Fragment>
              <span className="burp-suite-enterprise-edition-pricing-text16">
                Burp Suite DAST plans
              </span>
            </Fragment>
          }
          topLabel={
            <Fragment>
              <span className="burp-suite-enterprise-edition-pricing-text17">
                Securing the web
              </span>
            </Fragment>
          }
          paragraph={
            <Fragment>
              <span className="burp-suite-enterprise-edition-pricing-text18">
                Whether you&apos;re a small pentesting team or a mature AppSec
                division responsible for safeguarding thousands of web
                applications, we have a tailored solution for you.
              </span>
            </Fragment>
          }
          rootClassName="heading-and-paragraphroot-class-name155"
        ></HeadingAndParagraph>
        <ImageBannerWithSlotRowLayout
          mainImgSrc="/Pages/Burp Suite/Enterprise Edition/bsee-pricing-1400w-1200w.webp"
          columnLayout="50-50"
          rootClassName="image-banner-with-slot-row-layoutroot-class-name3"
          mainImageAlign="stretch"
          sectionSpacing="0"
          mainImageHeight="616px"
        >
          <CheckList
            item1={
              <Fragment>
                <span className="burp-suite-enterprise-edition-pricing-text19 text-body-1">
                  Unlimited Users: All subscriptions come with no limits on the
                  number of users.
                </span>
              </Fragment>
            }
            item2={
              <Fragment>
                <span className="burp-suite-enterprise-edition-pricing-text20 text-body-1">
                  Tailored to Your Needs: Our subscriptions are customized based
                  on your specific requirements.
                </span>
              </Fragment>
            }
            item3={
              <Fragment>
                <span className="burp-suite-enterprise-edition-pricing-text21 text-body-1">
                  Deployment Preferences: Choose between self-hosted options or
                  running DAST scans via PortSwigger&apos;s secure cloud.
                </span>
              </Fragment>
            }
            item4={
              <Fragment>
                <span className="burp-suite-enterprise-edition-pricing-text22 text-body-1">
                  Scalable Scanning Requirements: From ad-hoc scanning managed
                  by the hour to unlimited scalable scanning capabilities.
                </span>
              </Fragment>
            }
            item5={
              <Fragment>
                <span className="burp-suite-enterprise-edition-pricing-text23">
                  The grievance hearer will look into any additional points
                  raised.
                </span>
              </Fragment>
            }
            item6={
              <Fragment>
                <span className="burp-suite-enterprise-edition-pricing-text24">
                  Once ready, the grievance hearer will produce a written
                  outcome letter of their findings. This is then shared with
                  relevant parties.
                </span>
              </Fragment>
            }
            item7={
              <Fragment>
                <span className="burp-suite-enterprise-edition-pricing-text25">
                  The Swigger who raised the grievance will be given the right
                  to appeal the findings of the grievance.
                </span>
              </Fragment>
            }
            heading={
              <Fragment>
                <span className="burp-suite-enterprise-edition-pricing-text26">
                  Why choose our subscriptions?
                </span>
              </Fragment>
            }
            showCta
            ctaLabel={
              <Fragment>
                <span className="burp-suite-enterprise-edition-pricing-text27">
                  GET IN TOUCH
                </span>
              </Fragment>
            }
            itemCount={4}
            headingType="H4"
            rootClassName="check-listroot-class-name26"
            headingParagraph={
              <Fragment>
                <span className="burp-suite-enterprise-edition-pricing-text28">
                  Swiggers travel to work in various ways. Each of our offices
                  offers different commuting options and amenities to support
                  your commute to work:
                </span>
              </Fragment>
            }
          ></CheckList>
        </ImageBannerWithSlotRowLayout>
      </main>
      <Footer rootClassName="footerroot-class-name27"></Footer>
    </div>
  )
}

export default BurpSuiteEnterpriseEditionPricing
