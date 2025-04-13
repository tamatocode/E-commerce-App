import "./Nav.css";
import { FaHeart } from "react-icons/fa";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import { TiShoppingCart } from "react-icons/ti";

const Nav = ({ query, handleInputChange }) => {
  return (
    <nav>
      <div className="nav-container">
        <input
          type="text"
          className="search-input"
          placeholder="Enter your search shoes"
          value={query}
          onChange={handleInputChange}
        />
      </div>
      <div className="profile-container">
        <a href="#">
          <FaHeart className="nav-icons" />
        </a>

        <a href="#">
          <TiShoppingCart className="nav-icons" />
        </a>
        <a href="#">
          <AiOutlineUserAdd className="nav-icons" />
        </a>

      </div>
    </nav>
  );
};

export default Nav;
