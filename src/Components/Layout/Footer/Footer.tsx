import './Footer.css';
import { Box } from '@mui/system';
import { IconButton, Link, Typography } from '@mui/material';
import { useTheme } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import Grid from '@mui/material/Grid';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer = () => {
	const theme = useTheme();
	return (
		<footer>
			<Grid
				container
				spacing={2}
				sx={{ background: theme.footer.background }}
			>
				<Grid
					item
					xs={12}
				>
					<Box>
						<Typography
							sx={{ color: theme.footer.text }}
							className="footer_heading"
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
					<Box className="footer_button-wrapper">
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
									border: `2px solid ${theme.iconButton.color}`,
									'&:hover': {
										borderColor: theme.footer.border,
										'& .MuiSvgIcon-root': {
											color: theme.footer.border,
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
									border: `2px solid ${theme.iconButton.color}`,
									'&:hover': {
										borderColor: theme.footer.border,
										'& .MuiSvgIcon-root': {
											color: theme.footer.border,
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
									border: `2px solid ${theme.iconButton.color}`,
									'&:hover': {
										borderColor: theme.footer.border,
										'& .MuiSvgIcon-root': {
											color: theme.footer.border,
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
					<Box className="content_align-center gap_10px">
						<Typography
							className="footer_category-heading"
							sx={{ color: theme.footer.text }}
						>
							Contact Us
						</Typography>
						<Box className="content_align-center">
							<Typography sx={{ color: theme.footer.text }}>Office 9, Unit 2</Typography>
							<Typography sx={{ color: theme.footer.text }}>Morelands Trading Estate</Typography>
							<Typography sx={{ color: theme.footer.text }}>Bristol Road</Typography>
							<Typography sx={{ color: theme.footer.text }}>Gloucester</Typography>
							<Typography sx={{ color: theme.footer.text }}>GL1 5RZ</Typography>
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
					<Box className="content_align-center gap_10px">
						<Typography
							sx={{ color: theme.footer.text }}
							className="footer_category-heading"
						>
							Opening Hours
						</Typography>
						<Box className="content_align-center">
							<Typography sx={{ color: theme.footer.text }}>
								<b>Monday:</b> Closed
							</Typography>
							<Typography sx={{ color: theme.footer.text }}>
								<b>Tuesday:</b> 07:30am - 15:30pm
							</Typography>
							<Typography sx={{ color: theme.footer.text }}>
								<b>Wednesday:</b> 11:30am - 19:30pm
							</Typography>
							<Typography sx={{ color: theme.footer.text }}>
								<b>Thursday:</b> 10:00am - 16:30pm
							</Typography>
							<Typography sx={{ color: theme.footer.text }}>
								<b>Friday:</b> 10:30 - 16:30pm
							</Typography>
							<Typography sx={{ color: theme.footer.text }}>
								<b>Saturday:</b> 08:30 - 15:30pm
							</Typography>
							<Typography sx={{ color: theme.footer.text }}>
								<b>Sunday:</b> Closed
							</Typography>
						</Box>
					</Box>
				</Grid>

				<Grid
					item
					xs={12}
				>
					<Box className="content_align-center gap_10px">
						<Box className="content_align-center">
							<Typography sx={{ color: theme.footer.text }}>© 2022 Copyright</Typography>
							<Box className="links_wrapper gap_10px">
								<Link
									href="/"
									color="secondary"
								>
									Privacy Policy
								</Link>
								<Typography sx={{ color: theme.footer.text }}>|</Typography>
								<Link
									href="/"
									color="secondary"
								>
									Terms & Conditions
								</Link>
								<Typography sx={{ color: theme.footer.text }}>|</Typography>
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
