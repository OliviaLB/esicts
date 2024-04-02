import './ServiceImages.css';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import bandimg from '../../Assets/Images/Band.jpeg';
import braceimg from '../../Assets/Images/Brace.jpeg';
import rximg from '../../Assets/Images/Back.jpeg';

const ServiceImages = () => {
	return (
		<>
			<Typography
				variant="h3"
				sx={{ marginBottom: '1rem' }}
			>
				Are you injured or in pain?
			</Typography>

			<Box className="image_wrapper">
				<Box
					component={Link}
					to="/about"
					className="service_card"
				>
					<Box
						component="img"
						src={rximg}
						alt="A person receiving treatment for their shoulder."
						className="service_image"
					/>
					<Box className="overlay">
						<Typography
							variant="h3"
							sx={{ color: '#25aaf7' }}
						>
							About Us
						</Typography>
					</Box>
				</Box>
				<Box
					component={Link}
					to="/services"
					className="service_card"
				>
					<Box
						component="img"
						src={braceimg}
						alt="A patient being guided on how to walk with crutches"
						className="service_image"
					/>
					<Box className="overlay">
						<Typography
							variant="h3"
							sx={{ color: '#25aaf7' }}
						>
							Services
						</Typography>
					</Box>
				</Box>
				<Box
					component={Link}
					to="/blogs"
					className="service_card"
				>
					<Box
						component="img"
						src={bandimg}
						alt="A patient being taught how to perform an arm exercise with a band."
						className="service_image"
					/>
					<Box className="overlay">
						<Typography
							variant="h3"
							sx={{ color: '#25aaf7' }}
						>
							Education
						</Typography>
					</Box>
				</Box>
			</Box>
		</>
	);
};

export default ServiceImages;
