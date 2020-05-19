import React from 'react';

import { Switch, Route } from 'react-router-dom';

import About from '../pages/about';
import Portfolio from '../pages/portfolio';
import Skills from '../pages/skills';
import Contact from '../pages/contact';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={About} />
    <Route path="/portfolio" component={Portfolio} />
    <Route path="/skills" component={Skills} />
    <Route path="/contact" component={Contact} />
  </Switch>
);

export default Routes;
