import React,{useEffect, useState} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Landing from './components/Landing.jsx'
import MakerSignUp from './components/SignUp/Maker.jsx'
import DesignerSignUp from './components/SignUp/Designer.jsx'
import BothSignUp from './components/SignUp/Both.jsx'
import Login from './components/Login'
import Auth from './components/Auth'

import MakerProfile from './components/Profile/MakerProfile.jsx'
import DesignerProfile from './components/Profile/DesignerProfile.jsx'
import BothProfile from './components/Profile/BothProfile.jsx'


function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <Switch>
          <Route exact path="/" component={Landing}/>
          <Route exact  path="/login" component={Login}/>
          <Route exact  path="/maker-SignUp" component={MakerSignUp}/>
          <Route exact  path="/designer-SignUp" component={DesignerSignUp}/>
          <Route exact  path="/both-SignUp" component={BothSignUp}/>
          <Route exact  path="/auth" component={Auth}/>
          <Route exact path="/maker-profile" component={MakerProfile}/>
          <Route exact path="/designer-profile" component={DesignerProfile}/>
          <Route exact path="/both-profile" component={BothProfile}/>

        </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
