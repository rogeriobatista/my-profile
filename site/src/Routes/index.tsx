import React from 'react'
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom'

import Home from '../Views/Home'
import Questions from '../Views/Questions'

const Routing: React.FC = () => {
    return(
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/questions" exact>
                    <Questions />
                </Route>
            </Switch>
        </Router>
    )
}

export default Routing