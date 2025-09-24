import React, { Fragment } from 'react'

import { Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import Icon from './icon'
import Button from './button'
import './flat-card-list.css'

const FlatCardList = (props) => {
  return (
    <div
      className={`flat-card-list-flat-card-list padding-horizontal-m width-100 ${props.rootClassName} `}
    >
      <div className="gap-m width-max-content width-100 row flat-card-list-container1">
        <Repeater
          items={
            props['cardList'] || [
              {
                url: '#professional-edition',
                icon: 'secure-code',
                heading: 'Burp Suite Professional',
                urlLabel: 'Find out more',
                paragraph: 'Some paragraph text in the card',
              },
              {
                url: '#enterprise-edition',
                icon: 'secure-code',
                heading: 'Burp Suite Enterprise Edition',
                urlLabel: 'Find out more',
                paragraph: 'Some paragraph text in the card',
              },
            ]
          }
          renderItem={(cardItem) => (
            <Fragment>
              <div
                className={`padding-m flat-card-list-card card-container gap-xs ${
                  props?.contentAlignment === 'center' ? 'align-center' : ''
                } ${props?.cardLayout === 'wide' ? 'card-aspect-wide' : ''} ${
                  props?.cardLayout === 'auto' ? 'card-aspect-auto' : ''
                } ${
                  props?.contentAlignment === 'start' ? 'justify-start' : ''
                } ${
                  props?.cardLayout === 'square' ? 'card-aspect-square' : ''
                } ${
                  props?.cardType === 'elevated-white'
                    ? 'card-elevated-white'
                    : ''
                } ${props?.contentAlignment === 'start' ? 'align-start' : ''} ${
                  props?.cardType === 'flat-white' ? 'card-flat-white' : ''
                } ${
                  props?.contentAlignment === 'center' ? 'justify-center' : ''
                } `}
              >
                {props.showCardIcon === true && (
                  <Icon
                    type={cardItem?.icon}
                    rootClassName="iconroot-class-name101"
                  ></Icon>
                )}
                <h3
                  className={`flat-card-list-text1 ${
                    props?.headintFont === 'H4' ? 'heading-4' : ''
                  } ${props?.headintFont === 'H5' ? 'heading-5' : ''} ${
                    props?.headintFont === 'H3' ? 'heading-3' : ''
                  } `}
                >
                  {cardItem?.heading}
                </h3>
                {props.showParagraph === true && (
                  <span className="flat-card-list-paragraph text-body-1">
                    {cardItem?.paragraph}
                  </span>
                )}
                <div
                  className={` ${
                    props?.contentAlignment === 'start' ? 'margin-top-auto' : ''
                  } `}
                >
                  <a
                    href={cardItem?.url}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Button
                      btnType="quarternary"
                      btnLabel={
                        <Fragment>
                          <span className="flat-card-list-text2">
                            {cardItem?.urlLabel}
                          </span>
                        </Fragment>
                      }
                      iconType={props.ctaIconType}
                      rootClassName="buttonroot-class-name42"
                    ></Button>
                  </a>
                </div>
              </div>
            </Fragment>
          )}
        />
      </div>
    </div>
  )
}

FlatCardList.defaultProps = {
  cardList: [
    {
      url: '#professional-edition',
      icon: 'secure-code',
      heading: 'Burp Suite Professional',
      urlLabel: 'Find out more',
      paragraph: 'Some paragraph text in the card',
    },
    {
      url: '#enterprise-edition',
      icon: 'secure-code',
      heading: 'Burp Suite Enterprise Edition',
      urlLabel: 'Find out more',
      paragraph: 'Some paragraph text in the card',
    },
  ],
  contentAlignment: 'center',
  showParagraph: false,
  rootClassName: '',
  cardLayout: 'square',
  showCardIcon: false,
  ctaIconType: 'chevron-down',
  headintFont: 'H5',
  cardType: 'flat-white',
}

FlatCardList.propTypes = {
  cardList: PropTypes.array,
  contentAlignment: PropTypes.string,
  showParagraph: PropTypes.boolean,
  rootClassName: PropTypes.string,
  cardLayout: PropTypes.string,
  showCardIcon: PropTypes.boolean,
  ctaIconType: PropTypes.string,
  headintFont: PropTypes.string,
  cardType: PropTypes.string,
}

export default FlatCardList
