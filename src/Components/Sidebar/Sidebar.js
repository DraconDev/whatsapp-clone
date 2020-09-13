import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import SidebarChat from "./../SidebarChat/SidebarChat";
import db from "./../../Firebase/firebaseSetup";
import { useStateValue } from "../../State/StateProvider";

const Sidebar = (props) => {
	const [{ user }, dispatch] = useStateValue();
	const [rooms, setRooms] = useState([]);
	useEffect(() => {
		//? fetch collection and documents
		const unsubscribe = db.collection("rooms").onSnapshot((snapshot) =>
			setRooms(
				snapshot.docs.map((doc) => ({
					id: doc.id,
					data: doc.data(),
				}))
			)
		);
		return () => {
			// cleanup;
			unsubscribe();
		};
	}, []);
	// console.log("rooms", rooms);
	// console.log('user', user)
	return (
		<div className="sidebar">
			<div className="sidebar__header">
				<Avatar src={user?.photoURL}></Avatar>
				<div className="sidebar__headerRight">
					<IconButton aria-label="">
						<DonutLargeIcon></DonutLargeIcon>
					</IconButton>
					<IconButton aria-label="">
						<ChatIcon></ChatIcon>
					</IconButton>
					<IconButton aria-label="">
						<MoreVertIcon></MoreVertIcon>
					</IconButton>
				</div>
			</div>

			<div className="sidebar__search">
				<div className="sidebar__searchContainer">
					<SearchIcon></SearchIcon>
					<input type="text" placeholder="Search or start a new chat" />
				</div>
			</div>
			<div className="sidebar__chats">
				<SidebarChat addNewChat></SidebarChat>
				{rooms.map((room) => (
					<SidebarChat
						key={room.id}
						id={room.id}
						name={room.data.name}
					></SidebarChat>
				))}
			</div>
		</div>
	);
};

export default Sidebar;
