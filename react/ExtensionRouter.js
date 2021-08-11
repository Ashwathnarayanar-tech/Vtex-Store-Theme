import React, { Fragment } from 'react'
import { Route } from 'vtex.my-account-commons/Router'
// Your component pages
import UserSupport from './components/UserSupport'
import UserPoints from './components/UserPoints'

const ExtensionRouter = () => (
  <Fragment>
    {/* This `path` will be added at the end of the URL */}
    <Route path="/support" exact component={UserSupport} />
    <Route path="/points" exact component={UserPoints} />
  </Fragment>
)

export default ExtensionRouter