import acupuncture from '../../Assets/Images/Acupuncture.jpeg';
import massage from '../../Assets/Images/Massage.jpeg';
import kt from '../../Assets/Images/KT2.jpeg';
import stones from '../../Assets/Images/Stones.jpeg';
import back from '../../Assets/Images/Back.jpeg';
import cupping from '../../Assets/Images/Cupping.jpeg';
import slhold from '../../Assets/Images/slhold.jpeg';
import classes from './Treatment.module.css';

const Treatment = () => {
	return (
		<>
			<h2>Our Services</h2>
			<div className="flexcontainer">
				<div className={`${classes.service} flex1x4`}>
					<div className={classes.service__header}>
						<img
							src={back}
							className={classes.service__image__left}
							alt="A person on their side having their shoulder examined by a practitioner."
						/>
					</div>
				</div>
				<div className="flex1x4">
					<h3 className={classes.service__desc}>
						Injury assessments, treatment and rehabilitation
					</h3>
					<p>
						An injury assessment includes postural assessment, functional screening, musculoskeletal
						tests, and identification of predisposing factors. Once we have identified the issue, I
						explain what treatments would be most beneficial and why, then discuss what can also be
						done at home to address the injury and aid rehabilitation. I back this up with a
						programme with full instructions, explaining what to do so that you are not too
						overwhelmed with information from the session.
					</p>
				</div>
				<div className="flex1x4">
					<h3 className={classes.service__desc}>Benefits Include:</h3>

					<div className={classes.ul_container}>
						<ul>
							<li className={classes.bullet_text}>
								<i className={`${classes.bullet} fa-regular fa-circle-check`}></i>
								Pain Relief
							</li>
							<li className={classes.bullet_text}>
								<i className={`${classes.bullet} fa-regular fa-circle-check`}></i>
								Relaxation of muscle tissue
							</li>
							<li className={classes.bullet_text}>
								<i className={`${classes.bullet} fa-regular fa-circle-check`}></i>
								Stimulation of muscle tissue
							</li>
							<li className={classes.bullet_text}>
								<i className={`${classes.bullet} fa-regular fa-circle-check`}></i>
								Increases local circulation
							</li>
						</ul>
					</div>
				</div>

				<div className={classes.multi_price}>
					<div className={classes.multi_container}>
						<p className={classes.service__time}>60 Minutes</p>
						<div className={classes.price}>
							<i className="fa-light fa-sterling-sign"></i>55
						</div>
					</div>
					<div className={classes.multi_container}>
						<p className={classes.service__time}>90 Minutes</p>
						<div className={classes.price}>
							<i className="fa-light fa-sterling-sign"></i>75
						</div>
					</div>
				</div>
				<div className={`${classes.service} flex1x4`}>
					<div className={classes.service__header}>
						<img
							src={stones}
							className={classes.service__image__left}
							alt="Hot stones placed on a patient's back."
						/>
					</div>
				</div>
				<div className="flex1x4">
					<h3 className={classes.service__desc}>Sports Therapy Appointment</h3>
					<p className={classes.service__subheading}>
						Sports Massage, Hot Stones, Cupping & Electrotherapy (excluding TECAR)
					</p>
					<p>
						Experience recovery like never before with our comprehensive sports therapy appointment.
						These sessions combine the soothing benefits of sports massage with the therapeutic
						effects of hot stones, cupping, and electrotherapy. Whether you're seeking relief from
						injury or aiming to optimise performance, our integrated approach ensures a revitalising
						experience that leaves you feeling refreshed, revitalised, and ready to conquer your
						goals.
					</p>
				</div>
				<div className="flex1x4">
					<h3 className={classes.service__desc}>Benefits Include:</h3>

					<div className={classes.ul_container}>
						<ul>
							<li className={classes.bullet_text}>
								<i className={`${classes.bullet} fa-regular fa-circle-check`}></i>
								Reduced muscle tension and soreness
							</li>
							<li className={classes.bullet_text}>
								<i className={`${classes.bullet} fa-regular fa-circle-check`}></i>
								Improved circulation and lymphatic drainage
							</li>
							<li className={classes.bullet_text}>
								<i className={`${classes.bullet} fa-regular fa-circle-check`}></i>
								Enhanced flexibility and range of motion
							</li>
							<li className={classes.bullet_text}>
								<i className={`${classes.bullet} fa-regular fa-circle-check`}></i>
								Accelerated recovery from injuries
							</li>
							<li className={classes.bullet_text}>
								<i className={`${classes.bullet} fa-regular fa-circle-check`}></i>
								Relief from chronic pain and discomfort
							</li>
							<li className={classes.bullet_text}>
								<i className={`${classes.bullet} fa-regular fa-circle-check`}></i>
								Increased relaxation and stress reduction
							</li>
						</ul>
					</div>
				</div>

				<div className={classes.multi_price}>
					<div className={classes.multi_container}>
						<p className={classes.service__time}>30 Minutes</p>
						<div className={classes.price}>
							<i className="fa-light fa-sterling-sign"></i>30
						</div>
					</div>
					<div className={classes.multi_container}>
						<p className={classes.service__time}>60 Minutes</p>
						<div className={classes.price}>
							<i className="fa-light fa-sterling-sign"></i>45
						</div>
					</div>
					<div className={classes.multi_container}>
						<p className={classes.service__time}>90 Minutes</p>
						<div className={classes.price}>
							<i className="fa-light fa-sterling-sign"></i>65
						</div>
					</div>
				</div>

				<div className={`${classes.service} flex1x4`}>
					<div className="flex1x4 service">
						<div className={classes.service__header}>
							<img
								src={massage}
								className={classes.service__image__left}
								alt="A patient receiving soft tissue therapy treatment."
							/>
						</div>
					</div>
				</div>

				<div className="flex1x4">
					<h3 className={classes.service__desc}>Oncology Massage</h3>
					<p>
						Oncology massage offers compassionate and specialized care tailored to individuals
						navigating the challenges of cancer diagnosis and treatment. Delivered by trained
						therapists with a deep understanding of the unique needs and considerations of oncology
						patients, this gentle and soothing therapy aims to alleviate physical discomfort, reduce
						anxiety, and promote relaxation.
					</p>
				</div>
				<div className="flex1x4">
					<h3 className={classes.service__desc}>Benefits Include:</h3>
					<div className={classes.ul_container}>
						<ul>
							<li className={classes.bullet_text}>
								<i className={`${classes.bullet} fa-regular fa-circle-check`}></i>
								Better ability to tolerate cancer treatment side effects
							</li>
							<li className={classes.bullet_text}>
								<i className={`${classes.bullet} fa-regular fa-circle-check`}></i>
								Better sleep
							</li>
							<li className={classes.bullet_text}>
								<i className={`${classes.bullet} fa-regular fa-circle-check`}></i>
								Fewer headaches
							</li>
							<li className={classes.bullet_text}>
								<i className={`${classes.bullet} fa-regular fa-circle-check`}></i>
								Less peripheral neuropathy (numbness)
							</li>
							<li className={classes.bullet_text}>
								<i className={`${classes.bullet} fa-regular fa-circle-check`}></i>
								Less chemotherapy-related nausea
							</li>
							<li className={classes.bullet_text}>
								<i className={`${classes.bullet} fa-regular fa-circle-check`}></i>
								Less chronic pain
							</li>
							<li className={classes.bullet_text}>
								<i className={`${classes.bullet} fa-regular fa-circle-check`}></i>
								Less stress and anxiety
							</li>
						</ul>
					</div>
				</div>

				<div className={`${classes.service__price} flex1x4`}>
					<p className={classes.service__time}>Treatment Times Vary</p>
					<div className={classes.price}>
						<i className="fa-light fa-sterling-sign"></i>50
					</div>
				</div>

				<div className={`${classes.service} flex1x4`}>
					<div className={classes.service__header}>
						<img
							src={kt}
							className={classes.service__image__left}
							alt="Pink and blue coloured tape applied to a patient's shoulder for postural awareness."
						/>
					</div>
				</div>
				<div className="flex1x4">
					<h3 className={classes.service__desc}>Strapping & Taping</h3>
					<p>
						Strapping and taping of joints and soft tissues is a common treatment modality amongst
						physiotherapists. It can be helpful in the treatment of sprains and strains, ligament
						injuries as well as correction of joint alignment (or biomechanics). Correct application
						of tape can help reduce swelling, aid recovery of injured areas and offload painful
						tissues
					</p>
				</div>
				<div className="flex1x4">
					<h3 className={classes.service__desc}>Benefits Include:</h3>
					<div className={classes.ul_container}>
						<ul>
							<li className={classes.bullet_text}>
								<i className={`${classes.bullet} fa-regular fa-circle-check`}></i>
								Compression
							</li>
							<li className={classes.bullet_text}>
								<i className={`${classes.bullet} fa-regular fa-circle-check`}></i>
								Restriction of movement
							</li>
							<li className={classes.bullet_text}>
								<i className={`${classes.bullet} fa-regular fa-circle-check`}></i>
								Correction of biomechanics
							</li>
						</ul>
					</div>
				</div>
				<div className={`${classes.service__price} flex1x4`}>
					<div className={classes.price}>
						<i className="fa-light fa-sterling-sign"></i>10
					</div>
				</div>

				<div className={`${classes.service} flex1x4`}>
					<div className={classes.service__header}>
						<img
							src={acupuncture}
							className={classes.service__image__left}
							alt="A therapist placing acupuncture needles into a patient's back."
						/>
					</div>
				</div>
				<div className="flex1x4">
					<h3 className={classes.service__desc}>Dry Needling</h3>
					<p>
						Acupuncture is used to complement physiotherapy treatment in assisting with pain relief.
						It also aides in the restoration of joint mobility and function. Additional benefits
						include headache management and nerve pain relief.
					</p>
				</div>
				<div className="flex1x4">
					<h3 className={classes.service__desc}>Benefits Include:</h3>
					<div className={classes.ul_container}>
						<ul>
							<li className={classes.bullet_text}>
								<i className={`${classes.bullet} fa-regular fa-circle-check`}></i>
								Pain Relief
							</li>
							<li className={classes.bullet_text}>
								<i className={`${classes.bullet} fa-regular fa-circle-check`}></i>
								Relaxation of muscle tissue
							</li>
							<li className={classes.bullet_text}>
								<i className={`${classes.bullet} fa-regular fa-circle-check`}></i>
								Stimulation of muscle tissue
							</li>
							<li className={classes.bullet_text}>
								<i className={`${classes.bullet} fa-regular fa-circle-check`}></i>
								Increases local circulation
							</li>
						</ul>
					</div>
				</div>
				<div className={`${classes.service__price} flex1x4`}>
					<p>
						Can be added onto another service such as an assessment or sports massage. Your{' '}
						<b>first dry needling treatment is FREE</b>. If you find it successful in treating your
						pain then subsequent dry needling treatments will be charge at an{' '}
						<b>additional fee of £5</b> in conjunction with another service.
					</p>
					<div className={classes.multi_price}>
						<span className={classes.price}>Free</span>
						<span className={classes.price}>
							<i className="fa-light fa-sterling-sign"></i>5
						</span>
					</div>
				</div>

				<div className={`${classes.service} flex1x4`}>
					<div className={classes.service__header}>
						<img
							src={slhold}
							className={classes.service__image__left}
							alt="Patient performing a single leg hold."
						/>
					</div>
				</div>
				<div className="flex1x4">
					<h3 className={classes.service__desc}>Additional Rehab Program</h3>
					<p>
						Progress your rehabilitation with an additional rehab program. Tailored to individual
						needs, our program addresses a spectrum of musculoskeletal challenges, from sprains to
						biomechanical imbalances, in alignment with personalized recovery objectives. Through
						expert application, we aim to expedite healing processes, alleviate discomfort, and
						empower clients on their journey toward improved function and holistic well-being.
					</p>
				</div>
				<div className="flex1x4">
					<h3 className={classes.service__desc}>Benefits Include:</h3>
					<div className={classes.ul_container}>
						<ul>
							<li className={classes.bullet_text}>
								<i className={`${classes.bullet} fa-regular fa-circle-check`}></i>
								Improved physical function and mobility
							</li>
							<li className={classes.bullet_text}>
								<i className={`${classes.bullet} fa-regular fa-circle-check`}></i>
								Reduced pain and discomfort
							</li>
							<li className={classes.bullet_text}>
								<i className={`${classes.bullet} fa-regular fa-circle-check`}></i>
								Enhanced strength and endurance
							</li>
							<li className={classes.bullet_text}>
								<i className={`${classes.bullet} fa-regular fa-circle-check`}></i>
								Faster recovery from injuries
							</li>
							<li className={classes.bullet_text}>
								<i className={`${classes.bullet} fa-regular fa-circle-check`}></i>
								Better coordination and balance
							</li>
							<li className={classes.bullet_text}>
								<i className={`${classes.bullet} fa-regular fa-circle-check`}></i>
								Prevention of future injuries
							</li>
						</ul>
					</div>
				</div>
				<div className={`${classes.service__price} flex1x4`}>
					<div className={classes.price}>
						<i className="fa-light fa-sterling-sign"></i>5
					</div>
				</div>
			</div>
		</>
	);
};

export default Treatment;
