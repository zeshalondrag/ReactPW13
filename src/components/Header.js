import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Header = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="Navbar_navbar">
      <div className="wrapper Navbar_content">
        <div className="Navbar_left">
          <Link to="/" className="Navbar_logo">
            <motion.div className="PoizonImage" whileHover={{ scale: 1.2, rotate: 5 }}>
              <img className="PoizonImage_img" src="https://cdn-img.poizon.com/node-common/536c2b32-84ed-5235-54c8-d7ddb87f2bdb-294-96.png?x-oss-process=image/format,webp/resize,w_200" alt="poizonapp" />
            </motion.div>
          </Link>
          <div className="Navbar_navMain">
            <Link className="Navbar_navItem" to="/">Home</Link>
            <Link className="Navbar_navItem" to="/catalog">Categories</Link>
            <Link className="Navbar_navItem">About us</Link>
            <a className="Navbar_navItem" href="#support">Support</a>
          </div>
        </div>
        <div className="Navbar_right">
          <div className="search-container">
            <span className="search-icon">
              <img className="PoizonImage_img" src="https://cdn-img.poizon.com/node-common/735b3e9e-33c1-5b37-8ad4-659f6a9a8058.svg" alt="search icon" />
            </span>
            <input
              className="input-search"
              maxLength={800}
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck="false"
              placeholder="Search for brand, item, etc."
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <Link to="/basket">
              <img className="icon" src="images/basket.png" alt="basket icon" />
            </Link>
            <Link to="/favourites">
              <img className="icon" src="https://cdn-img.poizon.com/node-common/09f65f67-3720-b990-aca8-045fbc5064ed.svg" alt="user icon" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;