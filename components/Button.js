import { Button } from 'antd'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class ButtonComponent extends Component {
  setClassButtonType = type => `btn-${type}-common-ui`

  setType = (type) => {
    if (!this.props.disabled === true) {
      switch (type) {
        case 'negative': {
          return this.setClassButtonType(type)
        }
        case 'warning': {
          return this.setClassButtonType(type)
        }
        case 'careful': {
          return this.setClassButtonType(type)
        }
        case 'positive': {
          return this.setClassButtonType(type)
        }
        case 'secondary': {
          return this.setClassButtonType(type)
        }
        case 'primary': {
          return this.setClassButtonType(type)
        }
        case 'text': {
          return this.setClassButtonType(type)
        }
        default: {
          return this.setClassButtonType('base')
        }
      }
    } else {
      return this.setClassButtonType('disabled')
    }
  }

  render() {
    const {
      className,
      children,
      type,
      style,
      width,
      ...rest
    } = this.props

    return (
      <Button
        className={`
          button-common-ui
          ${className}
          ${this.setType(type)}
        `}
        style={{
          width,
          ...style,

        }}
        {...rest}
      >
        {children}
      </Button>
    )
  }
}

ButtonComponent.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
    PropTypes.element,
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.node,
  ]).isRequired,
  disabled: PropTypes.bool,
  htmlType: PropTypes.string,
  size: PropTypes.string,
  style: PropTypes.shape(),
  type: PropTypes.string,
  width: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
}

ButtonComponent.defaultProps = {
  className: '',
  disabled: false,
  htmlType: 'button',
  size: 'default',
  style: {},
  type: 'base',
  width: null,
}

export default ButtonComponent
