import { Box } from '@mui/system';
import { IconButton, Link, Typography } from '@mui/material';
import classes from './Footer.module.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import Grid from '@mui/material/Grid';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer = () => {
	return (
		<footer>
			<Grid
				container
				spacing={2}
				sx={{ background: '#303030' }}
			>
				<Grid
					item
					xs={12}
				>
					<Box>
						<Typography
							sx={{ color: '#ffffff', textTransform: 'uppercase' }}
							variant="h3"
						>
							Em Stuart Injuries Clinic
						</Typography>
					</Box>
				</Grid>
				<Grid
					item
					xs={12}
				>
					<Box sx={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
						<a
							href="https://www.facebook.com/Emstuartinjuries/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<IconButton
								color="secondary"
								aria-label="Facebook"
								size="large"
								sx={{
									border: '2px solid #25aaf7',
									'&:hover': {
										borderColor: 'white',
										'& .MuiSvgIcon-root': {
											color: 'white',
										},
									},
									transition: 'border-color 0.3s, color 0.3s',
								}}
							>
								<FacebookIcon />
							</IconButton>
						</a>
						<a
							href="https://api.whatsapp.com/send?phone=447964991445"
							target="_blank"
							rel="noopener noreferrer"
						>
							<IconButton
								color="secondary"
								aria-label="WhatsApp"
								size="large"
								sx={{
									border: '2px solid #25aaf7',
									'&:hover': {
										borderColor: 'white',
										'& .MuiSvgIcon-root': {
											color: 'white',
										},
									},
									transition: 'border-color 0.3s, color 0.3s',
								}}
							>
								<WhatsAppIcon />
							</IconButton>
						</a>
						<a
							href="https://www.google.com/search?q=em+stuart+injuries#ip=1"
							target="_blank"
							rel="noopener noreferrer"
						>
							<IconButton
								color="secondary"
								aria-label="Google"
								size="large"
								sx={{
									border: '2px solid #25aaf7',
									'&:hover': {
										borderColor: 'white',
										'& .MuiSvgIcon-root': {
											color: 'white',
										},
									},
									transition: 'border-color 0.3s, color 0.3s',
								}}
							>
								<GoogleIcon />
							</IconButton>
						</a>
					</Box>
				</Grid>
				<Grid
					item
					md={4}
					xs={12}
				>
					<Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', gap: '10px' }}>
						<Typography sx={{ color: '#fff' }}>Contact Us</Typography>
						<Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
							<Typography sx={{ color: '#fff' }}>Office 9, Unit 2</Typography>
							<Typography sx={{ color: '#fff' }}>Morelands Trading Estate</Typography>
							<Typography sx={{ color: '#fff' }}>Bristol Road</Typography>
							<Typography sx={{ color: '#fff' }}>Gloucester</Typography>
							<Typography sx={{ color: '#fff' }}>GL1 5RZ</Typography>
						</Box>
					</Box>
				</Grid>
				<Grid
					item
					md={4}
					xs={12}
				>
					<Box>
						<iframe
							title="map"
							width="100%"
							height="250px"
							id="gmap_canvas"
							src="https://maps.google.com/maps?q=Em%20Stuart%20Injuries&t=&z=13&ie=UTF8&iwloc=&output=embed"
							frameBorder="0"
							scrolling="no"
						></iframe>
					</Box>
				</Grid>
				<Grid
					item
					md={4}
					xs={12}
				>
					<Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', gap: '10px' }}>
						<Typography sx={{ color: '#fff' }}>Opening Hours</Typography>
						<Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
							<Typography sx={{ color: '#fff' }}>
								<b>Monday:</b> Closed
							</Typography>
							<Typography sx={{ color: '#fff' }}>
								<b>Tuesday:</b> 07:30am - 15:30pm
							</Typography>
							<Typography sx={{ color: '#fff' }}>
								<b>Wednesday:</b> 11:30am - 19:30pm
							</Typography>
							<Typography sx={{ color: '#fff' }}>
								<b>Thursday:</b> 10:00am - 16:30pm
							</Typography>
							<Typography sx={{ color: '#fff' }}>
								<b>Friday:</b> 10:30 - 16:30pm
							</Typography>
							<Typography sx={{ color: '#fff' }}>
								<b>Saturday:</b> 08:30 - 15:30pm
							</Typography>
							<Typography sx={{ color: '#fff' }}>
								<b>Sunday:</b> Closed
							</Typography>
						</Box>
					</Box>
				</Grid>

				<Grid
					item
					xs={12}
				>
					<Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', gap: '10px' }}>
						<Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
							<Typography sx={{ color: '#fff' }}>© 2022 Copyright</Typography>
							<Box
								sx={{ display: 'flex', gap: '10px', alignItems: 'center', paddingBottom: '1rem' }}
							>
								<Link
									href="/"
									color="secondary"
								>
									Privacy Policy
								</Link>
								<Typography sx={{ color: '#fff' }}>|</Typography>
								<Link
									href="/"
									color="secondary"
								>
									Terms & Conditions
								</Link>
								<Typography sx={{ color: '#fff' }}>|</Typography>
								<Link
									href="/"
									color="secondary"
								>
									Cookie Policy
								</Link>
							</Box>
						</Box>
					</Box>
				</Grid>
			</Grid>
		</footer>
	);
};

export default Footer;
