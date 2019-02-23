import * as React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  faColumns,
  faBold,
  faExpandArrowsAlt,
  faEye,
  faHeading,
  faImage,
  faItalic,
  faLink,
  faListUl,
  faListOl,
  faQuestion,
  faQuoteRight,
  faStrikethrough,
  faTable
} from '@fortawesome/free-solid-svg-icons'

export type IMenuItemState = 'enabled' | 'disabled' | 'selected'

const menuNameToIconDefinition: any = {
  bold: faBold,
  quote: faQuoteRight,
  heading: faHeading,
  link: faLink,
  image: faImage,
  'unordered-list': faListUl,
  'ordered-list': faListOl,
  strikethrough: faStrikethrough,
  italic: faItalic,
  preview: faEye,
  fullscreen: faExpandArrowsAlt,
  help: faQuestion,
  splitpane: faColumns,
  table: faTable
}

export interface IMenuItemProps {
  name: string
  state?: IMenuItemState
  tip: string
  onClick?: (name: string, state: string) => void
  keyboard?: string
}

const MenuItem = (props: IMenuItemProps) => {
  const { name, state, tip, onClick } = props

  if (name === '|') {
    return <i className='separator'> | </i>
  } else {
    const faIcon = menuNameToIconDefinition[name]

    const stateClassName =
      state === 'selected'
        ? 'menu-icon-selected'
        : state === 'disabled'
          ? 'menu-icon-disabled'
          : 'menu-icon-enabled'

    const className = 'menu-icon ' + stateClassName

    return faIcon ? (
      <span
        className={className}
        onClick={() => onClick && onClick(name, state || 'enabled')}
      >
        <dfn title={tip}>
          <FontAwesomeIcon icon={faIcon} />{' '}
        </dfn>
      </span>
    ) : null
  }
}


export default MenuItem
