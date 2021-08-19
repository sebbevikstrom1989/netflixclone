import React, { useContext } from "react";
import "./topbar.css";
import { Settings } from "@material-ui/icons";
import { logout } from "../../contex/authContext/AuthActions";
import { AuthContext } from "../../contex/authContext/AuthContex";
import { useHistory } from "react-router-dom";

export default function Topbar() {
  const { dispatch } = useContext(AuthContext);
  const history = useHistory();
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    history.push("/login");
  };
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Netflix clone ADMIN</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img
            src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="topAvatar"
            onClick={handleLogout}
          />
        </div>
      </div>
    </div>
  );
}
