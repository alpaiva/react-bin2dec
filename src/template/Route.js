import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from '../Home/Home'
import DevConverter from '../DecConverter/DecConverter'

export default props => 
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/converter' component={DevConverter} />
        <Redirect from='*' to='/' />
    </Switch>