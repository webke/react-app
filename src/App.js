import React, { Fragment } from 'react'
import Login from './pages/login'
import Home from './pages/home'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
// import Header from './components/header'


function App() {
  return (
    <Fragment>
      {/* <Header param1="abc"
        param2="c"
        func1={() => { console.log('func1') }}></Header> */}
      <HashRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/home" component={Home} />
          <Route exact path="/" component={Login} />
          <Redirect to={"/login"} />
        </Switch>
      </HashRouter>
    </Fragment>
  )
}

export default App