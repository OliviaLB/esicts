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
	{
		id: 3,
		text: `I have been seeing Em for over a year now and she is just amazing. There is no cure for my issue, only an operation, but Em does a firm deep muscle massage and brings relief to me for a while. She is kind, empathetic, funny, committed, truthful and professional. I love seeing Em, who will continue to be my sports injury masseuse for as long as I need her. But I might also just go for fun and giggles and a deep massage. I can't recommend her highly enough.`,
		author: 'Susan D',
	},
	{
		id: 4,
		text: `Excellent therapist. Highly recommended. My whole extended family ( ages ranging from 24 years old to 84 years old!) have been her clients for a few years.. Em is extremely knowledgeable and always sorts out our various injuries with professionalism. I see Em on a regular basis as I believe in preventative maintenance.`,
		author: 'Wendy B',
	},
	{
		id: 5,
		text: `Em is an absolute treasure, she is always keen to please nothing is ever to much trouble, always finds the time to get me in and is super polite, injuries are her forte would definitely recommend her experience and professionalism.`,
		author: 'Emma W',
	},
	{
		id: 6,
		text: `Em is an absolute star, looks after me and my family always finds space to fit us in, her experience and knowledge of injuries is 2nd to none and would recommend her to anyone.`,
		author: 'Sean G',
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
		<Box className="testimonial_wrapper">
			<Typography
				variant="h3"
				sx={{ marginBottom: '1rem' }}
			>
				What our clients have to say:
			</Typography>
			<Box className="testimonial_box">
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
		</Box>
	);
};

export default Testimonial;
