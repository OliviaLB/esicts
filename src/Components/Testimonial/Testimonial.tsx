import './Testimonial.css';
import { Box, IconButton, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
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
			<Box className="testimonial_wrapper">
				<IconButton
					onClick={handlePrev}
					aria-label="Previous testimonial"
					className="button_arrow-left"
				>
					<ArrowBackIosNewIcon />
				</IconButton>
				<Box className="testimonial_card">
					<Box className="testimonial_card-stars">
						<StarIcon />
						<StarIcon />
						<StarIcon />
						<StarIcon />
						<StarIcon />
					</Box>
					<Typography variant="body1">{testimonials[index].text}</Typography>
					<Typography
						variant="body1"
						className="testimonial_card-author"
					>
						- {testimonials[index].author}
					</Typography>
				</Box>
				<IconButton
					onClick={handleNext}
					aria-label="Next testimonial"
					className="button_arrow-right"
				>
					<ArrowForwardIosIcon />
				</IconButton>
			</Box>
		</>
	);
};

export default Testimonial;
