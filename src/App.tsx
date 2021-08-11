import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { LandingPage } from './pages/landing-page';

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path={['/', '/home']} component={LandingPage} />
            </Switch>
        </BrowserRouter>
    );
};

export default App;
