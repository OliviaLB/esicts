import './Banner.css';
import { Box, Button, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';

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
		<Box
			component="div"
			className="banner-wrapper"
			sx={{
				backgroundImage: `url('/Images/${imageName()}')`,
			}}
		>
			<Box className="banner-inner">
				<Typography
					variant="h1"
					className="banner-header"
				>
					Specialist in injury prevention, management & recovery
				</Typography>
				<Typography variant="h2" className="banner-text">
					Offering a wide range of musculoskeletal (MSK) services in Gloucester.
				</Typography>
				<Typography variant="h2" className="banner-text">
					If you are seeking high quality, professional and reliable care to guide you through your
					rehabilitation process, please contact us.
				</Typography>

				<Button
					variant="contained"
					color="secondary"
					className="banner-button"
					sx={{fontSize: '1.5rem'}}
				>
					Contact Us
				</Button>
			</Box>
		</Box>
	);
};

export default Banner;
