import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import StickySideNavigation from './sticky-side-navigation'
import './side-panel-with-slot.css'

const SidePanelWithSlot = (props) => {
  return (
    <div
      className={`align-center position-relative padding-horizontal-m padding-vertical-l column width-100 ${props.rootClassName} `}
    >
      <div className="gap-m width-max-content width-100 row">
        <StickySideNavigation
          header={props.sidePanelHeader}
          rootClassName="sticky-side-navigationroot-class-name3"
          navigationList={props.sidePanelList}
        ></StickySideNavigation>
        <div className="gap-m flex-1 column">{props.children}</div>
      </div>
    </div>
  )
}

SidePanelWithSlot.defaultProps = {
  sidePanelHeader: undefined,
  rootClassName: '',
  sidePanelList: [
    {
      href: '#section-1',
      label: 'Introduction',
    },
    {
      href: '#section-2',
      label: 'Key highlights',
    },
    {
      href: '#section-3',
      label: 'Their challenge',
    },
    {
      href: '#section-4',
      label: 'Building the sitemap',
    },
    {
      href: '#section-5',
      label: 'Identifying vulnerabilities',
    },
    {
      href: '#section-6',
      label: 'Actionable POC',
    },
    {
      href: '#section-7',
      label: 'Focus on what matters most',
    },
  ],
}

SidePanelWithSlot.propTypes = {
  sidePanelHeader: PropTypes.element,
  rootClassName: PropTypes.string,
  sidePanelList: PropTypes.array,
}

export default SidePanelWithSlot
