import React from "react";

const Navbar = () => {
    return (
      <nav className="navbar navbar-dark bg-dark">
			<a className="navbar-brand" href="#">Start Bootstrap</a>
			<div>
				<a className="text-white px-2" href="#">Home</a>
				<a className="text-white px-2" href="#">About</a>
				<a className="text-white px-2" href="#">Services</a>
				<a className="text-white px-2" href="#">Contact</a>
			</div>
		</nav>
    );
  }
  
  export default Navbar;