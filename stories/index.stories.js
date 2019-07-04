import React from 'react'
import { storiesOf } from '@storybook/react'
import HelloWorld from '../components'

storiesOf('Index', module).add('simple component', () => <HelloWorld />)
