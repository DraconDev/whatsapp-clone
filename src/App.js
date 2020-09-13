import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Chat from "./Components/Chat/Chat";
import Login from "./Components/Login/Login";
import Sidebar from "./Components/Sidebar/Sidebar";
import { useStateValue } from "./State/StateProvider";

function App() {
	const [{ user }, dispatch] = useStateValue();
	// console.log("App", useStateValue())
	// const user = "";
	return (
		<div className="app">
			{!user ? (
				<Login></Login>
			) : (
				<div className="app__body">
					<BrowserRouter>
						<Sidebar></Sidebar>
						<Switch>
							<Route path="/rooms/:roomId">
								<Chat></Chat>
							</Route>
							<Route path="/">
								<div className="">Home screen</div>
							</Route>
						</Switch>
					</BrowserRouter>
				</div>
			)}
		</div>
	);
}

export default App;
