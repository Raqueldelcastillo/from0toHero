// import React from "react";
// import {
//   Collapse,
//   Navbar,
//   NavbarToggler,
//   NavbarBrand,
//   Nav,
//   NavItem,
//   NavLink,
// } from "reactstrap";

// export default class TopNav extends React.Component {
//   constructor(props) {
//     super(props);

//     this.toggle = this.toggle.bind(this);
//     this.state = {
//       isOpen: false,
//     };
//   }
//   toggle() {
//     this.setState({
//       isOpen: !this.state.isOpen,
//     });
//   }
//   render() {
//     return (
//       <div>
//         <Navbar color="faded" light toggleable>
//           <NavbarToggler right onClick={this.toggle} />
//           <NavbarBrand href="/">Navigate</NavbarBrand>
//           <Collapse isOpen={this.state.isOpen} navbar>
//             <Nav className="ml-auto" navbar>
//               <NavItem>
//                 <NavLink href="/components/">About Us</NavLink>
//               </NavItem>
//               <NavItem>
//                 <NavLink href="https://github.com/reactstrap/reactstrap">
//                   Road Map
//                 </NavLink>
//               </NavItem>
//               <NavItem>
//                 <NavLink href="https://github.com/reactstrap/reactstrap">
//                   Resourses
//                 </NavLink>
//               </NavItem>
//             </Nav>
//           </Collapse>
//         </Navbar>
//       </div>
//     );
//   }
// }

import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

function Example(props) {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="me-auto">
          Navigate
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="me-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/components/">About Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://raqueldelcastillo.github.io/beanOpedia/">
                GitHub
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Resources</NavLink> 
              
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;
