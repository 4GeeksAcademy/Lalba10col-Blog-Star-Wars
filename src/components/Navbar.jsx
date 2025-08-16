import { Link } from "react-router-dom";
import logo from "/workspaces/Lalba10col-Blog-Star-Wars/src/assets/Star_Wars-Logo.wine.png";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container d-flex justify-content-between align-items-center">
				<Link to="/" className="me-auto">
					<img 
						src={logo} 
						alt="Star Wars Logo" 
						width="120" 
						className="d-inline-block align-top"
					/>
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn btn-primary">Favorites</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};