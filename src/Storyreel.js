import { Avatar } from "@mui/material";
import React from "react";
import "./css/story.css";

function Storyreel() {
  return (
    <div className="storyReel">
        <div className="story" style={{backgroundImage:`url('https://scontent.fbbi1-1.fna.fbcdn.net/v/t1.18169-9/14523011_1061671817285876_1956189793147618097_n.jpg?stp=c106.0.640.640a_dst-jpg_s851x315&_nc_cat=103&ccb=1-7&_nc_sid=da31f3&_nc_ohc=Dl8j2KymXuUAX93Y_pE&tn=iZBRKt7rsSx1n3V2&_nc_ht=scontent.fbbi1-1.fna&oh=00_AT-OrdUFkZPm-up6wKTys0qrIdt9_aP1JdQfu_vqK03XpA&oe=637EBDD4')`}}>
            <Avatar src="https://avatars.githubusercontent.com/u/101820486?v=4" alt="" />
            <h4>Mozamil Arefin Khan</h4>
        </div>

        <div className="story" style={{backgroundImage:`url('https://startupsuccessstories.in/wp-content/uploads/2021/01/L-to-R-Nishant-Chandra-and-Siddharth-Maheshwari-Co-Founders-Newton-School-560x420.jpeg')`}}>
            <Avatar src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/zfvkuf2k98lacoqpqdiw" alt="" />
            <h4>Newton School Founders</h4>
        </div>

        <div className="story" style={{backgroundImage:`url('https://global-uploads.webflow.com/62e8d2ea218fb7676b6892a6/62fe46bcba56f1a5e04fd3eb_TeamPhoto_Newton%20School2.jpg')`}}>
            <Avatar src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/zfvkuf2k98lacoqpqdiw" alt="" />
            <h4>Here to revolutionise tech education in India</h4>
        </div>

        <div className="story" style={{backgroundImage:`url('https://external.fbbi1-1.fna.fbcdn.net/emg1/v/t13/13742183956472455400?url=https%3A%2F%2Fd3dyfaf3iutrxo.cloudfront.net%2Fimage%2Fcourse_user_mapping%2Fshare_image%2Fbfb1dd6bd25a4478b0062ed483ec9bd8.png&fb_obo=1&utld=cloudfront.net&stp=c0.5000x0.5000f_dst-jpg_flffffff_p500x261_q75&ccb=13-1&oh=06_AbHw9TK-3r3GbhGQlPrE9d2oh3XzXuG5u-YqbdSeOrxmtg&oe=635B2B14&_nc_sid=a089b9')`}}>
            <Avatar src="https://avatars.githubusercontent.com/u/101820486?v=4" alt="" />
            <h4>Newton's coding challenge july 2022</h4>
        </div>

        <div className="story" style={{backgroundImage:`url('https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/211283050/original/4aba2acf3c3ada6fe2e3eecab70d5b90452cca35/fix-bugs-in-react-js-or-mern-stack-application.png')`}}>
            <Avatar src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/zfvkuf2k98lacoqpqdiw" alt="" />
            <h4>Available Courses in Newton School</h4>
        </div>
    </div>
  );
}

export default Storyreel; 