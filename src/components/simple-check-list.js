import React, { Fragment } from 'react'

import { Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import Icon from './icon'
import './simple-check-list.css'

const SimpleCheckList = (props) => {
  return (
    <div
      className={`align-center position-relative padding-horizontal-m padding-vertical-l column width-100 ${props.rootClassName} `}
    >
      <div className="gap-m width-max-content column width-100">
        <div className="simple-check-list-list gap-l justify-center row">
          <Repeater
            items={
              props['listItems'] || [
                { label: 'Reduced lag/load times', iconType: 'check' },
                { label: 'Reduced memory usage', iconType: 'check' },
                { label: 'Faster site map filtering', iconType: 'check' },
                { label: 'Efficiency changes', iconType: 'check' },
              ]
            }
            renderItem={(listItem) => (
              <Fragment>
                <div className="align-center simple-check-list-list-item row gap-xs">
                  <Icon
                    type={listItem?.iconType}
                    rootClassName="iconroot-class-name79"
                  ></Icon>
                  <p
                    className={` ${
                      props?.fontType === 'Body-2' ? 'text-body-2' : ''
                    } ${props?.fontType === 'H5' ? 'heading-5' : ''} `}
                  >
                    {listItem?.label}
                  </p>
                </div>
              </Fragment>
            )}
          />
        </div>
      </div>
    </div>
  )
}

SimpleCheckList.defaultProps = {
  listItems: [
    {
      label: 'Reduced lag/load times',
      iconType: 'check',
    },
    {
      label: 'Reduced memory usage',
      iconType: 'check',
    },
    {
      label: 'Faster site map filtering',
      iconType: 'check',
    },
    {
      label: 'Efficiency changes',
      iconType: 'check',
    },
  ],
  fontType: 'Body-2',
  rootClassName: '',
}

SimpleCheckList.propTypes = {
  listItems: PropTypes.array,
  fontType: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default SimpleCheckList
