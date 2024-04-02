import './Navigation.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { getUserIsLoggedIn, Signout } from '../../../lib/Authentication';
import { AppBar, Toolbar, Button, Box, Typography, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';

export interface Navigation {
	pageName: string;
	url: string;
}

const DesktopNavigation = () => {
	const [prevState, setNewState] = useState(false);
	const navigate = useNavigate();
	const location = useLocation();
	const theme = useTheme();

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
					className="business-name"
					color={theme.palette.primary.contrastText}
				>
					Em Stuart Injuries Clinic
				</Typography>
				<Box className="button-wrapper">
					{pages.map((page, index) => (
						<Button
							key={index}
							variant="contained"
							color="secondary"
							className="navigation-button"
							sx={{
								backgroundColor: !isActive(page.url)
									? theme.palette.secondary.main
									: theme.palette.primary.contrastText,
								color: !isActive(page.url)
									? theme.palette.primary.contrastText
									: theme.palette.secondary.main,
								border: isActive('/admin')
									? `2px solid ${theme.palette.secondary.main}`
									: `2px solid ${theme.palette.secondary.contrastText}`,
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
							className="navigation-button"
							sx={{
								backgroundColor: !isActive('/admin')
									? theme.palette.secondary.main
									: theme.palette.primary.contrastText,
								color: !isActive('/admin')
									? theme.palette.primary.contrastText
									: theme.palette.secondary.main,
								border: isActive('/admin')
									? `2px solid ${theme.palette.secondary.main}`
									: `2px solid ${theme.palette.secondary.contrastText}`,
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
								className="navigation-button"
								sx={{
									backgroundColor: !isActive('/new-blog')
										? theme.palette.secondary.main
										: theme.palette.primary.contrastText,
									color: !isActive('/new-blog')
										? theme.palette.primary.contrastText
										: theme.palette.secondary.main,
									border: isActive('/admin')
										? `2px solid ${theme.palette.secondary.main}`
										: `2px solid ${theme.palette.secondary.contrastText}`,
								}}
								component={Link}
								to={'/new-blog'}
							>
								New Blog
							</Button>

							<Button
								variant="contained"
								color="secondary"
								className="navigation-button"
								sx={{
									backgroundColor: theme.palette.secondary.main,
									color: theme.palette.primary.contrastText,
									border: `2px solid ${theme.palette.secondary.contrastText}`,
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
