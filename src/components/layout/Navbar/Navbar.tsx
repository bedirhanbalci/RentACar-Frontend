import { Link } from "react-router-dom";
import "./Navbar.css";
import LoginCard from "../LoginCard/LoginCard";
import { useSelector } from "react-redux";
import DropdownCard from "../DropdownCard/DropdownCard";

type Props = {};

function Navbar({}: Props) {
  const authState = useSelector((store: any) => store.auth);

  return (
    <div className="nav-red z-3 p-3 px-5">
      <Link className="text-decoration-none ms-5" to={"/"}>
        <div className="nav-logo ms-5">2B2</div>
      </Link>
      <ul className="nav-menu">
        <div className="d-flex flex-row gap-5">
          <Link className="text-decoration-none" to={"/"}>
            <li>Home</li>
          </Link>
          <Link className="text-decoration-none" to={"/car-list"}>
            <li>Cars</li>
          </Link>
          <Link className="text-decoration-none" to={"/branches"}>
            <li>Branches</li>
          </Link>
          <Link className="text-decoration-none" to={"/about"}>
            <li>About</li>
          </Link>
          <Link className="text-decoration-none" to={"/contact"}>
            <li>Contact</li>
          </Link>
        </div>
        <div className="d-flex justify-content-center align-items-center pb-3">
          {authState && authState.id === 0 ? <LoginCard /> : <DropdownCard />}
        </div>
      </ul>
    </div>
  );
}

export default Navbar;
