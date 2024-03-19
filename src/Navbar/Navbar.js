import { Link, Route } from "react-router-dom";
import Home from "../Websites/Home"
import About from "../Websites/About"
import Community from "../Websites/Community"
import Streams from "../Websites/Streams"

let Navbar = () => {
  return (
    <nav className="Navbar navbar-dark bg-dark">
      <a href="#" className="navbar-brand">
        Notu Gaming Channel
      </a>
      <div className="ml-auto">
        <ul className="navbar-nav">
          <li>
            <Link className="nav-link " to={Home}>
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-link" to={About}>
              About
            </Link>
          </li>
          <li>
            <Link className="nav-link" to={Streams}>
              Streams
            </Link>
          </li>
          <li>
            <Link className="nav-link" to={Community}>
              Community
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
