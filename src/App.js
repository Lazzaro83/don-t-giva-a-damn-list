import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './Home.js';
import CourseList from './CourseList.js';

class App extends Component {
    render() {
    return (
    	<BrowserRouter>
		    <Switch>
			    <Route path="/" exact component={Home} />
			    <Route path="*" component={CourseList} />
		    </Switch>
	    </BrowserRouter>
    );
    }
}

export default App;
