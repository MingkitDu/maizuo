import React, { Component } from 'react';
import "./css/app.scss";
import { BrowserRouter as Router, Route, } from 'react-router-dom';
import Head from "./component/head.js";
import Home from "./component/home.js";
import Filmhot from "./component/filmhot.js";
import Filmcome from "./component/filmcome.js";
import Cinema from "./component/cinema.js";
import Show from "./component/show.js";
import Ticket from "./component/ticket.js";
import Login from "./component/login.js";
import Card from "./component/card.js";
import Filmdetail from "./component/filmdetail";
import Loginsuccess from './component/loginsuccess';
class App extends Component {
	render() {
		return (
			<div className="App">
				<Router>
					<div>
						<Head />
						<Route exact path="/"  component={Home}  />
						<Route path="/filmhot"  component={Filmhot}  />
						<Route path="/filmcome"  component={Filmcome}  />
            			<Route path="/cinema"  component={Cinema}  />
						<Route path="/show"  component={Show}  />
						<Route path="/ticket"  component={Ticket}  />
						<Route path="/login"  component={Login}  />
						<Route path="/card"  component={Card}  />
						<Route path="/filmdetail/:id"  component={Filmdetail}  />
						<Route path="/success"  component={Loginsuccess}  />
					</div>
				</Router>
			</div>
		);
	}
}

export default App;
