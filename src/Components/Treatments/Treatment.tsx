import { Box, Grid, Typography } from '@mui/material';
import acupuncture from '../../Assets/Images/Acupuncture.jpeg';
import back from '../../Assets/Images/Back.jpeg';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import brace from '../../Assets/Images/Brace2.jpeg';
import kt from '../../Assets/Images/KT2.jpeg';
import massage from '../../Assets/Images/Massage.jpeg';
import stones from '../../Assets/Images/Stones.jpeg';
import './Treatment.css';

const Treatment = () => {
	return (
		<>
			<Typography variant="h3">Our Services</Typography>
			<Box className="services_container">
				<Grid
					container
					spacing={2}
				>
					{/* Image */}
					<Grid
						item
						lg={3}
						md={12}
						sm={12}
						xs={12}
						className="service-grid_image-wrapper"
					>
						<Box
							component={'img'}
							src={back}
							className="service__image__left"
							alt="A person on their side having their shoulder examined by a practitioner."
						></Box>
					</Grid>

					{/* Description */}
					<Grid
						item
						lg={3}
						md={12}
						sm={12}
						xs={12}
					>
						<Box className="service-grid-description">
							<Typography
								variant="body1"
								className="description-heading"
							>
								Injury assessment, treatment and rehabilitation
							</Typography>

							<Typography
								variant="body1"
								className="description-body"
							>
								An injury assessment includes postural assessment, functional screening,
								musculoskeletal tests, and identification of predisposing factors. Once we have
								identified the issue, I explain what treatments would be most beneficial and why,
								then discuss what can also be done at home to address the injury and aid
								rehabilitation. I back this up with a programme with full instructions, explaining
								what to do so that you are not too overwhelmed with information from the session.
							</Typography>
						</Box>
					</Grid>

					{/* Benefits */}
					<Grid
						item
						lg={3}
						md={12}
						sm={12}
						xs={12}
					>
						<Box className="service-grid-benefits_item">
							<Typography
								variant="body1"
								className="benefits-heading"
							>
								Benefits Include:
							</Typography>

							<Box className="benefits-list_wrapper">
								<CheckCircleOutlineIcon className="benefit_icon" />
								<Typography className="benefit_text">Pain Relief</Typography>
							</Box>
							<Box className="benefits-list_wrapper">
								<CheckCircleOutlineIcon className="benefit_icon" />
								<Typography className="benefit_text">Relaxation of muscle tissue</Typography>
							</Box>
							<Box className="benefits-list_wrapper">
								<CheckCircleOutlineIcon className="benefit_icon" />
								<Typography className="benefit_text">Stimulation of muscle tissue</Typography>
							</Box>
							<Box className="benefits-list_wrapper">
								<CheckCircleOutlineIcon className="benefit_icon" />
								<Typography className="benefit_text">Increases local circulation</Typography>
							</Box>
						</Box>
					</Grid>

					{/* Pricing */}
					<Grid
						item
						lg={3}
						md={12}
						sm={12}
						xs={12}
					>
						<Box className="service-grid-pricing">
							<Box className="service-wrapper">
								<Box className="service-pricing_container">
									<Typography
										variant="body2"
										className="pricing-header"
									>
										60 Minutes
									</Typography>
									<Box className="pricing-circle">
										<Typography
											variant="body2"
											className="pricing-text"
										>
											£55
										</Typography>
									</Box>
								</Box>
								<Box className="service-pricing_container">
									<Typography
										variant="body2"
										className="pricing-header"
									>
										90 Minutes
									</Typography>
									<Box className="pricing-circle">
										<Typography
											variant="body2"
											className="pricing-text"
										>
											£75
										</Typography>
									</Box>
								</Box>
							</Box>
						</Box>
					</Grid>
					{/* Image */}
					<Grid
						item
						lg={3}
						md={12}
						sm={12}
						xs={12}
						className="service-grid_image-wrapper"
					>
						<Box
							component={'img'}
							src={stones}
							className="service__image__left"
							alt="Hot stones placed on a patient's back."
						></Box>
					</Grid>

					{/* Description */}
					<Grid
						item
						lg={3}
						md={12}
						sm={12}
						xs={12}
					>
						<Box className="service-grid-description">
							<Typography
								variant="body1"
								className="description-heading"
							>
								Sports Therapy Appointment
							</Typography>
							<Typography
								variant="body1"
								className="description-heading"
							>
								Sports Massage, Hot Stones, Cupping & Electrotherapy (excluding TECAR)
							</Typography>

							<Typography
								variant="body1"
								className="description-body"
							>
								Experience recovery like never before with our comprehensive sports therapy
								appointment. These sessions combine the soothing benefits of sports massage with the
								therapeutic effects of hot stones, cupping, and electrotherapy. Whether you're
								seeking relief from injury or aiming to optimise performance, our integrated
								approach ensures a revitalising experience that leaves you feeling refreshed,
								revitalised, and ready to conquer your goals.
							</Typography>
						</Box>
					</Grid>

					{/* Benefits */}
					<Grid
						item
						lg={3}
						md={12}
						sm={12}
						xs={12}
					>
						<Box className="service-grid-benefits_item">
							<Typography
								variant="body1"
								className="benefits-heading"
							>
								Benefits Include:
							</Typography>

							<Box className="benefits-list_wrapper">
								<CheckCircleOutlineIcon className="benefit_icon" />
								<Typography className="benefit_text">
									Reduced muscle tension and soreness
								</Typography>
							</Box>
							<Box className="benefits-list_wrapper">
								<CheckCircleOutlineIcon className="benefit_icon" />
								<Typography className="benefit_text">
									Improved circulation and lymphatic drainage
								</Typography>
							</Box>
							<Box className="benefits-list_wrapper">
								<CheckCircleOutlineIcon className="benefit_icon" />
								<Typography className="benefit_text">
									Enhanced flexibility and range of motion
								</Typography>
							</Box>
							<Box className="benefits-list_wrapper">
								<CheckCircleOutlineIcon className="benefit_icon" />
								<Typography className="benefit_text">Accelerated recovery from injuries</Typography>
							</Box>
							<Box className="benefits-list_wrapper">
								<CheckCircleOutlineIcon className="benefit_icon" />
								<Typography className="benefit_text">
									Relief from chronic pain and discomfort
								</Typography>
							</Box>
							<Box className="benefits-list_wrapper">
								<CheckCircleOutlineIcon className="benefit_icon" />
								<Typography className="benefit_text">
									Increased relaxation and stress reduction
								</Typography>
							</Box>
						</Box>
					</Grid>

					{/* Pricing */}
					<Grid
						item
						lg={3}
						md={12}
						sm={12}
						xs={12}
					>
						<Box className="service-grid-pricing">
							<Box className="service-wrapper">
								<Box className="service-pricing_container">
									<Typography
										variant="body2"
										className="pricing-header"
									>
										30 Minutes
									</Typography>
									<Box className="pricing-circle">
										<Typography
											variant="body2"
											className="pricing-text"
										>
											£30
										</Typography>
									</Box>
								</Box>
								<Box className="service-pricing_container">
									<Typography
										variant="body2"
										className="pricing-header"
									>
										60 Minutes
									</Typography>
									<Box className="pricing-circle">
										<Typography
											variant="body2"
											className="pricing-text"
										>
											£45
										</Typography>
									</Box>
								</Box>
								<Box className="service-pricing_container">
									<Typography
										variant="body2"
										className="pricing-header"
									>
										90 Minutes
									</Typography>
									<Box className="pricing-circle">
										<Typography
											variant="body2"
											className="pricing-text"
										>
											£65
										</Typography>
									</Box>
								</Box>
							</Box>
						</Box>
					</Grid>
					{/* Image */}
					<Grid
						item
						lg={3}
						md={12}
						sm={12}
						xs={12}
						className="service-grid_image-wrapper"
					>
						<Box
							component={'img'}
							src={massage}
							className="service__image__left"
							alt="A patient receiving soft tissue therapy treatment."
						></Box>
					</Grid>

					{/* Description */}
					<Grid
						item
						lg={3}
						md={12}
						sm={12}
						xs={12}
					>
						<Box className="service-grid-description">
							<Typography
								variant="body1"
								className="description-heading"
							>
								Oncology Massage
							</Typography>

							<Typography
								variant="body1"
								className="description-body"
							>
								Oncology massage offers compassionate and specialised care tailored to individuals
								navigating the challenges of cancer diagnosis and treatment. Delivered by trained
								therapists with a deep understanding of the unique needs and considerations of
								oncology patients, this gentle and soothing therapy aims to alleviate physical
								discomfort, reduce anxiety, and promote relaxation.
							</Typography>
						</Box>
					</Grid>

					{/* Benefits */}
					<Grid
						item
						lg={3}
						md={12}
						sm={12}
						xs={12}
					>
						<Box className="service-grid-benefits_item">
							<Typography
								variant="body1"
								className="benefits-heading"
							>
								Benefits Include:
							</Typography>

							<Box className="benefits-list_wrapper">
								<CheckCircleOutlineIcon className="benefit_icon" />
								<Typography className="benefit_text">
									Better ability to tolerate cancer treatment side effects
								</Typography>
							</Box>
							<Box className="benefits-list_wrapper">
								<CheckCircleOutlineIcon className="benefit_icon" />
								<Typography className="benefit_text">Better sleep</Typography>
							</Box>
							<Box className="benefits-list_wrapper">
								<CheckCircleOutlineIcon className="benefit_icon" />
								<Typography className="benefit_text">Fewer headaches</Typography>
							</Box>
							<Box className="benefits-list_wrapper">
								<CheckCircleOutlineIcon className="benefit_icon" />
								<Typography className="benefit_text">
									Less peripheral neuropathy (numbness)
								</Typography>
							</Box>
							<Box className="benefits-list_wrapper">
								<CheckCircleOutlineIcon className="benefit_icon" />
								<Typography className="benefit_text">Less chemotherapy-related nausea</Typography>
							</Box>
							<Box className="benefits-list_wrapper">
								<CheckCircleOutlineIcon className="benefit_icon" />
								<Typography className="benefit_text">Less chronic pain</Typography>
							</Box>
							<Box className="benefits-list_wrapper">
								<CheckCircleOutlineIcon className="benefit_icon" />
								<Typography className="benefit_text">Less stress and anxiety</Typography>
							</Box>
						</Box>
					</Grid>

					{/* Pricing */}
					<Grid
						item
						lg={3}
						md={12}
						sm={12}
						xs={12}
					>
						<Box className="service-grid-pricing">
							<Box className="service-wrapper">
								<Box className="service-pricing_container">
									<Typography
										variant="body2"
										className="pricing-header"
									>
										Treatment Times Vary
									</Typography>
									<Box className="pricing-circle">
										<Typography
											variant="body2"
											className="pricing-text"
										>
											£50
										</Typography>
									</Box>
								</Box>
							</Box>
						</Box>
					</Grid>

					{/* Image */}
					<Grid
						item
						lg={3}
						md={12}
						sm={12}
						xs={12}
						className="service-grid_image-wrapper"
					>
						<Box
							component={'img'}
							src={kt}
							className="service__image__left"
							alt="Pink and blue coloured tape applied to a patient's shoulder for postural awareness."
						></Box>
					</Grid>

					{/* Description */}
					<Grid
						item
						lg={3}
						md={12}
						sm={12}
						xs={12}
					>
						<Box className="service-grid-description">
							<Typography
								variant="body1"
								className="description-heading"
							>
								Strapping & Taping
							</Typography>

							<Typography
								variant="body1"
								className="description-body"
							>
								Strapping and taping of joints and soft tissues is a common treatment modality
								amongst physiotherapists. It can be helpful in the treatment of sprains and strains,
								ligament injuries as well as correction of joint alignment (or biomechanics).
								Correct application of tape can help reduce swelling, aid recovery of injured areas
								and offload painful tissues
							</Typography>
						</Box>
					</Grid>

					{/* Benefits */}
					<Grid
						item
						lg={3}
						md={12}
						sm={12}
						xs={12}
					>
						<Box className="service-grid-benefits_item">
							<Typography
								variant="body1"
								className="benefits-heading"
							>
								Benefits Include:
							</Typography>

							<Box className="benefits-list_wrapper">
								<CheckCircleOutlineIcon className="benefit_icon" />
								<Typography className="benefit_text">Compression</Typography>
							</Box>
							<Box className="benefits-list_wrapper">
								<CheckCircleOutlineIcon className="benefit_icon" />
								<Typography className="benefit_text">Restriction of movement</Typography>
							</Box>
							<Box className="benefits-list_wrapper">
								<CheckCircleOutlineIcon className="benefit_icon" />
								<Typography className="benefit_text">Correction of biomechanics</Typography>
							</Box>
							<Box className="benefits-list_wrapper">
								<CheckCircleOutlineIcon className="benefit_icon" />
								<Typography className="benefit_text">
									Stimulate Bruise and Contusion Recovery
								</Typography>
							</Box>
							<Box className="benefits-list_wrapper">
								<CheckCircleOutlineIcon className="benefit_icon" />
								<Typography className="benefit_text">Support Injured Muscles</Typography>
							</Box>
						</Box>
					</Grid>

					{/* Pricing */}
					<Grid
						item
						lg={3}
						md={12}
						sm={12}
						xs={12}
					>
						<Box className="service-grid-pricing">
							<Box className="service-wrapper">
								<Box className="service-pricing_container">
									<Box className="pricing-circle">
										<Typography
											variant="body2"
											className="pricing-text"
										>
											£10
										</Typography>
									</Box>
								</Box>
							</Box>
						</Box>
					</Grid>
					{/* Image */}
					<Grid
						item
						lg={3}
						md={12}
						sm={12}
						xs={12}
						className="service-grid_image-wrapper"
					>
						<Box
							component={'img'}
							src={acupuncture}
							className="service__image__left"
							alt="A therapist placing acupuncture needles into a patient's back."
						></Box>
					</Grid>

					{/* Description */}
					<Grid
						item
						lg={3}
						md={12}
						sm={12}
						xs={12}
					>
						<Box className="service-grid-description">
							<Typography
								variant="body1"
								className="description-heading"
							>
								Dry Needling
							</Typography>

							<Typography
								variant="body1"
								className="description-body"
							>
								Acupuncture is used to complement physiotherapy treatment in assisting with pain
								relief. It also aides in the restoration of joint mobility and function. Additional
								benefits include headache management and nerve pain relief.
							</Typography>
						</Box>
					</Grid>

					{/* Benefits */}
					<Grid
						item
						lg={3}
						md={12}
						sm={12}
						xs={12}
					>
						<Box className="service-grid-benefits_item">
							<Typography
								variant="body1"
								className="benefits-heading"
							>
								Benefits Include:
							</Typography>

							<Box className="benefits-list_wrapper">
								<CheckCircleOutlineIcon className="benefit_icon" />
								<Typography className="benefit_text">Pain Relief</Typography>
							</Box>
							<Box className="benefits-list_wrapper">
								<CheckCircleOutlineIcon className="benefit_icon" />
								<Typography className="benefit_text">Relaxation of muscle tissue</Typography>
							</Box>
							<Box className="benefits-list_wrapper">
								<CheckCircleOutlineIcon className="benefit_icon" />
								<Typography className="benefit_text">Stimulation of muscle tissue</Typography>
							</Box>
							<Box className="benefits-list_wrapper">
								<CheckCircleOutlineIcon className="benefit_icon" />
								<Typography className="benefit_text">Increases local circulation</Typography>
							</Box>
						</Box>
					</Grid>

					{/* Pricing */}
					<Grid
						item
						lg={3}
						md={12}
						sm={12}
						xs={12}
					>
						<Box className="service-grid-pricing">
							<Typography
								variant="body1"
								className="pricing-body"
							>
								Can be added onto another service such as an assessment or sports massage. Your{' '}
								<span className="pricing-bold">first dry needling treatment is FREE</span>. If you
								find it successful in treating your pain then subsequent dry needling treatments
								will be charge at an <span className="pricing-bold">additional fee of £5</span> in
								conjunction with another service.
							</Typography>
							<Box className="service-wrapper">
								<Box className="service-pricing_container">
									<Box className="pricing-circle">
										<Typography
											variant="body2"
											className="pricing-text"
										>
											Free
										</Typography>
									</Box>
								</Box>
								<Box className="service-pricing_container">
									<Box className="pricing-circle">
										<Typography
											variant="body2"
											className="pricing-text"
										>
											£5
										</Typography>
									</Box>
								</Box>
							</Box>
						</Box>
					</Grid>
					{/* Image */}
					<Grid
						item
						lg={3}
						md={12}
						sm={12}
						xs={12}
						className="service-grid_image-wrapper"
					>
						<Box
							component={'img'}
							src={brace}
							className="service__image__left"
							alt="Patient performing a single leg hold."
						></Box>
					</Grid>

					{/* Description */}
					<Grid
						item
						lg={3}
						md={12}
						sm={12}
						xs={12}
					>
						<Box className="service-grid-description">
							<Typography
								variant="body1"
								className="description-heading"
							>
								Additional Rehab Program
							</Typography>

							<Typography
								variant="body1"
								className="description-body"
							>
								Progress your rehabilitation with an additional rehab program. Tailored to
								individual needs, our program addresses a spectrum of musculoskeletal challenges,
								from sprains to biomechanical imbalances, in alignment with personalised recovery
								objectives. Through expert application, we aim to expedite healing processes,
								alleviate discomfort, and empower clients on their journey toward improved function
								and holistic well-being.
							</Typography>
						</Box>
					</Grid>

					{/* Benefits */}
					<Grid
						item
						lg={3}
						md={12}
						sm={12}
						xs={12}
					>
						<Box className="service-grid-benefits_item">
							<Typography
								variant="body1"
								className="benefits-heading"
							>
								Benefits Include:
							</Typography>

							<Box className="benefits-list_wrapper">
								<CheckCircleOutlineIcon className="benefit_icon" />
								<Typography className="benefit_text">
									Improved physical function and mobility
								</Typography>
							</Box>
							<Box className="benefits-list_wrapper">
								<CheckCircleOutlineIcon className="benefit_icon" />
								<Typography className="benefit_text">Reduced pain and discomfort</Typography>
							</Box>
							<Box className="benefits-list_wrapper">
								<CheckCircleOutlineIcon className="benefit_icon" />
								<Typography className="benefit_text">Enhanced strength and endurance</Typography>
							</Box>
							<Box className="benefits-list_wrapper">
								<CheckCircleOutlineIcon className="benefit_icon" />
								<Typography className="benefit_text">Faster recovery from injuries</Typography>
							</Box>
							<Box className="benefits-list_wrapper">
								<CheckCircleOutlineIcon className="benefit_icon" />
								<Typography className="benefit_text">Better coordination and balance</Typography>
							</Box>
							<Box className="benefits-list_wrapper">
								<CheckCircleOutlineIcon className="benefit_icon" />
								<Typography className="benefit_text">Prevention of future injuries</Typography>
							</Box>
						</Box>
					</Grid>

					{/* Pricing */}
					<Grid
						item
						lg={3}
						md={12}
						sm={12}
						xs={12}
					>
						<Box className="service-grid-pricing">
							<Box className="service-wrapper">
								<Box className="service-pricing_container">
									<Box className="pricing-circle">
										<Typography
											variant="body2"
											className="pricing-text"
										>
											£5
										</Typography>
									</Box>
								</Box>
							</Box>
						</Box>
					</Grid>
				</Grid>
			</Box>
		</>
	);
};

export default Treatment;
