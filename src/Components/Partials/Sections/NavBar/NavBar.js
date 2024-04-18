import { Link, useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { logout, reset } from '../../../../Redux/Features/Auth/authSlice';
import {
  IoCaretDownOutline,
  IoCaretUpOutline,
  IoPowerSharp,
} from "react-icons/io5";
import { BsPerson } from "react-icons/bs";

import "./NavBar.css";

import Logo from "../../Elements/Logo/Logo";
import Image from "../../Elements/Image/Image";
import { useContext, useState } from "react";
import AppContext from "../../../../Context/AppContext";
import AuthContext from "../../../../Context/AuthContext";

function NavBar() {
  const { restaurant } = useContext(AppContext);

  const restaurantName = restaurant?.name;
  // const dispatch = useDispatch()
  const navigate = useNavigate();
  // const { employee } = useSelector((state) => state.auth);
  const { logout, employee } = useContext(AuthContext);

  function handleLogout() {
    logout()
    // reset()
    navigate('/login')
  }

  //employee dropdown toggle
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <nav>
      <div className="nav_container">
        <div id="brand">
          <Link to={"/"}>
            <Logo />
          </Link>
        </div>

        {employee && (
          <div className="nav_user_wrapper">
            <div className="user_wrapper">
              <Image imgLink={employee.dp} imgAlt="employee-img" />
            </div>
            <div className="user_details">
              <h3>{employee.name}</h3>
              <p>
                {employee.level +
                  (employee.level === "restaurantManager"
                    ? ", " + restaurantName
                    : "")}
              </p>
            </div>
            <button className="user_profile_btn" onClick={handleToggle}>
              {isOpen ? <IoCaretUpOutline /> : <IoCaretDownOutline />}
            </button>
            <div className={`user_dropdown ${isOpen ? "show" : ""}`}>
              <div className="dropdown_inner">
                <Link to="/profile">
                  profile
                  <BsPerson />
                </Link>
                <button onClick={handleLogout}>
                  logout
                  <IoPowerSharp />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
