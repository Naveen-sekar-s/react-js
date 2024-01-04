let Navbar = () => {
  return (
    <nav className="Navbar navbar-dark bg-dark">
      <a href="#" className="navbar-brand">
        Notu Gaming Channel
      </a>
      <div className="ml-auto">
        <ul className="navbar-nav">
          <li>
            <a className="nav-link " href="#">
              Home
            </a>
          </li>
          <li>
            <a className="nav-link" href="#">
              About
            </a>
          </li>
          <li>
            <a className="nav-link" href="#">
              Streams
            </a>
          </li>
          <li>
            <a className="nav-link" href="#">
              Community
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
