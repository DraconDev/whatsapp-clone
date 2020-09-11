import "./SidebarChat.css";
import React, { useEffect, useState } from "react";
import { Avatar } from "@material-ui/core";

function SidebarChat({ addNewChat }) {
	// const addNewChat = true;
	const [seed, setSeed] = useState("");

	useEffect(() => {
		setSeed(Math.floor(Math.random() * 5000));
		return () => {};
	}, []);

	const createChat = (props) => {
		const roomName = prompt("please enter name for chat");

		if (roomName) {
		}
	};

	return !addNewChat ? (
		<div className="sidebarChat">
			<Avatar
				src={`https://avatars.dicebear.com/api/human/${seed}.svg`}
			></Avatar>
			<div className="sidebarChat__info">
				<h2>Room Name</h2>
				<p>Last Message</p>
			</div>
		</div>
	) : (
		<div className="sidebarChat" onClick={createChat}>
			<h2>Add new chat</h2>
		</div>
	);
}

export default SidebarChat;
