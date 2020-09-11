import React, { useState, useEffect } from "react";
import "./Chat.scss";
import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";

function Chat({ message }) {
	const [seed, setSeed] = useState("");

	useEffect(() => {
		setSeed(Math.floor(Math.random() * 5000));
		return () => {};
	}, []);

	return (
		<div className="chat">
			<div className="chat__header">
				<Avatar
					src={`https://avatars.dicebear.com/api/human/${seed}.svg`}
				></Avatar>
				<div className="chat__headerInfo">
					<h3>Room name</h3>
					<p>Last seen at ...</p>
				</div>

				<div className="chat__headerRight">
					<IconButton aria-label="" onClick={{}}>
						<SearchIcon></SearchIcon>
					</IconButton>
					<IconButton aria-label="" onClick={{}}>
						<AttachFileIcon></AttachFileIcon>
					</IconButton>
					<IconButton aria-label="" onClick={{}}>
						<MoreVertIcon></MoreVertIcon>
					</IconButton>
				</div>
			</div>
			<div className="chat__body">
				{/* //todo add true condition */}
				<p className={`chat__message ${true && "chat__receiver"}`}>
					<span className="chat__name">
						{message?.name ? message.name : "Placeholder"}
					</span>
					Hey guys{" "}
				</p>
			</div>
			<div className="chat__footer">
				<InsertEmoticonIcon></InsertEmoticonIcon>
				<form action="">
					<input type="text" />
					<button>Send a message</button>
				</form>
				<MicIcon></MicIcon>
			</div>
		</div>
	);
}

export default Chat;
