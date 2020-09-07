import React from "react";
import "./Home.css";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
import Search from "./Search";

const Home = () => {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__headerLeft">
          <Link to="/about">about</Link>
          <Link to="/store">Store</Link>
        </div>
        <div className="home__headerRight">
          <Link to="/gmail">Gmail</Link>
          <Link to="/images">Images</Link>
          <AppsIcon />
          <Avatar />
        </div>
      </div>

      <div className="home__body">
          <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="google"/>

          <div className="home__inputContainer">
            <Search />
          </div>
      </div>
    </div>
  );
};

export default Home;
