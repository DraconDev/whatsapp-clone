import React, { useState, useEffect } from "react";
import "./Chat.scss";
import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import { useParams } from "react-router-dom";
import db from "./../../Firebase/firebaseSetup";
import firebase from "firebase";
import { useStateValue } from "../../State/StateProvider";

function Chat({ message }) {
	const [{ user }, dispatch] = useStateValue("");
	const [input, setInput] = useState("");
	const [seed, setSeed] = useState("");
	const { roomId } = useParams();
	const [roomName, setRoomName] = useState("");
	const [messages, setMessages] = useState([]);
	const [lastSeen, setLastSeen] = useState("");

	useEffect(() => {
		if (roomId) {
			db.collection("rooms")
				.doc(roomId)
				.onSnapshot((snapshot) => setRoomName(snapshot.data().name));

			db.collection("rooms")
				.doc(roomId)
				.collection("messages")
				.orderBy("timestamp", "asc")
				.onSnapshot((snapshot) =>
					setMessages(snapshot.docs.map((doc) => doc.data()))
				);
		}
		// return () => {};
	}, [roomId]);

	useEffect(() => {
		setSeed(Math.floor(Math.random() * 5000));
		return () => {};
	}, [roomId]);

	useEffect(() => {
		// if (messages.length > 1) {
		// 	// console.log(
		// 	// 	//? get lat messages
		// 	// 	messages[messages.length - 1].timestamp,
		// 	// 	//? Convert timestamp to date
		// 	// 	new Date(
		// 	// 		messages[messages.length - 1].timestamp?.toDate()
		// 	// 	).toUTCString(),
		// 	// 	"message"
		// 	// );
		// 	setLastSeen(
		// 		new Date(
		// 			messages[messages.length - 1].timestamp?.toDate()
		// 		).toUTCString()
		// 	);
		// }
		// setLastSeen(
		// 	// new Date(
		// 	messages[messages.length - 1]
		// 	// .timestamp
		// 	// ?.toDate().toUTCString()				)
		// );
		// }
		return () => {
			// cleanup
		};
	}, [messages]);

	const sendMessage = (e) => {
		e.preventDefault();
		// console.log(e.target.value);
		// console.log(input);

		// console.log(
		// 	"object",
		// 	db.collection("rooms").doc(roomId).collection("messages")
		// );
		// console.log("input", input);

		db.collection("rooms").doc(roomId).collection("messages").add({
			message: input,
			name: user.displayName,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
		});
		setInput("");
	};
	// console.log(messages, "messages");
	return (
		<div className="chat">
			<div className="chat__header">
				<Avatar
					src={`https://avatars.dicebear.com/api/human/${seed}.svg`}
				></Avatar>
				<div className="chat__headerInfo">
					<h3>{roomName}</h3>

					<p> {lastSeen && lastSeen}</p>
				</div>

				<div className="chat__headerRight">
					<IconButton aria-label="">
						<SearchIcon></SearchIcon>
					</IconButton>
					<IconButton aria-label="">
						<AttachFileIcon></AttachFileIcon>
					</IconButton>
					<IconButton aria-label="">
						<MoreVertIcon></MoreVertIcon>
					</IconButton>
				</div>
			</div>
			<div className="chat__body">
				{/* //todo add true condition */}
				{messages.map((message) => (
					<p
						className={`chat__message ${
							message.name === user.displayName && "chat__receiver"
						}`}
					>
						<span className="chat__name">{message?.name}</span>
						{`${message.message} `}
						<span className="chat__timestamp">
							{new Date(message.timestamp?.toDate()).toUTCString()}
						</span>
					</p>
				))}
			</div>
			<div className="chat__footer">
				<InsertEmoticonIcon></InsertEmoticonIcon>
				<form action="">
					<input
						type="text"
						value={input}
						onChange={(e) => setInput(e.target.value)}
					/>
					<button onClick={(e) => sendMessage(e)} type="submit">
						Send a message
					</button>
				</form>
				<MicIcon></MicIcon>
			</div>
		</div>
	);
}

export default Chat;
