import React, { Fragment } from 'react'

import { Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import Icon from './icon'
import Button from './button'
import './content-banner-with-slot-row-layout.css'

const ContentBannerWithSlotRowLayout = (props) => {
  return (
    <div
      className={`align-center position-relative padding-horizontal-m padding-vertical-l column justify-center width-100 ${props.rootClassName} `}
    >
      <div
        className={`gap-m align-center width-max-content justify-center width-100 content-banner-with-slot-row-layout-max-width ${
          props?.layout === 'row' ? 'row' : ''
        } ${props?.layout === 'row-reverse' ? 'row-reverse' : ''} `}
      >
        <div
          className={`gap-s column ${
            props?.columnLayout === '50-50' ? 'width-50' : ''
          } ${props?.columnLayout === '70-30' ? 'width-70' : ''} ${
            props?.columnLayout === '40-60' ? 'width-40' : ''
          } ${props?.columnLayout === '30-70' ? 'width-30' : ''} ${
            props?.columnLayout === '60-40' ? 'width-60' : ''
          } `}
        >
          <div className="column">
            {props.showTopLabel === true && (
              <span className="content-banner-with-slot-row-layout-top-label heading-3">
                {props.topLabel ?? (
                  <Fragment>
                    <span className="content-banner-with-slot-row-layout-text4">
                      Burp AI
                    </span>
                  </Fragment>
                )}
              </span>
            )}
            <h2
              className={`content-banner-with-slot-row-layout-text1 ${
                props?.headingFontStyle === 'H1' ? 'heading-1' : ''
              } ${props?.headingFontStyle === 'H2' ? 'heading-2' : ''} ${
                props?.headingFontStyle === 'H3' ? 'heading-3' : ''
              } `}
            >
              {props.heading ?? (
                <Fragment>
                  <span className="content-banner-with-slot-row-layout-text3">
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
                <span className="content-banner-with-slot-row-layout-text6">
                  Culture eats everything for breakfast.
                </span>
              </Fragment>
            )}
          </span>
          {props.showList === true && (
            <ul className="content-banner-with-slot-row-layout-ul list">
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
                        rootClassName="iconroot-class-name87"
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
              rootClassName="buttonroot-class-name25"
              className="content-banner-with-slot-row-layout-component2"
            ></Button>
          )}
        </div>
        <div
          className={`column ${
            props?.columnLayout === '50-50' ? 'width-50' : ''
          } ${props?.columnLayout === '30-70' ? 'width-70' : ''} ${
            props?.columnLayout === '60-40' ? 'width-40' : ''
          } ${props?.columnLayout === '70-30' ? 'width-30' : ''} ${
            props?.columnLayout === '40-60' ? 'width-60' : ''
          } `}
        >
          {props.children}
        </div>
      </div>
    </div>
  )
}

ContentBannerWithSlotRowLayout.defaultProps = {
  subHeadingFontStyle: 'heading-4',
  headingFontStyle: 'H1',
  heading: undefined,
  rootClassName: '',
  listItems: [
    'Insights from Burp Suite creator and PortSwigger CEO, Dafydd Stuttard, on the problems faced by AppSec teams in 2025.',
    'A preview of our ambitious plans to tackle these challenges by continuing our track record of industry-changing innovation. ',
    'Insights into the near-term product strategy across Burp Suite, direct from the teams leading the charge.',
    'Introducing Burp AI...',
  ],
  topLabel: undefined,
  columnLayout: '50-50',
  ctaUrl: 'https://www.teleporthq.io',
  url: 'https://www.teleporthq.io',
  layout: 'row',
  showList: false,
  ctaLabel: undefined,
  subHeading: undefined,
  listFont: 'intro',
  showTopLabel: false,
  showCtaBtn: false,
}

ContentBannerWithSlotRowLayout.propTypes = {
  subHeadingFontStyle: PropTypes.string,
  headingFontStyle: PropTypes.string,
  heading: PropTypes.element,
  rootClassName: PropTypes.string,
  listItems: PropTypes.array,
  topLabel: PropTypes.element,
  columnLayout: PropTypes.string,
  ctaUrl: PropTypes.string,
  url: PropTypes.string,
  layout: PropTypes.string,
  showList: PropTypes.boolean,
  ctaLabel: PropTypes.element,
  subHeading: PropTypes.element,
  listFont: PropTypes.string,
  showTopLabel: PropTypes.boolean,
  showCtaBtn: PropTypes.boolean,
}

export default ContentBannerWithSlotRowLayout
