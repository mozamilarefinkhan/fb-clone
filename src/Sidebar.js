import React from "react";
import Sidebaroptions from "./Sidebaroptions";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "./css/sidebar.css";
import { useStateValue } from "./StateProvider";

function Sidebar() {

  const [{user}, dispatch] = useStateValue();
  return (
    <div className="sidebar">
        <Sidebaroptions src={user.photoURL} title={user.displayName} />
        <Sidebaroptions src="https://www.facebook.com/rsrc.php/v3/yR/r/tInzwsw2pVX.png" alt="" title="Covid 19 Information Center" />
        <Sidebaroptions src="https://www.facebook.com/rsrc.php/v3/yx/r/-XF4FQcre_i.png" alt="" title="Friends" />
        <Sidebaroptions src="https://www.facebook.com/rsrc.php/v3/yD/r/mk4dH3FK0jT.png" alt="" title="Groups" />
        <Sidebaroptions src="https://www.facebook.com/rsrc.php/v3/yG/r/A1HlI2LVo58.png" alt="" title="Watch" />
        <Sidebaroptions src="https://static.xx.fbcdn.net/rsrc.php/v3/yO/r/XXwl2m1vjqM.png" alt="" title="Events" />
        <Sidebaroptions Icon={ExpandMoreIcon} title="See More" />
    </div>
  );
}

export default Sidebar;