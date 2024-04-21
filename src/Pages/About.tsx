import './About.css';
import { Box, Button, Typography } from '@mui/material';
import profile from '../Assets/Images/Photo.png';
import { Link } from 'react-router-dom';

const About = () => {
	return (
		<Box className="about-container">
			<Typography
				variant="h3"
				className="about-heading"
			>
				Why choose Em Stuart Injuries Clinic?
			</Typography>
			<Typography
				variant="h4"
				className="about-subheading"
			>
				Personalised care designed to suit your needs
			</Typography>

			<Box
				component="img"
				src={profile}
				className="profile-picture"
				alt="A head and shoulders photograph of Em Stuart - owner of Em Stuart Injuries Clinic."
			/>

			<Box className="about-text_wrapper">
				<Typography variant="body1">
					We are a private injury clinic based in the very heart of Gloucester city centre. We
					change the lives of our patients by bringing them relief and treatment for those niggling
					pains and conditions that affect their lives and wellbeing day in, day out.
				</Typography>
				<Typography variant="body1">
					We treat a range of problems including sports injuries, post-operative rehabilitation and
					musculoskeletal (MSK) conditions. Our focus is the accurate assessment, diagnosis and
					swift recovery of each and every patient, using a wide range of techniques and exercises.
					With our patients’ interests and wellbeing as the goal, we work with them every step of
					the way to bring them back to full physical health.
				</Typography>
			</Box>

			<Box className="about_icons-wrapper">
				<Box className="media">
					<Box className="media__image">
						<i className="about-icon fa-light fa-bullseye-arrow"></i>
					</Box>
					<Box className="media__body">
						<Box className="media__title">TARGET THE CAUSE OF THE ISSUE</Box>
					</Box>
				</Box>

				<Box className="media">
					<Box className="media__image">
						<i className="about-icon fa-light fa-hand-holding-medical"></i>
					</Box>
					<Box className="media__body">
						<Box className="media__title">RESOLVE IMMEDIATE PAIN AND SYMPTOMS</Box>
					</Box>
				</Box>

				<Box className="media">
					<Box className="media__image">
						<i className="about-icon fa-light fa-rotate-left"></i>
					</Box>
					<Box className="media__body">
						<Box className="media__title">UNDO THE CAUSE</Box>
					</Box>
				</Box>
				<Box className="media">
					<Box className="media__image">
						<i className="about-icon fa-light fa-clock-rotate-left"></i>
					</Box>
					<Box className="media__body">
						<Box className="media__title">REVERSE THE BODY’S RESPONSE</Box>
					</Box>
				</Box>

				<Box className="media">
					<Box className="media__image">
						<i className="about-icon fa-light fa-dumbbell"></i>
					</Box>
					<Box className="media__body">
						<Box className="media__title">REHABILITATE TO BUILD STRENGTH & FUNCTION</Box>
					</Box>
				</Box>

				<Box className="media">
					<Box className="media__image">
						<i className="about-icon fa-light fa-person-running"></i>
					</Box>
					<Box className="media__body">
						<Box className="media__title">GET YOU ON THE ROAD TO RECOVERY</Box>
					</Box>
				</Box>
			</Box>

			<Button
				component={Link}
				to="/contact"
				color="secondary"
				variant="contained"
				size="large"
				className="about-button"
			>
				Contact Us
			</Button>
		</Box>
	);
};

export default About;
