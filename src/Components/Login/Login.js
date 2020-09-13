import { Button } from "@material-ui/core";
import React from "react";
import { auth, provider } from "../../Firebase/firebaseSetup";
import "./Login.scss";
import { useStateValue } from "../../State/StateProvider";
import { actionTypes } from "../../State/Reducers/Reducer";

function Login() {
	const [{}, dispatch] = useStateValue();

	// console.log("test",useStateValue())

	// const dispatch = (params) => {

	// }

	const signIn = (prop) => {
		auth
			.signInWithPopup(provider)
			.then((result) =>
				dispatch({
					type: actionTypes.SET_USER,
					user: result.user,
				})
			)
			.catch((error) => error.message);
	};

	return (
		<div className="login">
			<div className="container">
				<img
					src="https://image.flaticon.com/icons/svg/1570/1570240.svg"
					alt="bgImage"
				/>
				<div className="text">
					<h1>Sign in</h1>
				</div>
				<Button type="submit" onClick={() => signIn()}>
					Sign in with google
				</Button>
			</div>
		</div>
	);
}

export default Login;
