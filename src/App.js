import React, { Component as Comp } from 'react'
import './App.css'
import { connect } from 'react-redux'
import { getUser } from './redux/reducer'

class App extends Comp {
  componentDidMount() {
    this.props.getUser()
  }

  render() {
    console.log(this.props)
    console.log(this.props.reduxState.user.name)
    return (
      <div className='App'>
        <h1>App.js</h1>
        {this.props.reduxState.loading ? (
          <div>We Are Loading</div>
        ) : (
          <div>Not Loading</div>
        )}
      </div>
    )
  }
}

// store state  maps to app props
const mapStateToProps = reduxState => {
  // return { reduxState: reduxState } equal to line below
  return { reduxState }
}

// const mapDispatchToProps= {

// }

// then you pass in the function into connect as the first argument
export default connect(mapStateToProps, { getUser: getUser })(App)
// export default connect(mapStateToProps, { getUser })(App) <shorthand
