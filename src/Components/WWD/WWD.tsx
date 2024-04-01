import { Box, Typography } from '@mui/material';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import bandimg from '../../Assets/Images/Band.jpeg';
import braceimg from '../../Assets/Images/Brace.jpeg';
import rximg from '../../Assets/Images/Back.jpeg';

const WWD = () => {
	return (
		<Fragment>
			<Typography variant='h3'>Are you injured or in pain?</Typography>

			<Box
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					flexWrap: 'wrap',
					gap: '20px',
				}}
			>
				<Box
					component={Link}
					to="/about"
					sx={{
						position: 'relative',
						overflow: 'hidden',
						'&:hover .overlay': { opacity: 1, transform: 'translateX(0)' },
					}}
				>
					<Box
						component="img"
						src={rximg}
						alt="A person receiving treatment for their shoulder."
						sx={{ width: '100%', height: 'auto', transition: 'transform 0.5s ease' }}
					/>
					<Box
						className="overlay"
						sx={{
							position: 'absolute',
							bottom: 0,
							left: 0,
							width: '100%',
							backgroundColor: 'rgba(255, 255, 255, 0.8)',
							padding: '20px',
							boxSizing: 'border-box',
							opacity: 0,
							transform: 'translateX(100%)',
							transition: 'opacity 0.5s ease, transform 0.5s ease',
						}}
					>
						<Typography
							variant="h3"
							sx={{ display: 'flex', gap: '10px', alignItems: 'center', justifyContent: 'center' }}
						>
							About Us
						</Typography>
					</Box>
				</Box>
				<Box
					component={Link}
					to="/about"
					sx={{
						position: 'relative',
						overflow: 'hidden',
						'&:hover .overlay': { opacity: 1, transform: 'translateX(0)' },
					}}
				>
					<Box
						component="img"
						src={braceimg}
						alt="A patient being guided on how to walk with crutches"
						sx={{ width: '100%', height: 'auto', transition: 'transform 0.5s ease' }}
					/>
					<Box
						className="overlay"
						sx={{
							position: 'absolute',
							bottom: 0,
							left: 0,
							width: '100%',
							backgroundColor: 'rgba(255, 255, 255, 0.8)',
							padding: '20px',
							boxSizing: 'border-box',
							opacity: 0,
							transform: 'translateX(100%)',
							transition: 'opacity 0.5s ease, transform 0.5s ease',
						}}
					>
						<Typography
							variant="h3"
							sx={{ display: 'flex', gap: '10px', alignItems: 'center', justifyContent: 'center' }}
						>
							Services
						</Typography>
					</Box>
				</Box>
				<Box
					component={Link}
					to="/about"
					sx={{
						position: 'relative',
						overflow: 'hidden',
						'&:hover .overlay': { opacity: 1, transform: 'translateX(0)' },
					}}
				>
					<Box
						component="img"
						src={bandimg}
						alt="A patient being taught how to perform an arm exercise with a band."
						sx={{ width: '100%', height: 'auto', transition: 'transform 0.5s ease' }}
					/>
					<Box
						className="overlay"
						sx={{
							position: 'absolute',
							bottom: 0,
							left: 0,
							width: '100%',
							backgroundColor: 'rgba(255, 255, 255, 0.8)',
							padding: '20px',
							boxSizing: 'border-box',
							opacity: 0,
							transform: 'translateX(100%)',
							transition: 'opacity 0.5s ease, transform 0.5s ease',
						}}
					>
						<Typography
							variant="h3"
							sx={{ display: 'flex', gap: '10px', alignItems: 'center', justifyContent: 'center' }}
						>
							Education
						</Typography>
					</Box>
				</Box>
			</Box>
		</Fragment>
	);
};

export default WWD;
