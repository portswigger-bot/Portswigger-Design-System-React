import React, { Fragment } from 'react'

import { Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import Icon from './icon'
import Button from './button'
import './content-banner-with-slot-column-layout.css'

const ContentBannerWithSlotColumnLayout = (props) => {
  return (
    <div
      className={`align-center position-relative padding-horizontal-m padding-vertical-l column justify-center width-100 ${props.rootClassName} `}
    >
      <div
        className={`gap-m align-center width-max-content justify-center width-100 content-banner-with-slot-column-layout-max-width ${
          props?.layout === 'column' ? 'column' : ''
        } ${props?.layout === 'column-reverse' ? 'column-reverse' : ''} `}
      >
        <div
          className={`gap-s column width-100 ${
            props?.alignment === 'center' ? 'align-center' : ''
          } ${props?.alignment === 'center' ? 'text-center' : ''} `}
        >
          <div className="column">
            {props.showTopLabel === true && (
              <span className="content-banner-with-slot-column-layout-top-label heading-3">
                {props.topLabel ?? (
                  <Fragment>
                    <span className="content-banner-with-slot-column-layout-text4">
                      Burp AI
                    </span>
                  </Fragment>
                )}
              </span>
            )}
            <h2
              className={`content-banner-with-slot-column-layout-text1 ${
                props?.headingFontStyle === 'H1' ? 'heading-1' : ''
              } ${props?.headingFontStyle === 'H2' ? 'heading-2' : ''} ${
                props?.headingFontStyle === 'H3' ? 'heading-3' : ''
              } `}
            >
              {props.heading ?? (
                <Fragment>
                  <span className="content-banner-with-slot-column-layout-text3">
                    PortSwigger Culture
                  </span>
                </Fragment>
              )}
            </h2>
          </div>
          <span
            className={` ${
              props?.subHeadingFontStyle === 'heading-4' ? 'heading-4' : ''
            } ${props?.subHeadingFontStyle === 'body-1' ? 'text-body-1' : ''} ${
              props?.subHeadingFontStyle === 'intro' ? 'text-intro' : ''
            } ${props?.subHeadingFontStyle === 'body-3' ? 'text-body-3' : ''} `}
          >
            {props.subHeading ?? (
              <Fragment>
                <span className="content-banner-with-slot-column-layout-text5">
                  Culture eats everything for breakfast.
                </span>
              </Fragment>
            )}
          </span>
          {props.showList === true && (
            <ul className="content-banner-with-slot-column-layout-ul list">
              <Repeater
                items={
                  props['listItems'] || [
                    'Insights from Burp Suite creator and PortSwigger CEO, Dafydd Stuttard, on the problems faced by AppSec teams in 2025.',
                    'A preview of our ambitious plans to tackle these challenges by continuing our track record of industry-changing innovation. ',
                    'Insights into the near-term product strategy across Burp Suite, direct from the teams leading the charge.',
                    'Introducing Burp AI...',
                  ]
                }
                renderItem={(listItem) => (
                  <Fragment>
                    <li className="gap-s align-center row">
                      <Icon
                        type="check"
                        rootClassName="iconroot-class-name88"
                      ></Icon>
                      <span
                        className={` ${
                          props?.listFont === 'body-1' ? 'text-body-1' : ''
                        } ${props?.listFont === 'intro' ? 'text-intro' : ''} `}
                      >
                        {listItem}
                      </span>
                    </li>
                  </Fragment>
                )}
              />
            </ul>
          )}
          {props.showCtaBtn === true && (
            <Button
              size="large"
              btnLabel={props.ctaLabel}
              iconPlacement="none"
              rootClassName="buttonroot-class-name31"
              className="content-banner-with-slot-column-layout-component2"
            ></Button>
          )}
        </div>
        <div
          className={`column width-100 ${
            props?.alignment === 'center' ? 'align-center' : ''
          } `}
        >
          {props.children}
        </div>
      </div>
    </div>
  )
}

ContentBannerWithSlotColumnLayout.defaultProps = {
  listItems: [
    'Insights from Burp Suite creator and PortSwigger CEO, Dafydd Stuttard, on the problems faced by AppSec teams in 2025.',
    'A preview of our ambitious plans to tackle these challenges by continuing our track record of industry-changing innovation. ',
    'Insights into the near-term product strategy across Burp Suite, direct from the teams leading the charge.',
    'Introducing Burp AI...',
  ],
  showCtaBtn: false,
  showList: false,
  rootClassName: '',
  heading: undefined,
  topLabel: undefined,
  listFont: 'intro',
  headingFontStyle: 'H1',
  subHeading: undefined,
  subHeadingFontStyle: 'heading-4',
  alignment: 'left',
  ctaUrl: 'https://www.teleporthq.io',
  url: 'https://www.teleporthq.io',
  ctaLabel: undefined,
  layout: 'column',
  showTopLabel: false,
}

ContentBannerWithSlotColumnLayout.propTypes = {
  listItems: PropTypes.array,
  showCtaBtn: PropTypes.boolean,
  showList: PropTypes.boolean,
  rootClassName: PropTypes.string,
  heading: PropTypes.element,
  topLabel: PropTypes.element,
  listFont: PropTypes.string,
  headingFontStyle: PropTypes.string,
  subHeading: PropTypes.element,
  subHeadingFontStyle: PropTypes.string,
  alignment: PropTypes.string,
  ctaUrl: PropTypes.string,
  url: PropTypes.string,
  ctaLabel: PropTypes.element,
  layout: PropTypes.string,
  showTopLabel: PropTypes.boolean,
}

export default ContentBannerWithSlotColumnLayout
