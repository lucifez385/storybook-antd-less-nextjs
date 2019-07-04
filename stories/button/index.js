import React, { Component, Fragment } from 'react';

import Type from './Types';

class ButtonPage extends Component {
  render() {
    return (
      <Fragment>
        <h1 className="title">Button</h1>

        <h2 className="title">When to use</h2>

        <p className="text">
          A button means an operation (or a series of operations). Clicking a button will trigger corresponding business logic.
        </p>

        <h2 className="title">Examples:</h2>

        <section className="example">
          <Type />
        </section>
      </Fragment>
    );
  }
}

export default ButtonPage;


/* import { storiesOf } from '@storybook/react';
import ButtonTypes from './Types';
import ButtonSize from './Size';
import ButtonLoading from './Loading';
import ButtonDisabled from './Disabled';
import ButtonMultiple from './Multiple';
import ButtonGhost from './Ghost';
storiesOf('Button', module)
  .add('Types', () => <ButtonTypes />)
  .add('Sizes', () => <ButtonSize />)
  .add('Loadings', () => <ButtonLoading />)
  .add('Disabled', () => <ButtonDisabled />)
  .add('Multiple Buttons', () => <ButtonMultiple />)
  .add('Ghost Button', () => <ButtonGhost />);
 */