import classes from './Footer.module.css';

const Footer = () => {
	return (
		<footer>
			<div className={classes['grid-container']}>
				<div className={classes.grid__header}>
					<h3 className={classes.h3}>Em Stuart Injuries Clinic</h3>

					<a
						href="https://www.facebook.com/Emstuartinjuries/"
						target="_blank"
						rel="noreferrer"
					>
						<button className={classes.button}>
							<i
								className={`${classes.icon} ${classes['icon--primary']} fa-brands fa-facebook-f`}
							></i>
						</button>
					</a>

					<a
						href="https://api.whatsapp.com/send?phone=447964991445"
						target="_blank"
						rel="noreferrer"
					>
						<button className={classes.button}>
							<i
								className={`${classes.icon} ${classes['icon--primary']} fa-brands fa-whatsapp`}
							></i>
						</button>
					</a>
					<a
						href="https://www.google.com/search?q=em+stuart+injuries"
						target="_blank"
						rel="noreferrer"
					>
						<button className={classes.button}>
							<i className={`${classes.icon} ${classes['icon--primary']} fa-brands fa-google`}></i>
						</button>
					</a>
				</div>
				<div className="section1">
					<span className={classes.grid__heading}>Contact Us</span>
					<div className={classes.grid__content}>
						Office 9, Unit 2 <br />
						Morelands Trading Estate
						<br />
						Bristol Road
						<br />
						Gloucester <br />
						GL1 5RZ
					</div>
				</div>
				<div className="section2">
					<span className={classes.grid__heading}>Find Us</span>
					<div className="mapouter">
						<div className={classes.grid__content}>
							<iframe
								title="map"
								width="95%"
								height="80%"
								id="gmap_canvas"
								src="https://maps.google.com/maps?q=Em%20Stuart%20Injuries&t=&z=13&ie=UTF8&iwloc=&output=embed"
								frameBorder="0"
								scrolling="no"
							></iframe>
						</div>
					</div>
				</div>

				<div className="section3">
					<span className={classes.grid__heading}>Clinic Hours</span>
					<div className={classes.grid__content}>
						<b>Monday</b> Closed
						<br />
						<b>Tuesday</b> 07:30am - 15:30pm
						<br />
						<b>Wednesday</b> 11:30am - 19:30pm
						<br />
						<b>Thursday</b> 10:00am - 16:30pm
						<br />
						<b>Friday</b> 10:30 - 16:30pm
						<br />
						<b>Saturday:</b> 08:30am - 15:30pm
						<br />
						<b>Sunday:</b> Closed
					</div>
				</div>
				<div className={classes.grid__copyright}>
					© 2022 Copyright
					<br />
					Privacy Policy | Terms & Conditions | Cookie Policy
				</div>
			</div>
		</footer>
	);
};

export default Footer;
