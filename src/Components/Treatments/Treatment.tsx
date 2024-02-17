import acupuncture from '../../Assets/Images/Acupuncture.jpeg';
import massage from '../../Assets/Images/Massage.jpeg';
import kt from '../../Assets/Images/KT2.jpeg';
import stones from '../../Assets/Images/Stones.jpeg';
import back from '../../Assets/Images/Back.jpeg';
import cupping from '../../Assets/Images/Cupping.jpeg';
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
					<h3 className={classes.service__desc}>Injury assessment, treatment and rehabilitation</h3>
					<p>
						An injury assessment takes approximately 90 minutes and includes postural assessment,
						functional screening, musculoskeletal tests, and identification of predisposing factors.
						Once we have identified the issue, I explain what treatments would be most beneficial
						and why, then discuss what can also be done at home to address the injury and aid
						rehabilitation. I back this up with a programme with full instructions, explaining what
						to do so that you are not too overwhelmed with information from the session.
					</p>
				</div>
				<div className="flex1x4">
					<h3 className={classes.service__desc}>Benefits Include:</h3>

					<div className={classes.ul_container}>
						<ul>
							<li>
								<i className={`${classes.bullet} fa-regular fa-circle-check`}></i>
								Pain Relief
							</li>
							<li>
								<i className={`${classes.bullet} fa-regular fa-circle-check`}></i>
								Relaxation of muscle tissue
							</li>
							<li>
								<i className={`${classes.bullet} fa-regular fa-circle-check`}></i>
								Stimulation of muscle tissue
							</li>
							<li>
								<i className={`${classes.bullet} fa-regular fa-circle-check`}></i>
								Increases local circulation
							</li>
						</ul>
					</div>
				</div>

				<div className={`${classes.service__price} flex1x4`}>
					<h3 className={classes.service__desc}>Session Price:</h3>
					<p className={classes.service__time}>90 Minute Appointment</p>
					<div className={classes.price}>
						<i className="fa-light fa-sterling-sign"></i>45
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
							<li>
								<i className={`${classes.bullet} fa-regular fa-circle-check`}></i>
								Pain Relief
							</li>
							<li>
								<i className={`${classes.bullet} fa-regular fa-circle-check`}></i>
								Relaxation of muscle tissue
							</li>
							<li>
								<i className={`${classes.bullet} fa-regular fa-circle-check`}></i>
								Stimulation of muscle tissue
							</li>
							<li>
								<i className={`${classes.bullet} fa-regular fa-circle-check`}></i>
								Increases local circulation
							</li>
						</ul>
					</div>
				</div>
				<div className={`${classes.service__price} flex1x4`}>
					<h3 className={classes.service__desc}>Session Price:</h3>
					<p>
						Can be added onto another service such as an assessment or sports massage. Your{' '}
						<b>first dry needling treatment is FREE</b>. If you find it successful in treating your
						pain then subsequent dry needling treatments will be charge at an{' '}
						<b>additional fee of £5</b> in conjunction with another service.
					</p>
					<div className={classes.needling}>
						<span className={classes.price}>Free</span>
						<span className={classes.price}>
							<i className="fa-light fa-sterling-sign"></i>5
						</span>
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
					<h3 className={classes.service__desc}>Sports & Deep Tissue Massage</h3>
					<p>
						You don’t have to be an athlete to get benefits from a sports massage! Massage plays a
						key role in rehabilitation and injury prevention and your therapist may perform various
						techniques as part of your treatment. For athletes and sports people, sports massage is
						highly beneficial prior to an event or to facilitate your regular training regime.
						Massage will boost circulation, ease tight, painful muscles and soft tissues, as well as
						aiding flexibility. Following events and heavy training, deep tissue massage can
						encourage flushing of lactic acid from sore muscles, easing tension and facilitating a
						speedier recovery. Regular sports massage is often a vital component of an athlete’s
						training regime in maintaining optimal performance.
					</p>
				</div>
				<div className="flex1x4">
					<h3 className={classes.service__desc}>Benefits Include:</h3>
					<div className={classes.ul_container}>
						<ul>
							<li>
								<i className={`${classes.bullet} fa-regular fa-circle-check`}></i>
								Pain Relief
							</li>
							<li>
								<i className={`${classes.bullet} fa-regular fa-circle-check`}></i>
								Relaxation of muscle tissue
							</li>
							<li>
								<i className={`${classes.bullet} fa-regular fa-circle-check`}></i>
								Reduces soft tissue bruising & swelling
							</li>
							<li>
								<i className={`${classes.bullet} fa-regular fa-circle-check`}></i>
								Increases local circulation
							</li>
							<li>
								<i className={`${classes.bullet} fa-regular fa-circle-check`}></i>
								Mobilises scar tissue
							</li>
						</ul>
					</div>
				</div>

				<div className={`${classes.service__price} flex1x4`}>
					<h3 className={classes.service__desc}>Session Price:</h3>
					<p className={classes.service__time}>45 Minute Appointment</p>
					<div className={classes.price}>
						<i className="fa-light fa-sterling-sign"></i>35
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
					<h3 className={classes.service__desc}>Hot Stones Sports Massage</h3>
					<p>
						Relaxing and stress relieving, the heat from the stones produces endorphins, opens blood
						vessels increasing blood circulation, increases lymph flow (the lymphatic system is your
						bodies waste disposal system) allowing toxins and waste products to flush out, reducing
						DOMS (delayed onset muscle soreness) aches and pains.
					</p>
				</div>
				<div className="flex1x4">
					<h3 className={classes.service__desc}>Benefits Include:</h3>
					<div className={classes.ul_container}>
						<ul>
							<li>
								<i className={`${classes.bullet} fa-regular fa-circle-check`}></i>
								Pain Relief
							</li>
							<li>
								<i className={`${classes.bullet} fa-regular fa-circle-check`}></i>
								Relaxation of muscle tissue
							</li>
							<li>
								<i className={`${classes.bullet} fa-regular fa-circle-check`}></i>
								Reduces soft tissue bruising & swelling
							</li>
							<li>
								<i className={`${classes.bullet} fa-regular fa-circle-check`}></i>
								Increases local circulation
							</li>
							<li>
								<i className={`${classes.bullet} fa-regular fa-circle-check`}></i>
								Mobilises scar tissue
							</li>
						</ul>
					</div>
				</div>

				<div className={`${classes.service__price} flex1x4`}>
					<h3 className={classes.service__desc}>Session Price:</h3>
					<p className={classes.service__time}>45 Minute Appointment</p>
					<div className={classes.price}>
						<i className="fa-light fa-sterling-sign"></i>40
					</div>
				</div>

				<div className={`${classes.service} flex1x4`}>
					<div className={classes.service__header}>
						<img
							src={cupping}
							className={classes.service__image__left}
							alt="Cups applied to patient's upper shoulders and neck."
						/>
					</div>
				</div>
				<div className="flex1x4">
					<h3 className={classes.service__desc}>Myofascial Dry cupping</h3>
					<p>
						Myofascial cupping is derived from Traditional Chinese medicine. Cups are placed on the
						skin and suction is created and facilitates increased circulation to skin, fascia and
						muscle and purports to pull stagnant blood from the area and results in a skin pigment
						similar to a hickey. It is often performed in conjunction with other manual therapy
						techniques. It’s not suitable for everyone, so before you receive a treatment, a full
						consultation is performed to determine if it is a suitable treatment.
					</p>
				</div>

				<div className="flex1x4">
					<h3 className={classes.service__desc}>Benefits Include:</h3>
					<div className={classes.ul_container}>
						<ul>
							<li>
								<i className={`${classes.bullet} fa-regular fa-circle-check`}></i>
								Pain Relief
							</li>
							<li>
								<i className={`${classes.bullet} fa-regular fa-circle-check`}></i>
								Relaxation of muscle tissue
							</li>
							<li>
								<i className={`${classes.bullet} fa-regular fa-circle-check`}></i>
								Reduces soft tissue bruising & swelling
							</li>
							<li>
								<i className={`${classes.bullet} fa-regular fa-circle-check`}></i>
								Increases local circulation
							</li>
							<li>
								<i className={`${classes.bullet} fa-regular fa-circle-check`}></i>
								Mobilises scar tissue
							</li>
						</ul>
					</div>
				</div>

				<div className={`${classes.service__price} flex1x4`}>
					<h3 className={classes.service__desc}>Session Price:</h3>
					<p className={classes.service__time}>45 Minute Appointment</p>
					<div className={classes.price}>
						<i className="fa-light fa-sterling-sign"></i>35
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
							<li>
								<i className={`${classes.bullet} fa-regular fa-circle-check`}></i>
								Compression
							</li>
							<li>
								<i className={`${classes.bullet} fa-regular fa-circle-check`}></i>
								Restriction of movement
							</li>
							<li>
								<i className={`${classes.bullet} fa-regular fa-circle-check`}></i>
								Correction of biomechanics
							</li>
						</ul>
					</div>
				</div>
				<div className={`${classes.service__price} flex1x4`}>
					<h3 className={classes.service__desc}>Session Price:</h3>
					<div className={classes.price}>
						<i className="fa-light fa-sterling-sign"></i>10
					</div>
				</div>
			</div>
		</>
	);
};

export default Treatment;
