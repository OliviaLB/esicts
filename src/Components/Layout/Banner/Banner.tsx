import { useLocation } from 'react-router-dom';
import classes from './Banner.module.css';
import { Button } from '../../UI/Button';

const Banner = () => {
	const location = useLocation();

	const imageName = () => {
		if (location.pathname.includes('/welcome')) return 'home.jpeg';
		else if (location.pathname.includes('/home')) return 'home.jpeg';
		else if (location.pathname.includes('/about')) return 'Clinic.jpg';
		else if (location.pathname.includes('/services')) return 'examination.jpeg';
		else if (location.pathname.includes('/conditions')) return 'back.jpeg';
		else if (location.pathname.includes('/blog')) return 'blog.jpeg';
		else if (location.pathname.includes('/contact')) return 'medical.jpeg';

		return 'back.jpeg';
	};

	return (
		<div
			className={classes.banner}
			style={{
				backgroundImage: `url('/Images/${imageName()}')`,
			}}
		>
			<div className={classes.container}>
				<div className={classes.content}>
					<h1>
						Specialist in injury <br />
						prevention, management & recovery
					</h1>
					<p>Offering a wide range of musculoskeletal (MSK) services in Gloucester.</p>
					<p>
						If you are seeking high quality, professional and reliable care to guide you through
						your rehabilitation process, please contact us.
					</p>

					<Button text="Contact Us" />
				</div>
			</div>
		</div>
	);
};

export default Banner;
