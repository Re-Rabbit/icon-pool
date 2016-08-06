import React, { Component } from 'react'
import { Map, List } from 'immutable'
import style from 'icon-pool/styles/icon.styl'


export default class extends Component {
  render() {
    let { icon, togggleChecked } = this.props

    let activeClass = icon.get('isChecked') ? style.iconActive : ''
    let classnames = List.of(style.iconMain, activeClass)

    return (
      <div className={ style.icon } onClick={ togggleChecked }>
        <div className={ classnames.toArray().join(' ') }>
          <div className={ style.iconSvg } dangerouslySetInnerHTML={{ __html: icon.get("svg") }}></div>
          <div className={ style.iconName }>
            { icon.get("name") }
          </div>
          <div className={ style.iconCode }>
            { icon.get("code") }
          </div>
        </div>
      </div>
    )
  }

}
