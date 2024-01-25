import { NavLink, useMatch, useResolvedPath } from "react-router-dom";
import "./newnav.css";
export default function NewNavBar() {
  return (
    <nav className="nav">
      <NavLink to="/" className="page-title">
        Zhero Front-End Development
      </NavLink>
      <ul>
        <CustomLink to="/about-us">About Us</CustomLink>
        <li>
          <NavLink to="/caroussel">Roadmap</NavLink>
        </li>
        <li>
          <NavLink to="/cardcontainer">Learning Resources</NavLink>
        </li>
        <li>
          <NavLink to="/rubberduck">Rubber Duck Tales</NavLink>
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
