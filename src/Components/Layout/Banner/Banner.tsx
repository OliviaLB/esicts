import { useLocation } from 'react-router-dom';
import classes from './Banner.module.css';
import { Box, Button, Typography } from '@mui/material';

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
			sx={{
				backgroundSize: 'cover',
				display: 'flex',
				minHeight: '400px', // Set minHeight instead of fixed height
				backgroundImage: `url('/Images/${imageName()}')`,
			}}
		>
			<Box
				sx={{
					background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    no-repeat center center`,
					flexBasis: 0,
					flexGrow: 1,
					width: '100%',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					flexDirection: 'column',
					padding: '3rem 1.5rem',
					gap: '10px',
				}}
			>
				<Typography
					variant="h1"
					sx={{ width: '70%' }}
				>
					Specialist in injury prevention, management & recovery
				</Typography>
				<Typography variant="h2">
					Offering a wide range of musculoskeletal (MSK) services in Gloucester.
				</Typography>
				<Typography variant="h2">
					If you are seeking high quality, professional and reliable care to guide you through your
					rehabilitation process, please contact us.
				</Typography>

				<Button
					variant="contained"
					color="secondary"
					sx={{
						fontSize: '1.2rem', // Increase font size
						padding: '12px 24px', // Increase padding for larger button size
						boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
					}}
				>
					Contact Us
				</Button>
			</Box>
		</Box>
	);
};

export default Banner;
