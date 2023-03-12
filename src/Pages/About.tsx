import { Button } from '../Components/UI/Button';
import profile from '../Assets/Images/Photo.png';

const About = () => {
	return (
		<div className="block">
			<h2>WHY CHOOSE EM STUART'S INJURIES CLINIC?</h2>
			<h3>PERSONALISED CARE DESIGNED TO SUIT YOUR NEEDS</h3>
			<div className="wrapper">
				<img
					src={profile}
					className="profile_pic"
					alt="A head and shoulders photograph of Em Stuart - owner of Em Stuart Injuries Clinic."
				/>
			</div>
			<div>
				<p>
					We are a private injury clinic based in the very heart of Gloucester city centre. We
					change the lives of our patients by bringing them relief and treatment for those niggling
					pains and conditions that affect their lives and wellbeing day in, day out.
				</p>

				<p>
					We treat a range of problems including sports injuries, post-operative rehabilitation and
					musculoskeletal (MSK) conditions. Our focus is the accurate assessment, diagnosis and
					swift recovery of each and every patient, using a wide range of techniques and exercises.
					With our patients’ interests and wellbeing as the goal, we work with them every step of
					the way to bring them back to full physical health.
				</p>
			</div>

			<div className="flexcontainer">
				<div className="media flex1x3">
					<div className="media__image">
						<i className="icon icon--primary fa-light fa-bullseye-arrow"></i>
					</div>
					<div className="media__body">
						<div className="media__title">TARGET THE CAUSE OF THE ISSUE</div>
					</div>
				</div>

				<div className="media flex1x3">
					<div className="media__image">
						<i className="icon icon--primary fa-light fa-hand-holding-medical"></i>
					</div>
					<div className="media__body">
						<div className="media__title">RESOLVE IMMEDIATE PAIN AND SYMPTOMS</div>
					</div>
				</div>

				<div className="media flex1x3">
					<div className="media__image">
						<i className="icon icon--primary fa-light fa-rotate-left"></i>
					</div>
					<div className="media__body">
						<div className="media__title">UNDO THE CAUSE</div>
					</div>
				</div>
				<div className="media flex1x3">
					<div className="media__image">
						<i className="icon icon--primary fa-light fa-clock-rotate-left"></i>
					</div>
					<div className="media__body">
						<div className="media__title">REVERSE THE BODY’S RESPONSE</div>
					</div>
				</div>

				<div className="media flex1x3">
					<div className="media__image">
						<i className="icon icon--primary fa-light fa-dumbbell"></i>
					</div>
					<div className="media__body">
						<div className="media__title">REHABILITATE TO BUILD STRENGTH & FUNCTION</div>
					</div>
				</div>

				<div className="media flex1x3">
					<div className="media__image">
						<i className="icon icon--primary fa-light fa-person-running"></i>
					</div>
					<div className="media__body">
						<div className="media__title">GET YOU ON THE ROAD TO RECOVERY</div>
					</div>
				</div>
			</div>
			<div className="wrapper">
				<Button text="Contact Us" />
			</div>
		</div>
	);
};

export default About;
