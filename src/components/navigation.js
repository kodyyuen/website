import { Navbar, Nav } from "react-bootstrap";

const Navigation = () => {
  return (
    <>
      <Navbar fixed="top" variant="dark" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      
      {/* //   <nav className="navbar navbar-expand d-none d-md-block navbar-light bg-light mb-2">
        //     <div className="container-fluid">
        //       <a className="navbar-brand">GetRecs</a>
        //       <div className="collapse navbar-collapse" id="navbarSupportedContent">
        //         <ul className="navbar-nav me-auto mb-lg-0">
        //           <li className="nav-item">
        //             <Link to="/"
        //               className={`nav-link ${parts[1] === '' ? 'active text-primary' : ''}`}>
        //               Home
        //             </Link>
        //           </li>
        //           <li className="nav-item">
        //             <Link to="/search"
        //               className={`nav-link ${parts[1] === 'search' ? 'active text-primary' : ''}`}>
        //               Search
        //             </Link>
        //           </li>
        //           <li className={`nav-item ${currentUser ? 'd-none' : ''}`}>
        //             <Link to="/login"
        //               className={`nav-link ${parts[1] === 'login' ? 'active text-primary' : ''}`}>
        //               Login
        //             </Link>
        //           </li>
        //           <li className={`nav-item ${currentUser ? 'd-none' : ''}`}>
        //             <Link to="/register"
        //               className={`nav-link ${parts[1] === 'register' ? 'active text-primary' : ''}`}>
        //               Register
        //             </Link>
        //           </li>
        //           {
        //             currentUser &&
        //             <li className="nav-item">
        //               <Link to={`/profile/${currentUser._id}`}
        //                 className={`nav-link ${parts[1] === 'profile'
        //                   && parts.length == 3
        //                   && parts[2] === currentUser._id ? 'active text-primary' : ''}`}>
        //                 Profile
        //               </Link>
        //             </li>
        //           }
        //           {
        //             currentUser &&
        //             <li className={`nav-item ${currentUser.role !== "ADMIN" ? 'd-none' : ''}`}>
        //               <Link to="/users"
        //                 className={`nav-link ${parts[1] === 'users' ? 'active text-primary' : ''}`}>
        //                 Users
        //               </Link>
        //             </li>
        //           }
    
        //         </ul>
        //         {
        //           currentUser &&
        //           <li className="d-flex">
        //             Logged in as
        //             <Link to="/profile" className="text-dark ms-1">
        //               {currentUser.name.length > 0 ? currentUser.name : currentUser.username}
        //             </Link>
        //           </li>
        //         }
        //       </div>
        //     </div>
        //   </nav> */}
    </>
  );
};

export default Navigation;
