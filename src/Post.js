import React from "react";
import "./css/post.css";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Avatar } from "@mui/material";
import PublicIcon from '@mui/icons-material/Public';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';

function Post({photoURL, image, username, timestamp, message}) {
  return (
    <div className="post">
        <div className="post__top">
            <div className="post__topLeft">
                <Avatar src={photoURL} />
                <div className="postInfo">
                    <h4>{username}</h4>
                    <p>{timestamp} <PublicIcon /></p>
                </div>
            </div>
            <MoreHorizIcon />
        </div>

        <div className="post__middle">
            <p>
                {message}
            </p>
            {image && <img src={image} />}
            
        </div>
        <div className="post__bottom">
            <div className="post__bottomOptions">
                <ThumbUpIcon /> <p>Like</p>
            </div>

            <div className="post__bottomOptions">
                <ChatBubbleOutlineIcon /> <p>Comment</p>
            </div>

            <div className="post__bottomOptions">
                <ShareIcon /> <p>Share</p>
            </div>
        </div>
    </div>
  );
}

export default Post;