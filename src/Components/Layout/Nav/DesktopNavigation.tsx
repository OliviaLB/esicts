import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { getUserIsLoggedIn, Signout } from '../../../lib/Authentication';
import { AppBar, Toolbar, Button, Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export interface Navigation {
	pageName: string;
	url: string;
}

const DesktopNavigation = () => {
	const [prevState, setNewState] = useState(false);
	const navigate = useNavigate();
	const location = useLocation();

	const pages: Navigation[] = [
		{ pageName: 'Home', url: '/home' },
		{ pageName: 'About Us', url: '/about' },
		{ pageName: 'Services', url: '/services' },
		{ pageName: 'Blogs', url: '/blogs' },
		{ pageName: 'Contact Us', url: '/contact' },
	];

	const isActive = (url: string) => {
		return location.pathname === url;
	};

	const LogUserOut = () => {
		Signout();
		setNewState(!prevState);
		navigate('/home');
	};

	return (
		<AppBar position="sticky">
			<Toolbar sx={{ justifyContent: 'space-between' }}>
				<Typography
					sx={{ fontSize: '1.4rem' }}
					color={'white'}
				>
					Em Stuart Injuries Clinic
				</Typography>
				<Box sx={{ display: 'flex', gap: '10px' }}>
					{pages.map((page, index) => (
						<Button
							key={index}
							variant="contained"
							color="secondary"
							sx={{
								width: '8rem',
								backgroundColor: !isActive(page.url) ? '#25aaf7' : '#fff',
								color: !isActive(page.url) ? '#fff' : '#25aaf7',
								border: isActive(page.url) ? '2px solid #25aaf7' : '2px solid #fff',
							}}
							component={Link}
							to={page.url}
						>
							{page.pageName}
						</Button>
					))}

					{!getUserIsLoggedIn() && (
						<Button
							variant="contained"
							color="secondary"
							sx={{
								width: '8rem',
								backgroundColor: !isActive("/admin") ? '#25aaf7' : '#fff',
								color: !isActive("/admin") ? '#fff' : '#25aaf7',
								border: isActive("/admin") ? '2px solid #25aaf7' : '2px solid #fff',
							}}
							component={Link}
							to={'/admin'}
						>
							Login
						</Button>
					)}
					{getUserIsLoggedIn() && (
						<>
							<Button
								variant="contained"
								color="secondary"
								sx={{
									width: '8rem',
									backgroundColor: !isActive('/new-blog') ? '#25aaf7' : '#fff',
									color: !isActive('/new-blog') ? '#fff' : '#25aaf7',
									border: isActive('/new-blog') ? '2px solid #25aaf7' : '2px solid #fff',
								}}
								component={Link}
								to={'/new-blog'}
							>
								New Blog
							</Button>

							<Button
								variant="contained"
								color="secondary"
								sx={{
									width: '8rem',
									backgroundColor: '#25aaf7',
									color: '#fff',
									border: '2px solid #fff',
								}}
								onClick={LogUserOut}
							>
								Sign Out
							</Button>
						</>
					)}
				</Box>
			</Toolbar>
		</AppBar>
	);
};

export default DesktopNavigation;
