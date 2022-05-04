import React from 'react'
import { Route, Switch } from 'react-router-dom'
import MainNavbar from './MainNavbar'
import Home from './pages/Home'
import Countries from './pages/Countries'
import AddCountry from './pages/AddCountry'
import Secret from './pages/Secret'
import Login from './pages/Login'
import Signup from './pages/Signup'
import ComingSoon from './pages/ComingSoon'

export default function App() {
  return (
    <div className="App">
      <MainNavbar />
      <Switch>
        {/* HOME PAGE FOR NOW BUT IT IS THE COMING SOON PAGE */}
        <Route path="/" exact component={ComingSoon} />
        {/* <Route path="/" exact component={Home} /> */}
        {/* <Route path="/countries" component={Countries} />
        <Route path="/add-country" component={AddCountry} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/secret" component={Secret} /> */}
        <Route render={() => <h2>404</h2>} />
      </Switch>
    </div>
  )
}
