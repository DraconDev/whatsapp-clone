import React from "react";
import "./Sidebar.css";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import SidebarChat from "./../SidebarChat/SidebarChat";

const Sidebar = (props) => {
	return (
		<div className="sidebar">
			<div className="sidebar__header">
				<Avatar></Avatar>
				<div className="sidebar__headerRight">
					<IconButton aria-label="" onClick={{}}>
						<DonutLargeIcon></DonutLargeIcon>
					</IconButton>
					<IconButton aria-label="" onClick={{}}>
						<ChatIcon></ChatIcon>
					</IconButton>
					<IconButton aria-label="" onClick={{}}>
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
				<SidebarChat></SidebarChat>
				<SidebarChat></SidebarChat>
				<SidebarChat></SidebarChat>
			</div>
		</div>
	);
};

export default Sidebar;
