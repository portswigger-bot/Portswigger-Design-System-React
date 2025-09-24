import React, { Fragment } from 'react'

import { Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import './image-banner-with-slot-row-layout.css'

const ImageBannerWithSlotRowLayout = (props) => {
  return (
    <div
      id={props.bannerId}
      className={`align-center position-relative padding-horizontal-m padding-vertical-l column justify-center width-100 ${props.rootClassName} `}
    >
      <div
        className={`align-center width-max-content justify-center width-100 image-banner-with-slot-row-layout-max-width ${
          props?.sectionSpacing === 'M' ? 'gap-m' : ''
        } ${props?.sectionSpacing === 'L' ? 'gap-l' : ''} ${
          props?.sectionSpacing === '0' ? 'gap-0' : ''
        } ${props?.imagePlacement === 'right' ? 'row' : ''} ${
          props?.imagePlacement === 'left' ? 'row-reverse' : ''
        } `}
      >
        <div
          className={`image-banner-with-slot-row-layout-other-side gap-s align-center column justify-center ${
            props?.columnLayout === '50-50' ? 'width-50' : ''
          } ${props?.columnLayout === '70-30' ? 'width-70' : ''} ${
            props?.columnLayout === '40-60' ? 'width-40' : ''
          } ${props?.columnLayout === '30-70' ? 'width-30' : ''} ${
            props?.columnLayout === '60-40' ? 'width-60' : ''
          } `}
        >
          {props.children}
        </div>
        <div
          className={`image-banner-with-slot-row-layout-image column ${
            props?.columnLayout === '50-50' ? 'width-50' : ''
          } ${props?.columnLayout === '30-70' ? 'width-70' : ''} ${
            props?.columnLayout === '60-40' ? 'width-40' : ''
          } ${props?.columnLayout === '70-30' ? 'width-30' : ''} ${
            props?.columnLayout === '40-60' ? 'width-60' : ''
          } `}
        >
          <img
            alt={props.mainImgAlt}
            src={props.mainImgSrc}
            className={`main-hero-image radius-xl ${
              props?.mainImageAlign === 'end' ? 'main-image-self-align-end' : ''
            } ${
              props?.mainImageAlign === 'start'
                ? 'main-image-self-align-start'
                : ''
            } ${
              props?.mainImageHeight === '320px' ? 'main-image-height-320' : ''
            } ${
              props?.mainImageHeight === '616px' ? 'main-image-height-616' : ''
            } ${
              props?.mainImageAlign === 'center'
                ? 'main-image-self-align-center'
                : ''
            } ${
              props?.mainImageHeight === '200px' ? 'main-image-height-200' : ''
            } `}
          />
          {props.showStats === true && (
            <div className="margin-top-s gap-m align-center justify-center row">
              <Repeater
                items={[
                  { label: 'BApp authors', number: '250+' },
                  { label: 'Extensions', number: '300+' },
                ]}
                renderItem={(statCard) => (
                  <Fragment>
                    <div className="align-center column">
                      <span className="image-banner-with-slot-row-layout-text1 heading-3">
                        {[0]?.number}
                        {statCard?.number}
                      </span>
                      <span className="text-body-1">
                        {statCard?.label}
                        {[0]?.label}
                      </span>
                    </div>
                  </Fragment>
                )}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

ImageBannerWithSlotRowLayout.defaultProps = {
  mainImageAlign: 'stretch',
  mainImageHeight: '100%',
  columnLayout: '50-50',
  showStats: false,
  mainImgAlt: 'Portswigger Culture Hero Image',
  mainImgSrc:
    '/Pages/Burp Suite/Performance Upgrades/pro-performance-image-1200w-1200w.webp',
  rootClassName: '',
  imagePlacement: 'right',
  sectionSpacing: 'M',
  bannerId: '',
}

ImageBannerWithSlotRowLayout.propTypes = {
  mainImageAlign: PropTypes.string,
  mainImageHeight: PropTypes.string,
  columnLayout: PropTypes.string,
  showStats: PropTypes.boolean,
  mainImgAlt: PropTypes.string,
  mainImgSrc: PropTypes.string,
  rootClassName: PropTypes.string,
  imagePlacement: PropTypes.string,
  sectionSpacing: PropTypes.string,
  bannerId: PropTypes.string,
}

export default ImageBannerWithSlotRowLayout
