import React from 'react'
import PropTypes from 'prop-types'
import { Link, withRouter } from 'vtex.my-account-commons/Router'

function CustomMenu(props) {
  return (
    <div>
      <h4>Custom Menu</h4>
      <Link to="/profile">
        <span
          className={`bl bw2 ${
            props.location.pathname.indexOf('profile') === -1
              ? 'c-muted-1 b--transparent'
              : 'c-on-base b b--action-primary'
          }`}>
          Personal data
        </span>
      </Link>
      <br />
      <Link to="/address">
        <span
          className={`bl bw2 ${
            props.location.pathname.indexOf('address') === -1
              ? 'c-muted-1 b--transparent'
              : 'c-on-base b b--action-primary'
          }`}>
          Address
        </span>
      </Link>
    </div>
  )
}

CustomMenu.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
}

export default withRouter(CustomMenu)
