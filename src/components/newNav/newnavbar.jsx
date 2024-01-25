import { NavLink, useMatch, useResolvedPath } from "react-router-dom";

export default function NewNavBar() {
  return (
    <nav className="nav">
      <NavLink to="/" className="page-title">
        Zhero Front-End Development
      </NavLink>
      <ul>
        <CustomLink to="/about-us">About Us</CustomLink>
        <li>
          <NavLink to="/previous-projects">Previous projects</NavLink>
        </li>
        <li>
          <NavLink to="/career">Career Paths</NavLink>
        </li>
        <li>
          <NavLink to="/rubberduck">Rubber Duck Stories</NavLink>
        </li>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const unResolvedPath = useResolvedPath(to); // Fix the typo here
  const isActive = useMatch({ path: unResolvedPath.pathname, end: true });
  const path = window.location.pathname;
  return (
    <li className={path === to ? "active" : ""}>
      <NavLink to={to} {...props}>
        {children}
      </NavLink>
    </li>
  );
}
