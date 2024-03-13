import { Link } from "react-router-dom";

import "./Header.scss";
const Header = () => {
  return (
    <div className="home">
      <div className="nav">
        <div className="navbar container">
          <Link to={"/"}>
            <h4 className="navbar-items">Home</h4>
          </Link>
          <Link to={"/"}>
            <h4 className="navbar-items">Business</h4>
          </Link>
          <Link to={"/"}>
            <h4 className="navbar-items">Entertainment</h4>
          </Link>
          <Link to={"/"}>
            <h4 className="navbar-items">General</h4>
          </Link>
          <Link to={"/"}>
            <h4 className="navbar-items">Health</h4>
          </Link>
          <Link to={"/"}>
            <h4 className="navbar-items">Science</h4>
          </Link>
          <Link to={"/"}>
            <h4 className="navbar-items">Sports</h4>
          </Link>
          <Link to={"/"}>
            <h4 className="navbar-items">Technology</h4>
          </Link>
        </div>
      </div>
      <h2 className="container h2">Our Latest Posts</h2>
      <div className="cards container">
        <Link to={"/more"}>
          <div className="cards-item">
            <img
              src={
                "https://statikco.com/cdn/shop/files/02-SnapNCHargeGo_79569142-13d2-43a2-a685-0c92e4180fec_1800x.jpg?v=1700841664"
              }
              alt=""
            />
            <div className="category">Science</div>
            <div className="cards-item-title">
              <h5>
                Charge Two Devices at the Same Time With This Magnetic Wireless
                Charging Dock
              </h5>
              <p>Floyd Miles &nbsp;&nbsp;&nbsp;&nbsp; 3 Days Ago</p>
            </div>
          </div>
        </Link>
        <Link to={"/more"}>
          <div className="cards-item">
            <img
              src={
                "https://statikco.com/cdn/shop/files/02-SnapNCHargeGo_79569142-13d2-43a2-a685-0c92e4180fec_1800x.jpg?v=1700841664"
              }
              alt=""
            />
            <div className="category">Science</div>
            <div className="cards-item-title">
              <h5>
                Charge Two Devices at the Same Time With This Magnetic Wireless
                Charging Dock
              </h5>
              <p>Floyd Miles &nbsp;&nbsp;&nbsp;&nbsp; 3 Days Ago</p>
            </div>
          </div>
        </Link>
        <Link to={"/more"}>
          <div className="cards-item">
            <img
              src={
                "https://statikco.com/cdn/shop/files/02-SnapNCHargeGo_79569142-13d2-43a2-a685-0c92e4180fec_1800x.jpg?v=1700841664"
              }
              alt=""
            />
            <div className="category">Science</div>
            <div className="cards-item-title">
              <h5>
                Charge Two Devices at the Same Time With This Magnetic Wireless
                Charging Dock
              </h5>
              <p>Floyd Miles &nbsp;&nbsp;&nbsp;&nbsp; 3 Days Ago</p>
            </div>
          </div>
        </Link>
        <Link to={"/more"}>
          <div className="cards-item">
            <img
              src={
                "https://statikco.com/cdn/shop/files/02-SnapNCHargeGo_79569142-13d2-43a2-a685-0c92e4180fec_1800x.jpg?v=1700841664"
              }
              alt=""
            />
            <div className="category">Science</div>
            <div className="cards-item-title">
              <h5>
                Charge Two Devices at the Same Time With This Magnetic Wireless
                Charging Dock
              </h5>
              <p>Floyd Miles &nbsp;&nbsp;&nbsp;&nbsp; 3 Days Ago</p>
            </div>
          </div>
        </Link>
        <Link to={"/more"}>
          <div className="cards-item">
            <img
              src={
                "https://statikco.com/cdn/shop/files/02-SnapNCHargeGo_79569142-13d2-43a2-a685-0c92e4180fec_1800x.jpg?v=1700841664"
              }
              alt=""
            />
            <div className="category">Science</div>
            <div className="cards-item-title">
              <h5>
                Charge Two Devices at the Same Time With This Magnetic Wireless
                Charging Dock
              </h5>
              <p>Floyd Miles &nbsp;&nbsp;&nbsp;&nbsp; 3 Days Ago</p>
            </div>
          </div>
        </Link>
        <Link to={"/more"}>
          <div className="cards-item">
            <img
              src={
                "https://statikco.com/cdn/shop/files/02-SnapNCHargeGo_79569142-13d2-43a2-a685-0c92e4180fec_1800x.jpg?v=1700841664"
              }
              alt=""
            />
            <div className="category">Science</div>
            <div className="cards-item-title">
              <h5>
                Charge Two Devices at the Same Time With This Magnetic Wireless
                Charging Dock
              </h5>
              <p>Floyd Miles &nbsp;&nbsp;&nbsp;&nbsp; 3 Days Ago</p>
            </div>
          </div>
        </Link>
        <Link to={"/more"}>
          <div className="cards-item">
            <img
              src={
                "https://statikco.com/cdn/shop/files/02-SnapNCHargeGo_79569142-13d2-43a2-a685-0c92e4180fec_1800x.jpg?v=1700841664"
              }
              alt=""
            />
            <div className="category">Science</div>
            <div className="cards-item-title">
              <h5>
                Charge Two Devices at the Same Time With This Magnetic Wireless
                Charging Dock
              </h5>
              <p>Floyd Miles &nbsp;&nbsp;&nbsp;&nbsp; 3 Days Ago</p>
            </div>
          </div>
        </Link>
        <Link to={"/more"}>
          <div className="cards-item">
            <img
              src={
                "https://statikco.com/cdn/shop/files/02-SnapNCHargeGo_79569142-13d2-43a2-a685-0c92e4180fec_1800x.jpg?v=1700841664"
              }
              alt=""
            />
            <div className="category">Science</div>
            <div className="cards-item-title">
              <h5>
                Charge Two Devices at the Same Time With This Magnetic Wireless
                Charging Dock
              </h5>
              <p>Floyd Miles &nbsp;&nbsp;&nbsp;&nbsp; 3 Days Ago</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
