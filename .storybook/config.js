import { configure } from '@storybook/react'
import './style.less';
import '../styles/antd-custom.less';
// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
