import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { getUserIsLoggedIn, Signout } from '../../../lib/Authentication';
import { AppBar, Toolbar, Button, Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

interface Navigation {
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
							sx={{ width: '8rem', backgroundColor: !isActive(page.url) ? '#25aaf7' : '#0c337a' }}
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
							sx={{ width: '8rem' }}
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
								sx={{ width: '8rem' }}
								component={Link}
								to={'/new-blog'}
							>
								New Blog
							</Button>

							<Button
								variant="contained"
								color="secondary"
								sx={{ width: '8rem' }}
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
