import { NavLink, useNavigate } from 'react-router-dom';
import classes from './Nav.module.css';
import { FaBars } from 'react-icons/fa';
import React, { useState } from 'react';
import { getUserIsLoggedIn, Signout } from '../../../lib/Authentication';

const Nav = () => {
	const [isNavExpanded, setIsNavExpanded] = useState(false);
	const [prevState, setNewState] = useState(false);
	const contentClassname = isNavExpanded ? `${classes['']}` : classes.collapsible;
	const history = useNavigate();

	const LogUserOut = (event: React.MouseEvent<HTMLElement>) => {
		Signout();
		setNewState(!prevState);
		history('/home');
	};

	return (
		<div className={classes.parent}>
			<nav className={classes.nav}>
				<div
					className={classes.logo}
					data-aos="zoom-in"
				>
					Em Stuart Injuries Clinic
				</div>

				<button
					className={`${classes.navbutton}`}
					onClick={() => {
						setIsNavExpanded(!isNavExpanded);
					}}
				>
					<FaBars className={classes.toggler} />
				</button>

				<ul className={`${contentClassname}`}>
					<li>
						<NavLink to="/home">Home</NavLink>
					</li>
					<li>
						<NavLink to="/about">About Us</NavLink>
					</li>
					<li>
						<NavLink to="/services">Services</NavLink>
					</li>

					<li>
						<NavLink to="/blogs">Blog</NavLink>
					</li>
					<li>
						<NavLink to="/contact">Contact Us</NavLink>
					</li>
					{!getUserIsLoggedIn() && (
						<li>
							<NavLink to="/admin">Login</NavLink>
						</li>
					)}
					{getUserIsLoggedIn() && (
						<>
							<li>
								<NavLink to="/new-blog">Write a Blog</NavLink>
							</li>
							<li>
								<button
									onClick={LogUserOut}
									className={classes.button}
								>
									Sign Out
								</button>
							</li>
						</>
					)}
				</ul>
			</nav>
		</div>
	);
};

export default Nav;
