import { Box, Typography } from '@mui/material';
import './ServiceBlock.css';

const ServiceBlock = () => {
	return (
		<Box className="about-wrapper">
			<Typography variant="h3">WHY CHOOSE EM STUART'S INJURIES CLINIC?</Typography>
			<Typography
				variant="h3"
				sx={{ color: '#25aaf7' }}
				className="about_subheading"
			>
				PERSONALISED CARE DESIGNED TO SUIT YOUR NEEDS
			</Typography>
			<Box className="about-text">
				<Typography variant="body1">
					We are a private injury clinic based in the very heart of Gloucester city centre. We
					change the lives of our patients by bringing them relief and treatment for those niggling
					pains and conditions that affect their lives and wellbeing day in, day out.{' '}
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
						<i className="about-icon fa-light fa-file-certificate"></i>
					</Box>
					<Box className="media__body">
						<Box className="media__title">DEGREE QUALIFIED</Box>
					</Box>
				</Box>

				<Box className="media">
					<Box className="media__image">
						<i className="about-icon fa-light fa-car"></i>
					</Box>
					<Box className="media__body">
						<Box className="media__title">FREE PARKING AND DISABLED ACCESS</Box>
					</Box>
				</Box>

				<Box className="media">
					<Box className="media__image">
						<i className="about-icon fa-light fa-door-open"></i>
					</Box>
					<Box className="media__body">
						<Box className="media__title">FLEXIBLE OPERATING HOURS</Box>
					</Box>
				</Box>
				<Box className="media">
					<Box className="media__image">
						<i className="about-icon fa-light fa-ballot-check"></i>
					</Box>
					<Box className="media__body">
						<Box className="media__title">PERSONALISED TREATMENT DESIGNED FOR YOU</Box>
					</Box>
				</Box>

				<Box className="media">
					<Box className="media__image">
						<i className="about-icon fa-light fa-phone-volume"></i>
					</Box>
					<Box className="media__body">
						<Box className="media__title">DESIGNATED BOOKING NUMBER</Box>
					</Box>
				</Box>

				<Box className="media">
					<Box className="media__image">
						<i className="about-icon fa-light fa-dumbbell"></i>
					</Box>
					<Box className="media__body">
						<Box className="media__title">CUSTOMISED REHABILIATION PROGRAMS</Box>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};
export default ServiceBlock;
