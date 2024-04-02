import { Typography } from "@mui/material";

const Services = () => {
	return (
		<>
			<Typography variant="h3">WHY CHOOSE EM STUART'S INJURIES CLINIC?</Typography>
			<Typography
				variant="h3"
				sx={{ color: '#25aaf7', fontSize: '2.3rem' }}
			>
				PERSONALISED CARE DESIGNED TO SUIT YOUR NEEDS
			</Typography>
			<>
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
			</>

			<div className="flexcontainer">
				<div className="media flex1x3">
					<div className="media__image">
						<i className="icon icon--primary fa-light fa-file-certificate"></i>
					</div>
					<div className="media__body">
						<div className="media__title">DEGREE QUALIFIED</div>
					</div>
				</div>

				<div className="media flex1x3">
					<div className="media__image">
						<i className="icon icon--primary fa-light fa-car"></i>
					</div>
					<div className="media__body">
						<div className="media__title">FREE PARKING AND DISABLED ACCESS</div>
					</div>
				</div>

				<div className="media flex1x3">
					<div className="media__image">
						<i className="icon icon--primary fa-light fa-door-open"></i>
					</div>
					<div className="media__body">
						<div className="media__title">FLEXIBLE OPERATING HOURS</div>
					</div>
				</div>
				<div className="media flex1x3">
					<div className="media__image">
						<i className="icon icon--primary fa-light fa-ballot-check"></i>
					</div>
					<div className="media__body">
						<div className="media__title">PERSONALISED TREATMENT DESIGNED FOR YOU</div>
					</div>
				</div>

				<div className="media flex1x3">
					<div className="media__image">
						<i className="icon icon--primary fa-light fa-phone-volume"></i>
					</div>
					<div className="media__body">
						<div className="media__title">DESIGNATED BOOKING NUMBER</div>
					</div>
				</div>

				<div className="media flex1x3">
					<div className="media__image">
						<i className="icon icon--primary fa-light fa-dumbbell"></i>
					</div>
					<div className="media__body">
						<div className="media__title">CUSTOMISED REHABILIATION PROGRAMS</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default Services;