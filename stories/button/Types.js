import React, { Component, Fragment } from 'react';
import { action } from '@storybook/addon-actions';
import Button from '../../components/Button'

class Types extends Component {
  state = {
    isOpen: false
  };

  render() {
    return (
      <Fragment>
        <h3 className="ex-title">Type</h3>
        <Button onClick={action('Default Button Clicked')}>Default</Button>
        <Button className="ml20" type="primary" onClick={action('Primary Button Clicked')}>Primary</Button>
        <Button className="ml20" type="text" onClick={action('Text Button Clicked')}>Text</Button>
        <Button className="ml20" type="secondary" onClick={action('Secondary Button Clicked')}>Secondary</Button>
        <Button className="ml20" type="positive" onClick={action('Positive Button Clicked')}>Positive</Button>
        <Button className="ml20" type="careful" onClick={action('Careful Button Clicked')}>Careful</Button>
        <Button className="ml20" type="warning" onClick={action('Warning Button Clicked')}>Warning</Button>
        <Button className="ml20" type="negative" onClick={action('Negative Button Clicked')}>Negative</Button>


        <p className="text">
          There are <span className="allotted">primary</span> button,
          <span className="allotted">default</span> button,
          <span className="allotted">dashed</span> button and
          <span className="allotted">danger</span> button in antd.
        </p>
        <span className="ex-toggle" onClick={this.toggle}>
          {this.state.isOpen ? 'Hide ' : 'Show '}
          Code
        </span>
        {  // Block Code
          this.state.isOpen ?
            this.getCode() : null
        }
      </Fragment>
    );
  }

  toggle = () => this.setState({ isOpen: !this.state.isOpen });
  getCode() {
    return (
      <code className="code">
        <pre><i className="blue">import</i> &#123; Button &#125; <i className="blue">from</i> 'antd';</pre>
        <pre>ReactDOM.<i className="red">render</i>(</pre>
        <pre>  &lt;<i className="red">div</i>&gt;</pre>
        <pre>    &lt;<i className="red">Button</i> <i className="green">type</i>="<i className="blue">primary</i>"&gt;Primary&lt;/<i className="red">Button</i>&gt;</pre>
        <pre>    &lt;<i className="red">Button</i>&gt;Default&lt;/<i className="red">Button</i>&gt;</pre>
        <pre>    &lt;<i className="red">Button</i> <i className="green">type</i>="<i className="blue">dashed</i>"&gt;Dashed&lt;/<i className="red">Button</i>&gt;</pre>
        <pre>    &lt;<i className="red">Button</i> <i className="green">type</i>="<i className="blue">danger</i>"&gt;Danger&lt;/<i className="red">Button</i>&gt;</pre>
        <pre>  &lt;<i className="red">div</i>&gt;</pre>
        <pre>, node);</pre>
      </code>
    );
  }
}

export default Types;