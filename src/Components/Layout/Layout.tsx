import { Box, useMediaQuery } from '@mui/material';
import Banner from './Banner/Banner';
import DesktopNavigation from './Nav/DesktopNavigation';
import Footer from './Footer/Footer';
import MobileNavigation from './Nav/MobileNavigation';

const CommonLayout: React.FC<{ component: React.ReactNode }> = ({ component }) => {
	const isMobile = useMediaQuery('(max-width: 1300px)');
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				flexGrow: 1,
				alignItems: 'center',
				overflowY: 'auto',
			}}
		>
			{isMobile ? <MobileNavigation /> : <DesktopNavigation />}

			<Box sx={{ padding: 0, margin: 0, maxWidth: '1800px', width: '100%' }}>
				<Banner />
				{component}
			</Box>

			<Footer />
		</Box>
	);
};

export default CommonLayout;
