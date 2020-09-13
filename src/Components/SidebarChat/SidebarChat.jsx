import "./SidebarChat.css";
import React, { useEffect, useState } from "react";
import { Avatar } from "@material-ui/core";
import db from "./../../Firebase/firebaseSetup";
import { Link } from "react-router-dom";

function SidebarChat({ addNewChat, name, id }) {
	// const addNewChat = true;
	const [seed, setSeed] = useState("");

	const [messages, setMessages] = useState("");

	useEffect(() => {
		setSeed(Math.floor(Math.random() * 5000));
		return () => {};
	}, []);

	useEffect(() => {
		if (id) {
			db.collection("rooms")
				.doc(id)
				.collection("messages")
				.orderBy("timestamp", "desc")
				.onSnapshot((snapshot) =>
					setMessages(snapshot.docs.map((doc) => doc.data()))
				);
		}
		return () => {};
	}, [id]);

	const createChat = (props) => {
		const roomName = prompt("please enter name for chat");

		if (roomName) {
			//? add new document object into the rooms database
			db.collection("rooms").add({ name: roomName });
		}
	};

	return !addNewChat ? (
		<Link to={`/rooms/${id}`}>
			<div className="sidebarChat">
				<Avatar
					src={`https://avatars.dicebear.com/api/human/${seed}.svg`}
				></Avatar>
				<div className="sidebarChat__info">
					<h2>{name || "placeholderRoomName"}</h2>
					<p>{messages[0]?.message}</p>
				</div>
			</div>
		</Link>
	) : (
		<div className="sidebarChat" onClick={() => createChat()}>
			<h2>Add new chat</h2>
		</div>
	);
}

export default SidebarChat;
