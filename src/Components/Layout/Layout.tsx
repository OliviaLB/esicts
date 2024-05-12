import './Layout.css';
import { Box, useMediaQuery } from '@mui/material';
import Banner from './Banner/Banner';
import DesktopNavigation from './Nav/DesktopNavigation';
import Footer from './Footer/Footer';
import MobileNavigation from './Nav/MobileNavigation';

const CommonLayout: React.FC<{ component: React.ReactNode }> = ({ component }) => {
	const isMobile = useMediaQuery('(max-width: 1300px)');
	return (
		<Box className="layout_wrapper">
			{isMobile ? <MobileNavigation /> : <DesktopNavigation />}

			<Box className="page_container">
				<Banner />
				<Box className="main-page_wraper">

				{component}

				</Box>
				<Footer />
			</Box>
		</Box>
	);
};

export default CommonLayout;
