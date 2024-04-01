import { useMediaQuery } from '@mui/material';
import Banner from './Banner/Banner';
import classes from './Layout.module.css';
import DesktopNavigation from './Nav/DesktopNavigation';
import Footer from './Footer/Footer';

const CommonLayout: React.FC<{ component: React.ReactNode }> = ({ component }) => {
	const isMobile = useMediaQuery('(max-width: 1080px)');
	return (
		<>
			{isMobile ? (
				// <MobileNavigation
				// 	handleLogout={handleLogout}
				// 	toggleLayerDrawer={toggleLayerDrawer}
				// />
        <></>
			) : (
				<DesktopNavigation />
			)}
			<Banner />
			<main className={classes.main}>{component} </main>

			<Footer />
		</>
	);
};

export default CommonLayout;
