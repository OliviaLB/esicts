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
							alt="A person receiving treatment for their shoulder."
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
							alt="A patient being guided on how to walk with crutches"
						/>
						<figcaption>
							<h3>Our Services</h3>
						</figcaption>
						<i className="ion-ios-medkit-outline"></i>
					</figure>
				</NavLink>

				<NavLink to="/blogs">
					<figure className={`${classes.snip1401} ${classes['flex-item']}`}>
						<img
							src={bandimg}
							alt="A patient being taught how to perform an arm exercise with a band."
						/>
						<figcaption>
							<h3>Education</h3>
						</figcaption>
						<i className="ion-ios-book-outline"></i>
					</figure>
				</NavLink>
			</div>
		</Fragment>
	);
};

export default WWD;
