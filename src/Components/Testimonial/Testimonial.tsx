import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useState, useEffect } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
const testimonials = [
	{
		id: 1,
		text: 'I had an appointment with Em as I had been recovering from a nasty fall. She was absolutely brilliant - she carried out a detailed assessment and provided great feedback and a  almost instant improvements. I can definitely recommend!',
		author: 'Andrea P',
	},
	{
		id: 2,
		text: 'Personally, I think Em is fantastic. She carefully tailors a program unique to you and your capabilities/requirements. Prior to my consultation I was honestly considering leaving work because I couldn’t cope with the pain any longer and now thanks to her thorough treatment I’m no longer in constant pain for the first time in over a year.',
		author: 'Jenni P',
	},
];

const Testimonial = () => {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
		}, 15000); // Rotate every 15 seconds

		return () => clearInterval(interval);
	}, []);

	const handlePrev = () => {
		setIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
	};

	const handleNext = () => {
		setIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
	};

	return (
		<>
			<Typography variant="h3">What our clients have to say:</Typography>
			<Box
				sx={{
					position: 'relative',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					marginTop: '16px',
				}}
			>
				<Box
					sx={{
						position: 'relative',
						display: 'flex',
						alignItems: 'center',
						height: '150px', // Set a fixed height for the testimonial container
					}}
				>
					<IconButton
						onClick={handlePrev}
						aria-label="Previous testimonial"
						sx={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)' }}
					>
						<ArrowBackIosNewIcon />
					</IconButton>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							marginLeft: '48px', // Adjust this value as needed to create space between stars and text
							overflow: 'hidden', // Hide any overflowing content
						}}
					>
						<Box sx={{ display: 'flex', marginBottom: '1rem', alignItems: 'center' }}>
							<StarIcon sx={{ color: '#dbbb49' }} />
							<StarIcon sx={{ color: '#dbbb49' }} />
							<StarIcon sx={{ color: '#dbbb49' }} />
							<StarIcon sx={{ color: '#dbbb49' }} />
							<StarIcon sx={{ color: '#dbbb49' }} />
						</Box>
						<Typography
							variant="body1"
							sx={{
								transition: 'opacity 0.5s',
								opacity: 1,
								maxHeight: '80px',
								overflow: 'hidden',
								textOverflow: 'ellipsis',
							}}
						>
							{testimonials[index].text}
						</Typography>
						<Typography
							variant="body1"
							sx={{ marginTop: '8px', transition: 'opacity 0.5s', opacity: 1 }}
						>
							- {testimonials[index].author}
						</Typography>
					</Box>
					<IconButton
						onClick={handleNext}
						aria-label="Next testimonial"
						sx={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)' }}
					>
						<ArrowForwardIosIcon />
					</IconButton>
				</Box>
			</Box>
		</>
	);
};

export default Testimonial;
