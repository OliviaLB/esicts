import { Box, ListItemButton, Typography } from '@mui/material';
import { Drawer, List, ListItem, ListItemText, Collapse } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from 'react';
import Toolbar from '@mui/material/Toolbar';
import { Navigation } from './DesktopNavigation';

export interface MobileNavigationParams {
	handleLogout: () => void;
}

const MobileNavigation = () => {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);

	const pages: Navigation[] = [
		{ pageName: 'Home', url: '/home' },
		{ pageName: 'About Us', url: '/about' },
		{ pageName: 'Services', url: '/services' },
		{ pageName: 'Blogs', url: '/blogs' },
		{ pageName: 'Contact Us', url: '/contact' },
	];

	const toggleDrawer = (isOpen: boolean) => () => {
		setIsDrawerOpen(isOpen);
	};

	return (
		<AppBar position="static">
			<Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
				<Typography
					sx={{ fontSize: '1.4rem' }}
					color={'white'}
				>
					Em Stuart Injuries Clinic
				</Typography>
				<IconButton
					color="inherit"
					onClick={toggleDrawer(true)}
				>
					<MenuIcon />
				</IconButton>
			</Toolbar>

			<Drawer
				anchor="top"
				open={isDrawerOpen}
				onClose={toggleDrawer(false)}
			>
				<List data-testid="mobile-drawer">
					{pages.map((page, index) => (
						<ListItemButton
							component={Link}
							to={page.url}
							sx={{ fontSize: '1.2rem' }}
							key={`${page}-index`}
						>
							{page.pageName}
						</ListItemButton>
					))}
				</List>
			</Drawer>
		</AppBar>
	);
};

export default MobileNavigation;
