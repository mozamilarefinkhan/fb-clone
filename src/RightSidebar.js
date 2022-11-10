import React from "react";
import "./css/right.css";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Avatar } from "@mui/material";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VideocamIcon from '@mui/icons-material/Videocam';
import SearchIcon from '@mui/icons-material/Search';

function RightSidebar() {
  return (
    <div className="widget">
        <div className="widget__header">
            <div className="widget__headerLeft">
                <h4>Your Pages</h4>
            </div>
            <MoreHorizIcon />
        </div>

        <div className="widget__body">
            <div className="widget__bodyOptions">
                <Avatar src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/zfvkuf2k98lacoqpqdiw" />
                <h4>Newton School</h4>
            </div>

            <div className="widget__bodyOptions ml10">
                <NotificationsNoneIcon />
                <p>1 Notification</p>
            </div>

            <div className="widget__bodyOptions ml10">
                <VolumeUpIcon />
                <p>Create Promotions</p>
            </div>
        </div>

        <hr /><br />

        <div className="widget__header">
            <div className="widget__headerLeft">
                <h4>Contact</h4>
            </div>
            <div className="widget__headerRight">
                <VideocamIcon />
                <SearchIcon />
                <MoreHorizIcon />
            </div>
        </div>

        <div className="widget__body">
            <div className="widget__bodyOptions">
                <Avatar src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/zfvkuf2k98lacoqpqdiw" />
                <h4>Newton School</h4>
            </div>
        </div>

        <div className="widget__body">
            <div className="widget__bodyOptions">
                <Avatar src="https://avatars.githubusercontent.com/u/101820486?v=4" />
                <h4>Mozamil Arefin Khan</h4>
            </div>
        </div>

        <div className="widget__body">
            <div className="widget__bodyOptions">
                <Avatar src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/zfvkuf2k98lacoqpqdiw" />
                <h4>Ashique Iqbal</h4>
            </div>
        </div>

        <div className="widget__body">
            <div className="widget__bodyOptions">
                <Avatar src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/zfvkuf2k98lacoqpqdiw" />
                <h4>Brijesh Chandra Tripathi</h4>
            </div>
        </div>

        <div className="widget__body">
            <div className="widget__bodyOptions">
                <Avatar src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/zfvkuf2k98lacoqpqdiw" />
                <h4>Mohammad Imteaz</h4>
            </div>
        </div>

        <div className="widget__body">
            <div className="widget__bodyOptions">
                <Avatar src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/zfvkuf2k98lacoqpqdiw" />
                <h4>Priyanka Kumari</h4>
            </div>
        </div>
    </div>
  );
}

export default RightSidebar;