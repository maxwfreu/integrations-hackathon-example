import React from 'react'
import * as Sentry from '@sentry/browser';

class Index extends React.Component {
  static getInitialProps ({ query }) {
    if (query.raiseError) {
      throw new Error('Error in getInitialProps')
    }
  }

  state = {
    raiseErrorInRender: false,
    raiseErrorInUpdate: false
  }

  componentDidUpdate () {
    if (this.state.raiseErrorInUpdate) {
      throw new Error('Error in componentDidUpdate')
    }
  }

  raiseErrorInUpdate = () => this.setState({ raiseErrorInUpdate: '1' })
  raiseErrorInRender = () => this.setState({ raiseErrorInRender: '1' })
  raiseALotOfErrors = () => {
    for(let i = 0; i < 10; i++) {
      // const referr = new ReferenceError(`Mock Error: ${(new Date().getTime())}`)
      Sentry.captureException(`Mock Error: ${(new Date().getTime())}`);
    }
  };

  render () {
    if (this.state.raiseErrorInRender) {
      throw new Error('Error in render')
    }

    return (
      <div>
        <h2>Sentry Example 🚨</h2>
        <ul>
          <li>
            <a href='#' onClick={this.raiseErrorInRender}>
              Raise the error in render
            </a>
          </li>
          <li>
            <a href='#' onClick={this.raiseErrorInUpdate}>
              Raise the error in componentDidUpdate
            </a>
          </li>
          <li>
            <button onClick={this.raiseALotOfErrors}>
              Raise a lot errors in sentry
            </button>
          </li>
          Available Env Vars:
          <li>
            process.env.SENTRY_DSN: {process.env.SENTRY_DSN}
          </li>
          <li>
            process.env.SENTRY_AUTH_TOKEN: (private)
          </li>
          <li>
            process.env.SENTRY_ORGANIZATION_SLUG: {process.env.SENTRY_ORGANIZATION_SLUG}
          </li>
          <li>
            process.env.SENTRY_PROJECT_SLUG: {process.env.SENTRY_PROJECT_SLUG}
          </li>
          <li>
            process.env.SENTRY_PROJECT_ID: {process.env.SENTRY_PROJECT_ID}
          </li>
        </ul>
      </div>
    )
  }
}

export default Index