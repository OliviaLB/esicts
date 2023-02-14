import classes from './WWD.module.css';
import braceimg from '../../Assets/Images/Brace.jpeg';
import bandimg from '../../Assets/Images/Band.jpeg';
import rximg from '../../Assets/Images/Back.jpeg';
import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

const WWD = () => {
	return (
		<Fragment>
			<h2>Are you injured or in pain?</h2>

			<div className={classes['flex-container']}>
				<NavLink to="/about">
					<figure className={`${classes.snip1401} ${classes['flex-item']}`}>
						<img
							src={rximg}
							alt="sample67"
						/>
						<figcaption>
							<h3>About Us</h3>
						</figcaption>
						<i className="ion-ios-bell-outline"></i>
					</figure>
				</NavLink>

				<NavLink to="/services">
					<figure className={`${classes.snip1401} ${classes['flex-item']}`}>
						<img
							src={braceimg}
							alt="sample93"
						/>
						<figcaption>
							<h3>Conditions Treated</h3>
						</figcaption>
						<i className="ion-ios-medkit-outline"></i>
					</figure>
				</NavLink>

				<NavLink to="/blogs">
					<figure className={`${classes.snip1401} ${classes['flex-item']}`}>
						<img
							src={bandimg}
							alt="sample87"
						/>
						<figcaption>
							<h3>Patient Education</h3>
						</figcaption>
						<i className="ion-ios-book-outline"></i>
					</figure>
				</NavLink>
			</div>
		</Fragment>
	);
};

export default WWD;
