/*
<Project Name> Component
login
*/
import React, { Component } from 'react'
import s from './login.css';
import {BrowserRouter as Router,Route,useHistory }from 'react-router-dom'

class Login extends Component {
//    let userHist=useHistory();
	componentDidMount() {
	}

	login(){
		console.log("login");
		//userHist.push("/home");
	}

	render() {
		return (
			<div>
				<div className="container">
					<form>
						<div className="form-control">
							UserName:<input type="text"></input><br/>
							Password:<input type="password"></input><br/>
							<button onClick={()=>{this.login()}}>Login</button>
						</div>
					</form>
				</div>
			</div>
		);

	}

}

export default Login